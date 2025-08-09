'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Sparkles } from 'lucide-react'

interface ChatInputProps {
  onSendMessage: (message: string) => void
  isLoading: boolean
  externalQuery?: string
}

export default function ChatInput({ onSendMessage, isLoading, externalQuery }: ChatInputProps) {
  const [message, setMessage] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Handle external query updates
  useEffect(() => {
    if (externalQuery) {
      setMessage(externalQuery)
      // Focus the textarea when external query is set
      setTimeout(() => {
        textareaRef.current?.focus()
      }, 100)
    }
  }, [externalQuery])

  const handleSubmit = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message)
      setMessage('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`
    }
  }, [message])

  return (
    <div className="space-y-4">
      {/* Quick suggestions */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSendMessage("How do I record a business expense?")}
          disabled={isLoading}
          className="px-4 py-2 bg-white/80 hover:bg-white text-neutral-700 rounded-xl text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg backdrop-blur-sm border border-neutral-200"
        >
          💰 Record Expense
        </button>
        <button
          onClick={() => onSendMessage("What tax deductions can I claim?")}
          disabled={isLoading}
          className="px-4 py-2 bg-white/80 hover:bg-white text-neutral-700 rounded-xl text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg backdrop-blur-sm border border-neutral-200"
        >
          📊 Tax Deductions
        </button>
        <button
          onClick={() => onSendMessage("How do I manage cash flow?")}
          disabled={isLoading}
          className="px-4 py-2 bg-white/80 hover:bg-white text-neutral-700 rounded-xl text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg backdrop-blur-sm border border-neutral-200"
        >
          💸 Cash Flow
        </button>
      </div>

      {/* Input field */}
      <div className="flex items-end space-x-4">
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything about bookkeeping, taxes, or financial management..."
            className="input-field min-h-[56px] max-h-[120px] pr-12"
            rows={1}
            disabled={isLoading}
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Sparkles className="w-5 h-5 text-neutral-400" />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          disabled={!message.trim() || isLoading}
          className="btn-primary flex-shrink-0"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
} 