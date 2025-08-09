import { NextRequest, NextResponse } from 'next/server'
import { db, users } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'

export async function GET(request: NextRequest) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get user data
    const user = await db.query.users.findFirst({
      where: eq(users.clerkId, userId),
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error('Error in user GET route:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { email, firstName, lastName } = await request.json()

    // Check if user already exists
    const existingUser = await db.query.users.findFirst({
      where: eq(users.clerkId, userId),
    })

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists', user: existingUser })
    }

    // Create new user
    const [newUser] = await db.insert(users).values({
      clerkId: userId,
      email: email,
      firstName: firstName,
      lastName: lastName,
      tier: 'free',
      queryCount: 0,
      queryLimit: 10,
    }).returning()

    return NextResponse.json(newUser)
  } catch (error) {
    console.error('Error in user POST route:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 