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
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-black/50 border border-gray-700">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to your Pocket Bookkeeper account</p>
        </div>

        {/* Sign In Form */}
        <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 p-8">
          <form onSubmit={handleSignIn} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 bg-black border border-gray-700 rounded-xl focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-colors text-white placeholder-gray-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-12 py-3 bg-black border border-gray-700 rounded-xl focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-colors text-white placeholder-gray-500"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-300" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500 hover:text-gray-300" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-900/20 border border-red-800 rounded-xl p-3">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white hover:bg-gray-100 text-black font-medium py-3 px-4 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
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
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="text-center">
              <p className="text-sm text-gray-400">
                Don't have an account?{' '}
                <button 
                  onClick={() => setShowSubscriptionModal(true)}
                  className="text-white hover:text-gray-300 font-medium transition-colors"
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