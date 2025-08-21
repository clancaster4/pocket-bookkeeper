import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

export async function GET(request: NextRequest) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Mock user data for now - will be replaced with database later
    const user = {
      id: userId,
      clerkId: userId,
      email: 'user@example.com',
      firstName: 'John',
      lastName: 'Doe',
      tier: 'free',
      queryCount: 0,
      queryLimit: 5,
      createdAt: new Date(),
      updatedAt: new Date()
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

    // Mock user creation - will be replaced with database later
    const newUser = {
      id: userId,
      clerkId: userId,
      email: email || 'user@example.com',
      firstName: firstName || 'John',
      lastName: lastName || 'Doe',
      tier: 'free',
      queryCount: 0,
      queryLimit: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    return NextResponse.json(newUser)
  } catch (error) {
    console.error('Error in user POST route:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 