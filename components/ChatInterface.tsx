'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Paperclip, X, FileText, Image, File, ChevronDown, Crown, BookOpen, Sparkles, Minimize2, Maximize2 } from 'lucide-react'
import ChatMessage from './ChatMessage'
import FileUpload from './FileUpload'
import SubscriptionModal from './SubscriptionModal'
import { useAppStore } from '@/lib/store'
import { Message, FileAttachment } from '@/types/chat'

interface AIModel {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  available: boolean
}

interface ChatInterfaceProps {
  messages: Message[]
  onSendMessage: (message: string, attachments?: FileAttachment[]) => void
  isLoading?: boolean
  selectedAIModel?: string
  onAIModelChange?: (modelId: string) => void
  onSubscriptionModalChange?: (isOpen: boolean) => void
}

export default function ChatInterface({ 
  messages, 
  onSendMessage, 
  isLoading = false, 
  selectedAIModel: propSelectedAIModel = 'everyday',
  onAIModelChange,
  onSubscriptionModalChange
}: ChatInterfaceProps) {
  const [inputMessage, setInputMessage] = useState('')
  const [attachments, setAttachments] = useState<FileAttachment[]>([])
  const [showFileUpload, setShowFileUpload] = useState(false)
  const [showAIDropdown, setShowAIDropdown] = useState(false)
  const [selectedAIModel, setSelectedAIModel] = useState(propSelectedAIModel)
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false)
  const [isMinimized, setIsMinimized] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const { subscription } = useAppStore()

  // Update local state when prop changes
  useEffect(() => {
    setSelectedAIModel(propSelectedAIModel)
  }, [propSelectedAIModel])

  const scrollToBottom = () => {
    setTimeout(() => {
      if (isMinimized) {
        // When minimized, only scroll the container to avoid page scroll
        if (messagesContainerRef.current) {
          messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
        }
      } else {
        // When maximized, use scrollIntoView for smooth page scroll
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
        
        // Also scroll the container as backup
        if (messagesContainerRef.current) {
          messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
        }
      }
    }, 100) // Small delay to ensure DOM is updated
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isMinimized, isLoading])

  const handleSendMessage = () => {
    if (inputMessage.trim() || attachments.length > 0) {
      onSendMessage(inputMessage.trim(), attachments.length > 0 ? attachments : undefined)
      setInputMessage('')
      setAttachments([])
      setShowFileUpload(false)
      // Don't auto-expand when minimized - let user choose when to maximize
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleFileUpload = (files: File[]) => {
    const newAttachments: FileAttachment[] = files.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      type: file.type,
      size: file.size,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined
    }))
    
    setAttachments(prev => [...prev, ...newAttachments])
  }

  const removeAttachment = (id: string) => {
    setAttachments(prev => {
      const attachment = prev.find(a => a.id === id)
      if (attachment?.preview) {
        URL.revokeObjectURL(attachment.preview)
      }
      return prev.filter(a => a.id !== id)
    })
  }

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) {
      return <Image className="w-4 h-4" />
    } else if (type === 'application/pdf') {
      return <FileText className="w-4 h-4" />
    } else {
      return <File className="w-4 h-4" />
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // Get available AI models based on subscription
  const getAvailableModels = (): AIModel[] => {
    if (subscription.tier === 'free') {
      return [
        { id: 'everyday', name: 'Everyday Assistant', icon: BookOpen, available: true },
        { id: 'elite', name: 'Elite Advisor', icon: Sparkles, available: false } // Show but not available for free users
      ]
    } else {
      return [
        { id: 'everyday', name: 'Everyday Assistant', icon: BookOpen, available: true },
        { id: 'elite', name: 'Elite Advisor', icon: Sparkles, available: true }
      ]
    }
  }

  const availableModels = getAvailableModels()
  const currentModel = availableModels.find(model => model.id === selectedAIModel) || availableModels[0]

  const handleAIModelChange = (modelId: string) => {
    setSelectedAIModel(modelId)
    setShowAIDropdown(false)
    onAIModelChange?.(modelId)
  }

  const handleUpgradeClick = () => {
    console.log('Upgrade clicked! Opening subscription modal...')
    setShowAIDropdown(false)
    setShowSubscriptionModal(true)
    onSubscriptionModalChange?.(true)
  }

  const handleCloseSubscriptionModal = () => {
    setShowSubscriptionModal(false)
    onSubscriptionModalChange?.(false)
  }

  const handleMinimizeToggle = () => {
    setIsMinimized(!isMinimized)
  }

  // Determine if chat should be full height (when messages exist and not minimized)
  const shouldBeFullHeight = messages.length > 0 && !isMinimized

  return (
    <div className={`flex flex-col bg-white rounded-lg shadow-lg border border-neutral-200 transition-all duration-300 relative ${
      shouldBeFullHeight 
        ? 'h-screen fixed inset-0 z-50' 
        : 'max-w-5xl mx-auto w-full h-auto min-h-[300px] sm:min-h-[400px] max-h-[50vh] sm:max-h-[60vh] z-20'
    }`} style={{ pointerEvents: 'auto' }}>
      {/* Minimize/Maximize Button - Only show when chat is active */}
      {messages.length > 0 && (
        <div className="flex justify-between items-center p-2 border-b border-neutral-200">
          <div className="text-sm font-medium text-neutral-700">
            {isMinimized ? 'Chat' : 'Chat Interface'}
          </div>
          <button
            onClick={handleMinimizeToggle}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            title={isMinimized ? 'Maximize chat' : 'Minimize chat'}
          >
            {isMinimized ? (
              <Maximize2 className="w-4 h-4 text-neutral-600" />
            ) : (
              <Minimize2 className="w-4 h-4 text-neutral-600" />
            )}
          </button>
        </div>
      )}

      {/* Messages Area - Show when there are messages */}
      {messages.length > 0 && (
        <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-6 space-y-4 min-h-0">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} selectedAIModel={selectedAIModel} />
          ))}
        
        {isLoading && (
          <div className="flex items-center space-x-2 text-neutral-500 p-4">
            <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <span className="text-sm">AI is analyzing your message...</span>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
    )}

    {/* File Upload Area */}
    {showFileUpload && !isMinimized && (
      <div className="px-4 pb-4">
        <FileUpload 
          onFileUpload={handleFileUpload}
          disabled={isLoading}
        />
      </div>
    )}

    {/* Attachments Preview */}
    {attachments.length > 0 && !isMinimized && (
      <div className="px-4 pb-4">
        <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-200">
          <h4 className="text-sm font-medium text-neutral-700 mb-2">Attachments:</h4>
          <div className="space-y-2">
            {attachments.map((attachment) => (
              <div
                key={attachment.id}
                className="flex items-center justify-between p-2 bg-white rounded border border-neutral-200"
              >
                <div className="flex items-center space-x-2">
                  {attachment.preview ? (
                    <img
                      src={attachment.preview}
                      alt={attachment.name}
                      className="w-8 h-8 object-cover rounded"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-neutral-200 rounded flex items-center justify-center">
                      {getFileIcon(attachment.type)}
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-neutral-700 truncate">
                      {attachment.name}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {formatFileSize(attachment.size)}
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => removeAttachment(attachment.id)}
                  className="p-1 hover:bg-neutral-200 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-neutral-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}

    {/* Input Area - Always visible */}
    <div className="border-t border-neutral-200 p-3 sm:p-6 bg-neutral-50 relative z-30">
      <div className="flex items-end space-x-2 sm:space-x-3">
        <div className="flex-1">
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about bookkeeping, upload documents for analysis, or share screenshots..."
            className="w-full p-3 sm:p-4 border border-neutral-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent bg-white shadow-sm cursor-text"
            rows={1}
            disabled={isLoading}
            style={{ minHeight: '48px', maxHeight: '120px', pointerEvents: 'auto' }}
          />
        </div>
        
        <div className="flex items-center space-x-1 sm:space-x-2">
          <button
            onClick={() => setShowFileUpload(!showFileUpload)}
            className={`p-2 sm:p-3 rounded-xl transition-colors ${
              showFileUpload 
                ? 'bg-secondary-100 text-secondary-600' 
                : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
            }`}
            disabled={isLoading}
          >
            <Paperclip className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <button
            onClick={handleSendMessage}
            disabled={isLoading || (!inputMessage.trim() && attachments.length === 0)}
            className="p-2 sm:p-3 bg-secondary-500 hover:bg-secondary-600 text-white rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* AI Model Selection - Below Input Box */}
      <div className="mt-4">
        <div className="relative">
          <button
            onClick={() => setShowAIDropdown(!showAIDropdown)}
            className="w-full flex items-center justify-between p-3 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
            disabled={isLoading}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                currentModel.id === 'everyday' 
                  ? 'bg-secondary-100 text-secondary-600' 
                  : 'bg-accent-100 text-accent-600'
              }`}>
                <currentModel.icon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-neutral-900">{currentModel.name}</div>
                <div className="text-xs text-neutral-500">
                  {currentModel.id === 'everyday' ? 'Advanced AI model' : 'Premium AI model'}
                </div>
              </div>
            </div>
            <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${showAIDropdown ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {showAIDropdown && (
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-lg shadow-lg border border-neutral-200 overflow-hidden z-[9999]" style={{ pointerEvents: 'auto' }}>
              <div className="p-2">
                {availableModels.map((model) => (
                  <button
                    key={model.id}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log('Model clicked:', model.id, 'Available:', model.available)
                      
                      // Always allow clicking on Elite Advisor to upgrade
                      if (model.id === 'elite' && !model.available) {
                        handleUpgradeClick()
                        return
                      }
                      
                      // For available models, change the selection
                      if (model.available) {
                        handleAIModelChange(model.id)
                      }
                    }}
                    className={`w-full p-3 text-left rounded-lg transition-colors group ${
                      selectedAIModel === model.id ? 'bg-secondary-50 border border-secondary-200' : 
                      !model.available ? 'bg-neutral-50 hover:bg-neutral-100 cursor-pointer hover:shadow-sm hover:border-accent-300' :
                      'hover:bg-neutral-50'
                    }`}
                    style={{ pointerEvents: 'auto' }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          model.id === 'everyday' 
                            ? 'bg-secondary-100 text-secondary-600' 
                            : 'bg-accent-100 text-accent-600'
                        }`}>
                          <model.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-medium text-neutral-900">{model.name}</div>
                          <div className="text-xs text-neutral-600">
                            {model.id === 'everyday' ? 'Advanced AI model' : 
                             !model.available ? 'Click to upgrade' : 'Premium AI model'}
                          </div>
                          {model.id === 'elite' && !model.available && (
                            <div className="text-xs text-accent-600 font-medium mt-1">
                              Click here to upgrade!
                            </div>
                          )}
                        </div>
                      </div>
                      {model.id === 'elite' && (
                        <div className="flex items-center space-x-1">
                          <Crown className="w-3 h-3 text-accent-500" />
                          <span className={`text-xs font-medium ${
                            !model.available ? 'text-accent-600 bg-accent-50 px-2 py-1 rounded-full' : 'text-accent-600'
                          }`}>
                            {!model.available ? 'Upgrade Now' : 'Premium'}
                          </span>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
                

              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Click outside to close dropdown - temporarily disabled for debugging */}
    {/* {showAIDropdown && (
      <div 
        className="fixed inset-0 z-40" 
        onClick={() => setShowAIDropdown(false)}
      />
    )} */}

    {/* Subscription Modal */}
    {showSubscriptionModal && (
      <SubscriptionModal
        isOpen={showSubscriptionModal}
        onClose={handleCloseSubscriptionModal}
      />
    )}
  </div>
)
} 