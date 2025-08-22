'use client'

import { useState } from 'react'
import { User, FileText, Image, File, Download, ExternalLink, Calculator } from 'lucide-react'
import { Message } from '@/types/chat'

interface ChatMessageProps {
  message: Message
  selectedAIModel?: string
}

export default function ChatMessage({ message, selectedAIModel = 'everyday' }: ChatMessageProps) {
  const [isImageExpanded, setIsImageExpanded] = useState(false)



  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) {
      return <Image className="w-3 h-3" />
    } else if (type === 'application/pdf') {
      return <FileText className="w-3 h-3" />
    } else {
      return <File className="w-3 h-3" />
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const handleFileClick = (attachment: any) => {
    if (attachment.url) {
      window.open(attachment.url, '_blank')
    } else if (attachment.preview && attachment.type.startsWith('image/')) {
      setIsImageExpanded(!isImageExpanded)
    }
  }

  return (
    <div className={`flex items-start space-x-3 ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
      {/* Avatar */}
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        message.role === 'user' 
          ? 'bg-gradient-to-r from-slate-400 to-slate-500' 
          : selectedAIModel === 'elite'
            ? 'bg-gradient-to-r from-yellow-400 to-yellow-500'
            : 'bg-gradient-to-r from-green-600 to-green-700'
      }`}>
        {message.role === 'user' ? (
          <User className="w-4 h-4 text-white" />
        ) : selectedAIModel === 'elite' ? (
          <span className="text-lg">👑</span>
        ) : (
          <Calculator className="w-4 h-4 text-white" />
        )}
      </div>

      {/* Message Content */}
      <div className={`flex-1 max-w-3xl ${message.role === 'user' ? 'text-right' : ''}`}>
        {/* Message Text */}
        {message.content && (
          <div className={`chat-bubble ${message.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}`}>
            <div className="prose prose-xs max-w-none">
              {message.content.split('\n').map((line, index) => (
                <p key={index} className={line.trim() === '' ? 'mb-1' : 'mb-0.5 last:mb-0'}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* File Attachments */}
        {message.attachments && message.attachments.length > 0 && (
          <div className={`mt-3 space-y-2 ${message.role === 'user' ? 'text-right' : ''}`}>
            {message.attachments.map((attachment) => (
              <div
                key={attachment.id}
                className={`inline-block max-w-xs ${message.role === 'user' ? 'ml-auto' : 'mr-auto'}`}
              >
                <div
                  className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                    message.role === 'user'
                      ? 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                      : 'bg-neutral-50 border-neutral-200 hover:bg-neutral-100'
                  }`}
                  onClick={() => handleFileClick(attachment)}
                >
                  {/* Image Preview */}
                  {attachment.preview && attachment.type.startsWith('image/') && (
                    <div className="mb-2">
                      <img
                        src={attachment.preview}
                        alt={attachment.name}
                        className={`rounded border ${
                          isImageExpanded ? 'max-w-full' : 'max-w-full h-32 object-cover'
                        }`}
                      />
                    </div>
                  )}

                  {/* File Info */}
                  <div className="flex items-center space-x-2">
                    <div className={`p-1 rounded ${
                      message.role === 'user' ? 'bg-slate-200' : 'bg-neutral-200'
                    }`}>
                      {getFileIcon(attachment.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate ${
                        message.role === 'user' ? 'text-slate-700' : 'text-neutral-700'
                      }`}>
                        {attachment.name}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {formatFileSize(attachment.size)}
                      </p>
                    </div>
                    {(attachment.url || attachment.preview) && (
                      <div className={`p-1 rounded ${
                        message.role === 'user' ? 'bg-slate-200' : 'bg-neutral-200'
                      }`}>
                        {attachment.url ? (
                          <ExternalLink className="w-3 h-3 text-neutral-600" />
                        ) : (
                          <Download className="w-3 h-3 text-neutral-600" />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Timestamp */}
        <div className={`text-xs text-neutral-500 mt-1 ${message.role === 'user' ? 'text-right' : ''}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  )
} 