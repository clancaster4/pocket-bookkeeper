import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, CheckCircle, GraduationCap, DollarSign, TrendingUp, Globe, CreditCard, BarChart3, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Online Course Creator Bookkeeping: Platform Fees, Royalties, and Student Payments',
  description: 'Master online course business bookkeeping. Track platform fees, manage royalty splits, handle refunds, optimize pricing strategies, and scale your education business with AI.',
  keywords: [
    'online course bookkeeping',
    'course creator accounting',
    'platform fee tracking',
    'royalty management courses',
    'student payment processing',
    'online education tax deductions',
    'course business financial management',
    'digital product bookkeeping',
    'teachable udemy accounting',
    'course creator tax tips'
  ],
  openGraph: {
    title: 'Online Course Creator Bookkeeping: Complete Financial Management Guide',
    description: 'Optimize your online course business finances. Track platform fees, manage royalties, and maximize profitability with AI bookkeeping.',
    type: 'article',
    url: 'https://myaibookkeeper.com/blog/online-course-creator-bookkeeping-platform-fees-royalties',
  }
}

export default function OnlineCourseBookkeeping() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 border-b border-neutral-200">
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
                Digital Business
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
              Online Course Creator Bookkeeping: Platform Fees, Royalties, and Student Payments
            </h1>
            
            <p className="text-xl text-neutral-600">
              Navigate the financial complexities of online education. Master platform fee tracking, royalty 
              management, refund handling, and pricing optimization to scale your course business profitably.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-neutral-700 mb-8">
            Building a successful online course business requires mastering unique financial challenges. From 
            navigating multiple platform fees to managing affiliate commissions, handling refunds, and tracking 
            revenue across various payment processors, course creators face complex bookkeeping requirements. 
            AI-powered bookkeeping transforms these challenges into automated processes, providing clear insights 
            into profitability while you focus on creating transformative educational content.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 my-8 not-prose">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-purple-600" />
              Online Course Financial Challenges
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Platform Fees</p>
                    <p className="text-sm text-neutral-600">3-50% across different marketplaces</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Affiliate Commissions</p>
                    <p className="text-sm text-neutral-600">30-50% to partners and influencers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">International Sales</p>
                    <p className="text-sm text-neutral-600">Currency conversion and tax compliance</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Payment Delays</p>
                    <p className="text-sm text-neutral-600">30-60 day platform payouts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Launch Spikes</p>
                    <p className="text-sm text-neutral-600">Irregular income patterns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Refund Management</p>
                    <p className="text-sm text-neutral-600">30-day guarantees impact cash flow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Platform Fee Structure and Revenue Tracking
          </h2>

          <p className="text-neutral-700 mb-6">
            Different platforms take varying percentages of your revenue. AI bookkeeping automatically calculates 
            net earnings across all channels:
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Multi-Platform Revenue Analysis</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Marketplace Platforms</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  Udemy takes 37-63% depending on traffic source. Skillshare pays based on watch time. 
                  AI tracks actual earnings per student and optimizes pricing strategies across platforms.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Self-Hosted Platforms</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  Teachable, Thinkific, and Kajabi charge monthly fees plus transaction costs. 
                  AI calculates break-even points and recommends optimal platform based on volume.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Direct Sales Channels</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  WordPress with LMS plugins or custom solutions. Track hosting, payment processing, 
                  and technical infrastructure costs against higher profit margins.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Platform Comparison Analysis</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-neutral-900 mb-3">Udemy</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Course Price</span>
                    <span className="font-mono">$97</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform Fee (37%)</span>
                    <span className="font-mono text-red-600">-$36</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Your Revenue</span>
                    <span className="font-mono">$61</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2">
                    <span>Net per Student</span>
                    <span className="font-mono text-green-600">$61</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Monthly Students</span>
                    <span className="font-mono">150</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-neutral-900 mb-3">Teachable</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Course Price</span>
                    <span className="font-mono">$297</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transaction (2.9%)</span>
                    <span className="font-mono text-red-600">-$9</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Fee</span>
                    <span className="font-mono text-red-600">-$3</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2">
                    <span>Net per Student</span>
                    <span className="font-mono text-green-600">$285</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Monthly Students</span>
                    <span className="font-mono">35</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-neutral-900 mb-3">Own Website</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Course Price</span>
                    <span className="font-mono">$497</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stripe (2.9%)</span>
                    <span className="font-mono text-red-600">-$14</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hosting/Tools</span>
                    <span className="font-mono text-red-600">-$5</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2">
                    <span>Net per Student</span>
                    <span className="font-mono text-green-600">$478</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Monthly Students</span>
                    <span className="font-mono">20</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Affiliate and Royalty Management
          </h2>

          <p className="text-neutral-700 mb-6">
            Affiliate marketing can dramatically scale your course sales but requires careful tracking:
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Affiliate Commission Structure</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Commission Tiers</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Standard Affiliates</span>
                    <span className="text-neutral-600">30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Super Affiliates</span>
                    <span className="text-neutral-600">40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>JV Partners</span>
                    <span className="text-neutral-600">50%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Launch Partners</span>
                    <span className="text-neutral-600">50% + Prizes</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Payment Processing</h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>30-day payment hold for refunds</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Monthly bulk payouts via PayPal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>1099 tracking for US affiliates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Automatic commission calculations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Launch Revenue and Cash Flow Management
          </h2>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Course Launch Financial Timeline</h3>
            
            <div className="bg-white/80 rounded-xl p-6">
              <h4 className="font-semibold text-neutral-900 mb-4">7-Day Launch Revenue Pattern</h4>
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-4 gap-4 font-semibold border-b pb-2">
                  <span>Day</span>
                  <span>Sales</span>
                  <span>Revenue</span>
                  <span>Cumulative</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <span>Day 1 (Open)</span>
                  <span className="font-mono">85</span>
                  <span className="font-mono">$42,245</span>
                  <span className="font-mono text-green-600">$42,245</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <span>Day 2-3</span>
                  <span className="font-mono">45</span>
                  <span className="font-mono">$22,365</span>
                  <span className="font-mono text-green-600">$64,610</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <span>Day 4-6</span>
                  <span className="font-mono">30</span>
                  <span className="font-mono">$14,910</span>
                  <span className="font-mono text-green-600">$79,520</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <span>Day 7 (Close)</span>
                  <span className="font-mono">120</span>
                  <span className="font-mono">$59,640</span>
                  <span className="font-mono text-green-600 font-bold">$139,160</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-orange-100 rounded-lg">
                <p className="text-sm text-orange-900">
                  <strong>Cash Flow Note:</strong> 65% of revenue arrives on first and last day. 
                  Plan for refunds (5-8%) and affiliate payouts (40% of sales) in following month.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Refund Tracking and Guarantee Management
          </h2>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Refund Impact Analysis</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Refund Metrics</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>30-Day Guarantee Rate</span>
                    <span className="text-neutral-600">5-8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>60-Day Extended Rate</span>
                    <span className="text-neutral-600">8-12%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg Processing Time</span>
                    <span className="text-neutral-600">3-5 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Affiliate Clawbacks</span>
                    <span className="text-neutral-600">Yes</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Financial Impact</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Gross Sales</span>
                    <span className="font-mono">$50,000</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Refunds (7%)</span>
                    <span className="font-mono">-$3,500</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Processing Fees Lost</span>
                    <span className="font-mono">-$102</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2">
                    <span>Net Revenue</span>
                    <span className="font-mono">$46,398</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Content Creation and Development Costs
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Course Development Investment</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Production Costs</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Video editing: $2,000</li>
                  <li>• Graphics design: $800</li>
                  <li>• Audio editing: $400</li>
                  <li>• Slide creation: $600</li>
                  <li>• Platform setup: $500</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Marketing Assets</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Sales page: $1,500</li>
                  <li>• Email sequences: $1,000</li>
                  <li>• Webinar funnel: $2,000</li>
                  <li>• Ad creatives: $800</li>
                  <li>• Social content: $600</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Ongoing Expenses</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Platform fees: $299/mo</li>
                  <li>• Email service: $197/mo</li>
                  <li>• Webinar tool: $99/mo</li>
                  <li>• Support VA: $800/mo</li>
                  <li>• Ad spend: $2,000/mo</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Tax Deductions for Course Creators
          </h2>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Maximizing Course Creator Tax Benefits</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Content Creation</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Camera equipment</li>
                  <li>• Microphones and audio</li>
                  <li>• Lighting setup</li>
                  <li>• Editing software</li>
                  <li>• Stock footage/music</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Marketing & Sales</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Advertising costs</li>
                  <li>• Affiliate commissions</li>
                  <li>• Webinar platforms</li>
                  <li>• Email marketing</li>
                  <li>• Sales page tools</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Business Operations</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Home office deduction</li>
                  <li>• Internet and utilities</li>
                  <li>• Professional development</li>
                  <li>• Virtual assistants</li>
                  <li>• Legal and accounting</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 mt-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Scale Your Course Business Profitably
            </h2>
            <p className="text-neutral-700 mb-6">
              Let AI handle the complex financial tracking while you focus on creating transformative educational 
              content. From platform fee calculations to affiliate management and refund tracking, automated 
              bookkeeping ensures every aspect of your course business is optimized for growth.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Course Creator Bookkeeping
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}