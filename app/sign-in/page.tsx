'use client'

import { useState } from 'react'
import { LogIn, Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import SubscriptionModal from '@/components/SubscriptionModal'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Here you would typically make an API call to authenticate
      // For now, we'll simulate a successful sign-in
      console.log('Signing in with:', { email, password })
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo purposes, accept any email/password
      if (email && password) {
        // Redirect to home page after successful sign-in
        window.location.href = '/'
      } else {
        setError('Please enter both email and password')
      }
    } catch (err) {
      setError('Sign in failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCloseModal = () => {
    setShowSubscriptionModal(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-accent-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-neutral-100/30"></div>
      <div className="relative z-10 w-full max-w-md">
        {/* Back to Home */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-secondary-500/25">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Welcome Back</h1>
          <p className="text-neutral-600">Sign in to your My AI Bookkeeper account</p>
        </div>

        {/* Sign In Form */}
        <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200 p-8">
          <form onSubmit={handleSignIn} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-neutral-500" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 bg-neutral-50 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-colors text-neutral-900 placeholder-neutral-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-neutral-500" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-12 py-3 bg-neutral-50 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-colors text-neutral-900 placeholder-neutral-500"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-neutral-500 hover:text-neutral-700" />
                  ) : (
                    <Eye className="h-5 w-5 text-neutral-500 hover:text-neutral-700" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-secondary-500/25 hover:shadow-xl hover:shadow-secondary-500/30 transform hover:scale-105 active:scale-95"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <LogIn className="w-4 h-4" />
                  <span>Sign In</span>
                </div>
              )}
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 pt-6 border-t border-neutral-200">
            <div className="text-center">
              <p className="text-sm text-neutral-600">
                Don't have an account?{' '}
                <button 
                  onClick={() => setShowSubscriptionModal(true)}
                  className="text-secondary-600 hover:text-secondary-700 font-medium transition-colors"
                >
                  Sign up for a subscription
                </button>
              </p>
            </div>
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
    </div>
  )
} 