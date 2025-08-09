import { useState, useCallback } from 'react'
import { Message, FileAttachment } from '@/types/chat'
import { chatService } from '@/services/chatService'
import { useConversations } from './useConversations'
import { useAppStore } from '@/lib/store'
import { useError } from './useError'
import { DEFAULTS, ERROR_MESSAGES } from '@/constants/app'

export function useChat() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedAIModel, setSelectedAIModel] = useState(DEFAULTS.AI_MODEL)
  const { error, handleError, clearError } = useError()
  
  const {
    currentConversation,
    currentConversationId,
    createConversation,
    addMessageToConversation,
  } = useConversations()

  const { incrementQueryCount } = useAppStore((state) => state.actions)

  const handleSendMessage = useCallback(async (
    message: string, 
    attachments?: FileAttachment[]
  ) => {
    // Ensure we have a conversation
    let conversationId = currentConversationId
    if (!conversationId || !currentConversation) {
      console.log('No current conversation, creating one...')
      try {
        conversationId = createConversation()
        console.log('Created new conversation with ID:', conversationId)
      } catch (error) {
        console.error('Error creating conversation:', error)
        throw new Error(ERROR_MESSAGES.CREATE_CONVERSATION_FAILED)
      }
    }

    console.log('Sending message:', message)
    console.log('Current conversation ID:', conversationId)

    setIsLoading(true)
    clearError()
    
    try {
      // Prepare chat history
      const history = currentConversation?.messages.map(msg => ({
        role: msg.role,
        content: msg.content,
      })) || []

      // Send message to API
      const response = await chatService.sendMessage({
        message,
        history,
        attachments,
        aiModel: selectedAIModel,
      })

      // Create message objects
      const userMessage = chatService.createUserMessage(message, attachments)
      const aiMessage = chatService.createAssistantMessage(response.response, response.modelUsed)

      console.log('Adding user message:', userMessage)
      console.log('Adding AI message:', aiMessage)

      // Add messages to conversation
      await addMessageToConversation(conversationId, userMessage)
      await addMessageToConversation(conversationId, aiMessage)

      // Increment query count
      incrementQueryCount()

      console.log('Messages added successfully')
      
      return { userMessage, aiMessage }
    } catch (error) {
      handleError(error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [
    currentConversation,
    currentConversationId,
    createConversation,
    addMessageToConversation,
    selectedAIModel,
    incrementQueryCount
  ])

  const handleAIModelChange = useCallback((modelId: string) => {
    setSelectedAIModel(modelId)
  }, [])

  return {
    isLoading,
    selectedAIModel,
    error,
    handleSendMessage,
    handleAIModelChange,
  }
}