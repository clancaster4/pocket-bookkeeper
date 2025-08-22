'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Paperclip, X, FileText, Image, File, ChevronDown, Crown, BookOpen, Sparkles, Minimize2, Maximize2, MessageCircle, Calculator, DollarSign, TrendingUp } from 'lucide-react'
import ChatMessage from './ChatMessage'
import FileUpload from './FileUpload'
import SubscriptionModal from './SubscriptionModal'
import { useAppStore } from '@/lib/store'
import { Message, FileAttachment } from '@/types/chat'
import { useUser } from '@clerk/nextjs'

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
  const [resetFileUpload, setResetFileUpload] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const { subscription } = useAppStore()
  const { isSignedIn } = useUser()

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
      // Reset the file upload component
      setResetFileUpload(true)
      setTimeout(() => setResetFileUpload(false), 100)
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
    // Close file upload area after files are added
    setShowFileUpload(false)
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

  // Determine if chat should expand (when not minimized)
  const shouldExpand = !isMinimized

  return (
    <div className={`flex flex-col bg-white shadow-lg border border-neutral-200 transition-all duration-300 ${
      shouldExpand 
        ? 'fixed inset-0 w-full h-full z-50 rounded-none' 
        : 'relative max-w-4xl mx-auto w-full h-[75vh] min-h-[600px] z-20 rounded-lg'
    }`} style={{ pointerEvents: 'auto' }}>
      {/* Minimize/Maximize Button - Always show */}
      <div className="flex justify-between items-center p-2 sm:p-3 border-b border-neutral-200 bg-neutral-50">
        <div className="text-sm sm:text-base font-medium text-neutral-700">
          {isMinimized ? 'Chat' : 'Chat Interface'}
        </div>
        <button
          onClick={handleMinimizeToggle}
          className="p-2 hover:bg-neutral-100 rounded-lg transition-colors touch-manipulation"
          title={isMinimized ? 'Maximize chat' : 'Minimize chat'}
        >
          {isMinimized ? (
            <Maximize2 className="w-5 h-5 sm:w-4 sm:h-4 text-neutral-600" />
          ) : (
            <Minimize2 className="w-5 h-5 sm:w-4 sm:h-4 text-neutral-600" />
          )}
        </button>
      </div>

      {/* Messages Area - Always show when there are messages */}
      {messages.length > 0 && (
        <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-3 sm:space-y-4 min-h-0">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} selectedAIModel={selectedAIModel} />
          ))}
        
        {isLoading && (
          <div className="flex items-start space-x-3 max-w-[85%]">
            {/* AI Avatar */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 flex items-center justify-center shadow-lg">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            
            {/* Typing Indicator */}
            <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-2xl rounded-tl-md px-4 py-3 shadow-sm border border-neutral-200">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-accent-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-accent-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-accent-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <div className="text-xs text-neutral-500 mt-1 animate-pulse">AI is thinking...</div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
    )}

    {/* Welcome Message - Show when there are no messages */}
    {messages.length === 0 && (
      <div className="flex-1 overflow-y-auto p-4 sm:p-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
              Welcome to My AI Bookkeeper!
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 px-2">
              I'm your AI bookkeeping assistant. How can I help you today?
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-xs sm:text-sm font-semibold text-neutral-700 uppercase tracking-wide px-2">Try asking me about:</h3>
            <div className="grid gap-2 sm:gap-3">
              <button
                onClick={() => onSendMessage("How do I categorize my business expenses for tax purposes?")}
                className="text-left p-3 sm:p-4 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors group touch-manipulation"
              >
                <div className="flex items-start space-x-3">
                  <Calculator className="w-5 h-5 text-secondary-600 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-neutral-900">Expense Categorization</p>
                    <p className="text-sm text-neutral-600">How do I categorize my business expenses for tax purposes?</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => onSendMessage("What tax deductions can I claim as a small business owner?")}
                className="text-left p-3 sm:p-4 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors group touch-manipulation"
              >
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-accent-600 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-neutral-900">Tax Deductions</p>
                    <p className="text-sm text-neutral-600">What tax deductions can I claim as a small business owner?</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => onSendMessage("How should I track my business income and expenses?")}
                className="text-left p-3 sm:p-4 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors group touch-manipulation"
              >
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-neutral-600 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-neutral-900">Financial Tracking</p>
                    <p className="text-sm text-neutral-600">How should I track my business income and expenses?</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* File Upload Area */}
    {showFileUpload && (
      <div className="px-3 sm:px-4 pb-3 sm:pb-4">
        <FileUpload 
          onFileUpload={handleFileUpload}
          disabled={isLoading}
          reset={resetFileUpload}
        />
      </div>
    )}

    {/* Attachments Preview */}
    {attachments.length > 0 && (
      <div className="px-3 sm:px-4 pb-3 sm:pb-4">
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

    {/* Input Area - At the bottom */}
    <div className="border-t border-neutral-200 p-3 sm:p-4 bg-neutral-50 relative z-30 mt-auto">
      {/* AI Model Selection - Above Input Box */}
      <div className="mb-2 sm:mb-3">
        <div className="relative">
          <button
            onClick={() => setShowAIDropdown(!showAIDropdown)}
            className="w-full flex items-center justify-between p-2 sm:p-3 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors touch-manipulation"
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

      <div className="flex items-end space-x-2 sm:space-x-3">
        <div className="flex-1">
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about bookkeeping, upload documents for analysis, or share screenshots..."
            className="w-full p-3 sm:p-4 border border-neutral-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent bg-white shadow-sm cursor-text text-base"
            rows={1}
            disabled={isLoading}
            style={{ minHeight: '52px', maxHeight: '120px', pointerEvents: 'auto' }}
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowFileUpload(!showFileUpload)}
            className={`p-3 sm:p-3 rounded-xl transition-colors touch-manipulation ${
              showFileUpload 
                ? 'bg-secondary-100 text-secondary-600' 
                : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
            }`}
            disabled={isLoading}
          >
            <Paperclip className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleSendMessage}
            disabled={isLoading || (!inputMessage.trim() && attachments.length === 0)}
            className="p-3 bg-secondary-500 hover:bg-secondary-600 text-white rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm touch-manipulation"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    {/* Privacy Note */}
    <div className="mt-1 sm:mt-2 text-center px-3">
      <p className="text-xs text-neutral-500">
        Please note: For your privacy and security, conversations are <span className="font-bold text-neutral-600">not</span> saved.
      </p>
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