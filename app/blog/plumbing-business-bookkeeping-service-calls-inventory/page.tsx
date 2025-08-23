import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, CheckCircle, Wrench, DollarSign, TrendingUp, Truck, Phone, AlertTriangle, Droplets } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plumbing Business Bookkeeping: Service Calls, Parts Inventory, and Emergency Jobs',
  description: 'Master plumbing business bookkeeping. Track service calls, manage parts inventory, price emergency jobs, handle warranty work, and optimize cash flow with AI automation.',
  keywords: [
    'plumbing business bookkeeping',
    'plumber accounting software',
    'service call tracking',
    'plumbing parts inventory',
    'emergency job pricing',
    'plumbing business tax deductions',
    'contractor bookkeeping',
    'plumbing invoice management',
    'warranty work tracking',
    'plumbing business financial management'
  ],
  openGraph: {
    title: 'Plumbing Business Bookkeeping: Complete Financial Management Guide',
    description: 'Optimize plumbing business finances with AI. Track service calls, manage inventory, price emergency work, and maximize profitability.',
    type: 'article',
    url: 'https://myaibookkeeper.com/blog/plumbing-business-bookkeeping-service-calls-inventory',
  }
}

export default function PlumbingBookkeeping() {
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
                Trade Services
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
              Plumbing Business Bookkeeping: Service Calls, Parts Inventory, and Emergency Jobs
            </h1>
            
            <p className="text-xl text-neutral-600">
              Navigate the financial complexities of running a plumbing business. Master service call tracking, 
              parts inventory management, emergency job pricing, and warranty work documentation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-neutral-700 mb-8">
            Running a profitable plumbing business requires more than technical expertise. Between managing 
            unpredictable service calls, maintaining extensive parts inventory, pricing emergency work fairly, 
            and tracking warranty obligations, financial management can quickly become overwhelming. AI-powered 
            bookkeeping transforms these challenges into streamlined processes, ensuring every job contributes 
            to your bottom line while maintaining excellent customer service.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 my-8 not-prose">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
              <Wrench className="w-6 h-6 mr-3 text-blue-600" />
              Plumbing Business Financial Challenges
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Service Call Management</p>
                    <p className="text-sm text-neutral-600">Tracking multiple daily calls and technicians</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Emergency Pricing</p>
                    <p className="text-sm text-neutral-600">After-hours and weekend premium rates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Droplets className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Parts Inventory</p>
                    <p className="text-sm text-neutral-600">Hundreds of SKUs across trucks and warehouse</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Cash Flow Gaps</p>
                    <p className="text-sm text-neutral-600">Material costs before payment collection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Truck className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Vehicle Expenses</p>
                    <p className="text-sm text-neutral-600">Fuel, maintenance, insurance per truck</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Warranty Tracking</p>
                    <p className="text-sm text-neutral-600">Labor and parts guarantees management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Service Call Tracking and Job Costing
          </h2>

          <p className="text-neutral-700 mb-6">
            Accurate job costing is essential for plumbing profitability. AI bookkeeping automates tracking 
            from dispatch to payment:
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Automated Job Cost Analysis</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Real-Time Job Tracking</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  Track technician time from dispatch to completion. AI calculates drive time, on-site hours, 
                  and automatically applies appropriate billing rates including overtime and emergency premiums.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Material Cost Allocation</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  Link parts used directly to specific jobs. Track markup percentages, monitor which jobs 
                  consume most materials, and identify opportunities for bulk purchasing discounts.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Profitability by Service Type</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  Compare margins across service categories: repairs, installations, maintenance contracts, 
                  and emergency calls. Identify most profitable services and adjust pricing accordingly.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Service Call Profitability Breakdown</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-neutral-900 mb-3">Standard Service Call</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Service Fee</span>
                    <span className="font-mono">$95</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Labor (1.5 hrs @ $125)</span>
                    <span className="font-mono">$187</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Parts (with markup)</span>
                    <span className="font-mono">$85</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Revenue</span>
                    <span className="font-mono font-bold">$367</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Costs (labor, parts, overhead)</span>
                    <span className="font-mono">-$198</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2 text-green-600">
                    <span>Net Profit (46%)</span>
                    <span className="font-mono">$169</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-neutral-900 mb-3">Emergency Call (After Hours)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Emergency Fee</span>
                    <span className="font-mono">$195</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Labor (2 hrs @ $185)</span>
                    <span className="font-mono">$370</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Parts (with markup)</span>
                    <span className="font-mono">$145</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Revenue</span>
                    <span className="font-mono font-bold">$710</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Costs (OT labor, parts, overhead)</span>
                    <span className="font-mono">-$385</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2 text-green-600">
                    <span>Net Profit (46%)</span>
                    <span className="font-mono">$325</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Parts Inventory Management
          </h2>

          <p className="text-neutral-700 mb-6">
            Efficient parts management is crucial for plumbing profitability. AI tracks inventory across 
            multiple locations:
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Multi-Location Inventory Tracking</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-semibold text-neutral-900">Warehouse Stock</p>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Total SKUs</span>
                    <span className="font-mono">850</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Value</span>
                    <span className="font-mono">$45,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Turnover</span>
                    <span className="font-mono">8x/year</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-semibold text-neutral-900">Truck Inventory</p>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Per Truck</span>
                    <span className="font-mono">$3,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Common Parts</span>
                    <span className="font-mono">125 items</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Restock Weekly</span>
                    <span className="font-mono">$1,200</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-semibold text-neutral-900">Special Orders</p>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Monthly Volume</span>
                    <span className="font-mono">$8,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Markup</span>
                    <span className="font-mono">35-50%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Lead Time</span>
                    <span className="font-mono">2-5 days</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4">
              <p className="text-sm text-yellow-900">
                <strong>Inventory Alert:</strong> AI analysis shows 40% of warehouse space occupied by slow-moving 
                parts (turnover less than 2x/year). Liquidating could free up $8,000 in working capital.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Emergency Service Pricing Strategy
          </h2>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Emergency Rate Structure</h3>
            
            <div className="bg-white/80 rounded-xl p-6">
              <h4 className="font-semibold text-neutral-900 mb-4">Time-Based Pricing Multipliers</h4>
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-4 gap-4 font-semibold border-b pb-2">
                  <span>Time Period</span>
                  <span>Service Fee</span>
                  <span>Labor Rate</span>
                  <span>Typical Job Total</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <span>Regular Hours</span>
                  <span className="font-mono">$95</span>
                  <span className="font-mono">$125/hr</span>
                  <span className="font-mono text-green-600">$350-500</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <span>After 6pm</span>
                  <span className="font-mono">$145</span>
                  <span className="font-mono">$165/hr</span>
                  <span className="font-mono text-yellow-600">$500-700</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <span>Weekends</span>
                  <span className="font-mono">$175</span>
                  <span className="font-mono">$185/hr</span>
                  <span className="font-mono text-orange-600">$600-850</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <span>Holidays/Late Night</span>
                  <span className="font-mono">$295</span>
                  <span className="font-mono">$250/hr</span>
                  <span className="font-mono text-red-600">$850-1200</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Warranty Work and Service Agreement Management
          </h2>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Warranty and Contract Tracking</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Warranty Obligations</h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Labor warranty: 1 year standard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Parts warranty: Manufacturer terms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Warranty reserve: 2% of revenue</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Average callback rate: 3-5%</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Service Agreements</h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Annual maintenance plans: $299-599</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Priority service scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>15% parts discount included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Recurring revenue: $12,000/month</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Fleet Management and Vehicle Expenses
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Vehicle Cost Analysis</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Per Vehicle Costs (Annual)</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Lease/Payment</span>
                    <span className="font-mono">$7,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Insurance</span>
                    <span className="font-mono">$3,600</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fuel</span>
                    <span className="font-mono">$4,800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maintenance</span>
                    <span className="font-mono">$2,400</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-1">
                    <span>Total/Vehicle</span>
                    <span className="font-mono">$18,000</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Revenue per Vehicle</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Jobs per day</span>
                    <span className="font-mono">4-6</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg revenue/job</span>
                    <span className="font-mono">$425</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Daily revenue</span>
                    <span className="font-mono">$2,125</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual revenue</span>
                    <span className="font-mono">$520,000</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-1 text-green-600">
                    <span>ROI</span>
                    <span className="font-mono">2,788%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Tax Deductions for Plumbing Businesses
          </h2>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Maximizing Plumbing Business Tax Benefits</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Tools & Equipment</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Pipe cameras and locators</li>
                  <li>• Power tools and machines</li>
                  <li>• Safety equipment</li>
                  <li>• Tool replacements</li>
                  <li>• Shop equipment</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Vehicle Expenses</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Mileage or actual costs</li>
                  <li>• Commercial insurance</li>
                  <li>• GPS tracking systems</li>
                  <li>• Vehicle wraps/advertising</li>
                  <li>• Parking and tolls</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Business Operations</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Licensing and bonds</li>
                  <li>• Continuing education</li>
                  <li>• Uniforms and laundry</li>
                  <li>• Cell phones/tablets</li>
                  <li>• Dispatch software</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 mt-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Keep Your Plumbing Business Flowing Profitably
            </h2>
            <p className="text-neutral-700 mb-6">
              Let AI handle the complex financial tracking while you focus on serving customers. From managing 
              service calls and inventory to pricing emergency work and tracking warranties, automated bookkeeping 
              ensures every aspect of your plumbing business contributes to sustainable growth.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Plumbing Business Bookkeeping
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}