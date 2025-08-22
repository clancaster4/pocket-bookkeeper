'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import { Calendar, CreditCard, AlertTriangle, CheckCircle } from 'lucide-react'

interface Subscription {
  id: string
  status: string
  cancel_at_period_end: boolean
  current_period_end: number
  canceled_at: number | null
  plan_name: string
}

export default function SubscriptionManage() {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([])
  const [loading, setLoading] = useState(true)
  const [canceling, setCanceling] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!isLoaded) return
    
    if (!user) {
      router.push('/sign-in')
      return
    }

    fetchSubscriptions()
  }, [isLoaded, user])

  const fetchSubscriptions = async () => {
    try {
      const response = await fetch('/api/subscription/cancel')
      const data = await response.json()

      if (response.ok) {
        setSubscriptions(data.subscriptions)
      } else {
        setMessage(data.error || 'Failed to fetch subscription details')
      }
    } catch (error) {
      setMessage('Error loading subscription details')
    } finally {
      setLoading(false)
    }
  }

  const handleCancelSubscription = async (cancelImmediately = false) => {
    setCanceling(true)
    setMessage('')

    try {
      const response = await fetch('/api/subscription/cancel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cancelAt: cancelImmediately ? 'immediately' : 'period_end'
        })
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message)
        await fetchSubscriptions() // Refresh subscription status
      } else {
        setMessage(data.error || 'Failed to cancel subscription')
      }
    } catch (error) {
      setMessage('Error canceling subscription')
    } finally {
      setCanceling(false)
    }
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary-600 mx-auto"></div>
          <p className="mt-2 text-neutral-600">Loading subscription details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
            <CreditCard className="w-6 h-6 mr-2" />
            Manage Subscription
          </h1>

          {message && (
            <div className={`mb-6 p-4 rounded-lg ${
              message.includes('success') || message.includes('canceled')
                ? 'bg-green-100 text-green-800 border border-green-200'
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              <div className="flex items-start">
                {message.includes('success') || message.includes('canceled') ? (
                  <CheckCircle className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
                ) : (
                  <AlertTriangle className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
                )}
                <p className="text-sm">{message}</p>
              </div>
            </div>
          )}

          {subscriptions.length === 0 ? (
            <div className="text-center py-8">
              <CreditCard className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <h2 className="text-lg font-semibold text-neutral-700 mb-2">No Active Subscriptions</h2>
              <p className="text-neutral-600 mb-4">You don't have any active subscriptions at the moment.</p>
              <button
                onClick={() => router.push('/')}
                className="btn-primary"
              >
                Return to Home
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {subscriptions.map((subscription) => (
                <div key={subscription.id} className="border border-neutral-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-neutral-900">{subscription.plan_name}</h3>
                      <p className="text-sm text-neutral-600">Subscription ID: {subscription.id}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      subscription.cancel_at_period_end
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {subscription.cancel_at_period_end ? 'Scheduled for Cancellation' : 'Active'}
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-neutral-600 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>
                      {subscription.cancel_at_period_end
                        ? `Expires on ${formatDate(subscription.current_period_end)}`
                        : `Renews on ${formatDate(subscription.current_period_end)}`
                      }
                    </span>
                  </div>

                  {subscription.cancel_at_period_end ? (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <p className="text-sm text-orange-800">
                        Your subscription is scheduled to be canceled at the end of the current billing period. 
                        You can continue using the service until {formatDate(subscription.current_period_end)}.
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handleCancelSubscription(false)}
                        disabled={canceling}
                        className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {canceling ? 'Processing...' : 'Cancel at Period End'}
                      </button>
                      <button
                        onClick={() => handleCancelSubscription(true)}
                        disabled={canceling}
                        className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {canceling ? 'Processing...' : 'Cancel Immediately'}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-neutral-200">
            <button
              onClick={() => router.push('/')}
              className="text-secondary-600 hover:text-secondary-700 font-medium"
            >
              ← Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}