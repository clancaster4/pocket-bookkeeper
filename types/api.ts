import { FileAttachment } from './chat'

// Base API Response
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  details?: Record<string, any>
}

// Chat API
export interface ChatRequest {
  message: string
  history: Array<{ role: string; content: string }>
  attachments?: FileAttachment[]
  aiModel: string
}

export interface ChatResponse {
  response: string
  modelUsed: string
}

// User API
export interface UserUsageResponse {
  usage: {
    count: number
    limit: number
  }
}

// Subscription API
export interface CreateCheckoutSessionRequest {
  planId: string
}

export interface CreateCheckoutSessionResponse {
  sessionId: string
  url: string
}

// Webhook API
export interface StripeWebhookEvent {
  type: string
  data: {
    object: any
  }
}