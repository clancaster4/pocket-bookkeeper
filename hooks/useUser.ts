'use client'

import { useEffect } from 'react'
import { useUser as useClerkUser } from '@clerk/nextjs'
import { useAppStore } from '@/lib/store'

export function useUser() {
  const { user: clerkUser, isLoaded: clerkLoaded, isSignedIn } = useClerkUser()
  const { setUser, setLoading, setAuthenticated, updateUsage, updateSubscription } = useAppStore()

  useEffect(() => {
    const fetchUserData = async () => {
      console.log('useUser: Starting to fetch user data')
      setLoading(true)
      
      try {
        // Set authentication status
        setAuthenticated(!!isSignedIn)
        
        // Fetch current usage from server
        console.log('useUser: Fetching usage from /api/chat')
        const usageResponse = await fetch('/api/chat')
        console.log('useUser: Usage response status:', usageResponse.status)
        
        if (usageResponse.ok) {
          const usageData = await usageResponse.json()
          console.log('useUser: Usage data received:', usageData)
          updateUsage(
            usageData.usage.count, 
            usageData.usage.limit,
            usageData.usage.requiresAuth || false
          )
          
          // Update subscription info if available
          if (usageData.subscription) {
            updateSubscription(usageData.subscription.tier, usageData.subscription.status)
          }
        } else if (usageResponse.status === 401) {
          // Not authenticated - set requiresAuth to true
          console.log('useUser: User not authenticated')
          updateUsage(0, 5, true)
        } else {
          console.error('useUser: Usage response not ok:', usageResponse.status)
          updateUsage(0, 5, !isSignedIn)
        }
        
        console.log('useUser: Setting loading to false')
        setLoading(false)
      } catch (error) {
        console.error('useUser: Error fetching user data:', error)
        console.log('useUser: Setting loading to false after error')
        setLoading(false)
        updateUsage(0, 5, !isSignedIn)
      }
    }

    // Only fetch data when Clerk has loaded
    if (clerkLoaded) {
      fetchUserData()
    }
  }, [clerkLoaded, isSignedIn, clerkUser, setUser, setLoading, setAuthenticated, updateUsage])

  return useAppStore()
} 