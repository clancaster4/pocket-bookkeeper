export interface User {
  id: string
  email: string
  full_name?: string
  tier: 'free' | 'basic' | 'elite'
  query_count: number
  query_limit: number
  subscription_id?: string
  stripe_customer_id?: string
  created_at: string
  updated_at: string
}

export interface Subscription {
  id: string
  user_id: string
  stripe_subscription_id: string
  stripe_price_id: string
  status: 'active' | 'canceled' | 'past_due' | 'unpaid'
  current_period_start: string
  current_period_end: string
  cancel_at_period_end: boolean
  created_at: string
  updated_at: string
}

export interface ChatMessage {
  id: string
  user_id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
  conversation_id?: string
  model_used?: string // Track which AI model was used
}

export interface UsageStats {
  user_id: string
  month: string // YYYY-MM format
  query_count: number
  tier: 'free' | 'basic' | 'elite'
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  interval: 'month' | 'year'
  features: string[]
  stripe_price_id: string
  popular?: boolean
  model: string // AI model used for this tier
}

export interface UserProfile {
  id: string
  email: string
  full_name?: string
  business_type?: string
  business_size?: 'solo' | 'small' | 'medium' | 'large'
  industry?: string
  created_at: string
  updated_at: string
} 