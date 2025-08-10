import Stripe from 'stripe'

// Initialize Stripe
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

// Pricing plans configuration using Stripe Price IDs
export const pricingPlans = [
  {
    id: 'basic-helper',
    name: 'Everyday Assistant',
    priceId: process.env.NEXT_PUBLIC_BASIC_MONTHLY_PRICE_ID!,
    price: 999, // $9.99 in cents (fallback)
    currency: 'usd',
    interval: 'month',
    model: 'advanced-ai',
    features: [
      'Unlimited queries',
      'Advanced bookkeeping guidance',
      'Chat history & export',
      'Personalized insights',
      'Priority support'
    ]
  },
  {
    id: 'elite-advisor',
    name: 'Elite Advisor',
    priceId: process.env.NEXT_PUBLIC_ELITE_MONTHLY_PRICE_ID!,
    price: 1999, // $19.99 in cents (fallback)
    currency: 'usd',
    interval: 'month',
    model: 'premium-ai',
    features: [
      'Unlimited queries',
      'Premium AI model (Advanced reasoning)',
      'Premium bookkeeping guidance',
      'Advanced analytics & reporting',
      'Faster response times',
      'All Everyday Assistant features'
    ]
  }
]

// Get AI model for a given tier
export function getModelForTier(tier: string): string {
  switch (tier) {
    case 'basic-helper':
      return 'advanced-ai'
    case 'elite-advisor':
      return 'premium-ai'
    default:
      return 'standard-ai'
  }
}

// Create Stripe checkout session
export async function createCheckoutSession(planId: string, successUrl: string, cancelUrl: string) {
  const plan = pricingPlans.find(p => p.id === planId)
  
  if (!plan) {
    throw new Error('Invalid plan ID')
  }

  // Check if we have a Stripe Price ID
  if (plan.priceId && plan.priceId !== 'price_basic_monthly_plan_id_here' && plan.priceId !== 'price_elite_monthly_plan_id_here') {
    // Use existing Stripe Price ID
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: plan.priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        planId: plan.id,
        model: plan.model,
      },
    })
    return session
  } else {
    // Fallback to creating price on the fly (for development/testing)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: plan.currency,
            product_data: {
              name: plan.name,
              description: `Monthly subscription to ${plan.name}`,
            },
            unit_amount: plan.price,
            recurring: {
              interval: plan.interval as 'month',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        planId: plan.id,
        model: plan.model,
      },
    })
    return session
  }
} 