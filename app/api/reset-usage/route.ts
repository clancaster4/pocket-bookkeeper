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

    const db = getDb()
    
    // Check if user exists
    const existingUser = await db.query.users.findFirst({
      where: eq(users.clerkId, userId),
    })

    if (!existingUser) {
      // Get the current user from Clerk to get email
      const clerkUser = await currentUser()
      const userEmail = clerkUser?.emailAddresses?.[0]?.emailAddress || 'user@example.com'
      
      // Create new user with correct settings
      await db.insert(users).values({
        clerkId: userId,
        email: userEmail,
        tier: 'free',
        queryCount: 0,
        queryLimit: 5,
        subscriptionStatus: 'active',
      })
      
      return NextResponse.json({ 
        message: 'User created with 5 free messages',
        queryCount: 0,
        queryLimit: 5,
        remaining: 5
      })
    } else {
      // Reset existing user's count
      await db.update(users)
        .set({ 
          queryCount: 0,
          updatedAt: new Date()
        })
        .where(eq(users.clerkId, userId))
      
      return NextResponse.json({ 
        message: 'Usage reset successfully',
        queryCount: 0,
        queryLimit: existingUser.queryLimit,
        remaining: existingUser.queryLimit
      })
    }
  } catch (error) {
    console.error('Reset usage error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}