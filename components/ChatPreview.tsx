'use client'

import { MessageCircle, User, Bot, ArrowRight, Sparkles } from 'lucide-react'

export default function ChatPreview() {
  const previewMessages = [
    {
      role: 'user',
      content: "How should I categorize office supplies for my small business?",
      timestamp: new Date(Date.now() - 1000 * 60 * 5) // 5 minutes ago
    },
    {
      role: 'assistant',
      content: "Great question! Office supplies are typically categorized as **Operating Expenses** in your books.\n\nHere's the simple breakdown:\n• **Deductible**: Yes, 100% business deductible\n• **Category**: Office Expenses or Supplies\n• **Examples**: Paper, pens, printer ink, folders, staplers\n• **Tip**: Keep receipts and consider buying in bulk for better pricing\n\nFor your accounting software like QuickBooks, create an \"Office Supplies\" expense category. This keeps your bookkeeping organized and makes tax time much easier!\n\nRemember: If it's used exclusively for business, it's deductible. Mixed personal/business use? Only deduct the business portion.",
      timestamp: new Date(Date.now() - 1000 * 60 * 3) // 3 minutes ago
    },
    {
      role: 'user',
      content: "What about home office expenses?",
      timestamp: new Date(Date.now() - 1000 * 60 * 2) // 2 minutes ago
    }
  ]

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Preview Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">See My AI Bookkeeper in Action</h2>
        <p className="text-neutral-600">Get instant, expert guidance on your business finances</p>
      </div>

      {/* Preview Chat Messages */}
      <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 mb-6 overflow-hidden">
        <div className="bg-gradient-to-r from-secondary-50 to-accent-50 px-6 py-4 border-b border-neutral-200">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-neutral-700">Live Chat Preview</span>
          </div>
        </div>
        
        <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
          {previewMessages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] ${message.role === 'user' ? 'order-2' : 'order-1'}`}>
                <div className={`flex items-start space-x-3 ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.role === 'user' 
                      ? 'bg-secondary-100 text-secondary-600' 
                      : 'bg-accent-100 text-accent-600'
                  }`}>
                    {message.role === 'user' ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-secondary-500 text-white'
                      : 'bg-neutral-100 text-neutral-900'
                  }`}>
                    <div className="prose prose-sm max-w-none">
                      {message.content.split('\n').map((line, lineIndex) => {
                        if (line.startsWith('• ')) {
                          return (
                            <div key={lineIndex} className="flex items-start space-x-2 my-1">
                              <span className="text-secondary-500 mt-1">•</span>
                              <span>{line.substring(2)}</span>
                            </div>
                          )
                        } else if (line.startsWith('**') && line.endsWith('**')) {
                          return (
                            <div key={lineIndex} className="font-semibold my-2">
                              {line.replace(/\*\*/g, '')}
                            </div>
                          )
                        } else if (line.trim() === '') {
                          return <div key={lineIndex} className="h-2"></div>
                        } else {
                          return (
                            <div key={lineIndex} className="my-1">
                              {line}
                            </div>
                          )
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing indicator for incomplete message */}
          <div className="flex justify-start">
            <div className="max-w-[80%]">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-neutral-100 rounded-2xl px-4 py-3">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-secondary-50 via-white to-accent-50 rounded-2xl p-8 text-center shadow-lg border border-neutral-200">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="w-6 h-6 text-secondary-500 mr-2" />
          <span className="text-lg font-semibold text-neutral-900">Ready to Get Started?</span>
        </div>
        <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
          Create your free account and get 5 messages to start getting expert bookkeeping advice tailored to your business needs.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => window.location.href = '/sign-up'}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-medium rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>Create Free Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <div className="text-sm text-neutral-500">
            No credit card required • 5 free messages
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <MessageCircle className="w-6 h-6 text-secondary-600" />
          </div>
          <h3 className="font-semibold text-neutral-900 mb-2">Instant Answers</h3>
          <p className="text-sm text-neutral-600">Get immediate responses to your bookkeeping and tax questions</p>
        </div>
        
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Bot className="w-6 h-6 text-accent-600" />
          </div>
          <h3 className="font-semibold text-neutral-900 mb-2">Expert AI</h3>
          <p className="text-sm text-neutral-600">Powered by advanced AI trained on accounting best practices</p>
        </div>
        
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Sparkles className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-neutral-900 mb-2">Always Available</h3>
          <p className="text-sm text-neutral-600">24/7 access to professional bookkeeping guidance</p>
        </div>
      </div>
    </div>
  )
}