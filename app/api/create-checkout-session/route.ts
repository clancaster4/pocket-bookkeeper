import { NextRequest, NextResponse } from 'next/server'
import { auth, clerkClient } from '@clerk/nextjs/server'
import Stripe from 'stripe'
import { createCheckoutSession, pricingPlans } from '@/lib/stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export async function POST(request: NextRequest) {
  try {
    const { userId } = auth()
    const { planId } = await request.json()

    if (!planId) {
      return NextResponse.json(
        { error: 'Plan ID is required' },
        { status: 400 }
      )
    }

    // Check if user is authenticated and get their details
    if (userId) {
      const user = await clerkClient.users.getUser(userId)
      const userEmail = user.emailAddresses[0]?.emailAddress

      if (userEmail) {
        // Check if user already has an active subscription for this plan
        try {
          const customers = await stripe.customers.list({
            email: userEmail,
            limit: 10
          })

          const currentPlan = pricingPlans.find(p => p.id === planId)
          if (!currentPlan) {
            return NextResponse.json(
              { error: 'Invalid plan selected' },
              { status: 400 }
            )
          }

          for (const customer of customers.data) {
            const subscriptions = await stripe.subscriptions.list({
              customer: customer.id,
              status: 'active'
            })

            for (const subscription of subscriptions.data) {
              // Check if any active subscription has the same price ID as the requested plan
              for (const item of subscription.items.data) {
                if (item.price.id === currentPlan.priceId) {
                  return NextResponse.json(
                    { error: 'You are already subscribed to this plan.' },
                    { status: 409 }
                  )
                }
              }
            }
          }
        } catch (stripeError) {
          console.error('Error checking existing subscriptions:', stripeError)
          // Continue with checkout creation even if we can't check existing subscriptions
        }
      }
    }

    // Validate Stripe configuration
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('Stripe secret key not configured')
      return NextResponse.json(
        { error: 'Payment processing not configured' },
        { status: 500 }
      )
    }

    // Create success and cancel URLs
    const baseUrl = request.nextUrl.origin
    const successUrl = `${baseUrl}/?success=true&plan=${planId}`
    const cancelUrl = `${baseUrl}/?canceled=true`

    // Create Stripe checkout session
    const session = await createCheckoutSession(planId, successUrl, cancelUrl)

    if (!session || !session.url) {
      throw new Error('Failed to create Stripe session')
    }

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    
    // Provide more specific error messages
    let errorMessage = 'Failed to create checkout session'
    if (error instanceof Error) {
      if (error.message.includes('Invalid plan ID')) {
        errorMessage = 'Invalid subscription plan selected'
      } else if (error.message.includes('Stripe')) {
        errorMessage = 'Payment processing error'
      } else {
        errorMessage = error.message
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
} 