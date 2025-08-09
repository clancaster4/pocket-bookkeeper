'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Sparkles,
  DollarSign,
  FileText,
  TrendingUp,
  Calculator,
  PieChart,
  Receipt,
  Building2,
  Users,
  Car,
  Home,
  CreditCard,
  Briefcase,
  MessageCircle,
  ChevronRight,
  Star,
  ArrowRight
} from 'lucide-react'

interface UseCase {
  id: string
  title: string
  icon: any
  description: string
  example: string
  category: 'expense-tracking' | 'tax-planning' | 'reporting' | 'compliance' | 'growth'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  timesSaved: string
  industry?: string
}

const useCases: UseCase[] = [
  {
    id: 'expense-categorization',
    title: 'Expense Categorization',
    icon: Receipt,
    category: 'expense-tracking',
    difficulty: 'beginner',
    timesSaved: '2-3 hours/week',
    description: 'Automatically categorize business expenses for accurate record-keeping and tax preparation.',
    example: '"I have a $47 receipt from Office Depot for printer paper and folders. How should I categorize this?" → "This should be categorized as Office Supplies (tax-deductible business expense). You can deduct 100% of this cost."',
    industry: 'All Industries'
  },
  {
    id: 'home-office-deduction',
    title: 'Home Office Deductions',
    icon: Home,
    category: 'tax-planning',
    difficulty: 'intermediate',
    timesSaved: '5-8 hours during tax season',
    description: 'Calculate and optimize home office deductions for maximum tax savings.',
    example: '"My home office is 150 sq ft out of my 1,200 sq ft home. My monthly utilities are $200." → "You can deduct 12.5% of your home expenses ($25/month utilities). Track mortgage interest, insurance, and repairs too."',
    industry: 'Freelancers & Remote Workers'
  },
  {
    id: 'vehicle-expense-tracking',
    title: 'Vehicle Expense Tracking',
    icon: Car,
    category: 'expense-tracking',
    difficulty: 'intermediate',
    timesSaved: '1-2 hours/week',
    description: 'Track mileage and vehicle expenses using the most beneficial method for your business.',
    example: '"I drove 1,200 miles for business this month. Should I use mileage deduction or actual expenses?" → "At 67¢/mile, that\'s $804 deduction. Compare this to actual gas, maintenance, and depreciation to choose the best method."',
    industry: 'Service-Based Businesses'
  },
  {
    id: 'cash-flow-analysis',
    title: 'Cash Flow Management',
    icon: TrendingUp,
    category: 'reporting',
    difficulty: 'intermediate',
    timesSaved: '3-4 hours/month',
    description: 'Analyze cash flow patterns and predict future financial needs.',
    example: '"My revenue varies seasonally. How can I budget for slow months?" → "Based on your patterns, save 30% of peak-season revenue. Your Q4 is typically 40% lower than Q2, so plan accordingly."',
    industry: 'Seasonal Businesses'
  },
  {
    id: 'quarterly-tax-planning',
    title: 'Quarterly Tax Estimates',
    icon: Calculator,
    category: 'tax-planning',
    difficulty: 'advanced',
    timesSaved: '4-6 hours/quarter',
    description: 'Calculate and plan quarterly estimated tax payments to avoid penalties.',
    example: '"I made $15,000 profit this quarter. What should my estimated tax payment be?" → "Based on your bracket and self-employment tax, set aside approximately $3,400 for federal taxes plus state taxes."',
    industry: 'Self-Employed Professionals'
  },
  {
    id: 'inventory-valuation',
    title: 'Inventory Management',
    icon: Building2,
    category: 'reporting',
    difficulty: 'advanced',
    timesSaved: '6-8 hours/month',
    description: 'Track inventory costs and optimize valuation methods for tax purposes.',
    example: '"I have 500 units that cost $8 each, and 300 units that cost $10 each. How do I value my inventory?" → "Consider FIFO method: Value remaining inventory at most recent costs. This affects both taxes and profit margins."',
    industry: 'Retail & E-commerce'
  },
  {
    id: 'business-meal-deductions',
    title: 'Business Meal Tracking',
    icon: Users,
    category: 'expense-tracking',
    difficulty: 'beginner',
    timesSaved: '1-2 hours/month',
    description: 'Properly document and categorize business meals for tax deductions.',
    example: '"I took a client to lunch for $85. Is this deductible?" → "Yes, 50% is deductible ($42.50). Document: client name, business purpose, date, and receipt. Current rules allow 100% deduction for some meal types."',
    industry: 'Professional Services'
  },
  {
    id: 'invoice-management',
    title: 'Invoice Organization',
    icon: FileText,
    category: 'compliance',
    difficulty: 'beginner',
    timesSaved: '2-3 hours/week',
    description: 'Create systems for tracking invoices, payments, and outstanding receivables.',
    example: '"How should I organize my invoices and track payments?" → "Use a simple system: Invoice #, Date, Client, Amount, Due Date, Paid Status. Follow up on invoices over 30 days old."',
    industry: 'Service Providers'
  },
  {
    id: 'equipment-depreciation',
    title: 'Equipment Depreciation',
    icon: Briefcase,
    category: 'tax-planning',
    difficulty: 'advanced',
    timesSaved: '3-5 hours/year',
    description: 'Calculate depreciation schedules for business equipment and assets.',
    example: '"I bought a $3,000 laptop for business. How do I depreciate it?" → "You can use Section 179 to deduct the full $3,000 immediately, or depreciate over 5 years. Immediate deduction usually saves more in taxes."',
    industry: 'Technology & Consulting'
  },
  {
    id: 'credit-card-reconciliation',
    title: 'Credit Card Reconciliation',
    icon: CreditCard,
    category: 'compliance',
    difficulty: 'intermediate',
    timesSaved: '2-4 hours/month',
    description: 'Reconcile business credit card statements and categorize mixed-use expenses.',
    example: '"My business credit card has personal and business charges mixed. How do I handle this?" → "Separate each transaction: personal charges aren\'t deductible, business charges are. Consider getting a dedicated business card."',
    industry: 'Small Business Owners'
  },
  {
    id: 'profit-loss-analysis',
    title: 'P&L Statement Review',
    icon: PieChart,
    category: 'reporting',
    difficulty: 'intermediate',
    timesSaved: '4-6 hours/quarter',
    description: 'Analyze profit and loss statements to identify trends and opportunities.',
    example: '"My expenses increased 20% but revenue only grew 10%. What should I focus on?" → "Review your largest expense categories. Look for cost optimization in supplies, marketing, or utilities. Consider raising prices or improving efficiency."',
    industry: 'Growing Businesses'
  },
  {
    id: 'sales-tax-compliance',
    title: 'Sales Tax Management',
    icon: DollarSign,
    category: 'compliance',
    difficulty: 'advanced',
    timesSaved: '3-4 hours/month',
    description: 'Navigate sales tax requirements across different states and jurisdictions.',
    example: '"I sell online to customers in different states. When do I need to collect sales tax?" → "You have nexus (tax obligation) when you exceed $100K in sales or 200 transactions in most states. Track by state and register accordingly."',
    industry: 'E-commerce & Retail'
  }
]

const industries = [
  'All Industries',
  'Freelancers & Remote Workers',
  'Service-Based Businesses',
  'Seasonal Businesses',
  'Self-Employed Professionals',
  'Retail & E-commerce',
  'Professional Services',
  'Service Providers',
  'Technology & Consulting',
  'Small Business Owners',
  'Growing Businesses',
  'E-commerce & Retail'
]

const categories = [
  { id: 'all', label: 'All Categories', icon: Sparkles },
  { id: 'expense-tracking', label: 'Expense Tracking', icon: Receipt },
  { id: 'tax-planning', label: 'Tax Planning', icon: Calculator },
  { id: 'reporting', label: 'Financial Reporting', icon: PieChart },
  { id: 'compliance', label: 'Compliance', icon: FileText },
  { id: 'growth', label: 'Business Growth', icon: TrendingUp }
]

export default function PopularUsesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All Industries')

  const filteredUseCases = useCases.filter(useCase => {
    const matchesCategory = selectedCategory === 'all' || useCase.category === selectedCategory
    const matchesIndustry = selectedIndustry === 'All Industries' || useCase.industry === selectedIndustry
    return matchesCategory && matchesIndustry
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-700'
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700'
      case 'advanced':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-neutral-100 text-neutral-700'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-secondary-50 via-white to-accent-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Popular Use Cases &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 to-accent-600"> Success Stories</span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              See how thousands of small business owners save time and money with 
              AI-powered bookkeeping assistance. Real scenarios, real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Try It Free</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white hover:bg-neutral-50 text-neutral-700 font-semibold rounded-xl transition-all duration-200 border border-neutral-200 hover:border-neutral-300 shadow-md hover:shadow-lg"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg">
              <div className="text-3xl font-bold text-secondary-600 mb-2">50,000+</div>
              <div className="text-neutral-600">Questions Answered</div>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg">
              <div className="text-3xl font-bold text-accent-600 mb-2">15+ Hours</div>
              <div className="text-neutral-600">Average Time Saved/Month</div>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-neutral-600">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="py-12 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Category Filters */}
            <div>
              <h3 className="text-sm font-medium text-neutral-700 mb-3">Filter by Category:</h3>
              <div className="flex flex-wrap gap-2">
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
            </div>

            {/* Industry Filter */}
            <div>
              <h3 className="text-sm font-medium text-neutral-700 mb-3">Filter by Industry:</h3>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-2 border border-neutral-200 rounded-xl bg-white text-neutral-700 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Grid */}
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredUseCases.map((useCase) => {
              const Icon = useCase.icon
              return (
                <div
                  key={useCase.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-secondary-200 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-secondary-100 to-accent-100 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-secondary-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-neutral-900 mb-1">
                            {useCase.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-sm text-neutral-500">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(useCase.difficulty)}`}>
                              {useCase.difficulty}
                            </span>
                            <span>•</span>
                            <span>{useCase.industry}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-green-600">
                          Saves {useCase.timesSaved}
                        </div>
                      </div>
                    </div>

                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>

                    <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-xl p-6">
                      <h4 className="text-sm font-medium text-neutral-700 mb-3 flex items-center space-x-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>Real Example:</span>
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed italic">
                        {useCase.example}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-secondary-50 to-accent-50 px-8 py-4 border-t border-neutral-100">
                    <Link
                      href="/"
                      className="inline-flex items-center space-x-2 text-secondary-600 hover:text-secondary-700 font-medium transition-colors"
                    >
                      <span>Try this scenario</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredUseCases.length === 0 && (
            <div className="text-center py-12">
              <Sparkles className="w-16 h-16 text-neutral-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-neutral-500 mb-4">
                No use cases found
              </h3>
              <p className="text-neutral-400 mb-6">
                Try selecting different filters or browse all categories
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedIndustry('All Industries')
                }}
                className="px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-medium rounded-xl transition-colors"
              >
                Show All Use Cases
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Real business owners sharing how Pocket Bookkeeper transformed their financial management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                business: 'Freelance Designer',
                savings: 'Saved $3,000/year',
                quote: 'I went from spending 6 hours a week on bookkeeping to just 1 hour. The AI caught deductions I never knew existed.',
                rating: 5
              },
              {
                name: 'Mike Rodriguez',
                business: 'Restaurant Owner',
                savings: '40% less tax prep time',
                quote: 'Managing inventory and food costs used to be a nightmare. Now I have clear insights into my profit margins.',
                rating: 5
              },
              {
                name: 'Jennifer Park',
                business: 'E-commerce Store',
                savings: '$5,200 in found deductions',
                quote: 'The AI helped me navigate sales tax across 15 states. What used to take days now takes minutes.',
                rating: 5
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-neutral-600 mb-6 leading-relaxed">
                  "{story.quote}"
                </blockquote>
                <div className="border-t border-neutral-100 pt-4">
                  <div className="font-semibold text-neutral-900">{story.name}</div>
                  <div className="text-neutral-600 text-sm mb-2">{story.business}</div>
                  <div className="text-green-600 font-medium text-sm">{story.savings}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-20 bg-gradient-to-r from-secondary-500 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of small business owners who've transformed their bookkeeping with AI assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-secondary-600 font-semibold rounded-xl hover:bg-neutral-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start Free Today</span>
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-200 border border-white/20 hover:border-white/40"
            >
              <span>View FAQ</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}