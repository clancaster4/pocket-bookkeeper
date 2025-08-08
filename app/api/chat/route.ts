import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { db } from '@/lib/db'
import { users } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

// In-memory storage for demo purposes (IP fallback)
const ipUsageMap = new Map<string, { count: number, lastReset: Date }>()

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const cfConnectingIP = request.headers.get('cf-connecting-ip')
  if (forwarded) return forwarded.split(',')[0].trim()
  if (realIP) return realIP
  if (cfConnectingIP) return cfConnectingIP
  return request.ip || 'unknown'
}

function checkAndUpdateIpUsage(ip: string, limit: number = 10) {
  const now = new Date()
  const current = ipUsageMap.get(ip)
  if (!current) {
    ipUsageMap.set(ip, { count: 1, lastReset: now })
    return { allowed: true, remaining: limit - 1, resetTime: now }
  }
  if (current.count >= limit) {
    return { allowed: false, remaining: 0, resetTime: current.lastReset }
  }
  current.count++
  ipUsageMap.set(ip, current)
  return { allowed: true, remaining: limit - current.count, resetTime: current.lastReset }
}

function getIpUsageInfo(ip: string, limit: number = 10) {
  const current = ipUsageMap.get(ip)
  const now = new Date()
  if (!current) return { count: 0, remaining: limit, resetTime: now }
  return { count: current.count, remaining: Math.max(0, limit - current.count), resetTime: current.lastReset }
}

async function getAIResponse(message: string, history: any[], model: string = 'standard-ai', attachments?: any[]): Promise<{ response: string, modelUsed: string }> {
  await new Promise(resolve => setTimeout(resolve, 500))
  const lowerMessage = message.toLowerCase()
  let response = `You said: ${message}`
  if (lowerMessage.includes('expense')) {
    response = 'Expense tip: separate business and personal, keep receipts, record weekly.'
  }
  return { response: `${response}\n\n🤖 Powered by ${model}`, modelUsed: model }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, history, attachments, aiModel } = body
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required and must be a string' }, { status: 400 })
    }

    const { userId } = auth()
    const clientIP = getClientIP(request)

    let remaining = 0
    let resetTime = new Date()

    // Defaults for free users
    const FREE_LIMIT = parseInt(process.env.MAX_FREE_QUERIES_PER_MONTH || '10', 10)

    if (userId) {
      // Ensure user row exists
      const existing = await db.select().from(users).where(eq(users.clerkId, userId)).limit(1)
      let userRow = existing[0]
      if (!userRow) {
        await db.insert(users).values({ clerkId: userId, email: 'unknown@unknown', tier: 'free', queryCount: 0, queryLimit: FREE_LIMIT })
        const created = await db.select().from(users).where(eq(users.clerkId, userId)).limit(1)
        userRow = created[0]
      }

      const isPaid = userRow.tier === 'basic' || userRow.tier === 'elite'
      const limit = isPaid ? Number.MAX_SAFE_INTEGER : (userRow.queryLimit ?? FREE_LIMIT)
      const used = userRow.queryCount ?? 0

      if (!isPaid && used >= limit) {
        return NextResponse.json({ error: 'Free query limit exceeded', details: { limit, message: 'Upgrade for unlimited access.' } }, { status: 429 })
      }

      // Increment usage for authenticated user
      await db.update(users).set({ queryCount: used + 1 }).where(eq(users.clerkId, userId))
      remaining = isPaid ? -1 : Math.max(0, limit - (used + 1))
    } else {
      // IP-based fallback
      const usage = checkAndUpdateIpUsage(clientIP, FREE_LIMIT)
      if (!usage.allowed) {
        return NextResponse.json({ error: 'Free query limit exceeded', details: { limit: FREE_LIMIT, message: 'Upgrade for unlimited access.' } }, { status: 429 })
      }
      remaining = usage.remaining
      resetTime = usage.resetTime
    }

    let modelToUse = 'standard-ai'
    if (aiModel === 'elite') modelToUse = 'premium-ai'
    else if (aiModel === 'everyday') modelToUse = 'advanced-ai'

    const { response, modelUsed } = await getAIResponse(message, Array.isArray(history) ? history.slice(-10) : [], modelToUse, attachments)

    return NextResponse.json({ response, modelUsed, timestamp: new Date().toISOString(), usage: { remaining, resetTime: resetTime.toISOString() } })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { userId } = auth()
    const FREE_LIMIT = parseInt(process.env.MAX_FREE_QUERIES_PER_MONTH || '10', 10)

    if (userId) {
      const rows = await db.select().from(users).where(eq(users.clerkId, userId)).limit(1)
      const u = rows[0]
      const isPaid = u && (u.tier === 'basic' || u.tier === 'elite')
      const limit = isPaid ? -1 : (u?.queryLimit ?? FREE_LIMIT)
      const count = u?.queryCount ?? 0
      const remaining = limit === -1 ? -1 : Math.max(0, limit - count)
      return NextResponse.json({ userId, usage: { count, remaining, limit, resetTime: new Date().toISOString() } })
    }

    const ip = getClientIP(request)
    const info = getIpUsageInfo(ip, FREE_LIMIT)
    return NextResponse.json({ ip, userId: null, usage: { count: info.count, remaining: info.remaining, limit: FREE_LIMIT, resetTime: info.resetTime.toISOString() } })
  } catch (error) {
    console.error('Usage check error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 