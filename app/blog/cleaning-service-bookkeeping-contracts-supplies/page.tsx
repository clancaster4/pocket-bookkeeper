import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, CheckCircle, Sparkles, DollarSign, TrendingUp, Home, Users, Package, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cleaning Service Bookkeeping: Contracts, Supplies, and Client Management',
  description: 'Master cleaning business bookkeeping. Track recurring contracts, manage supply costs, optimize crew scheduling, and handle residential vs commercial pricing with AI.',
  keywords: [
    'cleaning service bookkeeping',
    'janitorial business accounting',
    'cleaning supplies cost tracking',
    'recurring contract management',
    'residential cleaning accounting',
    'commercial cleaning bookkeeping',
    'cleaning business tax deductions',
    'maid service financial management',
    'cleaning crew scheduling',
    'cleaning business profitability'
  ],
  openGraph: {
    title: 'Cleaning Service Bookkeeping: Complete Financial Management Guide',
    description: 'Optimize your cleaning business finances. Track contracts, manage supplies, and maximize profitability with AI bookkeeping.',
    type: 'article',
    url: 'https://myaibookkeeper.com/blog/cleaning-service-bookkeeping-contracts-supplies',
  }
}

export default function CleaningServiceBookkeeping() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-neutral-600">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                Service Business
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
              Cleaning Service Bookkeeping: Contracts, Supplies, and Client Management
            </h1>
            
            <p className="text-xl text-neutral-600">
              Navigate the financial complexities of running a cleaning service. Master contract management, 
              supply cost tracking, crew scheduling, and pricing optimization for sustainable growth.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-neutral-700 mb-8">
            Running a profitable cleaning service requires precise financial management across recurring contracts, 
            supply costs, and crew scheduling. AI-powered bookkeeping transforms these complexities into automated 
            workflows, ensuring every client and every clean contributes to your bottom line.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 my-8 not-prose">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Cleaning Service Financial Challenges</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Revenue Management</h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Recurring monthly contracts</li>
                  <li>• One-time deep cleans</li>
                  <li>• Move-in/move-out services</li>
                  <li>• Commercial vs residential rates</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Cost Control</h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Supply inventory tracking</li>
                  <li>• Vehicle and fuel costs</li>
                  <li>• Insurance and bonding</li>
                  <li>• Crew labor optimization</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Contract Management and Recurring Revenue
          </h2>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Service Pricing Structure</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Residential Cleaning</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Weekly Service (2BR)</span>
                    <span className="font-mono">$120</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bi-weekly (3BR)</span>
                    <span className="font-mono">$160</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Deep Clean</span>
                    <span className="font-mono">$250</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Move-out Clean</span>
                    <span className="font-mono">$350</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Commercial Contracts</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Small Office Daily</span>
                    <span className="font-mono">$1,800/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Medical Office</span>
                    <span className="font-mono">$3,200/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Retail Space</span>
                    <span className="font-mono">$2,400/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Post-Construction</span>
                    <span className="font-mono">$0.15/sqft</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Supply Cost Management
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Monthly Supply Analysis</h3>
            <div className="bg-white/80 rounded-xl p-6">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Cleaning Supplies</h4>
                  <ul className="space-y-1">
                    <li>• Chemicals: $450/mo</li>
                    <li>• Paper products: $280/mo</li>
                    <li>• Equipment: $150/mo</li>
                    <li>• Uniforms: $100/mo</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Per-Client Costs</h4>
                  <ul className="space-y-1">
                    <li>• Residential: $8-12</li>
                    <li>• Commercial: $25-40</li>
                    <li>• Deep clean: $15-20</li>
                    <li>• Supplies/revenue: 12%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cost Optimization</h4>
                  <ul className="space-y-1">
                    <li>• Bulk purchasing: -20%</li>
                    <li>• Eco products: +15%</li>
                    <li>• Client-provided: -100%</li>
                    <li>• Waste reduction: -8%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Tax Deductions for Cleaning Services
          </h2>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Maximizing Cleaning Business Deductions</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Equipment & Supplies</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Vacuum cleaners</li>
                  <li>• Cleaning chemicals</li>
                  <li>• Uniforms and PPE</li>
                  <li>• Storage units</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Vehicle Expenses</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Mileage tracking</li>
                  <li>• Insurance premiums</li>
                  <li>• Maintenance costs</li>
                  <li>• Parking fees</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Business Operations</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Liability insurance</li>
                  <li>• Bonding costs</li>
                  <li>• Marketing expenses</li>
                  <li>• Scheduling software</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 mt-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Clean Up Your Financial Management
            </h2>
            <p className="text-neutral-700 mb-6">
              Let AI handle contract tracking, supply cost management, and crew scheduling while you focus on 
              delivering exceptional cleaning services. Automated bookkeeping ensures every client and every 
              clean contributes to sustainable business growth.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Cleaning Service Bookkeeping
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
