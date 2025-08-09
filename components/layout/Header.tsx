'use client'

import { useState } from 'react'
import { Calculator, User, LogIn } from 'lucide-react'
// import { useUser, UserButton, SignInButton } from '@clerk/nextjs'
import SubscriptionModal from './SubscriptionModal'
import { useAppStore } from '@/lib/store'

interface HeaderProps {
  onSubscriptionModalChange?: (isOpen: boolean) => void
}

export default function Header({ onSubscriptionModalChange }: HeaderProps) {
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false)
  const { usage, subscription } = useAppStore()
  // const { user, isSignedIn } = useUser()
  const user: any = null
  const isSignedIn = false // Set to false to show sign-in button

  const handleCloseModal = () => {
    setShowSubscriptionModal(false)
    onSubscriptionModalChange?.(false)
  }

  // Determine what to display based on subscription status
  const getQueryDisplay = () => {
    if (subscription.tier === 'free') {
      return `${usage.remainingQueries} queries remaining`
    } else if (subscription.tier === 'basic' || subscription.tier === 'elite') {
      return 'Unlimited queries'
    } else {
      return `${usage.remainingQueries} queries remaining`
    }
  }

  const getQueryDisplayColor = () => {
    if (subscription.tier === 'free') {
      return usage.remainingQueries <= 3 ? 'bg-red-100 text-red-700' : 'bg-secondary-100 text-secondary-700'
    } else {
      return 'bg-green-100 text-green-700'
    }
  }

  return (
    <header className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-white to-accent-50"></div>
      <div className="absolute inset-0 bg-neutral-100/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sign In Button - Top Right */}
        <div className="absolute top-4 right-4">
          {isSignedIn ? (
            <div className="flex items-center space-x-3">
              <div className="text-sm text-neutral-600">
                Welcome, {user?.firstName || user?.emailAddresses?.[0]?.emailAddress || 'User'}
              </div>
              <button
                onClick={() => {
                  // Handle sign out or user menu
                  console.log('User menu clicked')
                }}
                className="w-8 h-8 rounded-full border-2 border-white shadow-md bg-gradient-to-r from-secondary-500 to-secondary-600 flex items-center justify-center hover:from-secondary-600 hover:to-secondary-700 transition-all duration-200"
              >
                <User className="w-4 h-4 text-white" />
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  // Navigate to sign-in page
                  window.location.href = '/sign-in'
                }}
                className="inline-flex items-center space-x-2 px-3 py-2 bg-white/90 hover:bg-white text-neutral-700 font-medium rounded-full transition-all duration-200 shadow-lg shadow-neutral-200/50 backdrop-blur-sm border border-neutral-200 hover:shadow-xl hover:shadow-neutral-300/50 transform hover:scale-105"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
              </button>
                             <button
                 onClick={() => {
                   // Open subscription modal for sign up
                   setShowSubscriptionModal(true)
                   onSubscriptionModalChange?.(true)
                 }}
                 className="inline-flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-medium rounded-full transition-all duration-200 shadow-lg shadow-secondary-500/25 hover:shadow-xl hover:shadow-secondary-500/30 transform hover:scale-105"
               >
                 <User className="w-4 h-4" />
                 <span>Sign Up</span>
               </button>
            </div>
          )}
        </div>

        {/* Logo and Title */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-secondary-500/25">
              <Calculator className="w-6 h-6 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Pocket Bookkeeper
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 mb-2">
            Your AI-powered bookkeeping assistant
          </p>
          <p className="text-sm sm:text-base text-neutral-500 mb-6">
            Get expert guidance on expenses, taxes, and financial management
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getQueryDisplayColor()}`}>
              <span className="w-2 h-2 rounded-full mr-2" style={{ 
                backgroundColor: subscription.tier === 'free' && usage.remainingQueries <= 3 ? '#dc2626' : 
                                subscription.tier !== 'free' ? '#059669' : '#6366f1' 
              }}></span>
              {getQueryDisplay()}
            </div>
            
            {/* Show "Get Unlimited Queries" button only for free users */}
            {subscription.tier === 'free' && (
              <button
                onClick={() => {
                  setShowSubscriptionModal(true)
                  onSubscriptionModalChange?.(true)
                }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Hire your Bookkeeper
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Subscription Modal */}
      {showSubscriptionModal && (
        <SubscriptionModal
          isOpen={showSubscriptionModal}
          onClose={handleCloseModal}
        />
      )}
    </header>
  )
} 