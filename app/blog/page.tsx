import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Users, Bot, AlertCircle, DollarSign, Building, PieChart, Target, Package, Calculator, Percent, Receipt, RefreshCw, Truck, Camera, Palette, Coffee, Cake, Trees, Wrench, Utensils } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - AI Bookkeeping Tips & Small Business Finance Guides',
  description: 'Expert guides on DIY bookkeeping, AI accounting tools, and financial management tips for small business owners, freelancers, and solopreneurs.',
  keywords: [
    'bookkeeping blog',
    'small business accounting tips',
    'AI bookkeeping guides',
    'freelancer finance advice',
    'DIY bookkeeping tutorials',
    'accounting software reviews',
    'bookkeeping automation tips',
    'financial fundamentals',
    'business assets management',
    'liability optimization',
    'revenue growth strategies',
    'expense management'
  ],
  openGraph: {
    title: 'Blog - My AI Bookkeeper',
    description: 'Expert guides on AI-powered bookkeeping and financial management for small businesses',
    type: 'website',
    url: 'https://myaibookkeeper.com/blog',
  }
}

const blogPosts = [
  // Original Featured Posts
  {
    slug: 'diy-bookkeeping-small-business-ai-saves-time',
    title: 'DIY Bookkeeping for Small Business Owners: How AI Can Save You 10 Hours a Month',
    excerpt: 'Discover how AI-powered bookkeeping tools can transform your DIY bookkeeping process, saving you 10+ hours monthly while improving accuracy and tax readiness.',
    date: '2024-12-28',
    readTime: '8 min read',
    icon: Clock,
    category: 'DIY Bookkeeping',
    featured: true
  },
  {
    slug: 'best-quickbooks-alternatives-freelancers-2025',
    title: 'The Best QuickBooks Alternatives for Freelancers in 2025 (Including AI Tools)',
    excerpt: 'Compare top QuickBooks alternatives designed for freelancers, including affordable AI-powered bookkeeping solutions that automate expense tracking and tax preparation.',
    date: '2024-12-27',
    readTime: '10 min read',
    icon: TrendingUp,
    category: 'Software Reviews',
    featured: true
  },
  
  // Financial Fundamentals - Featured
  {
    slug: 'assets-101-understanding-balance-sheet-building-blocks',
    title: 'Assets 101: Understanding the Building Blocks of Your Balance Sheet',
    excerpt: 'Master business assets and their role in financial health. Learn about current assets, fixed assets, and optimization strategies.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: Building,
    category: 'Financial Fundamentals',
    featured: true
  },
  {
    slug: 'working-capital-lifeline-business-operations',
    title: 'Working Capital: The Lifeline of Your Business Operations',
    excerpt: 'Understand working capital management to ensure smooth operations, meet obligations, and support business growth.',
    date: '2024-12-29',
    readTime: '9 min read',
    icon: RefreshCw,
    category: 'Financial Fundamentals',
    featured: true
  },
  
  // Original Non-Featured Posts
  {
    slug: 'how-to-do-bookkeeping-without-accountant',
    title: 'How to Do Your Own Bookkeeping Without an Accountant (Step-by-Step Guide)',
    excerpt: 'Learn how to manage your small business bookkeeping yourself with this comprehensive step-by-step guide, including AI tools that make the process simple and error-free.',
    date: '2024-12-26',
    readTime: '12 min read',
    icon: BookOpen,
    category: 'How-To Guides',
    featured: false
  },
  {
    slug: 'ai-vs-human-bookkeeper-small-business',
    title: 'AI vs Human Bookkeeper: Which Is Right for Your Small Business?',
    excerpt: 'Compare the pros and cons of AI bookkeeping tools versus traditional human bookkeepers to make the best decision for your small business needs and budget.',
    date: '2024-12-25',
    readTime: '9 min read',
    icon: Bot,
    category: 'AI Technology',
    featured: false
  },
  {
    slug: '5-bookkeeping-mistakes-small-business-owners',
    title: '5 Bookkeeping Mistakes Small Business Owners Make (and How AI Can Fix Them)',
    excerpt: 'Avoid these common bookkeeping mistakes that cost small business owners time and money. Learn how AI automation can prevent errors and keep you tax-ready year-round.',
    date: '2024-12-24',
    readTime: '7 min read',
    icon: AlertCircle,
    category: 'Tips & Mistakes',
    featured: false
  },
  
  // Additional AI & Software Articles
  {
    slug: 'ai-bookkeeping-software-ultimate-guide-2025',
    title: 'AI Bookkeeping Software: The Ultimate Guide for Small Business Owners in 2025',
    excerpt: 'Comprehensive guide to AI bookkeeping software, comparing features, benefits, and implementation strategies for small businesses.',
    date: '2024-12-29',
    readTime: '10 min read',
    icon: Bot,
    category: 'AI Technology',
    featured: false
  },
  {
    slug: 'quickbooks-alternatives-affordable-ai-startups',
    title: 'QuickBooks Alternatives: 7 Affordable AI Bookkeeping Tools for Startups',
    excerpt: 'Discover affordable AI-powered alternatives to QuickBooks designed specifically for startups and growing businesses.',
    date: '2024-12-29',
    readTime: '9 min read',
    icon: DollarSign,
    category: 'Software Reviews',
    featured: false
  },
  {
    slug: 'small-business-taxes-diy-ai-bookkeeping',
    title: 'How to Do Small Business Taxes with DIY AI Bookkeeping',
    excerpt: 'Step-by-step guide to preparing your small business taxes using AI bookkeeping tools for maximum accuracy and deductions.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: Receipt,
    category: 'Tax Preparation',
    featured: false
  },
  {
    slug: 'ai-bookkeeping-saves-freelancers-financial-headaches',
    title: 'How AI Bookkeeping Saves Freelancers from Financial Headaches',
    excerpt: 'Learn how AI bookkeeping specifically addresses freelancer challenges like irregular income and expense tracking.',
    date: '2024-12-29',
    readTime: '7 min read',
    icon: Users,
    category: 'Freelancer Finance',
    featured: false
  },
  
  // Financial Fundamentals Series
  {
    slug: 'managing-liabilities-keeping-business-debts-in-check',
    title: 'Managing Liabilities: How to Keep Your Business Debts in Check',
    excerpt: 'Master liability management for business success with strategies for debt optimization and healthy debt-to-equity ratios.',
    date: '2024-12-29',
    readTime: '9 min read',
    icon: AlertCircle,
    category: 'Financial Fundamentals',
    featured: false
  },
  {
    slug: 'equity-explained-company-financial-health',
    title: 'Equity Explained: What It Means for Your Company\'s Financial Health',
    excerpt: 'Understand business equity, its components, and how it reflects your company\'s true value and financial health.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: PieChart,
    category: 'Financial Fundamentals',
    featured: false
  },
  {
    slug: 'boosting-revenue-strategies-grow-top-line',
    title: 'Boosting Revenue: Top Strategies to Grow Your Top Line',
    excerpt: 'Discover proven strategies to boost revenue, diversify income streams, and accelerate top-line growth.',
    date: '2024-12-29',
    readTime: '9 min read',
    icon: TrendingUp,
    category: 'Revenue Growth',
    featured: false
  },
  {
    slug: 'cutting-expenses-without-sacrificing-quality',
    title: 'Cutting Expenses Without Sacrificing Quality: A Practical Guide',
    excerpt: 'Learn how to strategically reduce business expenses while maintaining quality and customer satisfaction.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: Target,
    category: 'Cost Management',
    featured: false
  },
  {
    slug: 'net-income-ultimate-measure-profitability',
    title: 'Net Income: Why It\'s the Ultimate Measure of Profitability',
    excerpt: 'Master net income analysis to understand true profitability and make data-driven business decisions.',
    date: '2024-12-29',
    readTime: '7 min read',
    icon: Calculator,
    category: 'Profitability',
    featured: false
  },
  {
    slug: 'accounts-receivable-streamline-collections-cash-flow',
    title: 'Accounts Receivable: How to Streamline Collections and Improve Cash Flow',
    excerpt: 'Optimize accounts receivable processes to accelerate collections and improve cash flow management.',
    date: '2024-12-29',
    readTime: '9 min read',
    icon: DollarSign,
    category: 'Cash Flow',
    featured: false
  },
  {
    slug: 'accounts-payable-best-practices-managing-what-you-owe',
    title: 'Accounts Payable: Best Practices for Managing What You Owe',
    excerpt: 'Master accounts payable management to optimize cash flow and maintain vendor relationships.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: Receipt,
    category: 'Cash Flow',
    featured: false
  },
  {
    slug: 'power-of-cash-liquidity-business-success',
    title: 'The Power of Cash: Why Liquidity Is Key to Business Success',
    excerpt: 'Understand why cash is king and learn strategies to maintain optimal liquidity for growth.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: DollarSign,
    category: 'Cash Management',
    featured: false
  },
  {
    slug: 'inventory-management-balancing-stock-maximize-profits',
    title: 'Inventory Management: Balancing Stock to Maximize Profits',
    excerpt: 'Master inventory management techniques to reduce carrying costs and maximize profitability.',
    date: '2024-12-29',
    readTime: '9 min read',
    icon: Package,
    category: 'Operations',
    featured: false
  },
  {
    slug: 'fixed-assets-optimize-long-term-investments',
    title: 'Fixed Assets: How to Optimize Long-Term Investments for Growth',
    excerpt: 'Learn how to strategically manage fixed assets to maximize ROI and support long-term growth.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: Building,
    category: 'Asset Management',
    featured: false
  },
  {
    slug: 'current-assets-key-short-term-financial-stability',
    title: 'Current Assets: The Key to Short-Term Financial Stability',
    excerpt: 'Master current asset management to ensure liquidity and maintain financial flexibility.',
    date: '2024-12-29',
    readTime: '7 min read',
    icon: Clock,
    category: 'Asset Management',
    featured: false
  },
  {
    slug: 'navigating-current-liabilities-staying-financially-agile',
    title: 'Navigating Current Liabilities: Tips for Staying Financially Agile',
    excerpt: 'Learn to effectively manage current liabilities to maintain financial agility.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: AlertCircle,
    category: 'Debt Management',
    featured: false
  },
  {
    slug: 'long-term-liabilities-sustainable-debt-management',
    title: 'Long-Term Liabilities: Planning for Sustainable Debt Management',
    excerpt: 'Master long-term liability management for sustainable growth and financial stability.',
    date: '2024-12-29',
    readTime: '9 min read',
    icon: Calendar,
    category: 'Debt Management',
    featured: false
  },
  {
    slug: 'retained-earnings-fuel-business-future-growth',
    title: 'Retained Earnings: How They Fuel Your Business\'s Future Growth',
    excerpt: 'Understand how retained earnings drive growth and optimal profit retention strategies.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: TrendingUp,
    category: 'Growth Strategy',
    featured: false
  },
  {
    slug: 'gross-profit-secrets-increase-margins',
    title: 'Gross Profit Secrets: How to Increase Your Margins',
    excerpt: 'Discover proven strategies to increase gross profit margins through pricing and cost management.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: Calculator,
    category: 'Profitability',
    featured: false
  },
  {
    slug: 'operating-income-measuring-business-core-performance',
    title: 'Operating Income: Measuring Your Business\'s Core Performance',
    excerpt: 'Master operating income analysis to evaluate core business performance.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: Target,
    category: 'Performance Metrics',
    featured: false
  },
  {
    slug: 'cost-of-goods-sold-strategies-lower-costs',
    title: 'Cost of Goods Sold: Strategies to Lower Costs and Boost Profits',
    excerpt: 'Learn effective strategies to reduce COGS while maintaining quality.',
    date: '2024-12-29',
    readTime: '9 min read',
    icon: Package,
    category: 'Cost Management',
    featured: false
  },
  {
    slug: 'depreciation-demystified-impact-financial-statements',
    title: 'Depreciation Demystified: How It Impacts Your Financial Statements',
    excerpt: 'Understand depreciation methods and their strategic use in financial planning.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: TrendingUp,
    category: 'Accounting Concepts',
    featured: false
  },
  {
    slug: 'amortization-understanding-role-income-statement',
    title: 'Amortization: Understanding Its Role in Your Income Statement',
    excerpt: 'Master amortization concepts for intangible assets and loans.',
    date: '2024-12-29',
    readTime: '7 min read',
    icon: Calculator,
    category: 'Accounting Concepts',
    featured: false
  },
  {
    slug: 'shareholders-equity-what-tells-investors',
    title: 'Shareholders\' Equity: What It Tells Investors About Your Company',
    excerpt: 'Understand how shareholders\' equity reflects company value to investors.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: Users,
    category: 'Investor Relations',
    featured: false
  },
  {
    slug: 'managing-debt-balance-borrowing-financial-health',
    title: 'Managing Debt: How to Balance Borrowing with Financial Health',
    excerpt: 'Learn to strategically manage business debt while maintaining financial health.',
    date: '2024-12-29',
    readTime: '9 min read',
    icon: DollarSign,
    category: 'Debt Management',
    featured: false
  },
  {
    slug: 'cash-flow-essentials-keeping-business-liquid',
    title: 'Cash Flow Essentials: Keeping Your Business Liquid and Thriving',
    excerpt: 'Master cash flow management essentials to maintain liquidity and support growth.',
    date: '2024-12-29',
    readTime: '9 min read',
    icon: RefreshCw,
    category: 'Cash Flow',
    featured: false
  },
  {
    slug: 'accrued-expenses-account-hidden-costs',
    title: 'Accrued Expenses: How to Account for Hidden Costs',
    excerpt: 'Understand accrued expenses and their impact on financial statements.',
    date: '2024-12-29',
    readTime: '7 min read',
    icon: Receipt,
    category: 'Accounting Concepts',
    featured: false
  },
  {
    slug: 'prepaid-expenses-timing-matters-financial-reporting',
    title: 'Prepaid Expenses: Why Timing Matters in Financial Reporting',
    excerpt: 'Learn proper accounting for prepaid expenses and their cash flow impact.',
    date: '2024-12-29',
    readTime: '7 min read',
    icon: Clock,
    category: 'Accounting Concepts',
    featured: false
  },
  {
    slug: 'controlling-operating-expenses-lean-business-operations',
    title: 'Controlling Operating Expenses: Tips for Lean Business Operations',
    excerpt: 'Discover strategies to control operating expenses while maintaining efficiency.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: Target,
    category: 'Cost Management',
    featured: false
  },
  {
    slug: 'interest-expense-borrowing-costs-affect-bottom-line',
    title: 'Interest Expense: How Borrowing Costs Affect Your Bottom Line',
    excerpt: 'Understand how interest expenses impact profitability and optimization strategies.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: Percent,
    category: 'Debt Management',
    featured: false
  },
  {
    slug: 'taxes-business-smart-strategies-minimize-burden',
    title: 'Taxes and Your Business: Smart Strategies to Minimize Tax Burden',
    excerpt: 'Learn legal strategies to minimize business taxes through proper planning.',
    date: '2024-12-29',
    readTime: '9 min read',
    icon: Receipt,
    category: 'Tax Planning',
    featured: false
  },
  {
    slug: 'dividends-balancing-shareholder-rewards-company-growth',
    title: 'Dividends: Balancing Shareholder Rewards with Company Growth',
    excerpt: 'Master dividend strategy to balance shareholder returns with growth needs.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: DollarSign,
    category: 'Investor Relations',
    featured: false
  },
  
  // Industry-Specific Bookkeeping Guides
  {
    slug: 'pet-grooming-business-bookkeeping-guide',
    title: 'Pet Grooming Business Bookkeeping: Tracking Supplies and Appointment Revenues',
    excerpt: 'Complete bookkeeping guide for pet groomers covering inventory management, appointment scheduling, and seasonal revenue tracking.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: Users,
    category: 'Industry Guides',
    featured: false
  },
  {
    slug: 'photography-studio-bookkeeping-equipment-session-fees',
    title: 'Photography Studio Bookkeeping: Managing Equipment Rentals and Session Fees',
    excerpt: 'Master photography business finances with equipment depreciation, session pricing, and travel expense tracking.',
    date: '2024-12-29',
    readTime: '9 min read',
    icon: Camera,
    category: 'Industry Guides',
    featured: false
  },
  {
    slug: 'graphic-design-agency-bookkeeping-project-billing',
    title: 'Graphic Design Agency Bookkeeping: Project Billing and Software Subscriptions',
    excerpt: 'Complete guide for graphic designers on tracking projects, managing software costs, and optimizing creative business finances.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: Palette,
    category: 'Industry Guides',
    featured: false
  },
  {
    slug: 'cafe-coffee-shop-bookkeeping-cash-flow-ingredients',
    title: 'Cafe and Coffee Shop Bookkeeping: Daily Cash Flows and Ingredient Costs',
    excerpt: 'Master cafe bookkeeping with POS reconciliation, ingredient tracking, and peak-hour staffing optimization.',
    date: '2024-12-29',
    readTime: '9 min read',
    icon: Coffee,
    category: 'Industry Guides',
    featured: false
  },
  {
    slug: 'bakery-bookkeeping-batch-costing-seasonal-sales',
    title: 'Bakery Bookkeeping: Batch Costing, Seasonal Sales, and Special Orders',
    excerpt: 'Complete bakery bookkeeping guide covering batch cost calculations, seasonal fluctuations, and special order pricing.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: Cake,
    category: 'Industry Guides',
    featured: false
  },
  {
    slug: 'landscaping-service-bookkeeping-seasonal-equipment',
    title: 'Landscaping Service Bookkeeping: Seasonal Revenue and Equipment Costs',
    excerpt: 'Master landscaping business bookkeeping with seasonal contract management and equipment depreciation strategies.',
    date: '2024-12-29',
    readTime: '9 min read',
    icon: Trees,
    category: 'Industry Guides',
    featured: false
  },
  {
    slug: 'plumbing-business-bookkeeping-service-calls-inventory',
    title: 'Plumbing Business Bookkeeping: Service Calls, Parts Inventory, and Emergency Jobs',
    excerpt: 'Complete plumbing business guide for tracking service calls, managing parts inventory, and pricing emergency work.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: Wrench,
    category: 'Industry Guides',
    featured: false
  },
  {
    slug: 'online-course-creator-bookkeeping-platform-fees-royalties',
    title: 'Online Course Creator Bookkeeping: Platform Fees, Royalties, and Student Payments',
    excerpt: 'Master online course business bookkeeping with platform fee tracking, royalty management, and launch revenue optimization.',
    date: '2024-12-29',
    readTime: '9 min read',
    icon: BookOpen,
    category: 'Industry Guides',
    featured: false
  },
  {
    slug: 'content-creator-bookkeeping-youtube-podcast-sponsorships',
    title: 'Content Creator Bookkeeping: YouTube, Podcast Revenue, and Sponsorship Tracking',
    excerpt: 'Complete guide for content creators on tracking multiple revenue streams, sponsorships, and equipment expenses.',
    date: '2024-12-29',
    readTime: '8 min read',
    icon: Users,
    category: 'Industry Guides',
    featured: false
  },
  {
    slug: 'food-truck-operator-bookkeeping-permits-locations',
    title: 'Food Truck Operator Bookkeeping: Location Permits and Mobile Inventory Management',
    excerpt: 'Master food truck finances with location-based revenue tracking, permit cost management, and mobile inventory optimization.',
    date: '2024-12-29',
    readTime: '10 min read',
    icon: Truck,
    category: 'Industry Guides',
    featured: false
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-secondary-50 via-white to-accent-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
              AI Bookkeeping Blog
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Expert guides, tips, and insights on DIY bookkeeping, AI accounting tools, and financial management for small business owners
            </p>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-8">Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {blogPosts.filter(post => post.featured).map((post) => {
            const Icon = post.icon
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-100"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-secondary-100 rounded-lg group-hover:bg-secondary-200 transition-colors">
                      <Icon className="w-5 h-5 text-secondary-600" />
                    </div>
                    <span className="text-sm font-medium text-secondary-600">{post.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-secondary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-secondary-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* All Posts */}
        <h2 className="text-2xl font-bold text-neutral-900 mb-8">All Articles</h2>
        <div className="space-y-6">
          {blogPosts.map((post) => {
            const Icon = post.icon
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100 p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-neutral-100 rounded-lg group-hover:bg-secondary-100 transition-colors">
                    <Icon className="w-5 h-5 text-neutral-600 group-hover:text-secondary-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-medium text-secondary-600">{post.category}</span>
                      <span className="text-sm text-neutral-400">•</span>
                      <span className="text-sm text-neutral-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-secondary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-neutral-600 mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-neutral-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                  <ArrowRight className="flex-shrink-0 w-5 h-5 text-neutral-400 group-hover:text-secondary-500 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-secondary-50 to-accent-50 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Ready to Transform Your Bookkeeping?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Try My AI Bookkeeper free today and discover how AI can simplify your business finances
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}