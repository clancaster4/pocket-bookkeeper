import { useState, useEffect, useCallback } from 'react'
import { Conversation, ConversationSummary, Message } from '@/types/chat'

const STORAGE_KEY = 'pocket-bookkeeper-conversations'
const MAX_CONVERSATIONS = 50

export function useConversations() {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load conversations from localStorage on mount
  useEffect(() => {
    console.log('useConversations: useEffect triggered')
    
    // Check if we're in the browser environment
    if (typeof window === 'undefined') {
      console.log('useConversations: Not in browser environment, setting isLoaded to true')
      setIsLoaded(true)
      return
    }

    console.log('useConversations: Loading from localStorage...')
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      console.log('useConversations: Stored data:', stored)
      
      if (stored) {
        const parsed = JSON.parse(stored)
        console.log('useConversations: Parsed data:', parsed)
        
        // Ensure parsed is an array
        if (!Array.isArray(parsed)) {
          console.log('useConversations: Parsed data is not an array, using empty array')
          setConversations([])
          setIsLoaded(true)
          return
        }
        
        // Convert date strings back to Date objects
        const conversationsWithDates = parsed.map((conv: any) => ({
          ...conv,
          createdAt: new Date(conv.createdAt),
          updatedAt: new Date(conv.updatedAt),
          messages: conv.messages.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          }))
        }))
        console.log('useConversations: Setting conversations:', conversationsWithDates)
        setConversations(conversationsWithDates)
        
        // Set the most recent conversation as current
        if (conversationsWithDates.length > 0) {
          const mostRecent = conversationsWithDates.reduce((latest: Conversation, current: Conversation) => 
            current.updatedAt > latest.updatedAt ? current : latest
          )
          console.log('useConversations: Setting current conversation:', mostRecent.id)
          setCurrentConversationId(mostRecent.id)
        }
      } else {
        console.log('useConversations: No stored conversations found')
        setConversations([])
      }
    } catch (error) {
      console.error('Error loading conversations from localStorage:', error)
      setConversations([])
    } finally {
      console.log('useConversations: Setting isLoaded to true')
      setIsLoaded(true)
    }
  }, [])

  // Save conversations to localStorage whenever they change
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') return

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations))
    } catch (error) {
      console.error('Error saving conversations to localStorage:', error)
    }
  }, [conversations])

  const createConversation = useCallback((title?: string) => {
    console.log('useConversations: Creating new conversation with title:', title)
    const newConversation: Conversation = {
      id: Date.now().toString(),
      title: title || 'New Conversation',
      messages: [{
        id: '1',
        role: 'assistant',
        content: "👋 Hi! I'm your Pocket Bookkeeper assistant. I'm here to help you with all your bookkeeping and accounting questions!\n\n💡 I can help you with:\n\n• 📝 Recording transactions and expenses\n• 💰 Understanding tax deductions\n• 📊 Managing cash flow\n• 🏢 Setting up basic accounting systems\n• ⚠️ Avoiding common bookkeeping mistakes\n\nWhat would you like to know about today?",
        timestamp: new Date(),
      }],
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    console.log('useConversations: New conversation created:', newConversation)
    setConversations(prev => {
      const updated = [newConversation, ...prev]
      // Keep only the most recent conversations
      const result = updated.slice(0, MAX_CONVERSATIONS)
      console.log('useConversations: Updated conversations list:', result)
      return result
    })
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
    setConversations(prev => prev.filter(conv => conv.id !== conversationId))
    
    // If we're deleting the current conversation, switch to the most recent one
    if (currentConversationId === conversationId) {
      const remaining = conversations.filter(conv => conv.id !== conversationId)
      if (remaining.length > 0) {
        const mostRecent = remaining.reduce((latest, current) => 
          current.updatedAt > latest.updatedAt ? current : latest
        )
        setCurrentConversationId(mostRecent.id)
      } else {
        setCurrentConversationId(null)
      }
    }
  }, [currentConversationId, conversations])

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