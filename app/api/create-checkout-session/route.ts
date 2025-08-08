import { NextRequest, NextResponse } from 'next/server'
import { createCheckoutSession } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const { planId } = await request.json()

    if (!planId) {
      return NextResponse.json(
        { error: 'Plan ID is required' },
        { status: 400 }
      )
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