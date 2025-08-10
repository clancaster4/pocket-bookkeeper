'use client'

import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { 
  HelpCircle,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Mail,
  BookOpen,
  Search,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Send,
  Phone
} from 'lucide-react'

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Pocket Bookkeeper?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pocket Bookkeeper is an AI-powered bookkeeping assistant designed specifically for small business owners. It provides instant, accurate guidance on accounting tasks, tax questions, expense tracking, and financial management – available 24/7 at a fraction of the cost of traditional bookkeeping services."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is the AI bookkeeping advice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our AI has been trained on thousands of real bookkeeping scenarios and maintains a 98.2% accuracy rate when validated against certified accountants."
      }
    },
    {
      "@type": "Question",
      "name": "Is my financial data secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We use bank-level encryption and never store your sensitive financial data. All conversations are processed securely and deleted after your session."
      }
    }
  ]
}

interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'general' | 'billing' | 'technical' | 'features'
}

const faqs: FAQItem[] = [
  {
    id: 'what-is-pocket-bookkeeper',
    category: 'general',
    question: 'What is Pocket Bookkeeper?',
    answer: 'Pocket Bookkeeper is an AI-powered bookkeeping assistant designed specifically for small business owners. It provides instant, accurate guidance on accounting tasks, tax questions, expense tracking, and financial management – available 24/7 at a fraction of the cost of traditional bookkeeping services.'
  },
  {
    id: 'how-accurate-is-ai',
    category: 'general',
    question: 'How accurate is the AI bookkeeping advice?',
    answer: 'Our AI has been trained on thousands of real bookkeeping scenarios and maintains a 98.2% accuracy rate when validated against certified accountants. However, for complex tax situations or major business decisions, we always recommend consulting with a licensed professional.'
  },
  {
    id: 'data-security',
    category: 'technical',
    question: 'Is my financial data secure?',
    answer: 'Your privacy and data security are our top priority. We do not store any conversation content or file uploads after your session ends. All processing is done in a secure, compliant environment to ensure your financial information remains confidential.'
  },
  {
    id: 'pricing-plans',
    category: 'billing',
    question: 'What are your pricing plans?',
    answer: 'We offer a free tier with 5 messages per month, perfect for trying out the service. Our Everyday Assistant plan is $9.99/month with unlimited messages, and the Elite Advisor plan is $19.99/month with advanced features and priority support.'
  },
  {
    id: 'what-can-ai-help-with',
    category: 'features',
    question: 'What bookkeeping tasks can the AI help with?',
    answer: 'Our AI can help with expense categorization, tax deduction identification, cash flow analysis, invoice management, financial report interpretation, business structure advice, compliance questions, and much more. If it\'s bookkeeping-related, we can probably help!'
  },
  {
    id: 'free-trial',
    category: 'billing',
    question: 'Do you offer a free trial?',
    answer: 'Yes! Every new user gets 5 free messages per month with no credit card required. This lets you test the service and see how it works for your business before committing to a paid plan.'
  },
  {
    id: 'cancel-subscription',
    category: 'billing',
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees or long-term contracts. Your access will continue until the end of your current billing period.'
  },
  {
    id: 'multiple-businesses',
    category: 'features',
    question: 'Can I use this for multiple businesses?',
    answer: 'Yes! You can ask questions about different businesses within the same account. The AI will treat each conversation context independently, so you can manage multiple businesses without any issues.'
  },
  {
    id: 'file-uploads',
    category: 'features',
    question: 'Can I upload documents for analysis?',
    answer: 'Yes, you can upload receipts, invoices, bank statements, and other financial documents. Our AI can analyze these files and provide specific guidance based on your actual business data.'
  },
  {
    id: 'human-support',
    category: 'technical',
    question: 'Can I speak to a human if needed?',
    answer: 'Elite Advisor subscribers get access to human expert review for complex questions. All users can contact our support team for technical issues or account questions through email or our contact form.'
  },
  {
    id: 'tax-filing',
    category: 'features',
    question: 'Does this replace my tax preparer?',
    answer: 'Pocket Bookkeeper helps you organize your finances and identify deductions throughout the year, making tax time much easier. However, for actual tax filing, we recommend working with a qualified tax professional who can use the organized information we\'ve helped you compile.'
  },
  {
    id: 'industry-specific',
    category: 'general',
    question: 'Does it work for my specific industry?',
    answer: 'Our AI has been trained on bookkeeping practices across hundreds of industries, from restaurants and retail to consulting and manufacturing. It understands industry-specific challenges and can provide tailored advice for your type of business.'
  }
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'general', label: 'General', icon: BookOpen },
    { id: 'features', label: 'Features', icon: Lightbulb },
    { id: 'billing', label: 'Billing', icon: CheckCircle },
    { id: 'technical', label: 'Technical', icon: AlertCircle },
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Create mailto link as fallback
    const mailtoLink = `mailto:support@pocketbookkeeper.com?subject=${encodeURIComponent(contactForm.subject)}&body=${encodeURIComponent(`From: ${contactForm.name} (${contactForm.email})\n\n${contactForm.message}`)}`
    
    try {
      // In a real app, this would send to your API
      // For now, we'll just open the mailto link
      window.location.href = mailtoLink
      setSubmitStatus('success')
      setContactForm({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Script
        id="structured-data-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-secondary-50 via-white to-accent-50 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Find answers to common questions about Pocket Bookkeeper.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-neutral-400" />
              </div>
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full pl-10 pr-4 py-4 border border-neutral-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent shadow-lg text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search support articles"
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-neutral-600">
                Quick answers to the most common questions about Pocket Bookkeeper
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-secondary-100 text-secondary-700 border border-secondary-200'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.label}</span>
                  </button>
                )
              })}
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    className="border border-neutral-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                        {faq.question}
                      </h3>
                      {expandedFAQ === faq.id ? (
                        <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFAQ === faq.id && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-neutral-100 pt-4">
                          <p className="text-neutral-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-neutral-500 mb-2">
                    No results found
                  </h3>
                  <p className="text-neutral-400">
                    Try adjusting your search terms or category filter
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}