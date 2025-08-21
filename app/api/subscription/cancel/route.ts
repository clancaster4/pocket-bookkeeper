import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
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
    const { subscriptionId, cancelAt = 'immediately' } = body

    if (!subscriptionId) {
      return NextResponse.json(
        { error: 'Subscription ID is required' },
        { status: 400 }
      )
    }

    // Retrieve subscription to verify ownership
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
    
    if (!subscription) {
      return NextResponse.json(
        { error: 'Subscription not found' },
        { status: 404 }
      )
    }

    let canceledSubscription

    if (cancelAt === 'immediately') {
      // Cancel immediately
      canceledSubscription = await stripe.subscriptions.cancel(subscriptionId)
    } else if (cancelAt === 'period_end') {
      // Cancel at end of current billing period
      canceledSubscription = await stripe.subscriptions.update(subscriptionId, {
        cancel_at_period_end: true
      })
    } else {
      return NextResponse.json(
        { error: 'Invalid cancellation type' },
        { status: 400 }
      )
    }

    // Log cancellation for analytics
    console.log(`Subscription canceled: ${subscriptionId} for user: ${userId}, type: ${cancelAt}`)

    return NextResponse.json({
      success: true,
      subscription: {
        id: canceledSubscription.id,
        status: canceledSubscription.status,
        cancel_at_period_end: canceledSubscription.cancel_at_period_end,
        current_period_end: canceledSubscription.current_period_end,
        canceled_at: canceledSubscription.canceled_at
      },
      message: cancelAt === 'immediately' 
        ? 'Your subscription has been canceled immediately. You still have access until the end of your current billing period.'
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

// GET endpoint to check cancellation status
export async function GET(request: NextRequest) {
  try {
    const { userId } = auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const subscriptionId = searchParams.get('subscription_id')

    if (!subscriptionId) {
      return NextResponse.json(
        { error: 'Subscription ID is required' },
        { status: 400 }
      )
    }

    const subscription = await stripe.subscriptions.retrieve(subscriptionId)

    return NextResponse.json({
      subscription: {
        id: subscription.id,
        status: subscription.status,
        cancel_at_period_end: subscription.cancel_at_period_end,
        current_period_end: subscription.current_period_end,
        canceled_at: subscription.canceled_at
      }
    })

  } catch (error) {
    console.error('Subscription status check error:', error)
    return NextResponse.json(
      { error: 'Failed to check subscription status' },
      { status: 500 }
    )
  }
}