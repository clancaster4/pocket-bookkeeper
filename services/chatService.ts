import { Message, FileAttachment } from '@/types/chat'
import { ChatRequest, ChatResponse } from '@/types/api'
import { API_ENDPOINTS, ERROR_MESSAGES } from '@/constants/app'

export class ChatService {
  private static instance: ChatService
  private baseUrl = API_ENDPOINTS.CHAT

  private constructor() {}

  static getInstance(): ChatService {
    if (!ChatService.instance) {
      ChatService.instance = new ChatService()
    }
    return ChatService.instance
  }

  async sendMessage(request: ChatRequest): Promise<ChatResponse> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })

    const data = await response.json()

    if (!response.ok) {
      if (response.status === 429) {
        throw new Error(data.details?.message || ERROR_MESSAGES.RATE_LIMIT)
      }
      throw new Error(data.error || ERROR_MESSAGES.SEND_MESSAGE_FAILED)
    }

    return data
  }

  createUserMessage(content: string, attachments?: FileAttachment[]): Message {
    return {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
      attachments,
    }
  }

  createAssistantMessage(content: string, modelUsed?: string): Message {
    return {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content,
      timestamp: new Date(),
      modelUsed,
    }
  }
}

export const chatService = ChatService.getInstance()