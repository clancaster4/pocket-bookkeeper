'use client'

import { useState } from 'react'
import { Check, X, Crown, Zap, Star, Sparkles } from 'lucide-react'
import { loadStripe } from '@stripe/stripe-js'
import { useUser, useClerk } from '@clerk/nextjs'

interface SubscriptionModalProps {
  isOpen: boolean
  onClose: () => void
}

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function SubscriptionModal({ isOpen, onClose }: SubscriptionModalProps) {
  const [selectedPlan, setSelectedPlan] = useState('basic-helper')
  const [isLoading, setIsLoading] = useState(false)
  const { isSignedIn } = useUser()
  const { openSignUp } = useClerk()

  const handleSubscribe = async () => {
    if (selectedPlan === 'free') return

    // Check if user is authenticated
    if (!isSignedIn) {
      // Close the modal and open sign-up
      onClose()
      openSignUp({
        afterSignUpUrl: `/?openSubscription=true&selectedPlan=${selectedPlan}`,
        afterSignInUrl: `/?openSubscription=true&selectedPlan=${selectedPlan}`,
      })
      return
    }

    setIsLoading(true)
    try {
      // Create checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId: selectedPlan,
        }),
      })

      const responseData = await response.json()

      if (!response.ok) {
        console.error('Checkout session error:', responseData)
        throw new Error(responseData.error || 'Failed to create checkout session')
      }

      const { url } = responseData

      // Redirect to Stripe checkout
      if (url) {
        window.location.href = url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (error) {
      console.error('Subscription error:', error)
      alert(`There was an error processing your subscription: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`)
    } finally {
      setIsLoading(false)
    }
  }

  const getPlanName = (planId: string): string => {
    switch (planId) {
      case 'basic-helper': return 'Everyday Assistant'
      case 'elite-advisor': return 'Elite Advisor'
      default: return 'Unknown Plan'
    }
  }

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">Choose Your Plan</h2>
            <p className="text-neutral-600 mt-1">Unlock unlimited bookkeeping guidance with advanced AI models</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5 text-neutral-500" />
          </button>
        </div>

        {/* Plans */}
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Free Tier */}
            <div className="p-6 rounded-2xl border-2 border-neutral-200 bg-neutral-50">
              <div className="text-center">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Free</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-neutral-900">$0</span>
                  <span className="text-neutral-600">/month</span>
                </div>
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-200 text-neutral-700">
                    <Zap className="w-3 h-3 mr-1" />
                    Standard AI
                  </span>
                </div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-neutral-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">10 queries per month</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-neutral-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">Basic bookkeeping guidance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-neutral-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">Standard response times</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-neutral-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">Community support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Everyday Assistant Tier */}
            <div
              className={`relative p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                selectedPlan === 'basic-helper'
                  ? 'border-secondary-500 bg-secondary-50'
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
              onClick={() => handlePlanSelect('basic-helper')}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Everyday Assistant</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-neutral-900">$6.99</span>
                  <span className="text-neutral-600">/month</span>
                </div>
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-700">
                    <Zap className="w-3 h-3 mr-1" />
                    Advanced AI
                  </span>
                </div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">Unlimited queries</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">Advanced bookkeeping guidance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">Chat history & export</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">Personalized insights</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">Priority support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Elite Advisor Tier */}
            <div
              className={`relative p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                selectedPlan === 'elite-advisor'
                  ? 'border-accent-500 bg-accent-50'
                  : 'border-neutral-200 hover:border-neutral-300'
              } ring-2 ring-accent-500`}
              onClick={() => handlePlanSelect('elite-advisor')}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Elite Advisor</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-neutral-900">$14.99</span>
                  <span className="text-neutral-600">/month</span>
                </div>
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-700">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Premium AI
                  </span>
                </div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">Unlimited queries</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700 font-medium">Premium AI model (Advanced reasoning)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">Premium bookkeeping guidance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">Faster response times</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">All Everyday Assistant features</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-neutral-300 text-neutral-700 rounded-xl font-medium hover:bg-neutral-50 transition-colors"
            >
              Maybe Later
            </button>
            <button
              onClick={handleSubscribe}
              disabled={isLoading || selectedPlan === 'free'}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Processing...
                </div>
              ) : (
                <>
                  {selectedPlan === 'free' ? 'Current Plan' : 'Subscribe Now'}
                </>
              )}
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-6 text-center">
            <p className="text-xs text-neutral-500">
              🔒 Secure payment powered by Stripe • Cancel anytime • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 