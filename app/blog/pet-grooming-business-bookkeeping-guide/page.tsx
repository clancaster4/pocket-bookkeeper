import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, CheckCircle, DollarSign, TrendingUp, Users, Package, Scissors, Heart, AlertCircle, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pet Grooming Business Bookkeeping: Complete Guide for Managing Supplies & Appointments',
  description: 'Master pet grooming business bookkeeping with AI. Learn to track grooming supplies, manage appointment revenues, handle seasonal fluctuations, and maximize profitability.',
  keywords: [
    'pet grooming business bookkeeping',
    'grooming salon accounting',
    'pet business financial management',
    'grooming supplies inventory tracking',
    'appointment revenue management',
    'pet grooming tax deductions',
    'grooming business expenses',
    'pet salon bookkeeping software',
    'dog grooming business accounting',
    'mobile grooming bookkeeping'
  ],
  openGraph: {
    title: 'Pet Grooming Business Bookkeeping: Track Supplies & Maximize Profits',
    description: 'Complete guide to bookkeeping for pet grooming businesses. Learn inventory management, appointment tracking, and seasonal planning with AI automation.',
    type: 'article',
    url: 'https://myaibookkeeper.com/blog/pet-grooming-business-bookkeeping-guide',
  }
}

export default function PetGroomingBookkeeping() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-neutral-600">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">
                Pet Services
              </span>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <time dateTime="2024-12-29">December 29, 2024</time>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight">
              Pet Grooming Business Bookkeeping: Tracking Supplies and Appointment Revenues
            </h1>
            
            <p className="text-xl text-neutral-600">
              Master the financial side of your pet grooming business. Learn how AI bookkeeping helps track 
              inventory, manage seasonal demand, optimize pricing, and maximize profitability per appointment.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-neutral-700 mb-8">
            Running a pet grooming business means juggling appointment bookings, managing expensive supplies, 
            tracking seasonal rushes, and keeping furry clients (and their humans) happy. Between shampooing 
            poodles and trimming terriers, bookkeeping often becomes the neglected task that bites you at tax 
            time. AI bookkeeping transforms this chaos into clarity, automatically tracking every bottle of 
            shampoo, every appointment, and every seasonal trend that affects your bottom line.
          </p>

          {/* Industry Challenges */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 my-8 not-prose">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              <Scissors className="inline w-6 h-6 mr-2" />
              Unique Bookkeeping Challenges for Pet Groomers
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Package className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Supply Cost Management</p>
                    <p className="text-sm text-neutral-600">Premium shampoos, tools wearing out, bulk buying decisions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Appointment No-Shows</p>
                    <p className="text-sm text-neutral-600">Lost revenue from cancellations and reschedules</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Seasonal Fluctuations</p>
                    <p className="text-sm text-neutral-600">Holiday rushes vs. slow January blues</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Client Package Tracking</p>
                    <p className="text-sm text-neutral-600">Monthly packages, loyalty programs, multi-pet discounts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Service Pricing Complexity</p>
                    <p className="text-sm text-neutral-600">Size, breed, behavior, add-on services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Tips & Gratuities</p>
                    <p className="text-sm text-neutral-600">Cash tips, holiday bonuses, staff distribution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Managing Grooming Product Inventories Like a Pro
          </h2>

          <p className="text-neutral-700 mb-6">
            Your grooming supplies are the backbone of your business, but tracking them manually is a nightmare. 
            AI bookkeeping revolutionizes inventory management:
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Smart Inventory Tracking System</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Automatic Reorder Points</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  AI learns your usage patterns and alerts you before running out. Never face an angry poodle parent 
                  because you're out of hypoallergenic shampoo.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Cost-Per-Service Calculation</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  Track exactly how much product each service uses. AI calculates that a large dog bath uses $3.47 
                  in supplies while a small dog uses $1.89.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Bulk Buying Analysis</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  AI compares bulk pricing with storage costs and expiration dates to recommend optimal order quantities.
                </p>
              </div>
            </div>
          </div>

          {/* Supply Cost Breakdown */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Average Supply Costs Per Service</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-neutral-900 mb-3">Basic Grooming Package</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Shampoo & Conditioner</span>
                    <span className="font-mono">$2.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ear & Eye Cleaning</span>
                    <span className="font-mono">$0.75</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nail Care Supplies</span>
                    <span className="font-mono">$0.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Finishing Spray</span>
                    <span className="font-mono">$0.85</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2">
                    <span>Total Supply Cost</span>
                    <span className="font-mono">$4.60</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-neutral-900 mb-3">Premium Spa Package</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Luxury Shampoo Set</span>
                    <span className="font-mono">$5.25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deep Conditioning</span>
                    <span className="font-mono">$2.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Teeth Cleaning</span>
                    <span className="font-mono">$1.75</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Paw Treatment</span>
                    <span className="font-mono">$2.00</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2">
                    <span>Total Supply Cost</span>
                    <span className="font-mono">$11.50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Client Bookings and Revenue Optimization
          </h2>

          <p className="text-neutral-700 mb-6">
            Every appointment represents potential revenue, but also potential loss if not managed properly. 
            Here's how AI transforms appointment management:
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Revenue Tracking by Service Type</h3>
              <p className="text-neutral-700 mb-4">
                AI categorizes revenue by service, breed size, and add-ons to show your most profitable offerings:
              </p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                  <span>Full groom large dogs: $85 average, 45% profit margin</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                  <span>Bath & brush small dogs: $35 average, 60% profit margin</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                  <span>Add-on teeth cleaning: $15, 80% profit margin</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                  <span>De-shedding treatment: $25, 70% profit margin</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">No-Show and Cancellation Management</h3>
              <p className="text-neutral-700 mb-4">
                AI tracks patterns to minimize revenue loss:
              </p>
              <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-neutral-700">
                  <strong>Smart Insights:</strong> AI identifies that Tuesday appointments have 30% higher no-show 
                  rates. Solution: Implement deposit requirements for Tuesday bookings, reducing no-shows by 75%.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Seasonal Demand Fluctuations and Cash Flow
          </h2>

          {/* Seasonal Revenue Chart */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Typical Pet Grooming Seasonal Patterns</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">Peak Seasons 📈</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• November-December (holidays)</li>
                  <li>• April-May (spring cleaning)</li>
                  <li>• July-August (summer cuts)</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-700 mb-2">Moderate Seasons ➡️</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• March (pre-spring)</li>
                  <li>• September-October</li>
                  <li>• June (early summer)</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-red-700 mb-2">Slow Seasons 📉</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• January (post-holiday)</li>
                  <li>• February (winter blues)</li>
                  <li>• Late August (vacation time)</li>
                </ul>
              </div>
            </div>

            <div className="bg-indigo-100 rounded-xl p-4">
              <p className="text-sm text-indigo-900">
                <strong>AI Cash Flow Management:</strong> Based on 3 years of data, AI recommends saving 20% of 
                peak season revenue to cover slow months. This ensures steady cash flow year-round without 
                credit line dependency.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Essential Tax Deductions for Pet Groomers
          </h2>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Deductions AI Never Misses</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Equipment & Supplies</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>✓ Grooming tables and tubs</li>
                  <li>✓ Clippers, scissors, brushes</li>
                  <li>✓ Dryers and cage banks</li>
                  <li>✓ All grooming products</li>
                  <li>✓ Protective equipment (aprons, gloves)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Business Operations</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>✓ Salon rent or home office portion</li>
                  <li>✓ Utilities and water bills</li>
                  <li>✓ Insurance (liability, property)</li>
                  <li>✓ Marketing and advertising</li>
                  <li>✓ Professional development courses</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-900">
                <strong>Mobile Grooming Bonus:</strong> If you run a mobile grooming business, AI tracks vehicle 
                expenses, mileage between appointments, and mobile equipment depreciation for maximum tax savings.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Pricing Strategy and Profitability Analysis
          </h2>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">AI-Powered Pricing Optimization</h3>
            
            <p className="text-neutral-700 mb-6">
              AI analyzes your costs, local competition, and client willingness to pay to suggest optimal pricing:
            </p>

            <div className="bg-white/80 rounded-xl p-6">
              <h4 className="font-semibold text-neutral-900 mb-4">Sample Pricing Analysis for Standard Poodle Groom</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-neutral-600">Direct Costs:</p>
                    <ul className="mt-2 space-y-1">
                      <li>Supplies: $8.50</li>
                      <li>Labor (2 hours @ $20): $40.00</li>
                      <li>Utilities portion: $3.50</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-neutral-600">Indirect Costs:</p>
                    <ul className="mt-2 space-y-1">
                      <li>Rent allocation: $5.00</li>
                      <li>Insurance: $2.00</li>
                      <li>Equipment wear: $3.00</li>
                    </ul>
                  </div>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-semibold">
                    <span>Total Cost:</span>
                    <span>$62.00</span>
                  </div>
                  <div className="flex justify-between text-green-600 font-semibold">
                    <span>Recommended Price (40% margin):</span>
                    <span>$103.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Setting Up Your Pet Grooming Books with AI
          </h2>

          <div className="space-y-6 mb-12">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Connect Your Booking System</h3>
                <p className="text-sm text-neutral-700">
                  Link your appointment software to automatically import revenue and track service types.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Set Up Inventory Tracking</h3>
                <p className="text-sm text-neutral-700">
                  Create categories for different supply types and set reorder points for each product.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Configure Service Categories</h3>
                <p className="text-sm text-neutral-700">
                  Define your services with associated costs to track profitability per appointment type.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Enable Seasonal Analytics</h3>
                <p className="text-sm text-neutral-700">
                  Let AI analyze your historical data to predict busy periods and optimize staffing.
                </p>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Key Metrics AI Tracks for Success</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/80 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-600">$67</p>
                <p className="text-sm text-neutral-600">Average Revenue Per Pet</p>
              </div>
              <div className="bg-white/80 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-600">42%</p>
                <p className="text-sm text-neutral-600">Average Profit Margin</p>
              </div>
              <div className="bg-white/80 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-600">87%</p>
                <p className="text-sm text-neutral-600">Client Retention Rate</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-100 rounded-xl">
              <p className="text-sm text-green-900">
                <strong>Growth Insight:</strong> Groomers using AI bookkeeping report 25% increase in profitability 
                within 6 months through better inventory management and pricing optimization.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Transform Your Pet Grooming Business Finances
            </h2>
            <p className="text-neutral-700 mb-6">
              Stop letting bookkeeping take time away from your furry clients. With AI handling your finances, 
              you can focus on what you do best—making pets look and feel their best. From tracking every bottle 
              of shampoo to optimizing your pricing strategy, AI bookkeeping ensures your grooming business is 
              as financially healthy as your four-legged clients are clean.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Free Trial for Pet Groomers
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}