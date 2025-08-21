'use client'

import { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { 
  Settings, 
  CreditCard, 
  Download, 
  Trash2, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Calendar,
  DollarSign,
  Shield,
  LogOut
} from 'lucide-react'
import toast from 'react-hot-toast'

interface SubscriptionInfo {
  id: string
  status: string
  cancel_at_period_end: boolean
  current_period_end: number
  canceled_at?: number
}

interface AccountInfo {
  user: {
    id: string
    email: string
    firstName?: string
    lastName?: string
    createdAt: number
  }
  activeSubscriptions: number
  deletionInfo: {
    dataTypes: string[]
    process: string[]
  }
}

export default function AccountManagement() {
  const { user, isLoaded } = useUser()
  const [activeTab, setActiveTab] = useState<'subscription' | 'account'>('subscription')
  const [subscriptionInfo, setSubscriptionInfo] = useState<SubscriptionInfo | null>(null)
  const [accountInfo, setAccountInfo] = useState<AccountInfo | null>(null)
  const [loading, setLoading] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleteConfirmText, setDeleteConfirmText] = useState('')
  const [exportData, setExportData] = useState(false)

  // Load account information
  useEffect(() => {
    if (isLoaded && user) {
      loadAccountInfo()
    }
  }, [isLoaded, user])

  const loadAccountInfo = async () => {
    try {
      const response = await fetch('/api/account/delete')
      if (response.ok) {
        const data = await response.json()
        setAccountInfo(data)
      }
    } catch (error) {
      console.error('Failed to load account info:', error)
    }
  }

  const handleCancelSubscription = async (type: 'immediately' | 'period_end') => {
    if (!subscriptionInfo?.id) {
      toast.error('No active subscription found')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/subscription/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subscriptionId: subscriptionInfo.id,
          cancelAt: type
        })
      })

      if (response.ok) {
        const data = await response.json()
        toast.success(data.message)
        setSubscriptionInfo(data.subscription)
      } else {
        const error = await response.json()
        toast.error(error.error || 'Failed to cancel subscription')
      }
    } catch (error) {
      toast.error('Failed to cancel subscription')
    }
    setLoading(false)
  }

  const handleDeleteAccount = async () => {
    if (deleteConfirmText !== 'DELETE MY ACCOUNT') {
      toast.error('Please type "DELETE MY ACCOUNT" to confirm')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/account/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          confirmDeletion: true,
          exportData
        })
      })

      if (response.ok) {
        const data = await response.json()
        
        if (data.exportData && exportData) {
          // Download user data export
          const blob = new Blob([JSON.stringify(data.exportData, null, 2)], {
            type: 'application/json'
          })
          const url = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = `my-ai-bookkeeper-data-export-${new Date().toISOString().split('T')[0]}.json`
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
          URL.revokeObjectURL(url)
        }

        toast.success('Account deleted successfully. You will be redirected...')
        
        // Redirect after a delay
        setTimeout(() => {
          window.location.href = '/'
        }, 3000)
      } else {
        const error = await response.json()
        toast.error(error.error || 'Failed to delete account')
      }
    } catch (error) {
      toast.error('Failed to delete account')
    }
    setLoading(false)
  }

  if (!isLoaded || !user) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="w-6 h-6 border-2 border-secondary-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="border-b border-neutral-200 pb-4">
        <h1 className="text-2xl font-bold text-neutral-900 flex items-center space-x-2">
          <Settings className="w-6 h-6" />
          <span>Account Management</span>
        </h1>
        <p className="text-neutral-600 mt-1">
          Manage your subscription, account settings, and data
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-neutral-100 p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('subscription')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'subscription'
              ? 'bg-white text-secondary-600 shadow-sm'
              : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          <CreditCard className="w-4 h-4 inline mr-2" />
          Subscription
        </button>
        <button
          onClick={() => setActiveTab('account')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'account'
              ? 'bg-white text-secondary-600 shadow-sm'
              : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          <Shield className="w-4 h-4 inline mr-2" />
          Account
        </button>
      </div>

      {/* Subscription Tab */}
      {activeTab === 'subscription' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-neutral-200 p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">
              Subscription Management
            </h2>
            
            {(accountInfo?.activeSubscriptions ?? 0) > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">Active Subscription</p>
                      <p className="text-sm text-green-700">
                        You have {accountInfo?.activeSubscriptions ?? 0} active subscription(s)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => handleCancelSubscription('period_end')}
                    disabled={loading}
                    className="flex items-center justify-center space-x-2 py-3 px-4 bg-yellow-100 hover:bg-yellow-200 border border-yellow-300 rounded-lg text-yellow-800 font-medium transition-colors disabled:opacity-50"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Cancel at Period End</span>
                  </button>
                  
                  <button
                    onClick={() => handleCancelSubscription('immediately')}
                    disabled={loading}
                    className="flex items-center justify-center space-x-2 py-3 px-4 bg-red-100 hover:bg-red-200 border border-red-300 rounded-lg text-red-800 font-medium transition-colors disabled:opacity-50"
                  >
                    <XCircle className="w-4 h-4" />
                    <span>Cancel Immediately</span>
                  </button>
                </div>

                <div className="text-sm text-neutral-600 bg-neutral-50 p-3 rounded-lg">
                  <p className="font-medium mb-1">Cancellation Options:</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li><strong>Cancel at Period End:</strong> Access continues until your next billing date</li>
                    <li><strong>Cancel Immediately:</strong> Access ends now, but you keep access until the period ends</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3 p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
                <DollarSign className="w-5 h-5 text-neutral-500" />
                <div>
                  <p className="font-medium text-neutral-900">No Active Subscription</p>
                  <p className="text-sm text-neutral-600">
                    You're currently on the free tier
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Account Tab */}
      {activeTab === 'account' && (
        <div className="space-y-6">
          {/* Account Info */}
          <div className="bg-white rounded-lg border border-neutral-200 p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">
              Account Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700">Email</label>
                <p className="mt-1 text-sm text-neutral-900">{user.emailAddresses[0]?.emailAddress}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700">Name</label>
                <p className="mt-1 text-sm text-neutral-900">
                  {user.firstName} {user.lastName}
                </p>
              </div>
            </div>
          </div>

          {/* Data Export */}
          <div className="bg-white rounded-lg border border-neutral-200 p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Export Your Data</span>
            </h2>
            <p className="text-sm text-neutral-600 mb-4">
              Download a copy of your account data including profile information and settings.
            </p>
            <button
              onClick={() => setExportData(true)}
              className="inline-flex items-center space-x-2 py-2 px-4 bg-secondary-100 hover:bg-secondary-200 border border-secondary-300 rounded-lg text-secondary-800 font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Data</span>
            </button>
          </div>

          {/* Danger Zone */}
          <div className="bg-white rounded-lg border border-red-200 p-6">
            <h2 className="text-lg font-semibold text-red-900 mb-4 flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5" />
              <span>Danger Zone</span>
            </h2>
            
            {!showDeleteConfirm ? (
              <div>
                <p className="text-sm text-neutral-600 mb-4">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="inline-flex items-center space-x-2 py-2 px-4 bg-red-100 hover:bg-red-200 border border-red-300 rounded-lg text-red-800 font-medium transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete Account</span>
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-medium text-red-900 mb-2">What will be deleted:</h3>
                  <ul className="text-sm text-red-800 space-y-1">
                    {accountInfo?.deletionInfo?.dataTypes?.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="exportBeforeDelete"
                      checked={exportData}
                      onChange={(e) => setExportData(e.target.checked)}
                      className="rounded border-neutral-300"
                    />
                    <label htmlFor="exportBeforeDelete" className="text-sm text-neutral-700">
                      Export my data before deletion
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Type "DELETE MY ACCOUNT" to confirm:
                    </label>
                    <input
                      type="text"
                      value={deleteConfirmText}
                      onChange={(e) => setDeleteConfirmText(e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-red-500 focus:border-red-500"
                      placeholder="DELETE MY ACCOUNT"
                    />
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={handleDeleteAccount}
                      disabled={loading || deleteConfirmText !== 'DELETE MY ACCOUNT'}
                      className="flex items-center space-x-2 py-2 px-4 bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white font-medium rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Permanently Delete Account</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        setShowDeleteConfirm(false)
                        setDeleteConfirmText('')
                      }}
                      className="py-2 px-4 border border-neutral-300 hover:bg-neutral-50 text-neutral-700 font-medium rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}