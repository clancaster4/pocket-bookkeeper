import { create } from 'zustand'
import { User, PricingPlan } from '@/types/database'

interface AppState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  usage: {
    queryCount: number
    queryLimit: number
    remainingQueries: number
    requiresAuth: boolean
  }
  subscription: {
    tier: 'free' | 'basic' | 'elite'
    status: 'active' | 'canceled' | 'past_due' | 'unpaid' | null
  }
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  setAuthenticated: (authenticated: boolean) => void
  updateUsage: (queryCount: number, queryLimit: number, requiresAuth?: boolean) => void
  updateSubscription: (tier: 'free' | 'basic' | 'elite', status: string | null) => void
  incrementQueryCount: () => void
}

export const useAppStore = create<AppState>((set, get) => ({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  usage: {
    queryCount: 0,
    queryLimit: 5,
    remainingQueries: 5,
    requiresAuth: false,
  },
  subscription: {
    tier: 'free',
    status: null,
  },
  setUser: (user) => set({ user }),
  setLoading: (isLoading) => set({ isLoading }),
  setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  updateUsage: (queryCount, queryLimit, requiresAuth = false) => {
    console.log('Store updateUsage called with:', { queryCount, queryLimit, requiresAuth })
    const newUsage = {
      queryCount,
      queryLimit,
      remainingQueries: Math.max(0, queryLimit - queryCount),
      requiresAuth,
    }
    console.log('Setting new usage state:', newUsage)
    set({
      usage: newUsage
    })
  },
  updateSubscription: (tier, status) => set({
    subscription: {
      tier,
      status: status as any,
    }
  }),
  incrementQueryCount: () => {
    const { usage } = get()
    const newQueryCount = usage.queryCount + 1
    set({
      usage: {
        ...usage,
        queryCount: newQueryCount,
        remainingQueries: Math.max(0, usage.queryLimit - newQueryCount),
      }
    })
  },
})) 