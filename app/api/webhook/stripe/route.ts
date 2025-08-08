import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { headers } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = headers().get('stripe-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      )
    }

    let event

    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!
      )
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object
        console.log('Payment successful:', {
          sessionId: session.id,
          customerEmail: session.customer_details?.email,
          planId: session.metadata?.planId,
          model: session.metadata?.model
        })
        
        // Here you would typically:
        // 1. Update user subscription status in your database
        // 2. Send confirmation email
        // 3. Update user's AI model access
        break
        
      case 'customer.subscription.created':
        const subscription = event.data.object
        console.log('Subscription created:', {
          subscriptionId: subscription.id,
          customerId: subscription.customer,
          status: subscription.status
        })
        break
        
      case 'customer.subscription.updated':
        const updatedSubscription = event.data.object
        console.log('Subscription updated:', {
          subscriptionId: updatedSubscription.id,
          status: updatedSubscription.status
        })
        break
        
      case 'customer.subscription.deleted':
        const deletedSubscription = event.data.object
        console.log('Subscription deleted:', {
          subscriptionId: deletedSubscription.id
        })
        break
        
      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
} 