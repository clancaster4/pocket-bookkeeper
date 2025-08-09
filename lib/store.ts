import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { User, PricingPlan } from '@/types/database'
import { SubscriptionTier, SubscriptionStatus, DEFAULTS } from '@/constants/app'

interface UsageState {
  queryCount: number
  queryLimit: number
  remainingQueries: number
}

interface SubscriptionState {
  tier: SubscriptionTier
  status: SubscriptionStatus | null
}

interface AppState {
  // State
  user: User | null
  isLoading: boolean
  usage: UsageState
  subscription: SubscriptionState
  
  // Actions
  actions: {
    setUser: (user: User | null) => void
    setLoading: (loading: boolean) => void
    updateUsage: (queryCount: number, queryLimit: number) => void
    updateSubscription: (tier: SubscriptionTier, status: string | null) => void
    incrementQueryCount: () => void
    reset: () => void
  }
}

const initialState = {
  user: null,
  isLoading: false,
  usage: {
    queryCount: 0,
    queryLimit: DEFAULTS.QUERY_LIMIT_FREE,
    remainingQueries: DEFAULTS.QUERY_LIMIT_FREE,
  },
  subscription: {
    tier: 'free' as SubscriptionTier,
    status: null,
  },
}

export const useAppStore = create<AppState>()(
  devtools(
    (set, get) => ({
      ...initialState,
      actions: {
        setUser: (user) => set({ user }, false, 'setUser'),
        
        setLoading: (isLoading) => set({ isLoading }, false, 'setLoading'),
        
        updateUsage: (queryCount, queryLimit) => set({
          usage: {
            queryCount,
            queryLimit,
            remainingQueries: Math.max(0, queryLimit - queryCount),
          }
        }, false, 'updateUsage'),
        
        updateSubscription: (tier, status) => set({
          subscription: {
            tier,
            status: status as SubscriptionStatus | null,
          }
        }, false, 'updateSubscription'),
        
        incrementQueryCount: () => {
          const { usage } = get()
          const newQueryCount = usage.queryCount + 1
          set({
            usage: {
              ...usage,
              queryCount: newQueryCount,
              remainingQueries: Math.max(0, usage.queryLimit - newQueryCount),
            }
          }, false, 'incrementQueryCount')
        },
        
        reset: () => set(initialState, false, 'reset'),
      }
    }),
    {
      name: 'app-store',
    }
  )
)

// Selectors for easier access
export const useUser = () => useAppStore((state) => state.user)
export const useIsLoading = () => useAppStore((state) => state.isLoading)
export const useUsage = () => useAppStore((state) => state.usage)
export const useSubscription = () => useAppStore((state) => state.subscription)
export const useAppActions = () => useAppStore((state) => state.actions) 