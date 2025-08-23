import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, CheckCircle, Coffee, DollarSign, TrendingUp, Package, Users, Calculator, ShoppingCart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cafe and Coffee Shop Bookkeeping: Daily Cash Flows and Ingredient Costs',
  description: 'Master cafe bookkeeping with AI. Learn POS reconciliation, waste tracking, peak-hour staffing optimization, and ingredient cost management for maximum profitability.',
  keywords: [
    'cafe bookkeeping',
    'coffee shop accounting',
    'restaurant financial management',
    'POS system reconciliation',
    'ingredient cost tracking',
    'cafe inventory management',
    'daily cash flow management',
    'coffee shop tax deductions',
    'food service bookkeeping',
    'cafe profit optimization'
  ],
  openGraph: {
    title: 'Cafe & Coffee Shop Bookkeeping: Cash Flow and Cost Management Guide',
    description: 'Complete bookkeeping guide for cafe operators. Track daily sales, manage inventory costs, and optimize staffing with AI automation.',
    type: 'article',
    url: 'https://myaibookkeeper.com/blog/cafe-coffee-shop-bookkeeping-cash-flow-ingredients',
  }
}

export default function CafeBookkeeping() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-neutral-600">
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-medium">
                Food Service
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
              Cafe and Coffee Shop Bookkeeping: Daily Cash Flows and Ingredient Costs
            </h1>
            
            <p className="text-xl text-neutral-600">
              Master the financial side of your cafe operation. Learn point-of-sale reconciliation, waste tracking 
              strategies, peak-hour staffing optimization, and ingredient cost management for maximum profitability.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-neutral-700 mb-8">
            Running a successful cafe requires more than brewing excellent coffee. With razor-thin margins, 
            high-volume transactions, perishable inventory, and fluctuating customer traffic, financial management 
            becomes critical to survival. AI bookkeeping transforms the complexity of daily cash reconciliation, 
            inventory tracking, and cost analysis into automated processes that protect your profits while you 
            focus on creating the perfect customer experience.
          </p>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 my-8 not-prose">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
              <Coffee className="w-6 h-6 mr-3 text-amber-600" />
              Cafe Financial Management Challenges
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <ShoppingCart className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold">High Transaction Volume</p>
                    <p className="text-sm text-neutral-600">200-500+ daily transactions to track</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Package className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold">Perishable Inventory</p>
                    <p className="text-sm text-neutral-600">Daily waste and spoilage management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold">Cash Handling</p>
                    <p className="text-sm text-neutral-600">Tips, cash sales, drawer reconciliation</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold">Labor Optimization</p>
                    <p className="text-sm text-neutral-600">Peak hour staffing vs. slow periods</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calculator className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold">Thin Margins</p>
                    <p className="text-sm text-neutral-600">3-5% net profit requires precision</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold">Seasonal Fluctuations</p>
                    <p className="text-sm text-neutral-600">Weather and season impact sales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Point-of-Sale Reconciliation and Daily Cash Management
          </h2>

          <p className="text-neutral-700 mb-6">
            Daily POS reconciliation is the foundation of cafe financial health. AI bookkeeping automates this 
            critical but time-consuming process:
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Automated Daily Reconciliation Process</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Multi-Payment Method Tracking</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  AI automatically imports and categorizes transactions from credit cards, mobile payments, 
                  gift cards, and cash. Identifies discrepancies between POS reports and bank deposits instantly.
                </p>
              </div>

              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Tip Distribution Management</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  Tracks credit card tips, calculates proper distribution, manages tip pooling, and ensures 
                  accurate payroll reporting for tax compliance.
                </p>
              </div>

              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Variance Analysis</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  Monitors cash drawer variances, identifies patterns of loss, and alerts to potential theft 
                  or training issues. Typical acceptable variance: +/- $5 per shift.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Daily Sales Analysis Dashboard</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-neutral-900 mb-3">Morning Rush (6am-10am)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Transactions</span>
                    <span className="font-mono">187</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Ticket</span>
                    <span className="font-mono">$7.85</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Revenue</span>
                    <span className="font-mono">$1,468</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Labor Cost</span>
                    <span className="font-mono text-red-600">$240</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2">
                    <span>Hourly Profit</span>
                    <span className="font-mono text-green-600">$307</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-neutral-900 mb-3">Afternoon (2pm-5pm)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Transactions</span>
                    <span className="font-mono">92</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Ticket</span>
                    <span className="font-mono">$9.25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Revenue</span>
                    <span className="font-mono">$851</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Labor Cost</span>
                    <span className="font-mono text-red-600">$180</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2">
                    <span>Hourly Profit</span>
                    <span className="font-mono text-green-600">$224</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Ingredient Cost Tracking and Waste Management
          </h2>

          <p className="text-neutral-700 mb-6">
            With food costs typically representing 25-35% of revenue, precise ingredient tracking is essential:
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Cost Per Item Analysis</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-semibold text-neutral-900">Cappuccino (12oz)</p>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Coffee (18g)</span>
                    <span className="font-mono">$0.38</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Milk (8oz)</span>
                    <span className="font-mono">$0.42</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Cup & Lid</span>
                    <span className="font-mono">$0.18</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-1">
                    <span>Total Cost</span>
                    <span className="font-mono">$0.98</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Sell Price</span>
                    <span className="font-mono">$4.75</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-semibold text-neutral-900">Avocado Toast</p>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Bread (2 slices)</span>
                    <span className="font-mono">$0.45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Avocado (1/2)</span>
                    <span className="font-mono">$0.85</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Toppings</span>
                    <span className="font-mono">$0.35</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-1">
                    <span>Total Cost</span>
                    <span className="font-mono">$1.65</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Sell Price</span>
                    <span className="font-mono">$8.95</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-semibold text-neutral-900">Pastry (Croissant)</p>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Wholesale Cost</span>
                    <span className="font-mono">$1.85</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Packaging</span>
                    <span className="font-mono">$0.08</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Waste (10%)</span>
                    <span className="font-mono">$0.19</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-1">
                    <span>Total Cost</span>
                    <span className="font-mono">$2.12</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Sell Price</span>
                    <span className="font-mono">$4.50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4">
              <p className="text-sm text-yellow-900">
                <strong>Waste Alert:</strong> AI tracking shows 15% milk waste due to over-steaming. 
                Training staff on proper portioning could save $450/month.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Peak-Hour Staffing and Labor Cost Optimization
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Smart Staffing Analysis</h3>
            
            <p className="text-neutral-700 mb-4">
              AI analyzes transaction patterns to optimize staffing levels:
            </p>

            <div className="bg-white/80 rounded-xl p-6">
              <h4 className="font-semibold text-neutral-900 mb-4">Hourly Labor Efficiency</h4>
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-4 gap-4 font-semibold border-b pb-2">
                  <span>Time Period</span>
                  <span>Sales/Hour</span>
                  <span>Staff Needed</span>
                  <span>Labor %</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <span>6am-8am</span>
                  <span className="font-mono">$425</span>
                  <span>3 staff</span>
                  <span className="text-green-600">21%</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <span>8am-10am</span>
                  <span className="font-mono">$580</span>
                  <span>4 staff</span>
                  <span className="text-green-600">24%</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <span>12pm-2pm</span>
                  <span className="font-mono">$520</span>
                  <span>4 staff</span>
                  <span className="text-yellow-600">27%</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <span>2pm-4pm</span>
                  <span className="font-mono">$280</span>
                  <span>2 staff</span>
                  <span className="text-green-600">25%</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <span>4pm-6pm</span>
                  <span className="font-mono">$195</span>
                  <span>2 staff</span>
                  <span className="text-red-600">36%</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>Optimization Opportunity:</strong> Reducing to 1 staff member 4pm-6pm would bring 
                  labor cost to 18% while maintaining service standards based on transaction volume.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Inventory Management and Supplier Tracking
          </h2>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Automated Inventory Controls</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Perishable Tracking</h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Daily milk usage: 15 gallons</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Pastry shelf life: 2 days max</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Produce rotation: FIFO system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Coffee freshness: 14-day window</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Supplier Management</h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Auto-reorder at par levels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Price variance tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Delivery schedule optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Invoice matching automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Tax Deductions and Compliance for Cafes
          </h2>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Maximizing Cafe Tax Deductions</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Equipment & Supplies</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Espresso machines</li>
                  <li>• Grinders and brewers</li>
                  <li>• Refrigeration units</li>
                  <li>• POS systems</li>
                  <li>• Furniture and fixtures</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Operating Expenses</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Rent and utilities</li>
                  <li>• Music licensing fees</li>
                  <li>• WiFi for customers</li>
                  <li>• Cleaning supplies</li>
                  <li>• Marketing costs</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Special Deductions</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Food donation write-offs</li>
                  <li>• Employee meal costs</li>
                  <li>• Training expenses</li>
                  <li>• Health permits</li>
                  <li>• Insurance premiums</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Key Performance Metrics</h3>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/80 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-green-600">$8.25</p>
                <p className="text-sm text-neutral-600">Average Ticket</p>
              </div>
              <div className="bg-white/80 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-green-600">28%</p>
                <p className="text-sm text-neutral-600">Food Cost %</p>
              </div>
              <div className="bg-white/80 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-green-600">26%</p>
                <p className="text-sm text-neutral-600">Labor Cost %</p>
              </div>
              <div className="bg-white/80 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-green-600">4.2%</p>
                <p className="text-sm text-neutral-600">Net Profit Margin</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 mt-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Brew Success with Smart Financial Management
            </h2>
            <p className="text-neutral-700 mb-6">
              Let AI handle the complex daily reconciliations, inventory tracking, and cost analysis while you 
              focus on creating the perfect cafe experience. From managing hundreds of daily transactions to 
              optimizing ingredient costs, automated bookkeeping ensures every cup contributes to your bottom line.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Cafe Bookkeeping Today
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}