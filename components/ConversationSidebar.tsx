'use client'

import { useState, useEffect } from 'react'
import { ConversationSummary } from '@/types/chat'
import { ChevronRight, MessageSquare, Plus, X } from 'lucide-react'

interface ConversationSidebarProps {
  conversations: ConversationSummary[]
  currentConversationId: string | null
  onConversationSelect: (conversationId: string) => void
  onNewConversation: () => void
  onDeleteConversation: (conversationId: string) => void
  isOpen: boolean
  onToggle: () => void
}

export default function ConversationSidebar({
  conversations,
  currentConversationId,
  onConversationSelect,
  onNewConversation,
  onDeleteConversation,
  isOpen,
  onToggle
}: ConversationSidebarProps) {
  const [isDeleting, setIsDeleting] = useState<string | null>(null)

  const formatDate = (date: Date) => {
    const now = new Date()
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    } else if (diffInHours < 168) { // 7 days
      return date.toLocaleDateString([], { weekday: 'short' })
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' })
    }
  }

  const handleDelete = async (conversationId: string) => {
    setIsDeleting(conversationId)
    try {
      onDeleteConversation(conversationId)
    } finally {
      setIsDeleting(null)
    }
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Collapsed State (Default) */}
      {!isOpen && (
        <div className="fixed lg:static inset-y-0 left-0 z-50 w-16 bg-white border-r border-neutral-200 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-center p-4 border-b border-neutral-200">
            <button
              onClick={onToggle}
              className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
              title="Expand conversations"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex-1 flex flex-col items-center space-y-4 pt-4">
            <button
              onClick={onNewConversation}
              className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
              title="New conversation"
            >
              <Plus className="w-5 h-5" />
            </button>
            
            {conversations.length > 0 && (
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-neutral-600" />
                </div>
                <span className="text-xs text-neutral-500 font-medium">
                  {conversations.length}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Expanded Sidebar */}
      {isOpen && (
        <div className="fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white border-r border-neutral-200 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-200">
            <h2 className="text-lg font-semibold text-neutral-900">Conversations</h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={onNewConversation}
                className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
                title="New conversation"
              >
                <Plus className="w-5 h-5" />
              </button>
              <button
                onClick={onToggle}
                className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
                title="Collapse sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {conversations.length === 0 ? (
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-neutral-400" />
                </div>
                <p className="text-neutral-500 text-sm">No conversations yet</p>
                <p className="text-neutral-400 text-xs mt-1">Start a new conversation to get help</p>
              </div>
            ) : (
              <div className="p-2">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`
                      group relative p-3 rounded-lg cursor-pointer transition-colors
                      ${currentConversationId === conversation.id 
                        ? 'bg-secondary-50 border border-secondary-200' 
                        : 'hover:bg-neutral-50'
                      }
                    `}
                    onClick={() => onConversationSelect(conversation.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-neutral-900 truncate">
                          {conversation.title}
                        </h3>
                        <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                          {conversation.preview}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-xs text-neutral-400">
                            {conversation.messageCount} messages
                          </span>
                          <span className="text-xs text-neutral-400">
                            {formatDate(conversation.updatedAt)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDelete(conversation.id)
                        }}
                        className={`
                          p-1 text-neutral-400 hover:text-red-500 rounded transition-colors
                          ${isDeleting === conversation.id ? 'opacity-50' : 'opacity-0 group-hover:opacity-100'}
                        `}
                        disabled={isDeleting === conversation.id}
                        title="Delete conversation"
                      >
                        {isDeleting === conversation.id ? (
                          <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
} 