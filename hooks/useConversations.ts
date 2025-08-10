import { useState, useEffect, useCallback } from 'react'
import { Conversation, ConversationSummary, Message } from '@/types/chat'

export function useConversations() {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Set loaded to true immediately since we're not loading from storage
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const createConversation = useCallback((title?: string) => {
    console.log('useConversations: Creating new ephemeral conversation')
    const newConversation: Conversation = {
      id: Date.now().toString(),
      title: title || 'Chat Session',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    console.log('useConversations: New ephemeral conversation created:', newConversation)
    // Replace any existing conversation with the new one (only keep one active session)
    setConversations([newConversation])
    setCurrentConversationId(newConversation.id)
    console.log('useConversations: Set current conversation ID to:', newConversation.id)
    return newConversation.id
  }, [])

  const updateConversation = useCallback((conversationId: string, updates: Partial<Conversation>) => {
    setConversations(prev => prev.map(conv => 
      conv.id === conversationId 
        ? { ...conv, ...updates, updatedAt: new Date() }
        : conv
    ))
  }, [])

  const addMessageToConversation = useCallback((conversationId: string, message: Message) => {
    setConversations(prev => prev.map(conv => {
      if (conv.id === conversationId) {
        const updatedMessages = [...conv.messages, message]
        // Generate title from first user message if it's still the default
        let title = conv.title
        if (conv.title === 'New Conversation' && message.role === 'user') {
          title = message.content.slice(0, 50) + (message.content.length > 50 ? '...' : '')
        }
        return {
          ...conv,
          messages: updatedMessages,
          title,
          updatedAt: new Date()
        }
      }
      return conv
    }))
  }, [])

  const deleteConversation = useCallback((conversationId: string) => {
    // Clear the current conversation and create a new empty one
    setConversations([])
    setCurrentConversationId(null)
    // Automatically create a new conversation
    createConversation()
  }, [createConversation])

  const getCurrentConversation = useCallback(() => {
    return conversations.find(conv => conv.id === currentConversationId) || null
  }, [conversations, currentConversationId])

  const getConversationSummaries = useCallback((): ConversationSummary[] => {
    return conversations.map(conv => ({
      id: conv.id,
      title: conv.title,
      messageCount: conv.messages.length,
      createdAt: conv.createdAt,
      updatedAt: conv.updatedAt,
      preview: conv.messages.length > 1 
        ? conv.messages[1]?.content.slice(0, 100) + (conv.messages[1]?.content.length > 100 ? '...' : '')
        : 'No messages yet'
    }))
  }, [conversations])

  return {
    conversations,
    currentConversationId,
    currentConversation: getCurrentConversation(),
    conversationSummaries: getConversationSummaries(),
    isLoaded,
    createConversation,
    updateConversation,
    addMessageToConversation,
    deleteConversation,
    setCurrentConversationId,
  }
} 