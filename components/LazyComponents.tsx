'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Lazy load heavy components with loading fallbacks
export const LazySubscriptionModal = dynamic(
  () => import('./SubscriptionModal'),
  {
    loading: () => (
      <div className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 max-w-md mx-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary-500 mx-auto mb-4"></div>
          <p className="text-center text-neutral-600">Loading subscription options...</p>
        </div>
      </div>
    ),
    ssr: false,
  }
)

export const LazyConversationSidebar = dynamic(
  () => import('./ConversationSidebar'),
  {
    loading: () => (
      <div className="w-80 bg-white border-r border-neutral-200 lg:block hidden">
        <div className="p-4 border-b border-neutral-200">
          <div className="h-4 bg-neutral-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 bg-neutral-200 rounded animate-pulse w-3/4"></div>
        </div>
        <div className="p-4 space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-12 bg-neutral-100 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    ),
    ssr: false,
  }
)

export const LazyFileUpload = dynamic(
  () => import('./FileUpload'),
  {
    loading: () => (
      <div className="border-2 border-dashed border-neutral-300 rounded-xl p-8">
        <div className="text-center">
          <div className="w-12 h-12 bg-neutral-200 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-neutral-500">Loading file upload...</p>
        </div>
      </div>
    ),
    ssr: false,
  }
)

// Lazy load complex chat components
export const LazyChatInterface = dynamic(
  () => import('./ChatInterface'),
  {
    loading: () => (
      <div className="bg-white rounded-lg shadow-lg border border-neutral-200 min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary-500 mx-auto mb-4"></div>
          <p className="text-neutral-600">Initializing AI Assistant...</p>
        </div>
      </div>
    ),
    ssr: false,
  }
)

// Wrapper component with Suspense boundary
export function SuspenseWrapper({ 
  children, 
  fallback 
}: { 
  children: React.ReactNode
  fallback?: React.ReactNode 
}) {
  return (
    <Suspense 
      fallback={
        fallback || (
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary-500"></div>
          </div>
        )
      }
    >
      {children}
    </Suspense>
  )
}