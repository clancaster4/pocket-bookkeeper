'use client'

import { useState, useEffect } from 'react'
import { Menu, Calculator, BookOpen, DollarSign, MessageCircle, Copy, CheckCircle, XCircle } from 'lucide-react'
import { useUser, SignInButton, UserButton } from '@clerk/nextjs'
import Header from '@/components/Header'
import ChatInterface from '@/components/ChatInterface'
// ConversationSidebar removed - conversations are now ephemeral
import Disclaimer from '@/components/Disclaimer'
import LimitExceededModal from '@/components/LimitExceededModal'
import SubscriptionModal from '@/components/SubscriptionModal'
import AIOptimizedContent from '@/components/AIOptimizedContent'
import { useConversations } from '@/hooks/useConversations'
import { useUser as useAppUser } from '@/hooks/useUser'
import { useAppStore } from '@/lib/store'
import { getClientFingerprint } from '@/lib/client-fingerprint'
import { Message, FileAttachment } from '@/types/chat'

export default function Home() {
  const { isSignedIn, user, isLoaded: clerkLoaded } = useUser()
  
  const {
    currentConversation,
    currentConversationId,
    conversationSummaries,
    createConversation,
    addMessageToConversation,
    deleteConversation,
    setCurrentConversationId,
    isLoaded: conversationsLoaded
  } = useConversations()

  // Initialize user data and fetch server-side usage
  useAppUser()

  const [isLoading, setIsLoading] = useState(false)
  // Sidebar state removed - no conversations sidebar needed
  const [subscriptionModalOpen, setSubscriptionModalOpen] = useState(false)
  const [selectedAIModel, setSelectedAIModel] = useState('everyday')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showCancelMessage, setShowCancelMessage] = useState(false)
  const [successPlan, setSuccessPlan] = useState('')
  const [showLimitExceededModal, setShowLimitExceededModal] = useState(false)

  // Handle URL parameters for Stripe checkout and subscription modal
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const success = urlParams.get('success')
      const canceled = urlParams.get('canceled')
      const plan = urlParams.get('plan')
      const openSubscription = urlParams.get('openSubscription')
      const selectedPlan = urlParams.get('selectedPlan')

      if (success === 'true' && plan) {
        setShowSuccessMessage(true)
        setSuccessPlan(plan)
        // Clear URL parameters
        const newUrl = window.location.pathname
        window.history.replaceState({}, '', newUrl)
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccessMessage(false)
          setSuccessPlan('')
        }, 5000)
      } else if (canceled === 'true') {
        setShowCancelMessage(true)
        // Clear URL parameters
        const newUrl = window.location.pathname
        window.history.replaceState({}, '', newUrl)
        
        // Hide cancel message after 5 seconds
        setTimeout(() => {
          setShowCancelMessage(false)
        }, 5000)
      } else if (openSubscription === 'true') {
        // Open subscription modal with pre-selected plan if provided
        if (selectedPlan) {
          // We'll need to pass this to the modal somehow
          // For now, just open the modal
        }
        setSubscriptionModalOpen(true)
        const newUrl = window.location.pathname
        window.history.replaceState({}, '', newUrl)
      }
    }
  }, [])

  // Create initial conversation if none exist
  useEffect(() => {
    console.log('Conversation creation effect:', {
      conversationsLoaded,
      conversationSummariesLength: conversationSummaries.length,
      currentConversationId
    })
    
    // Create conversation if none exist and conversations are loaded
    if (conversationsLoaded && conversationSummaries.length === 0) {
      console.log('Creating initial conversation...')
      try {
        createConversation()
        console.log('Initial conversation created successfully')
      } catch (error) {
        console.error('Error creating initial conversation:', error)
      }
    }
  }, [conversationsLoaded, conversationSummaries.length, createConversation])

  const handleSendMessage = async (message: string, attachments?: FileAttachment[]) => {
    // Check message limit for unauthenticated users
    const { usage } = useAppStore.getState()
    if (!isSignedIn && usage.remainingQueries <= 0) {
      setShowLimitExceededModal(true)
      return
    }

    // Check if we have a valid conversation, create one if needed
    if (!currentConversationId || !currentConversation) {
      console.log('No current conversation, creating one...')
      try {
        const newConversationId = createConversation()
        console.log('Created new conversation with ID:', newConversationId)
      } catch (error) {
        console.error('Error creating conversation:', error)
        alert('Failed to create conversation. Please refresh the page and try again.')
        return
      }
    }

    console.log('Sending message:', message)
    console.log('Current conversation ID:', currentConversationId)
    console.log('Current conversation:', currentConversation)

    setIsLoading(true)
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Client-Fingerprint': getClientFingerprint(),
        },
        body: JSON.stringify({
          message,
          history: currentConversation?.messages.map(msg => ({
            role: msg.role,
            content: msg.content,
          })) || [],
          attachments,
          aiModel: selectedAIModel,
        }),
      })

      console.log('API response status:', response.status)

      const data = await response.json()
      console.log('API response data:', data)

      if (!response.ok) {
        if (response.status === 429) {
          // Handle rate limiting - show modal instead of alert
          setShowLimitExceededModal(true)
          return
        }
        throw new Error(data.error || 'Failed to send message')
      }

      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        content: message,
        timestamp: new Date(),
        attachments,
      }

      // Add AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
        modelUsed: data.modelUsed,
      }

      console.log('Adding user message:', userMessage)
      console.log('Adding AI message:', aiMessage)

      // Get the current conversation ID (should be set by now)
      const conversationId = currentConversationId || createConversation()
      
      // Add messages to conversation
      await addMessageToConversation(conversationId, userMessage)
      await addMessageToConversation(conversationId, aiMessage)

      console.log('Messages added successfully')

      // Update the usage counter with data from API response
      if (!isSignedIn && data.usage) {
        const { updateUsage } = useAppStore.getState()
        const totalUsed = 5 - data.usage.remaining
        console.log('About to update usage:', { 
          totalUsed, 
          remaining: data.usage.remaining, 
          isSignedIn, 
          hasUsageData: !!data.usage,
          userAgent: navigator.userAgent.substring(0, 100)
        })
        updateUsage(totalUsed, 5)
        console.log('Usage updated successfully')
        
        // Verify the update worked
        const currentState = useAppStore.getState()
        console.log('Current usage state after update:', currentState.usage)
      }

    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleNewConversation = () => {
    // Clear current conversation and start fresh
    createConversation()
  }

  const handleSubscriptionModalChange = (isOpen: boolean) => {
    setSubscriptionModalOpen(isOpen)
  }

  const handleAIModelChange = (modelId: string) => {
    setSelectedAIModel(modelId)
  }

  const handleLimitExceededClose = () => {
    setShowLimitExceededModal(false)
  }

  const handleLimitExceededUpgrade = () => {
    setShowLimitExceededModal(false)
    setSubscriptionModalOpen(true)
  }

  const getPlanName = (planId: string): string => {
    switch (planId) {
      case 'basic-helper': return 'Everyday Assistant'
      case 'elite-advisor': return 'Elite Advisor'
      default: return 'Unknown Plan'
    }
  }

  // Show loading state while Clerk is loading
  if (!clerkLoaded) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-secondary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Remove the sign-in page block - users can now use the chat without authentication
  // The sign-in/sign-up buttons are available in the Header component

  // Debug current state
  console.log('Current app state:', {
    conversationsLoaded,
    currentConversationId,
    currentConversation: currentConversation ? 'exists' : 'null',
    conversationSummariesLength: conversationSummaries.length,
    isLoading,
    isSignedIn
  })

  // Show loading state while conversations are loading
  if (!conversationsLoaded) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-secondary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading your conversations...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header onSubscriptionModalChange={handleSubscriptionModalChange} />
      
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-4 left-4 right-4 sm:right-4 sm:left-auto z-50 bg-green-50 border border-green-200 rounded-lg p-4 shadow-lg max-w-sm">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-green-800">Subscription Successful!</h3>
              <p className="text-sm text-green-700 mt-1">
                Welcome to {getPlanName(successPlan)}! Your subscription is now active.
              </p>
            </div>
            <button
              onClick={() => setShowSuccessMessage(false)}
              className="text-green-400 hover:text-green-600"
            >
              <XCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Cancel Message */}
      {showCancelMessage && (
        <div className="fixed top-4 left-4 right-4 sm:right-4 sm:left-auto z-50 bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow-lg max-w-sm">
          <div className="flex items-start space-x-3">
            <XCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-yellow-800">Payment Cancelled</h3>
              <p className="text-sm text-yellow-700 mt-1">
                Your payment was cancelled. You can try again anytime.
              </p>
            </div>
            <button
              onClick={() => setShowCancelMessage(false)}
              className="text-yellow-400 hover:text-yellow-600"
            >
              <XCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      
      <main className="flex h-auto bg-gradient-to-b from-white to-neutral-50">
        {/* Main Chat Area - Full width since sidebar is removed */}
        <div className="w-full flex flex-col relative">

          {currentConversation ? (
            <>
              {/* Chat Interface - Sized to content */}
              <div className="p-4 pb-2">
                <ChatInterface
                  messages={currentConversation.messages}
                  onSendMessage={handleSendMessage}
                  isLoading={isLoading}
                  selectedAIModel={selectedAIModel}
                  onAIModelChange={handleAIModelChange}
                  onSubscriptionModalChange={handleSubscriptionModalChange}
                />
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-secondary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-neutral-600">Creating new conversation...</p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 bg-gradient-to-b from-neutral-50 to-white">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-secondary-500/25">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">Smart Expense Tracking</h3>
            <p className="text-neutral-600 leading-relaxed">Confidently categorize and track business expenses with the help of AI-powered insights</p>
          </div>

          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent-500/25">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">Tax Knowledge</h3>
            <p className="text-neutral-600 leading-relaxed">Get expert advice on tax deductions, compliance, and optimization strategies</p>
          </div>

          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-neutral-500 to-neutral-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-neutral-500/25">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">Financial Insights</h3>
            <p className="text-neutral-600 leading-relaxed">Understand your cash flow, identify trends, and make informed business decisions</p>
          </div>
        </div>
      </div>

      {/* Example Questions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-4 bg-gradient-to-b from-white to-neutral-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">Example Questions</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">Try asking your AI assistant these common bookkeeping questions to get started</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-secondary-200">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Expense Tracking</h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li className="flex items-start">
                <span className="text-secondary-500 mr-2">•</span>
                How do I categorize business meals?
              </li>
              <li className="flex items-start">
                <span className="text-secondary-500 mr-2">•</span>
                What receipts should I keep for taxes?
              </li>
              <li className="flex items-start">
                <span className="text-secondary-500 mr-2">•</span>
                How to track mileage for business?
              </li>
              <li className="flex items-start">
                <span className="text-secondary-500 mr-2">•</span>
                Best way to organize expense records?
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-accent-200">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Tax Questions</h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                What can I deduct as a freelancer?
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                How to handle home office expenses?
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                When are quarterly taxes due?
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                How to calculate self-employment tax?
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-neutral-300">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Financial Reports</h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li className="flex items-start">
                <span className="text-neutral-500 mr-2">•</span>
                How to create a profit & loss statement?
              </li>
              <li className="flex items-start">
                <span className="text-neutral-500 mr-2">•</span>
                Understanding cash flow basics?
              </li>
              <li className="flex items-start">
                <span className="text-neutral-500 mr-2">•</span>
                How to reconcile bank statements?
              </li>
              <li className="flex items-start">
                <span className="text-neutral-500 mr-2">•</span>
                Setting up a simple budget?
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-secondary-200">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Business Setup</h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li className="flex items-start">
                <span className="text-secondary-500 mr-2">•</span>
                Should I form an LLC or stay sole proprietor?
              </li>
              <li className="flex items-start">
                <span className="text-secondary-500 mr-2">•</span>
                How to set up business bank accounts?
              </li>
              <li className="flex items-start">
                <span className="text-secondary-500 mr-2">•</span>
                What accounting software should I use?
              </li>
              <li className="flex items-start">
                <span className="text-secondary-500 mr-2">•</span>
                How to track inventory properly?
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-accent-200">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Compliance</h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                What records do I need to keep?
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                How long to keep tax documents?
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                Understanding sales tax requirements?
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                When do I need a business license?
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-neutral-300">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Advanced Topics</h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li className="flex items-start">
                <span className="text-neutral-500 mr-2">•</span>
                How to value my business?
              </li>
              <li className="flex items-start">
                <span className="text-neutral-500 mr-2">•</span>
                Understanding depreciation?
              </li>
              <li className="flex items-start">
                <span className="text-neutral-500 mr-2">•</span>
                How to handle foreign transactions?
              </li>
              <li className="flex items-start">
                <span className="text-neutral-500 mr-2">•</span>
                Setting up retirement accounts?
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="py-8 bg-neutral-50"></div>

      <Disclaimer />

      {/* Limit Exceeded Modal */}
      <LimitExceededModal
        isOpen={showLimitExceededModal}
        onClose={handleLimitExceededClose}
        onUpgrade={handleLimitExceededUpgrade}
      />

      {/* Subscription Modal */}
      {subscriptionModalOpen && (
        <SubscriptionModal
          isOpen={subscriptionModalOpen}
          onClose={() => setSubscriptionModalOpen(false)}
        />
      )}
    </div>
  )
} 