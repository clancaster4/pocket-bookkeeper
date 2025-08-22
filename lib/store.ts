import { create } from 'zustand'
import { User, PricingPlan } from '@/types/database'

interface AppState {
  user: User | null
  isLoading: boolean
  usage: {
    queryCount: number
    queryLimit: number
    remainingQueries: number
  }
  subscription: {
    tier: 'free' | 'basic' | 'elite'
    status: 'active' | 'canceled' | 'past_due' | 'unpaid' | null
  }
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  updateUsage: (queryCount: number, queryLimit: number) => void
  updateSubscription: (tier: 'free' | 'basic' | 'elite', status: string | null) => void
  incrementQueryCount: () => void
}

export const useAppStore = create<AppState>((set, get) => ({
  user: null,
  isLoading: false,
  usage: {
    queryCount: 0,
    queryLimit: 5,
    remainingQueries: 5,
  },
  subscription: {
    tier: 'free',
    status: null,
  },
  setUser: (user) => set({ user }),
  setLoading: (isLoading) => set({ isLoading }),
  updateUsage: (queryCount, queryLimit) => {
    console.log('Store updateUsage called with:', { queryCount, queryLimit })
    const newUsage = {
      queryCount,
      queryLimit,
      remainingQueries: Math.max(0, queryLimit - queryCount),
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