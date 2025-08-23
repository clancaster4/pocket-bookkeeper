import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, CheckCircle, Trees, DollarSign, TrendingUp, Truck, Wrench, Sun, CloudRain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Landscaping Service Bookkeeping: Seasonal Revenue and Equipment Costs',
  description: 'Master landscaping business bookkeeping. Track seasonal contracts, manage equipment depreciation, optimize crew scheduling, and handle weather-related income fluctuations.',
  keywords: [
    'landscaping bookkeeping',
    'lawn care accounting',
    'landscaping business financial management',
    'seasonal revenue tracking',
    'equipment depreciation landscaping',
    'crew scheduling optimization',
    'landscaping tax deductions',
    'snow removal accounting',
    'landscape contractor bookkeeping',
    'green industry financial management'
  ],
  openGraph: {
    title: 'Landscaping Service Bookkeeping: Complete Financial Management Guide',
    description: 'Optimize landscaping business finances with AI. Track seasonal contracts, manage equipment costs, and maximize profitability year-round.',
    type: 'article',
    url: 'https://myaibookkeeper.com/blog/landscaping-service-bookkeeping-seasonal-equipment',
  }
}

export default function LandscapingBookkeeping() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-neutral-600">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                Service Industry
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
              Landscaping Service Bookkeeping: Seasonal Revenue and Equipment Costs
            </h1>
            
            <p className="text-xl text-neutral-600">
              Navigate the financial complexities of landscaping services. Master seasonal contract management, 
              equipment depreciation tracking, crew scheduling optimization, and weather-impact planning.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-neutral-700 mb-8">
            Running a successful landscaping business requires mastering financial management across dramatic 
            seasonal shifts. From managing spring startup costs to maximizing summer revenue, preparing for 
            fall cleanup rushes, and potentially pivoting to snow removal, landscaping bookkeeping presents 
            unique challenges. AI-powered bookkeeping transforms these complexities into streamlined processes, 
            ensuring profitability whether you're mowing lawns or plowing driveways.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 my-8 not-prose">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
              <Trees className="w-6 h-6 mr-3 text-green-600" />
              Landscaping Financial Challenges
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Sun className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Seasonal Revenue Swings</p>
                    <p className="text-sm text-neutral-600">80% of revenue in 6-7 months</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Truck className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Equipment Investment</p>
                    <p className="text-sm text-neutral-600">$50,000-200,000 in machinery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CloudRain className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Weather Dependencies</p>
                    <p className="text-sm text-neutral-600">Rain delays impact cash flow</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Contract Management</p>
                    <p className="text-sm text-neutral-600">Weekly, monthly, seasonal pricing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Wrench className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Maintenance Costs</p>
                    <p className="text-sm text-neutral-600">Constant equipment repairs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Crew Scaling</p>
                    <p className="text-sm text-neutral-600">Seasonal hiring and layoffs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Seasonal Revenue Management and Cash Flow Planning
          </h2>

          <p className="text-neutral-700 mb-6">
            Landscaping businesses must carefully manage cash flow across dramatic seasonal variations. 
            AI bookkeeping provides predictive insights and automated tracking:
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Seasonal Revenue Distribution</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Spring Startup (March-April)</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  25% of annual revenue. Spring cleanups, mulching, fertilization programs. 
                  High equipment maintenance costs and seasonal hiring expenses. Cash flow negative 
                  until mid-April.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Summer Peak (May-August)</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  55% of annual revenue. Weekly mowing contracts, landscape installations, irrigation management. 
                  Maximum crew size and highest fuel costs. Strong positive cash flow.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Fall Wind-Down (September-November)</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  20% of annual revenue. Leaf removal, aeration, winterization services. 
                  Gradual crew reduction and equipment winterization costs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Monthly Revenue Analysis</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-neutral-900 mb-3">Peak Season (June)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Mowing Contracts</span>
                    <span className="font-mono">$45,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Landscape Install</span>
                    <span className="font-mono">$28,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maintenance</span>
                    <span className="font-mono">$12,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Revenue</span>
                    <span className="font-mono font-bold">$85,000</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Operating Costs</span>
                    <span className="font-mono">-$58,000</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2 text-green-600">
                    <span>Net Profit</span>
                    <span className="font-mono">$27,000</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-neutral-900 mb-3">Off-Season (January)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Snow Removal</span>
                    <span className="font-mono">$15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Salt Applications</span>
                    <span className="font-mono">$5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Equipment Rental</span>
                    <span className="font-mono">$2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Revenue</span>
                    <span className="font-mono font-bold">$22,000</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Operating Costs</span>
                    <span className="font-mono">-$18,000</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2 text-green-600">
                    <span>Net Profit</span>
                    <span className="font-mono">$4,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Equipment Cost Management and Depreciation
          </h2>

          <p className="text-neutral-700 mb-6">
            Equipment represents the largest capital investment for landscaping businesses. AI tracks costs, 
            depreciation, and ROI:
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Equipment Portfolio Analysis</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-semibold text-neutral-900">Commercial Mowers</p>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Purchase Price</span>
                    <span className="font-mono">$12,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Annual Maint.</span>
                    <span className="font-mono">$1,800</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Useful Life</span>
                    <span className="font-mono">5 years</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Revenue/Year</span>
                    <span className="font-mono">$35,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-semibold text-neutral-900">Truck & Trailer</p>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Purchase Price</span>
                    <span className="font-mono">$45,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Annual Costs</span>
                    <span className="font-mono">$8,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Useful Life</span>
                    <span className="font-mono">7 years</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Crews Supported</span>
                    <span className="font-mono">2 crews</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-semibold text-neutral-900">Small Equipment</p>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Total Value</span>
                    <span className="font-mono">$15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Replacement</span>
                    <span className="font-mono">$3,000/yr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Items</span>
                    <span className="font-mono">25+</span>
                  </div>
                  <div className="flex justify-between text-yellow-600">
                    <span>Loss Rate</span>
                    <span className="font-mono">15%/year</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4">
              <p className="text-sm text-yellow-900">
                <strong>Equipment Insight:</strong> AI analysis shows Mower #3 costs $0.45/hour more to operate 
                than others due to excessive repairs. Recommend replacement to save $2,800 annually.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Contract Pricing and Service Management
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Service Profitability Analysis</h3>
            
            <div className="bg-white/80 rounded-xl p-6">
              <h4 className="font-semibold text-neutral-900 mb-4">Service Line Margins</h4>
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-4 gap-4 font-semibold border-b pb-2">
                  <span>Service Type</span>
                  <span>Avg. Price</span>
                  <span>Labor %</span>
                  <span>Margin</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <span>Weekly Mowing</span>
                  <span className="font-mono">$65</span>
                  <span>45%</span>
                  <span className="text-green-600 font-semibold">38%</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <span>Spring Cleanup</span>
                  <span className="font-mono">$450</span>
                  <span>55%</span>
                  <span className="text-green-600 font-semibold">32%</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <span>Mulch Install</span>
                  <span className="font-mono">$85/yd</span>
                  <span>35%</span>
                  <span className="text-green-600 font-semibold">45%</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <span>Fertilization</span>
                  <span className="font-mono">$75</span>
                  <span>20%</span>
                  <span className="text-green-600 font-semibold">58%</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <span>Snow Plowing</span>
                  <span className="font-mono">$125</span>
                  <span>40%</span>
                  <span className="text-yellow-600 font-semibold">28%</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Crew Management and Labor Optimization
          </h2>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Seasonal Staffing Strategy</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Peak Season Crew Structure</h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>4 Crew Leaders @ $22/hr</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>12 Laborers @ $16/hr</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>2 Equipment Operators @ $20/hr</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Weekly Payroll: $28,800</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Productivity Metrics</h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Properties per crew day: 25-30</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Revenue per labor hour: $85</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Overtime threshold: 45 hrs/week</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Labor cost target: 35-40%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Weather Impact and Risk Management
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Weather-Related Financial Planning</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Rain Day Impact</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Average rain days/month: 8-10</li>
                  <li>• Lost revenue per day: $3,500</li>
                  <li>• Crew costs continue: $1,800/day</li>
                  <li>• Monthly buffer needed: $15,000</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Drought Conditions</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Reduced mowing frequency</li>
                  <li>• Increased irrigation demand</li>
                  <li>• Revenue impact: -20-30%</li>
                  <li>• Pivot to hardscaping services</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Tax Deductions for Landscaping Businesses
          </h2>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Maximizing Landscaping Tax Benefits</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Equipment & Vehicles</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Section 179 deductions</li>
                  <li>• Fuel and maintenance</li>
                  <li>• Insurance premiums</li>
                  <li>• GPS tracking systems</li>
                  <li>• Tool replacements</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Operating Expenses</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Uniforms and safety gear</li>
                  <li>• Pesticide licenses</li>
                  <li>• Disposal fees</li>
                  <li>• Shop rent/utilities</li>
                  <li>• Materials and supplies</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Business Development</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Marketing and advertising</li>
                  <li>• Industry associations</li>
                  <li>• Training certifications</li>
                  <li>• Software subscriptions</li>
                  <li>• Professional services</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 mt-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Grow Your Landscaping Business Profitably
            </h2>
            <p className="text-neutral-700 mb-6">
              Let AI handle the complex seasonal financial management while you focus on delivering exceptional 
              landscaping services. From tracking equipment ROI to optimizing crew schedules and managing weather 
              impacts, automated bookkeeping ensures your business thrives in every season.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Landscaping Bookkeeping
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}