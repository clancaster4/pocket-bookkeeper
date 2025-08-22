import { NextRequest, NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { getDb, users } from '@/lib/db'
import { eq } from 'drizzle-orm'

export async function POST(request: NextRequest) {
  try {
    const { userId } = auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const { tier } = await request.json()
    
    // Validate tier
    if (!['free', 'basic', 'elite'].includes(tier)) {
      return NextResponse.json({ error: 'Invalid tier' }, { status: 400 })
    }

    const db = getDb()
    
    // Check if user exists
    const existingUser = await db.query.users.findFirst({
      where: eq(users.clerkId, userId),
    })

    if (!existingUser) {
      // Get the current user from Clerk to get email
      const clerkUser = await currentUser()
      const userEmail = clerkUser?.emailAddresses?.[0]?.emailAddress || 'user@example.com'
      
      // Create new user with specified tier
      await db.insert(users).values({
        clerkId: userId,
        email: userEmail,
        tier: tier,
        queryCount: 0,
        queryLimit: tier === 'free' ? 5 : 999999, // Unlimited for paid tiers
        subscriptionStatus: 'active',
      })
      
      return NextResponse.json({ 
        message: `User created with ${tier} tier`,
        tier: tier,
        queryLimit: tier === 'free' ? 5 : 999999,
        queryCount: 0
      })
    } else {
      // Update existing user's tier
      const newQueryLimit = tier === 'free' ? 5 : 999999
      await db.update(users)
        .set({ 
          tier: tier,
          queryLimit: newQueryLimit,
          queryCount: tier === 'free' ? existingUser.queryCount : 0, // Reset count for paid tiers
          subscriptionStatus: 'active',
          updatedAt: new Date()
        })
        .where(eq(users.clerkId, userId))
      
      return NextResponse.json({ 
        message: `Subscription updated to ${tier} tier`,
        tier: tier,
        queryLimit: newQueryLimit,
        queryCount: tier === 'free' ? existingUser.queryCount : 0,
        previousTier: existingUser.tier
      })
    }
  } catch (error) {
    console.error('Update subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}