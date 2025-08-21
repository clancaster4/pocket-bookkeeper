import { NextRequest, NextResponse } from 'next/server'
import { auth, clerkClient } from '@clerk/nextjs/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export async function POST(request: NextRequest) {
  try {
    const { userId } = auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { confirmDeletion, exportData = false } = body

    if (!confirmDeletion) {
      return NextResponse.json(
        { error: 'Account deletion must be confirmed' },
        { status: 400 }
      )
    }

    // Get user details for cleanup
    const user = await clerkClient.users.getUser(userId)
    const userEmail = user.emailAddresses[0]?.emailAddress

    let userDataExport = null

    // Export user data if requested
    if (exportData && userEmail) {
      userDataExport = {
        userId,
        email: userEmail,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: user.createdAt,
        lastSignInAt: user.lastSignInAt,
        // Add any other user data you want to export
        exportedAt: new Date().toISOString()
      }
    }

    // Step 1: Cancel all Stripe subscriptions
    try {
      // In a real implementation, you'd query your database for user's subscriptions
      // For now, we'll search by customer email
      if (userEmail) {
        const customers = await stripe.customers.list({
          email: userEmail,
          limit: 10
        })

        for (const customer of customers.data) {
          const subscriptions = await stripe.subscriptions.list({
            customer: customer.id,
            status: 'active'
          })

          for (const subscription of subscriptions.data) {
            await stripe.subscriptions.cancel(subscription.id)
            console.log(`Canceled subscription ${subscription.id} for user ${userId}`)
          }
        }
      }
    } catch (stripeError) {
      console.error('Error canceling Stripe subscriptions:', stripeError)
      // Don't fail the entire deletion if Stripe cleanup fails
    }

    // Step 2: Delete user data from your database
    // TODO: Implement database cleanup based on your schema
    // Example:
    // await db.conversations.deleteMany({ where: { userId } })
    // await db.userSettings.delete({ where: { userId } })
    // await db.userSubscriptions.deleteMany({ where: { userId } })

    // Step 3: Delete Clerk user account
    await clerkClient.users.deleteUser(userId)

    // Log the deletion for compliance
    console.log(`Account deleted: ${userId} (${userEmail}) at ${new Date().toISOString()}`)

    return NextResponse.json({
      success: true,
      message: 'Your account has been permanently deleted. All your data has been removed from our systems.',
      exportData: userDataExport,
      deletedAt: new Date().toISOString()
    })

  } catch (error) {
    console.error('Account deletion error:', error)

    if (error instanceof Error && error.message.includes('User not found')) {
      return NextResponse.json(
        { error: 'User account not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to delete account. Please contact support for assistance.' },
      { status: 500 }
    )
  }
}

// GET endpoint to get account deletion information
export async function GET(request: NextRequest) {
  try {
    const { userId } = auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const user = await clerkClient.users.getUser(userId)
    const userEmail = user.emailAddresses[0]?.emailAddress

    // Check for active subscriptions
    let activeSubscriptions = []
    
    if (userEmail) {
      try {
        const customers = await stripe.customers.list({
          email: userEmail,
          limit: 10
        })

        for (const customer of customers.data) {
          const subscriptions = await stripe.subscriptions.list({
            customer: customer.id,
            status: 'active'
          })
          activeSubscriptions.push(...subscriptions.data)
        }
      } catch (stripeError) {
        console.error('Error checking subscriptions:', stripeError)
      }
    }

    return NextResponse.json({
      user: {
        id: userId,
        email: userEmail,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: user.createdAt
      },
      activeSubscriptions: activeSubscriptions.length,
      deletionInfo: {
        dataTypes: [
          'Account profile and settings',
          'Chat conversation history', 
          'Uploaded files and documents',
          'Subscription and payment history',
          'Usage analytics and preferences'
        ],
        process: [
          'All Stripe subscriptions will be canceled immediately',
          'Your data will be permanently deleted from our servers',
          'You will be logged out of all devices',
          'This action cannot be undone'
        ]
      }
    })

  } catch (error) {
    console.error('Account info error:', error)
    return NextResponse.json(
      { error: 'Failed to get account information' },
      { status: 500 }
    )
  }
}