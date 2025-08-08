export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  attachments?: FileAttachment[]
  modelUsed?: string
}

export interface FileAttachment {
  id: string
  name: string
  type: string
  size: number
  url?: string
  preview?: string
}

export interface Conversation {
  id: string
  title: string
  messages: Message[]
  createdAt: Date
  updatedAt: Date
}

export interface ConversationSummary {
  id: string
  title: string
  messageCount: number
  createdAt: Date
  updatedAt: Date
  preview: string
}

export interface ChatRequest {
  message: string
  history: Message[]
  attachments?: FileAttachment[]
}

export interface ChatResponse {
  response: string
  modelUsed: string
  timestamp: string
  error?: string
} 