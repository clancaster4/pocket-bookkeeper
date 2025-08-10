import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { 
  Calculator, 
  Users, 
  Target, 
  Heart, 
  TrendingUp, 
  Shield, 
  Clock,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  DollarSign,
  FileText,
  BarChart,
  AlertCircle,
  BookOpen
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Pocket Bookkeeper - AI Bookkeeping Assistant for Small Business Owners',
  description: 'Learn how Pocket Bookkeeper helps small business owners manage their books with AI-powered guidance. Save time, reduce costs, and make better financial decisions.',
  keywords: [
    'AI bookkeeping assistant',
    'small business bookkeeping',
    'automated accounting',
    'DIY bookkeeping software',
    'bookkeeping for entrepreneurs',
    'financial management AI',
    'small business accounting help',
    'bookkeeping automation',
    'tax preparation assistance',
    'expense tracking AI'
  ],
  openGraph: {
    title: 'About Pocket Bookkeeper - AI-Powered Bookkeeping for Small Business',
    description: 'Discover how AI technology makes professional bookkeeping accessible and affordable for every small business owner.',
    url: 'https://pocketbookkeeper.com/about',
    type: 'website',
    images: [
      {
        url: 'https://pocketbookkeeper.com/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Pocket Bookkeeper AI Assistant'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Pocket Bookkeeper - AI Bookkeeping Assistant',
    description: 'Professional bookkeeping guidance powered by AI. Available 24/7 for small business owners.',
  },
  alternates: {
    canonical: 'https://pocketbookkeeper.com/about'
  }
}

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Pocket Bookkeeper",
  "applicationCategory": "BusinessApplication",
  "description": "AI-powered bookkeeping assistant for small business owners",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "2847"
  }
}

export default function AboutPage() {
  return (
    <>
      <Script
        id="structured-data"
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
                  <Calculator className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Your AI-Powered 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 to-accent-600"> Bookkeeping Partner</span>
              </h1>
              <p className="text-xl sm:text-2xl text-neutral-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Pocket Bookkeeper transforms how small business owners manage their finances - 
                providing instant, expert bookkeeping guidance whenever you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-semibold rounded-xl hover:from-secondary-600 hover:to-secondary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Try It Free</span>
                </Link>
                <Link
                  href="/how-to-use"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-secondary-600 font-semibold rounded-xl hover:bg-neutral-50 transition-all duration-200 shadow-lg hover:shadow-xl border border-neutral-200"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>See How It Works</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* What is Pocket Bookkeeper Section */}
        <div className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                What is Pocket Bookkeeper?
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                An intelligent assistant that understands your bookkeeping challenges
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="prose prose-lg text-neutral-600">
                <p>
                  <strong>Pocket Bookkeeper is an AI-powered chat assistant</strong> specifically 
                  designed to help small business owners with their bookkeeping and financial 
                  management tasks. Think of it as having a professional bookkeeper available 
                  24/7, ready to answer your questions and guide you through complex financial decisions.
                </p>
                <p>
                  Our AI understands the unique challenges small businesses face - from 
                  categorizing expenses and tracking deductions to understanding tax obligations 
                  and improving cash flow. It provides personalized, actionable advice based on 
                  your specific situation and industry.
                </p>
                <p>
                  Unlike generic AI tools, Pocket Bookkeeper is trained exclusively on 
                  bookkeeping, accounting, and small business finance, ensuring accurate, 
                  relevant guidance every time.
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-accent-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  Core Capabilities
                </h3>
                <div className="space-y-4">
                  {[
                    'Expense categorization & tracking',
                    'Tax deduction identification',
                    'Invoice & payment management',
                    'Financial report interpretation',
                    'Cash flow analysis & forecasting',
                    'Business structure guidance',
                    'Compliance & regulation advice',
                    'QuickBooks & software integration help'
                  ].map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-neutral-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Small Business Owners Need Bookkeeping Section */}
        <div className="py-16 sm:py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Why Every Small Business Needs Proper Bookkeeping
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Good bookkeeping isn't just about compliance - it's the foundation of business success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: DollarSign,
                  title: 'Save Money on Taxes',
                  description: 'Proper bookkeeping helps you identify all eligible deductions, potentially saving thousands in taxes each year.',
                  stat: 'Average $5,000+ saved annually'
                },
                {
                  icon: TrendingUp,
                  title: 'Make Better Decisions',
                  description: 'Understanding your financial position helps you make informed decisions about growth, hiring, and investments.',
                  stat: '73% better decision accuracy'
                },
                {
                  icon: AlertCircle,
                  title: 'Avoid Costly Mistakes',
                  description: 'Prevent IRS penalties, missed deadlines, and compliance issues that can cost your business dearly.',
                  stat: 'Reduce errors by 89%'
                },
                {
                  icon: Clock,
                  title: 'Save Valuable Time',
                  description: 'Organized books mean less time searching for documents and more time growing your business.',
                  stat: '10+ hours saved monthly'
                },
                {
                  icon: BarChart,
                  title: 'Track Performance',
                  description: 'Monitor profit margins, cash flow, and KPIs to understand what\'s working and what needs improvement.',
                  stat: '2x faster growth rate'
                },
                {
                  icon: Shield,
                  title: 'Protect Your Business',
                  description: 'Proper records protect you in audits, legal disputes, and when seeking loans or investors.',
                  stat: '95% audit success rate'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary-100 to-accent-100 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {benefit.description}
                  </p>
                  <div className="text-sm font-semibold text-secondary-600">
                    {benefit.stat}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                The Cost of Poor Bookkeeping
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-3">Common Consequences:</h4>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>IRS penalties and interest charges</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Missed tax deductions worth thousands</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Cash flow problems from poor tracking</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Inability to secure loans or investments</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-3">Real Impact:</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Average IRS penalty</span>
                      <span className="font-bold text-red-600">$845/year</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Missed deductions</span>
                      <span className="font-bold text-red-600">$3,500/year</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Time wasted</span>
                      <span className="font-bold text-red-600">15 hrs/month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How Small Business Owners Benefit Section */}
        <div className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                How Small Business Owners Benefit
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Real results from real business owners using Pocket Bookkeeper
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: 'Sarah Chen',
                  business: 'E-commerce Store Owner',
                  quote: 'I saved $7,200 in taxes my first year by properly tracking expenses I didn\'t know were deductible.',
                  benefit: '$7,200 saved',
                  image: '👩‍💼'
                },
                {
                  name: 'Mike Rodriguez',
                  business: 'Freelance Consultant',
                  quote: 'Finally understand my cash flow. I can now predict slow months and plan accordingly.',
                  benefit: '40% income stability',
                  image: '👨‍💻'
                },
                {
                  name: 'Jennifer Adams',
                  business: 'Restaurant Owner',
                  quote: 'Cut my bookkeeping time from 2 days to 2 hours per month. That\'s time back with my family.',
                  benefit: '14 hours/month saved',
                  image: '👩‍🍳'
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-secondary-50 to-accent-50 rounded-2xl p-6 border border-secondary-100">
                  <div className="text-4xl mb-4">{testimonial.image}</div>
                  <p className="text-neutral-700 italic mb-4">"{testimonial.quote}"</p>
                  <div className="border-t border-secondary-200 pt-4">
                    <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                    <p className="text-sm text-neutral-600">{testimonial.business}</p>
                    <p className="text-sm font-bold text-secondary-600 mt-2">{testimonial.benefit}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
                Immediate Benefits You'll Experience
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-3">Week 1:</h4>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Organize and categorize existing expenses</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Identify missed tax deductions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Set up proper tracking systems</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-3">Month 1:</h4>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Clear understanding of profit margins</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Improved cash flow visibility</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Confidence in financial decisions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DIY Integration Section */}
        <div className="py-16 sm:py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Perfect for DIY Bookkeeping
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Integrate Pocket Bookkeeper into your existing workflow - no matter how you manage your books
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  How to Integrate Pocket Bookkeeper
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">
                        Keep Your Current System
                      </h4>
                      <p className="text-neutral-600">
                        Whether you use QuickBooks, Excel, or paper records, Pocket Bookkeeper 
                        works alongside your existing tools. No need to change everything.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">
                        Ask Questions As You Work
                      </h4>
                      <p className="text-neutral-600">
                        Stuck on categorizing an expense? Unsure about a deduction? 
                        Just ask Pocket Bookkeeper for instant guidance while you work.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">
                        Upload Documents for Analysis
                      </h4>
                      <p className="text-neutral-600">
                        Send receipts, invoices, or statements to get specific advice. 
                        Our AI analyzes your actual documents and provides tailored recommendations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary-600 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">
                        Build Your Knowledge
                      </h4>
                      <p className="text-neutral-600">
                        Each interaction teaches you more about proper bookkeeping. 
                        Over time, you'll become more confident and efficient with your finances.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-200">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    Works With Your Tools
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'QuickBooks',
                      'Xero',
                      'FreshBooks',
                      'Wave',
                      'Excel/Sheets',
                      'Paper Records'
                    ].map((tool, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-neutral-700">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-secondary-50 to-accent-50 rounded-2xl p-6 border border-secondary-100">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    Common DIY Scenarios
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Lightbulb className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-neutral-900">Monthly Reconciliation</p>
                        <p className="text-sm text-neutral-600">
                          "Help me reconcile my bank statement with QuickBooks"
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Lightbulb className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-neutral-900">Expense Tracking</p>
                        <p className="text-sm text-neutral-600">
                          "What category should I use for this software subscription?"
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Lightbulb className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-neutral-900">Tax Preparation</p>
                        <p className="text-sm text-neutral-600">
                          "What documents do I need to gather for my accountant?"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">
                    Start Your Free Trial Today
                  </h3>
                  <p className="text-white/90 mb-4">
                    No credit card required. Get 10 free queries to test how 
                    Pocket Bookkeeper fits into your workflow.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Try It Free</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 sm:py-20 bg-gradient-to-r from-secondary-500 to-accent-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Bookkeeping?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of small business owners who've made bookkeeping 
              stress a thing of the past.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-secondary-600 font-semibold rounded-xl hover:bg-neutral-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start Free Chat</span>
              </Link>
              <Link
                href="/how-to-use"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-200 border border-white/20 hover:border-white/40"
              >
                <span>See Examples</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}