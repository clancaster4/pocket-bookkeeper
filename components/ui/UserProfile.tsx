'use client'

import { useUser, SignInButton, UserButton } from '@clerk/nextjs'
import { useAppStore } from '@/lib/store'
import { Crown, User, Zap, Sparkles } from 'lucide-react'
import { useState } from 'react'
import SubscriptionModal from './SubscriptionModal'

export default function UserProfile() {
  const { isSignedIn, user } = useUser()
  const { usage, subscription } = useAppStore()
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false)

  if (!isSignedIn) {
    return (
      <div className="flex items-center space-x-3">
        <SignInButton mode="modal">
          <button className="btn-primary">
            <User className="w-4 h-4 mr-2" />
            Sign In
          </button>
        </SignInButton>
      </div>
    )
  }

  const getTierDisplay = () => {
    switch (subscription.tier) {
      case 'elite':
        return {
          icon: <Sparkles className="w-4 h-4 text-accent-500" />,
          label: 'Elite Advisor',
          color: 'text-accent-700',
          bgColor: 'bg-accent-100/80'
        }
      case 'basic':
        return {
          icon: <Crown className="w-4 h-4 text-secondary-500" />,
          label: 'Everyday Assistant',
          color: 'text-secondary-700',
          bgColor: 'bg-secondary-100/80'
        }
      default:
        return {
          icon: <Zap className="w-4 h-4 text-primary-500" />,
          label: `${usage.remainingQueries} left`,
          color: 'text-neutral-700',
          bgColor: 'bg-white/80'
        }
    }
  }

  const tierDisplay = getTierDisplay()

  return (
    <>
      <div className="flex items-center space-x-4">
        {/* Usage indicator */}
        <div className="hidden md:flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 shadow-md">
          <div className={`flex items-center space-x-2 ${tierDisplay.bgColor} px-2 py-1 rounded-lg`}>
            {tierDisplay.icon}
            <span className={`text-sm font-medium ${tierDisplay.color}`}>
              {tierDisplay.label}
            </span>
          </div>
        </div>

        {/* Upgrade button for free users */}
        {subscription.tier === 'free' && usage.remainingQueries <= 3 && (
          <button
            onClick={() => setShowSubscriptionModal(true)}
            className="hidden md:block btn-primary text-sm px-4 py-2"
          >
            Upgrade
          </button>
        )}

        {/* Upgrade button for basic users */}
        {subscription.tier === 'basic' && (
          <button
            onClick={() => setShowSubscriptionModal(true)}
            className="hidden md:block bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30 transform hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Elite
          </button>
        )}

        {/* User button */}
        <UserButton 
          appearance={{
            elements: {
              avatarBox: "w-10 h-10 rounded-2xl shadow-lg",
            }
          }}
        />
      </div>

      {/* Subscription Modal */}
      {showSubscriptionModal && (
        <SubscriptionModal 
          isOpen={showSubscriptionModal}
          onClose={() => setShowSubscriptionModal(false)}
        />
      )}
    </>
  )
} 