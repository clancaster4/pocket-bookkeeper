import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, CheckCircle, Camera, DollarSign, TrendingUp, Package, FileText, Calculator, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Photography Studio Bookkeeping: Managing Equipment Rentals and Session Fees',
  description: 'Complete bookkeeping guide for photographers. Learn to depreciate gear, track travel expenses, manage wedding and portrait session invoicing with AI automation.',
  keywords: [
    'photography studio bookkeeping',
    'photographer accounting software',
    'camera equipment depreciation',
    'photography business expenses',
    'wedding photography invoicing',
    'portrait session pricing',
    'photography travel expenses',
    'photo studio tax deductions',
    'freelance photographer bookkeeping',
    'photography business financial management'
  ],
  openGraph: {
    title: 'Photography Studio Bookkeeping: Equipment, Sessions & Tax Guide',
    description: 'Master photography business finances. Track equipment depreciation, manage client sessions, and maximize tax deductions with AI bookkeeping.',
    type: 'article',
    url: 'https://myaibookkeeper.com/blog/photography-studio-bookkeeping-equipment-session-fees',
  }
}

export default function PhotographyBookkeeping() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="bg-gradient-to-br from-slate-50 via-white to-gray-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-slate-600 hover:text-slate-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-neutral-600">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full font-medium">
                Creative Services
              </span>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <time dateTime="2024-12-29">December 29, 2024</time>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>9 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight">
              Photography Studio Bookkeeping: Handling Equipment Rentals and Session Fees
            </h1>
            
            <p className="text-xl text-neutral-600">
              Master the financial side of your photography business. Learn equipment depreciation strategies, 
              travel expense tracking, and efficient invoicing for weddings and portrait sessions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-neutral-700 mb-8">
            Professional photography combines artistic vision with complex financial management. Between investing 
            in expensive equipment, traveling to locations, managing client deposits, and tracking session fees, 
            photographers face unique bookkeeping challenges. AI-powered bookkeeping transforms these complexities 
            into streamlined processes, ensuring you capture every deduction while focusing on capturing perfect moments.
          </p>

          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-8 my-8 not-prose">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
              <Camera className="w-6 h-6 mr-3 text-slate-600" />
              Photography Business Financial Challenges
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Package className="w-5 h-5 text-slate-600 mt-1" />
                  <div>
                    <p className="font-semibold">Equipment Investment</p>
                    <p className="text-sm text-neutral-600">Cameras, lenses, lighting worth $10,000-50,000+</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-slate-600 mt-1" />
                  <div>
                    <p className="font-semibold">Variable Pricing Models</p>
                    <p className="text-sm text-neutral-600">Hourly, package, licensing, print sales</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-slate-600 mt-1" />
                  <div>
                    <p className="font-semibold">Seasonal Income Swings</p>
                    <p className="text-sm text-neutral-600">Wedding season vs. winter slowdowns</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Briefcase className="w-5 h-5 text-slate-600 mt-1" />
                  <div>
                    <p className="font-semibold">Multiple Revenue Streams</p>
                    <p className="text-sm text-neutral-600">Sessions, prints, stock photos, workshops</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="w-5 h-5 text-slate-600 mt-1" />
                  <div>
                    <p className="font-semibold">Contract Management</p>
                    <p className="text-sm text-neutral-600">Deposits, payment schedules, cancellations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-slate-600 mt-1" />
                  <div>
                    <p className="font-semibold">Travel & Location Costs</p>
                    <p className="text-sm text-neutral-600">Destination shoots, mileage, accommodations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Equipment Depreciation and Asset Management
          </h2>

          <p className="text-neutral-700 mb-6">
            Photography equipment represents significant capital investment that requires strategic financial planning. 
            AI bookkeeping automates depreciation calculations and tracks equipment lifecycle:
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Smart Equipment Tracking</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-slate-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Section 179 Deduction Optimization</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  AI calculates whether to expense equipment immediately under Section 179 or depreciate over time 
                  based on your income and tax situation. For 2024, deduct up to $1,160,000 in equipment purchases.
                </p>
              </div>

              <div className="border-l-4 border-slate-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Depreciation Schedule Management</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  Automatically tracks 5-year MACRS depreciation for cameras and 7-year for studio equipment. 
                  AI maintains separate schedules for each asset and calculates annual deductions.
                </p>
              </div>

              <div className="border-l-4 border-slate-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Insurance and Warranty Tracking</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  Links equipment purchases with insurance policies and warranties. Alerts for renewal dates 
                  and tracks coverage limits for proper protection of assets.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Typical Photography Equipment Investment</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-neutral-900 mb-3">Essential Gear Costs</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Professional Camera Bodies (2)</span>
                    <span className="font-mono">$6,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lens Collection (5-8 lenses)</span>
                    <span className="font-mono">$8,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lighting Equipment</span>
                    <span className="font-mono">$3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Computer & Editing Setup</span>
                    <span className="font-mono">$4,000</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2">
                    <span>Total Initial Investment</span>
                    <span className="font-mono">$21,000</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-neutral-900 mb-3">Annual Depreciation Impact</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Year 1 (Section 179)</span>
                    <span className="font-mono text-green-600">$21,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Or MACRS Year 1 (20%)</span>
                    <span className="font-mono">$4,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>MACRS Year 2 (32%)</span>
                    <span className="font-mono">$6,720</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax Savings (@ 25% rate)</span>
                    <span className="font-mono text-green-600">$5,250</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Session Fee Structure and Invoice Management
          </h2>

          <p className="text-neutral-700 mb-6">
            Different photography niches require different pricing and invoicing strategies. AI bookkeeping adapts 
            to your specific business model:
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Wedding Photography Financial Management</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Payment Structure Tracking</h4>
                  <ul className="space-y-1 text-sm text-neutral-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Booking deposit (25-50%)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pre-wedding payment (25%)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Final payment on delivery</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Album and print sales</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Average Package Pricing</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Basic (6 hours)</span>
                      <span className="font-mono">$2,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Standard (8 hours)</span>
                      <span className="font-mono">$3,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Premium (Full day)</span>
                      <span className="font-mono">$5,000+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Portrait Session Revenue Tracking</h3>
              <p className="text-neutral-700 mb-4">
                AI categorizes different session types for profitability analysis:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-semibold text-neutral-900">Family Portraits</p>
                  <p className="text-neutral-600 mt-1">Session: $350</p>
                  <p className="text-neutral-600">Avg. Print Sales: $450</p>
                  <p className="text-green-600 font-semibold mt-1">Total: $800</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-semibold text-neutral-900">Senior Photos</p>
                  <p className="text-neutral-600 mt-1">Session: $275</p>
                  <p className="text-neutral-600">Avg. Print Sales: $325</p>
                  <p className="text-green-600 font-semibold mt-1">Total: $600</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-semibold text-neutral-900">Headshots</p>
                  <p className="text-neutral-600 mt-1">Session: $250</p>
                  <p className="text-neutral-600">Digital Package: $150</p>
                  <p className="text-green-600 font-semibold mt-1">Total: $400</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Travel Expenses and Location Shoot Management
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Deductible Travel Expense Tracking</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Local Shoot Expenses</h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Mileage to venues (IRS rate: $0.67/mile)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Parking and tolls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Location permits and fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Props and styling materials</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Destination Wedding Expenses</h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Airfare and transportation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Hotel accommodations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Meals (50% deductible)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Equipment shipping/insurance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-100 rounded-xl">
              <p className="text-sm text-green-900">
                <strong>AI Advantage:</strong> Automatically separates personal from business expenses during 
                destination shoots. Links travel costs to specific client projects for accurate profitability tracking.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Multiple Revenue Stream Management
          </h2>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Photography Income Sources AI Tracks</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Primary Services</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Wedding Photography</span>
                    <span className="text-neutral-600">45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Portrait Sessions</span>
                    <span className="text-neutral-600">25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Commercial Work</span>
                    <span className="text-neutral-600">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Event Coverage</span>
                    <span className="text-neutral-600">10%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Passive Income Streams</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Stock Photography</span>
                    <span className="text-neutral-600">$200/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Print Sales</span>
                    <span className="text-neutral-600">$500/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Workshops/Teaching</span>
                    <span className="text-neutral-600">$800/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Preset Sales</span>
                    <span className="text-neutral-600">$150/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Tax Optimization Strategies for Photographers
          </h2>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Maximizing Photography Business Deductions</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Studio/Office</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Studio rent or home office</li>
                  <li>• Utilities and internet</li>
                  <li>• Studio props and backdrops</li>
                  <li>• Office furniture</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Professional Development</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Workshop attendance</li>
                  <li>• Online courses</li>
                  <li>• Professional memberships</li>
                  <li>• Industry conferences</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Marketing & Software</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Website and hosting</li>
                  <li>• Adobe Creative Suite</li>
                  <li>• Gallery software</li>
                  <li>• Social media advertising</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 mt-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Streamline Your Photography Business Finances
            </h2>
            <p className="text-neutral-700 mb-6">
              Let AI handle the complex financial tracking while you focus on creating stunning images. From 
              equipment depreciation to multi-payment wedding contracts, automated bookkeeping ensures every 
              dollar is tracked and every deduction is captured.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-700 hover:to-gray-800 text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Photography Bookkeeping
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}