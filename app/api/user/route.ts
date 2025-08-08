import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { db } from '@/lib/db'
import { users } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function GET(request: NextRequest) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const rows = await db.select().from(users).where(eq(users.clerkId, userId)).limit(1)
    const user = rows[0] || null

    return NextResponse.json({ user })
  } catch (error) {
    console.error('GET /api/user error', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { email, firstName, lastName } = body

    const existing = await db.select({ id: users.id }).from(users).where(eq(users.clerkId, userId)).limit(1)
    if (existing.length > 0) {
      return NextResponse.json({ ok: true })
    }

    await db.insert(users).values({
      clerkId: userId,
      email,
      firstName,
      lastName,
      tier: 'free',
      queryCount: 0,
      queryLimit: 10,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('POST /api/user error', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
} 