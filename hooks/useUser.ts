'use client'

import { useEffect } from 'react'
import { useAppStore, useAppActions } from '@/lib/store'
import { userService } from '@/services/userService'

export function useUser() {
  const { setUser, setLoading, updateUsage } = useAppActions()

  useEffect(() => {
    const fetchUserData = async () => {
      console.log('useUser: Starting to fetch user data')
      setLoading(true)
      try {
        // Fetch current usage from server
        console.log('useUser: Fetching usage data')
        const usageData = await userService.fetchUsage()
        console.log('useUser: Usage data received:', usageData)
        updateUsage(usageData.usage.count, usageData.usage.limit)
        
        // In a real app, you would also fetch user data from your auth system
        // For now, we'll just set loading to false
        console.log('useUser: Setting loading to false')
      } catch (error) {
        console.error('useUser: Error fetching user data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [setUser, setLoading, updateUsage])

  return useAppStore()
} 