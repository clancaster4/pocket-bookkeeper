import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, CheckCircle, FileText, DollarSign, AlertTriangle, Download, Shield, Calculator, Brain, TrendingUp, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Do Small Business Taxes with DIY AI Bookkeeping',
  description: 'Complete guide to preparing small business taxes using AI bookkeeping. Learn how to stay tax-ready year-round, export reports, and avoid common tax season mistakes.',
  keywords: [
    'diy bookkeeping taxes',
    'small business tax preparation',
    'ai bookkeeping for taxes',
    'tax ready bookkeeping',
    'small business tax filing',
    'bookkeeping tax reports',
    'quarterly tax preparation',
    'tax deductions tracking',
    'automated tax preparation',
    'business tax software'
  ],
  openGraph: {
    title: 'Small Business Taxes Made Easy with AI Bookkeeping | Complete Guide',
    description: 'Learn how AI bookkeeping keeps you tax-ready year-round. Step-by-step guide to exporting reports and avoiding costly tax mistakes.',
    type: 'article',
    url: 'https://myaibookkeeper.com/blog/small-business-taxes-diy-ai-bookkeeping',
  },
  alternates: {
    canonical: 'https://myaibookkeeper.com/blog/small-business-taxes-diy-ai-bookkeeping'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Do Small Business Taxes with DIY AI Bookkeeping',
  description: 'Step-by-step guide to preparing and filing small business taxes using AI bookkeeping software.',
  author: {
    '@type': 'Organization',
    name: 'My AI Bookkeeper'
  },
  datePublished: '2024-12-29',
  dateModified: '2024-12-29'
}

export default function TaxPreparationGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
        {/* Header */}
        <div className="bg-gradient-to-br from-secondary-50 via-white to-accent-50 border-b border-neutral-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-secondary-600 hover:text-secondary-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-sm text-neutral-600">
                <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full font-medium">
                  Tax Guide
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <time dateTime="2024-12-29">December 29, 2024</time>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>10 min read</span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight">
                How to Do Small Business Taxes with DIY AI Bookkeeping
              </h1>
              
              <p className="text-xl text-neutral-600">
                Tax season doesn't have to be a nightmare. Learn how AI bookkeeping keeps you tax-ready 365 days a year, 
                automatically tracks deductions, and generates CPA-ready reports in seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <p className="lead text-xl text-neutral-700 mb-8">
              If you're like most small business owners, tax season triggers a unique blend of panic, procrastination, 
              and paperwork paralysis. You're scrambling through receipts, desperately trying to remember what that 
              $347 charge was for, and wondering if you've missed thousands in deductions. But here's the truth: 
              with AI bookkeeping, tax preparation becomes a year-round background process that happens automatically. 
              No more tax season stress—just organized, accurate, deduction-maximized books ready whenever you need them.
            </p>

            {/* Tax Stress Statistics */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 my-8 not-prose">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Why Taxes Stress Out Small Business Owners</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">😰</span>
                    <div>
                      <p className="font-semibold text-neutral-900">73% Fear Audit</p>
                      <p className="text-sm text-neutral-700">Worry about missing documentation or errors</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">💸</span>
                    <div>
                      <p className="font-semibold text-neutral-900">$4,500 Average Missed Deductions</p>
                      <p className="text-sm text-neutral-700">Per year from poor record-keeping</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⏰</span>
                    <div>
                      <p className="font-semibold text-neutral-900">40 Hours Average Prep Time</p>
                      <p className="text-sm text-neutral-700">Gathering documents and organizing receipts</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📅</span>
                    <div>
                      <p className="font-semibold text-neutral-900">67% File Late or Extension</p>
                      <p className="text-sm text-neutral-700">Due to disorganized bookkeeping</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔍</span>
                    <div>
                      <p className="font-semibold text-neutral-900">89% Can't Find All Receipts</p>
                      <p className="text-sm text-neutral-700">Lost deductions from missing documentation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">💰</span>
                    <div>
                      <p className="font-semibold text-neutral-900">$1,200+ CPA Fees</p>
                      <p className="text-sm text-neutral-700">Extra charges for disorganized books</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
              Common Tax Filing Challenges (And Their Root Causes)
            </h2>

            <p className="text-neutral-700 mb-6">
              Most tax filing nightmares stem from the same preventable bookkeeping mistakes. Here are the biggest 
              challenges and why they happen:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Challenge #1: Missing or Lost Receipts
                </h3>
                <p className="text-neutral-700 mb-3">
                  <strong>The Problem:</strong> Physical receipts fade, get lost, or were never saved. Digital receipts 
                  buried in email. No system for capture and storage.
                </p>
                <p className="text-neutral-700">
                  <strong>The Cost:</strong> Average $2,000-5,000 in lost deductions annually. Potential audit triggers 
                  from undocumented expenses.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Challenge #2: Incorrect Expense Categorization
                </h3>
                <p className="text-neutral-700 mb-3">
                  <strong>The Problem:</strong> Mixing personal and business expenses. Wrong categories mean wrong 
                  deductions. Meals at 100% instead of 50%. Home office calculated incorrectly.
                </p>
                <p className="text-neutral-700">
                  <strong>The Cost:</strong> IRS penalties for incorrect deductions. Overpaying by claiming too little. 
                  Audit red flags from suspicious patterns.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Challenge #3: Quarterly Tax Calculation Errors
                </h3>
                <p className="text-neutral-700 mb-3">
                  <strong>The Problem:</strong> No real-time profit tracking. Guessing at quarterly payments. 
                  Forgetting to account for all income sources.
                </p>
                <p className="text-neutral-700">
                  <strong>The Cost:</strong> Underpayment penalties averaging $500-2,000. Overpayment ties up cash flow. 
                  Year-end tax bill surprises.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Challenge #4: Incomplete Mileage Tracking
                </h3>
                <p className="text-neutral-700 mb-3">
                  <strong>The Problem:</strong> Forgetting to log business trips. No distinction between personal and 
                  business miles. Missing documentation for IRS requirements.
                </p>
                <p className="text-neutral-700">
                  <strong>The Cost:</strong> Average $2,500 in missed mileage deductions. Current rate: $0.67/mile 
                  adds up fast.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Challenge #5: Last-Minute Scramble
                </h3>
                <p className="text-neutral-700 mb-3">
                  <strong>The Problem:</strong> Waiting until March to start. 12 months of transactions to categorize. 
                  Memory fades on expense purposes.
                </p>
                <p className="text-neutral-700">
                  <strong>The Cost:</strong> Rush fees from CPAs. Mistakes from hurried preparation. Extensions that 
                  delay refunds.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
              How AI Bookkeeping Keeps You Tax-Ready Year-Round
            </h2>

            <p className="text-neutral-700 mb-8">
              AI bookkeeping transforms tax preparation from a yearly panic to an automated background process. 
              Here's how AI solves each major tax challenge:
            </p>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">AI's Tax-Ready Features</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2">Automatic Receipt Capture & Storage</h4>
                    <p className="text-neutral-700 mb-2">
                      Snap a photo, forward an email, or connect accounts—AI extracts all details and stores permanently 
                      in the cloud. Never lose a receipt again.
                    </p>
                    <p className="text-sm text-green-700 font-semibold">
                      Result: 100% receipt capture, zero lost deductions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Brain className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2">Intelligent Tax Categorization</h4>
                    <p className="text-neutral-700 mb-2">
                      AI learns from millions of transactions to categorize expenses correctly for tax purposes. 
                      Knows meals are 50% deductible, tracks home office percentage, separates personal charges.
                    </p>
                    <p className="text-sm text-green-700 font-semibold">
                      Result: IRS-compliant categories, maximum legal deductions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Calculator className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2">Real-Time Tax Estimates</h4>
                    <p className="text-neutral-700 mb-2">
                      AI calculates your tax liability in real-time based on current profit, deductions, and tax rates. 
                      Sends quarterly payment reminders with exact amounts.
                    </p>
                    <p className="text-sm text-green-700 font-semibold">
                      Result: Never surprised by tax bills, no underpayment penalties
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2">Deduction Discovery Engine</h4>
                    <p className="text-neutral-700 mb-2">
                      AI actively identifies deductions you might miss—suggesting home office calculations, identifying 
                      deductible subscriptions, flagging business meal opportunities.
                    </p>
                    <p className="text-sm text-green-700 font-semibold">
                      Result: Average $3,500 more in deductions found
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FileText className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2">One-Click Tax Reports</h4>
                    <p className="text-neutral-700 mb-2">
                      Generate P&L, expense reports, and tax summaries instantly. Export in CPA-preferred formats. 
                      All documentation attached and organized.
                    </p>
                    <p className="text-sm text-green-700 font-semibold">
                      Result: Tax filing in hours, not weeks
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
              Step-by-Step: Exporting Reports for Taxes
            </h2>

            <p className="text-neutral-700 mb-8">
              When tax time arrives, AI bookkeeping makes report generation effortless. Here's exactly how to get 
              your tax documents ready:
            </p>

            <div className="space-y-8 mb-12">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">Review Year-End Categorizations</h3>
                  <p className="text-neutral-700 mb-4">
                    Ask your AI: "Show me all uncategorized transactions" or "Review my expense categories for tax accuracy." 
                    The AI will flag any transactions that need attention.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <p className="text-sm font-semibold text-blue-900 mb-2">What to Check:</p>
                    <ul className="space-y-1 text-sm text-blue-800">
                      <li>• Personal expenses marked as business</li>
                      <li>• Business expenses in wrong categories</li>
                      <li>• Missing receipts for large purchases</li>
                      <li>• Meals and entertainment at correct percentages</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">Generate Profit & Loss Statement</h3>
                  <p className="text-neutral-700 mb-4">
                    Request: "Generate my P&L for [Tax Year]." AI instantly creates a detailed profit and loss statement 
                    showing all income and expenses by category.
                  </p>
                  <div className="bg-neutral-50 rounded-xl p-4">
                    <p className="text-sm font-semibold text-neutral-900 mb-2">P&L Includes:</p>
                    <ul className="space-y-1 text-sm text-neutral-700">
                      <li>• Total revenue by source</li>
                      <li>• Expenses by IRS category</li>
                      <li>• Net profit/loss calculation</li>
                      <li>• Quarterly breakdown</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">Export Expense Report with Receipts</h3>
                  <p className="text-neutral-700 mb-4">
                    Say: "Create detailed expense report with all receipts attached." AI compiles every business expense 
                    with supporting documentation in a single PDF.
                  </p>
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="text-sm font-semibold text-green-900 mb-2">Report Features:</p>
                    <ul className="space-y-1 text-sm text-green-800">
                      <li>• Chronological expense list</li>
                      <li>• Receipt images attached</li>
                      <li>• Mileage log included</li>
                      <li>• Audit-ready documentation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">Generate Tax Summary Report</h3>
                  <p className="text-neutral-700 mb-4">
                    Request: "Create tax summary for my CPA." AI generates a comprehensive summary with all information 
                    needed for tax filing.
                  </p>
                  <div className="bg-purple-50 rounded-xl p-4">
                    <p className="text-sm font-semibold text-purple-900 mb-2">Tax Summary Contains:</p>
                    <ul className="space-y-1 text-sm text-purple-800">
                      <li>• 1099 income totals</li>
                      <li>• Deductible expenses by category</li>
                      <li>• Quarterly payment history</li>
                      <li>• Home office calculations</li>
                      <li>• Vehicle expense summary</li>
                      <li>• Depreciation schedule</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">Download and Share with CPA</h3>
                  <p className="text-neutral-700 mb-4">
                    Export all reports in your CPA's preferred format (PDF, Excel, CSV). Share via secure link or email. 
                    Your entire year of bookkeeping delivered in minutes.
                  </p>
                  <div className="bg-yellow-50 rounded-xl p-4">
                    <p className="text-sm font-semibold text-yellow-900 mb-2">CPA Will Love:</p>
                    <ul className="space-y-1 text-sm text-yellow-800">
                      <li>• Organized, categorized transactions</li>
                      <li>• Complete receipt documentation</li>
                      <li>• Accurate totals and calculations</li>
                      <li>• No missing information</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Tax Report Examples */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">What Your Tax Reports Look Like</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/80 rounded-xl p-4">
                  <h4 className="font-bold text-neutral-900 mb-3">Schedule C Categories</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-700">Advertising</span>
                      <span className="font-mono">$2,847.32</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-700">Car and truck expenses</span>
                      <span className="font-mono">$4,231.78</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-700">Office expenses</span>
                      <span className="font-mono">$1,923.45</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-700">Supplies</span>
                      <span className="font-mono">$892.11</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-700">Travel & meals (50%)</span>
                      <span className="font-mono">$1,456.89</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/80 rounded-xl p-4">
                  <h4 className="font-bold text-neutral-900 mb-3">Quarterly Tax Calculation</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-700">Q1 Net Profit</span>
                      <span className="font-mono">$18,234.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-700">Self-Employment Tax</span>
                      <span className="font-mono">$2,577.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-700">Federal Income Tax</span>
                      <span className="font-mono">$2,188.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-700">State Tax</span>
                      <span className="font-mono">$547.00</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span className="text-neutral-900">Q1 Payment Due</span>
                      <span className="font-mono">$5,312.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
              Mistakes to Avoid During Tax Season
            </h2>

            <p className="text-neutral-700 mb-8">
              Even with AI bookkeeping, certain mistakes can still cause problems. Here's what to watch out for 
              and how AI helps prevent them:
            </p>

            <div className="space-y-6 mb-12">
              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-xl">
                <h3 className="font-bold text-neutral-900 mb-2">
                  ❌ Mistake #1: Waiting Until the Last Minute
                </h3>
                <p className="text-neutral-700 mb-3">
                  Even with AI organizing everything, review your books monthly. Catching errors early prevents 
                  year-end surprises.
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  AI Prevention: Monthly summary alerts, quarterly review reminders
                </p>
              </div>

              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-xl">
                <h3 className="font-bold text-neutral-900 mb-2">
                  ❌ Mistake #2: Mixing Personal and Business
                </h3>
                <p className="text-neutral-700 mb-3">
                  Using business accounts for personal expenses creates audit red flags. Keep everything separate.
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  AI Prevention: Flags suspicious transactions, suggests personal vs business
                </p>
              </div>

              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-xl">
                <h3 className="font-bold text-neutral-900 mb-2">
                  ❌ Mistake #3: Claiming 100% of Meals
                </h3>
                <p className="text-neutral-700 mb-3">
                  Most meals are only 50% deductible. Claiming 100% triggers audits.
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  AI Prevention: Automatically applies correct deduction percentages
                </p>
              </div>

              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-xl">
                <h3 className="font-bold text-neutral-900 mb-2">
                  ❌ Mistake #4: Forgetting Quarterly Payments
                </h3>
                <p className="text-neutral-700 mb-3">
                  Missing quarterly deadlines results in penalties and interest charges.
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  AI Prevention: Calculates amounts due, sends payment reminders
                </p>
              </div>

              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-xl">
                <h3 className="font-bold text-neutral-900 mb-2">
                  ❌ Mistake #5: Poor Receipt Documentation
                </h3>
                <p className="text-neutral-700 mb-3">
                  IRS requires receipts for expenses over $75. Credit card statements aren't enough.
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  AI Prevention: Prompts for receipt capture, stores permanently
                </p>
              </div>
            </div>

            {/* Year-Round Tax Calendar */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Your Year-Round Tax Calendar with AI</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-neutral-900 mb-3">Quarterly Tasks (Automated)</h4>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>📊 <strong>Month 1:</strong> AI calculates quarterly tax payment</li>
                    <li>💰 <strong>Month 2:</strong> Payment reminder sent</li>
                    <li>✅ <strong>Month 3:</strong> Quarterly review & payment due</li>
                    <li>📈 <strong>Ongoing:</strong> Real-time profit tracking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-3">Annual Tasks (AI-Assisted)</h4>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>📅 <strong>January:</strong> 1099s collected & recorded</li>
                    <li>📝 <strong>February:</strong> Tax report generation</li>
                    <li>🎯 <strong>March:</strong> Final review & filing</li>
                    <li>💡 <strong>April:</strong> Tax planning for next year</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
              Conclusion: DIY Taxes Are Easier with AI Bookkeeping
            </h2>

            <p className="text-neutral-700 mb-6">
              Tax season doesn't have to be stressful. With AI bookkeeping handling the heavy lifting year-round, 
              you're always ready. No more scrambling for receipts, guessing at deductions, or paying rush fees 
              to accountants. Your books are organized, accurate, and tax-optimized every single day.
            </p>

            <p className="text-neutral-700 mb-8">
              The best part? You don't need to be a tax expert. AI understands tax law, knows what's deductible, 
              and keeps you compliant automatically. Just run your business, capture your expenses, and let AI 
              handle the rest. When tax time comes, you're not preparing—you're just downloading reports that 
              have been ready all along.
            </p>

            {/* Key Benefits Summary */}
            <div className="bg-gradient-to-r from-secondary-50 to-accent-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">The AI Tax Advantage</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Save 40+ hours on tax prep</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Find $3,500+ more deductions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Never miss quarterly payments</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">100% receipt documentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Audit-ready books always</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">CPA fees reduced by 50%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-secondary-100 to-accent-100 rounded-2xl p-8 mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Never Stress About Taxes Again
              </h3>
              <p className="text-lg text-neutral-700 mb-6">
                Join thousands of small business owners who've made tax season a non-event with AI bookkeeping. 
                Stay organized, maximize deductions, and file with confidence.
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Brain className="w-5 h-5 mr-2" />
                Start Your Tax-Ready Books Today
              </Link>
              <p className="mt-4 text-sm text-neutral-600">
                Free trial • No credit card • Tax-ready in minutes
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}