'use client'

import { useEffect } from 'react'
import { useAppStore } from '@/lib/store'
import { getClientFingerprint } from '@/lib/client-fingerprint'

export function useUser() {
  const { setUser, setLoading, updateUsage } = useAppStore()

  useEffect(() => {
    const fetchUserData = async () => {
      console.log('useUser: Starting to fetch user data')
      setLoading(true)
      try {
        // Fetch current usage from server
        console.log('useUser: Fetching usage from /api/chat')
        const usageResponse = await fetch('/api/chat', {
          headers: {
            'X-Client-Fingerprint': getClientFingerprint(),
          }
        })
        console.log('useUser: Usage response status:', usageResponse.status)
        
        if (usageResponse.ok) {
          const usageData = await usageResponse.json()
          console.log('useUser: Usage data received:', usageData)
          updateUsage(usageData.usage.count, usageData.usage.limit)
        } else {
          console.error('useUser: Usage response not ok:', usageResponse.status)
        }
        
        // In a real app, you would also fetch user data from your auth system
        // For now, we'll just set loading to false
        console.log('useUser: Setting loading to false')
        setLoading(false)
      } catch (error) {
        console.error('useUser: Error fetching user data:', error)
        console.log('useUser: Setting loading to false after error')
        setLoading(false)
      }
    }

    fetchUserData()
  }, [setUser, setLoading, updateUsage])

  return useAppStore()
} 