import { NextRequest, NextResponse } from 'next/server'
import { auth, clerkClient } from '@clerk/nextjs/server'
import Stripe from 'stripe'
import { getDb } from '@/lib/db'
import { users } from '@/lib/schema'
import { eq } from 'drizzle-orm'

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

    // Get user details
    const user = await clerkClient.users.getUser(userId)
    const userEmail = user.emailAddresses[0]?.emailAddress

    if (!userEmail) {
      return NextResponse.json(
        { error: 'User email not found' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const { cancelAt = 'period_end' } = body

    let canceledSubscriptions = []

    // Find and cancel all active Stripe subscriptions
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

        for (const subscription of subscriptions.data) {
          let canceledSub

          if (cancelAt === 'immediately') {
            // Cancel immediately
            canceledSub = await stripe.subscriptions.cancel(subscription.id)
          } else {
            // Cancel at end of current billing period (default)
            canceledSub = await stripe.subscriptions.update(subscription.id, {
              cancel_at_period_end: true
            })
          }

          canceledSubscriptions.push({
            id: canceledSub.id,
            status: canceledSub.status,
            cancel_at_period_end: canceledSub.cancel_at_period_end,
            current_period_end: canceledSub.current_period_end,
            canceled_at: canceledSub.canceled_at
          })

          console.log(`Subscription ${cancelAt === 'immediately' ? 'canceled' : 'scheduled for cancellation'}: ${subscription.id} for user ${userId}`)
        }
      }
    } catch (stripeError) {
      console.error('Error canceling Stripe subscriptions:', stripeError)
      return NextResponse.json(
        { error: 'Failed to cancel subscription. Please contact support.' },
        { status: 500 }
      )
    }

    if (canceledSubscriptions.length === 0) {
      return NextResponse.json(
        { error: 'No active subscriptions found' },
        { status: 404 }
      )
    }

    // If canceling immediately, update user database record to free tier
    if (cancelAt === 'immediately') {
      try {
        const db = getDb()
        await db.update(users)
          .set({
            tier: 'free',
            subscriptionStatus: 'canceled',
            queryCount: 0,
            queryLimit: 5,
            updatedAt: new Date()
          })
          .where(eq(users.clerkId, userId))

        console.log(`Updated user ${userId} to free tier after immediate cancellation`)
      } catch (dbError) {
        console.error('Error updating user in database:', dbError)
        // Continue even if DB update fails - Stripe cancellation is most important
      }
    }

    return NextResponse.json({
      success: true,
      canceledSubscriptions,
      message: cancelAt === 'immediately' 
        ? 'Your subscription has been canceled immediately. You now have 5 free messages to use.'
        : 'Your subscription will be canceled at the end of your current billing period. You can reactivate it anytime before then.'
    })

  } catch (error) {
    console.error('Subscription cancellation error:', error)
    
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: `Stripe error: ${error.message}` },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to cancel subscription' },
      { status: 500 }
    )
  }
}

// GET endpoint to check subscription status
export async function GET(request: NextRequest) {
  try {
    const { userId } = auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Get user details
    const user = await clerkClient.users.getUser(userId)
    const userEmail = user.emailAddresses[0]?.emailAddress

    if (!userEmail) {
      return NextResponse.json(
        { error: 'User email not found' },
        { status: 400 }
      )
    }

    let activeSubscriptions = []

    // Find all active subscriptions
    try {
      const customers = await stripe.customers.list({
        email: userEmail,
        limit: 10
      })

      for (const customer of customers.data) {
        const subscriptions = await stripe.subscriptions.list({
          customer: customer.id,
          status: 'all'
        })

        for (const subscription of subscriptions.data) {
          if (subscription.status === 'active' || subscription.cancel_at_period_end) {
            activeSubscriptions.push({
              id: subscription.id,
              status: subscription.status,
              cancel_at_period_end: subscription.cancel_at_period_end,
              current_period_end: subscription.current_period_end,
              canceled_at: subscription.canceled_at,
              plan_name: subscription.items.data[0]?.price?.nickname || 'Unknown Plan'
            })
          }
        }
      }
    } catch (stripeError) {
      console.error('Error fetching subscription status:', stripeError)
      return NextResponse.json(
        { error: 'Failed to fetch subscription status' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      subscriptions: activeSubscriptions,
      hasActiveSubscription: activeSubscriptions.length > 0
    })

  } catch (error) {
    console.error('Subscription status check error:', error)
    return NextResponse.json(
      { error: 'Failed to check subscription status' },
      { status: 500 }
    )
  }
}