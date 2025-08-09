'use client'

import { useState } from 'react'
import Link from 'next/link'
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
  Lightbulb
} from 'lucide-react'

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
    answer: 'Absolutely. We use bank-level encryption and never store your sensitive financial data. All conversations are processed securely and deleted after your session. We comply with SOC 2 Type II standards and follow strict privacy protocols.'
  },
  {
    id: 'pricing-plans',
    category: 'billing',
    question: 'What are your pricing plans?',
    answer: 'We offer a free tier with 5 queries per month, perfect for trying out the service. Our Everyday Assistant plan is $9/month with unlimited queries, and the Elite Advisor plan is $29/month with advanced features and priority support.'
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
    answer: 'Yes! Every new user gets 5 free queries per month with no credit card required. This lets you test the service and see how it works for your business before committing to a paid plan.'
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

export default function SupportPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

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

  return (
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
            How Can We Help You?
          </h1>
          <p className="text-xl text-neutral-600 mb-8">
            Find answers to common questions, get troubleshooting help, 
            or contact our support team.
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
            />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="py-12 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/"
              className="group flex items-center space-x-4 p-6 bg-gradient-to-r from-secondary-50 to-secondary-100 rounded-2xl hover:from-secondary-100 hover:to-secondary-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">Start a Chat</h3>
                <p className="text-sm text-neutral-600">Get instant help from our AI assistant</p>
              </div>
            </Link>

            <a
              href="mailto:support@pocketbookkeeper.com"
              className="group flex items-center space-x-4 p-6 bg-gradient-to-r from-accent-50 to-accent-100 rounded-2xl hover:from-accent-100 hover:to-accent-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">Email Support</h3>
                <p className="text-sm text-neutral-600">Contact our team directly</p>
              </div>
            </a>

            <Link
              href="/popular-uses"
              className="group flex items-center space-x-4 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl hover:from-green-100 hover:to-green-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">View Examples</h3>
                <p className="text-sm text-neutral-600">See how others use our service</p>
              </div>
            </Link>
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

      {/* Support Stats */}
      <div className="py-16 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              We're Here to Help
            </h2>
            <p className="text-lg text-neutral-600">
              Our commitment to supporting small business owners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                &lt; 2 Hours
              </h3>
              <p className="text-neutral-600">
                Average response time for support emails
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                98%
              </h3>
              <p className="text-neutral-600">
                Customer satisfaction rating
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                24/7
              </h3>
              <p className="text-neutral-600">
                AI assistant availability
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">
            Still Need Help?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="bg-gradient-to-r from-secondary-500 to-accent-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Contact Our Support Team
            </h3>
            <p className="text-white/90 mb-6">
              Email us at{' '}
              <a 
                href="mailto:support@pocketbookkeeper.com"
                className="underline hover:no-underline"
              >
                support@pocketbookkeeper.com
              </a>
              {' '}and we'll get back to you within 2 hours during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@pocketbookkeeper.com"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white text-secondary-600 font-semibold rounded-xl hover:bg-neutral-50 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email Support</span>
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/20 hover:border-white/40"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Try AI Assistant</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}