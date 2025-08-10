'use client'

import Link from 'next/link'
import Script from 'next/script'
import { 
  BookOpen,
  MessageCircle,
  Upload,
  DollarSign,
  Calculator,
  FileText,
  TrendingUp,
  Receipt,
  CreditCard,
  Building2,
  Users,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Copy,
  Play,
  Image as ImageIcon,
  ChevronRight,
  Star,
  Zap,
  AlertCircle
} from 'lucide-react'

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Use Pocket Bookkeeper for Small Business Bookkeeping",
  "description": "Complete guide on using AI-powered bookkeeping assistant for small business financial management",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Start a conversation",
      "text": "Open Pocket Bookkeeper and type your bookkeeping question"
    },
    {
      "@type": "HowToStep",
      "name": "Get AI guidance",
      "text": "Receive instant, accurate bookkeeping advice tailored to your situation"
    },
    {
      "@type": "HowToStep",
      "name": "Apply the advice",
      "text": "Implement the recommendations in your bookkeeping system"
    }
  ],
  "totalTime": "PT5M"
}

interface ExamplePrompt {
  category: string
  icon: any
  prompts: {
    question: string
    context: string
    bestFor: string
  }[]
}

const examplePrompts: ExamplePrompt[] = [
  {
    category: 'Expense Tracking',
    icon: Receipt,
    prompts: [
      {
        question: "I paid $89 for Google Workspace this month. How should I categorize this expense?",
        context: "Perfect for software subscriptions",
        bestFor: "Service-based businesses"
      },
      {
        question: "Can I deduct my home internet bill if I work from home 3 days a week?",
        context: "Home office deduction guidance",
        bestFor: "Remote workers & freelancers"
      },
      {
        question: "I bought a new laptop for $1,200. Should I expense it all at once or depreciate it?",
        context: "Equipment purchase decisions",
        bestFor: "All business types"
      }
    ]
  },
  {
    category: 'Tax Deductions',
    icon: DollarSign,
    prompts: [
      {
        question: "What business meals can I deduct and at what percentage?",
        context: "2024 meal deduction rules",
        bestFor: "Businesses with client entertainment"
      },
      {
        question: "I drove 120 miles to meet a client. How do I calculate my mileage deduction?",
        context: "Vehicle expense tracking",
        bestFor: "Mobile service providers"
      },
      {
        question: "Can I deduct my business insurance premiums? I pay $300/month.",
        context: "Insurance deduction eligibility",
        bestFor: "All business owners"
      }
    ]
  },
  {
    category: 'Financial Reports',
    icon: FileText,
    prompts: [
      {
        question: "Help me understand my P&L report. My revenue is $10K but I show a loss.",
        context: "Report interpretation",
        bestFor: "New business owners"
      },
      {
        question: "What's the difference between cash flow and profit? Which is more important?",
        context: "Financial concepts explained",
        bestFor: "Growing businesses"
      },
      {
        question: "How do I calculate my gross profit margin? My revenue is $50K, COGS is $20K.",
        context: "Key metrics calculation",
        bestFor: "Product-based businesses"
      }
    ]
  },
  {
    category: 'QuickBooks Help',
    icon: Calculator,
    prompts: [
      {
        question: "How do I reconcile my bank account in QuickBooks? I'm off by $47.",
        context: "Software troubleshooting",
        bestFor: "QuickBooks users"
      },
      {
        question: "Should I use cash or accrual accounting in QuickBooks for my consulting business?",
        context: "Accounting method selection",
        bestFor: "Service businesses"
      },
      {
        question: "How do I record a customer refund in QuickBooks?",
        context: "Transaction recording",
        bestFor: "Retail & e-commerce"
      }
    ]
  },
  {
    category: 'Business Structure',
    icon: Building2,
    prompts: [
      {
        question: "Should I form an LLC or stay a sole proprietor? I make $75K/year.",
        context: "Entity selection guidance",
        bestFor: "Growing solopreneurs"
      },
      {
        question: "What are the tax implications of converting from LLC to S-Corp?",
        context: "Entity conversion analysis",
        bestFor: "Profitable LLCs"
      },
      {
        question: "Do I need a separate business bank account for my LLC?",
        context: "Business compliance",
        bestFor: "New LLC owners"
      }
    ]
  },
  {
    category: 'Cash Flow Management',
    icon: TrendingUp,
    prompts: [
      {
        question: "My clients pay in 45 days but bills are due in 30. How do I manage cash flow?",
        context: "Cash flow timing issues",
        bestFor: "B2B businesses"
      },
      {
        question: "Should I offer a 2% discount for early payment to improve cash flow?",
        context: "Payment terms optimization",
        bestFor: "Service providers"
      },
      {
        question: "How much should I keep in my business emergency fund?",
        context: "Financial planning",
        bestFor: "All businesses"
      }
    ]
  }
]

export default function HowToUseClientPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // In a real app, show a toast notification
  }

  return (
    <>
      <Script
        id="structured-data-howto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-accent-50">
          <div className="absolute inset-0 bg-neutral-100/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-secondary-500/25">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Master Your Bookkeeping with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 to-accent-600"> AI Guidance</span>
              </h1>
              <p className="text-xl sm:text-2xl text-neutral-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Learn how to use Pocket Bookkeeper effectively with real examples, 
                screenshots, and proven prompts that get results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-semibold rounded-xl hover:from-secondary-600 hover:to-secondary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Start Using Now</span>
                </Link>
                <a
                  href="#see-it-in-action"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-secondary-600 font-semibold rounded-xl hover:bg-neutral-50 transition-all duration-200 shadow-lg hover:shadow-xl border border-neutral-200"
                >
                  <Play className="w-5 h-5" />
                  <span>See it in action</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Start Guide */}
        <div id="quick-start" className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Quick Start Guide
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Get up and running in just 3 simple steps
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Open the Chat',
                  description: 'Click "Start Free Chat" on the homepage. No sign-up required for your first 5 messages.',
                  icon: MessageCircle,
                  color: 'from-secondary-500 to-secondary-600'
                },
                {
                  step: '2',
                  title: 'Ask Your Question',
                  description: 'Type your bookkeeping question in plain English. Be specific about your situation.',
                  icon: BookOpen,
                  color: 'from-accent-500 to-accent-600'
                },
                {
                  step: '3',
                  title: 'Apply the Guidance',
                  description: 'Get instant, actionable advice. Follow up with more questions as needed.',
                  icon: CheckCircle,
                  color: 'from-green-500 to-green-600'
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-8 right-8 w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-neutral-400">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ChevronRight className="w-8 h-8 text-neutral-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Screenshot Examples Section */}
        <div id="see-it-in-action" className="py-16 sm:py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                See It In Action
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Visual examples of how Pocket Bookkeeper helps with real bookkeeping tasks
              </p>
            </div>

            <div className="space-y-16">
              {/* Example 1 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-gradient-to-br from-secondary-100 to-accent-100 rounded-2xl p-8 shadow-lg">
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">You</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-neutral-700">
                            "I just bought office supplies for $127 at Staples. How should I categorize this?"
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">AI</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-neutral-700 mb-2">
                            "Categorize this as <strong>Office Supplies & Materials</strong> (Account #5120 if using standard COA).
                          </p>
                          <p className="text-neutral-700">
                            This is 100% tax-deductible as an ordinary business expense. Keep the receipt for documentation."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Expense Categorization Made Simple
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    Never second-guess expense categories again. Our AI knows the proper 
                    categorization for thousands of business expenses and explains the tax implications.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">Instant categorization guidance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">Tax deductibility confirmation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">Documentation requirements</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Example 2 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Upload Documents for Analysis
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    Upload receipts, invoices, or statements and get specific guidance. 
                    Our AI analyzes your documents and provides tailored recommendations.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="font-semibold text-neutral-900 mb-3">Supported Documents:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {['Receipts', 'Invoices', 'Bank Statements', 'Tax Forms', 'P&L Reports', 'Credit Card Statements'].map((doc, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-neutral-700">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-lg">
                    <div className="bg-white rounded-lg p-6 border-2 border-dashed border-blue-300">
                      <div className="text-center">
                        <Upload className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                        <p className="text-neutral-700 font-medium mb-2">Drop files here or click to upload</p>
                        <p className="text-sm text-neutral-500">PDF, PNG, JPG up to 10MB</p>
                      </div>
                    </div>
                    <div className="mt-4 bg-white rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <ImageIcon className="w-8 h-8 text-blue-500" />
                        <div className="flex-1">
                          <p className="font-medium text-neutral-900">invoice_march_2024.pdf</p>
                          <p className="text-sm text-neutral-500">Analyzing...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Example Prompts Section */}
        <div className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Example Prompts for Every Situation
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Copy and customize these proven prompts for your business
              </p>
            </div>

            <div className="space-y-12">
              {examplePrompts.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-secondary-100 to-accent-100 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-secondary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">{category.category}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.prompts.map((prompt, promptIndex) => (
                      <div key={promptIndex} className="bg-gradient-to-br from-neutral-50 to-white rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow duration-300">
                        <div className="mb-4">
                          <div className="flex items-start justify-between mb-3">
                            <Lightbulb className="w-5 h-5 text-accent-600 flex-shrink-0" />
                            <button
                              onClick={() => copyToClipboard(prompt.question)}
                              className="p-1 hover:bg-neutral-100 rounded transition-colors"
                              title="Copy prompt"
                            >
                              <Copy className="w-4 h-4 text-neutral-400 hover:text-neutral-600" />
                            </button>
                          </div>
                          <p className="text-neutral-900 font-medium mb-3 italic">
                            "{prompt.question}"
                          </p>
                        </div>
                        <div className="space-y-2 text-sm">
                          <p className="text-neutral-600">
                            <span className="font-medium">Context:</span> {prompt.context}
                          </p>
                          <p className="text-neutral-600">
                            <span className="font-medium">Best for:</span> {prompt.bestFor}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-secondary-500 to-accent-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Pro Tip: Be Specific!
              </h3>
              <p className="text-white/90 mb-6 max-w-3xl mx-auto">
                The more details you provide about your business, industry, and specific situation, 
                the more accurate and helpful the AI's guidance will be.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white/10 rounded-lg p-4">
                  <Star className="w-6 h-6 text-yellow-300 mb-2" />
                  <p className="text-sm">Include dollar amounts and dates</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <Star className="w-6 h-6 text-yellow-300 mb-2" />
                  <p className="text-sm">Mention your business type</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <Star className="w-6 h-6 text-yellow-300 mb-2" />
                  <p className="text-sm">Specify your accounting software</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices Section */}
        <div className="py-16 sm:py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Best Practices for Maximum Value
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Follow these tips to get the most out of Pocket Bookkeeper
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span>Do's</span>
                </h3>
                <div className="space-y-4">
                  {[
                    'Ask follow-up questions to clarify complex topics',
                    'Provide context about your business and industry',
                    'Upload supporting documents when available',
                    'Save important responses for future reference',
                    'Use specific examples from your business',
                    'Ask about tax implications of decisions'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-neutral-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center space-x-2">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <span>Don'ts</span>
                </h3>
                <div className="space-y-4">
                  {[
                    'Share sensitive information like SSN or passwords',
                    'Rely solely on AI for complex legal matters',
                    'Skip professional help for tax filing',
                    'Ignore the need for proper documentation',
                    'Make major decisions without verification',
                    'Assume one-size-fits-all advice'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <AlertCircle className="w-4 h-4 text-red-600" />
                      </div>
                      <p className="text-neutral-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Section */}
        <div className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Works With Your Existing Tools
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Pocket Bookkeeper complements your current bookkeeping workflow
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'QuickBooks Users',
                  icon: Calculator,
                  items: [
                    'Get help with categorization',
                    'Troubleshoot reconciliation',
                    'Understand reports',
                    'Fix common errors'
                  ]
                },
                {
                  title: 'Spreadsheet Users',
                  icon: FileText,
                  items: [
                    'Create tracking templates',
                    'Build formulas',
                    'Organize expenses',
                    'Generate reports'
                  ]
                },
                {
                  title: 'Manual Bookkeeping',
                  icon: Receipt,
                  items: [
                    'Learn best practices',
                    'Organize receipts',
                    'Track deductions',
                    'Prepare for taxes'
                  ]
                }
              ].map((tool, index) => (
                <div key={index} className="bg-gradient-to-br from-secondary-50 to-accent-50 rounded-2xl p-8">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <tool.icon className="w-6 h-6 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    {tool.title}
                  </h3>
                  <ul className="space-y-2">
                    {tool.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Zap className="w-4 h-4 text-accent-600 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 sm:py-20 bg-gradient-to-r from-secondary-500 to-accent-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Simplify Your Bookkeeping?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start using these techniques today and see immediate improvements 
              in your financial management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-secondary-600 font-semibold rounded-xl hover:bg-neutral-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Try It Free Now</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-200 border border-white/20 hover:border-white/40"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
