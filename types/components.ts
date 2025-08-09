import { ReactNode } from 'react'
import { Message, FileAttachment } from './chat'
import { ConversationSummary } from './database'

// Layout Components
export interface HeaderProps {
  sidebarOpen: boolean
  onToggleSidebar: () => void
  onNewConversation: () => void
}

// Chat Components
export interface ChatInterfaceProps {
  messages: Message[]
  onSendMessage: (message: string, attachments?: FileAttachment[]) => void
  isLoading?: boolean
  selectedAIModel?: string
  onAIModelChange?: (modelId: string) => void
  onSubscriptionModalChange?: (isOpen: boolean) => void
}

export interface ChatMessageProps {
  message: Message
  isLastMessage?: boolean
}

export interface ChatInputProps {
  onSendMessage: (message: string, attachments?: FileAttachment[]) => void
  isLoading?: boolean
  disabled?: boolean
}

// Conversation Components
export interface ConversationSidebarProps {
  conversations: ConversationSummary[]
  currentConversationId: string | null
  onSelectConversation: (id: string) => void
  onDeleteConversation: (id: string) => void
  onNewConversation: () => void
  isOpen: boolean
  onClose: () => void
}

// File Upload Components
export interface FileUploadProps {
  onFilesSelected: (files: FileAttachment[]) => void
  onClose: () => void
  maxFiles?: number
  maxFileSize?: number
  acceptedFileTypes?: string[]
}

// Subscription Components
export interface SubscriptionModalProps {
  isOpen: boolean
  onClose: () => void
  currentPlan?: string
}

// User Components
export interface UserProfileProps {
  user?: {
    email?: string
    name?: string
    imageUrl?: string
  }
  usage?: {
    queryCount: number
    queryLimit: number
    remainingQueries: number
  }
  subscription?: {
    tier: string
    status: string | null
  }
}

// Common Props
export interface WithChildren {
  children: ReactNode
}

export interface WithClassName {
  className?: string
}

export type ComponentProps<T = {}> = T & WithClassName