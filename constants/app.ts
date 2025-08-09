// AI Models
export const AI_MODELS = {
  EVERYDAY: 'everyday',
  ELITE: 'elite',
} as const

export type AIModelType = typeof AI_MODELS[keyof typeof AI_MODELS]

// Subscription Tiers
export const SUBSCRIPTION_TIERS = {
  FREE: 'free',
  BASIC: 'basic',
  ELITE: 'elite',
} as const

export type SubscriptionTier = typeof SUBSCRIPTION_TIERS[keyof typeof SUBSCRIPTION_TIERS]

// Subscription Status
export const SUBSCRIPTION_STATUS = {
  ACTIVE: 'active',
  CANCELED: 'canceled',
  PAST_DUE: 'past_due',
  UNPAID: 'unpaid',
} as const

export type SubscriptionStatus = typeof SUBSCRIPTION_STATUS[keyof typeof SUBSCRIPTION_STATUS]

// Plan IDs
export const PLAN_IDS = {
  BASIC_HELPER: 'basic-helper',
  ELITE_ADVISOR: 'elite-advisor',
} as const

// Plan Names
export const PLAN_NAMES: Record<string, string> = {
  [PLAN_IDS.BASIC_HELPER]: 'Everyday Assistant',
  [PLAN_IDS.ELITE_ADVISOR]: 'Elite Advisor',
}

// Default Values
export const DEFAULTS = {
  AI_MODEL: AI_MODELS.EVERYDAY,
  QUERY_LIMIT_FREE: 10,
  SIDEBAR_COLLAPSED: true,
} as const

// API Endpoints
export const API_ENDPOINTS = {
  CHAT: '/api/chat',
  USER: '/api/user',
  CREATE_CHECKOUT_SESSION: '/api/create-checkout-session',
  WEBHOOK: '/api/webhook',
} as const

// Error Messages
export const ERROR_MESSAGES = {
  RATE_LIMIT: 'You have exceeded your query limit. Please upgrade to continue.',
  SEND_MESSAGE_FAILED: 'Failed to send message. Please try again.',
  CREATE_CONVERSATION_FAILED: 'Failed to create conversation. Please refresh the page and try again.',
  SIGN_IN_REQUIRED: 'Please sign in to use the chat feature.',
} as const