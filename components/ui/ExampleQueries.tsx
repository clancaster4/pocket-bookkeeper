'use client'

import { useState } from 'react'
import { MessageCircle, Copy, Check } from 'lucide-react'

interface ExampleQueriesProps {
  onQuerySelect: (query: string) => void
}

const exampleQueries = [
  "How do I record a client payment in my ledger?",
  "What's the best way to categorize business expenses for taxes?",
  "Can you guide me through setting up a simple profit and loss statement?",
  "How should I track inventory for my small shop?",
  "What deductions can I claim as a freelancer?",
  "Help me understand cash flow basics for my startup.",
  "How do I reconcile my bank statements step by step?"
]

export default function ExampleQueries({ onQuerySelect }: ExampleQueriesProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleQueryClick = async (query: string, index: number) => {
    try {
      // Copy to clipboard
      await navigator.clipboard.writeText(query)
      setCopiedIndex(index)
      
      // Auto-populate chat input
      onQuerySelect(query)
      
      // Reset copied state after 2 seconds
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (error) {
      console.error('Failed to copy to clipboard:', error)
      // Fallback: just populate the input
      onQuerySelect(query)
    }
  }

  return (
    <div className="glass-card mx-4 mt-6 mb-4 p-6">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <MessageCircle className="w-5 h-5 text-primary-600" />
          <h3 className="text-lg font-semibold text-neutral-800">
            Try these example queries
          </h3>
        </div>
        <p className="text-sm text-neutral-600">
          Click any example to get started with your bookkeeping questions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {exampleQueries.map((query, index) => (
          <button
            key={index}
            onClick={() => handleQueryClick(query, index)}
            className="group relative p-4 bg-white/60 hover:bg-white/80 border border-neutral-200 hover:border-primary-300 rounded-xl text-left transition-all duration-300 hover:shadow-md hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-label={`Click to ask: ${query}`}
          >
            <div className="flex items-start justify-between">
              <p className="text-sm text-neutral-700 leading-relaxed pr-8">
                {query}
              </p>
              <div className="flex-shrink-0 ml-2">
                {copiedIndex === index ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4 text-neutral-400 group-hover:text-primary-600 transition-colors" />
                )}
              </div>
            </div>
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-neutral-500">
          💡 These examples demonstrate common bookkeeping scenarios. Feel free to modify them or ask your own questions!
        </p>
      </div>
    </div>
  )
} 