'use client'

import { X, AlertCircle, Crown } from 'lucide-react'

interface LimitExceededModalProps {
  isOpen: boolean
  onClose: () => void
  onUpgrade: () => void
}

export default function LimitExceededModal({ isOpen, onClose, onUpgrade }: LimitExceededModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-neutral-900">Message Limit Reached</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5 text-neutral-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-neutral-600 mb-6 leading-relaxed">
            You have used all 5 free messages. Please upgrade to a paid plan for unlimited access.
          </p>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-secondary-50 to-accent-50 rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-neutral-900 mb-3 flex items-center">
              <Crown className="w-4 h-4 text-accent-600 mr-2" />
              Upgrade Benefits:
            </h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                Unlimited messages
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                Advanced AI guidance
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                Priority support
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                Premium features
              </li>
            </ul>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-neutral-300 text-neutral-700 rounded-xl font-medium hover:bg-neutral-50 transition-colors"
            >
              Maybe Later
            </button>
            <button
              onClick={onUpgrade}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 