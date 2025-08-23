import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, CheckCircle, Youtube, DollarSign, TrendingUp, Mic, Play, BarChart3, Gift } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Content Creator Bookkeeping: YouTube, Podcast Revenue, and Sponsorship Tracking',
  description: 'Master content creator finances. Track YouTube AdSense, podcast sponsorships, affiliate income, merchandise sales, and platform monetization with AI bookkeeping.',
  keywords: [
    'content creator bookkeeping',
    'youtube channel accounting',
    'podcast financial management',
    'sponsorship revenue tracking',
    'adsense income management',
    'affiliate commission tracking',
    'creator tax deductions',
    'influencer bookkeeping',
    'streaming revenue accounting',
    'content creator tax tips'
  ],
  openGraph: {
    title: 'Content Creator Bookkeeping: Complete Guide for YouTubers & Podcasters',
    description: 'Optimize your content business finances. Track multiple revenue streams, manage sponsorships, and maximize profitability.',
    type: 'article',
    url: 'https://myaibookkeeper.com/blog/content-creator-bookkeeping-youtube-podcast-sponsorships',
  }
}

export default function ContentCreatorBookkeeping() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="bg-gradient-to-br from-red-50 via-white to-pink-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-red-600 hover:text-red-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-neutral-600">
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-medium">
                Digital Media
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
              Content Creator Bookkeeping: YouTube, Podcast Revenue, and Sponsorship Tracking
            </h1>
            
            <p className="text-xl text-neutral-600">
              Navigate the complex financial landscape of content creation. Master multi-platform monetization, 
              sponsorship management, and tax optimization for sustainable creator business growth.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-neutral-700 mb-8">
            Building a profitable content creation business involves juggling multiple revenue streams across 
            various platforms. From YouTube AdSense and podcast sponsorships to affiliate commissions and 
            merchandise sales, creators face unique financial challenges. AI-powered bookkeeping transforms 
            this complexity into clear insights, automating income tracking and expense management while you 
            focus on creating engaging content that grows your audience.
          </p>

          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 my-8 not-prose">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
              <Youtube className="w-6 h-6 mr-3 text-red-600" />
              Content Creator Financial Challenges
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Play className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold">Multiple Revenue Streams</p>
                    <p className="text-sm text-neutral-600">AdSense, sponsors, affiliates, products</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold">Irregular Income</p>
                    <p className="text-sm text-neutral-600">Viral spikes and algorithm changes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mic className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold">Equipment Investment</p>
                    <p className="text-sm text-neutral-600">Cameras, mics, lighting, computers</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Gift className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold">Sponsorship Terms</p>
                    <p className="text-sm text-neutral-600">Complex contracts and deliverables</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold">Platform Changes</p>
                    <p className="text-sm text-neutral-600">Monetization policy updates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold">Growth Investment</p>
                    <p className="text-sm text-neutral-600">Editors, thumbnails, advertising</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            YouTube Revenue Streams and Analytics
          </h2>

          <p className="text-neutral-700 mb-6">
            YouTube creators typically earn from multiple sources. AI bookkeeping tracks each revenue stream 
            and calculates true profitability:
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">YouTube Monetization Breakdown</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-neutral-900">AdSense Revenue</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  Track CPM rates ($2-15 per 1,000 views) across different video categories. AI identifies 
                  which content types generate highest RPM and recommends optimization strategies.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Channel Memberships</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  Monthly recurring revenue from $4.99 memberships. Track retention rates, perks costs, 
                  and net profit after YouTube's 30% platform fee.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-neutral-900">Super Chat & Super Thanks</h4>
                <p className="text-sm text-neutral-700 mt-1">
                  Live stream donations and video tips. Monitor peak donation times, top supporters, 
                  and optimize streaming schedule for maximum engagement revenue.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Monthly YouTube Revenue Analysis</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-neutral-900 mb-3">Revenue Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>AdSense (500K views)</span>
                    <span className="font-mono">$3,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sponsorships (2)</span>
                    <span className="font-mono">$8,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Affiliates</span>
                    <span className="font-mono">$2,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Memberships (150)</span>
                    <span className="font-mono">$525</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Merchandise</span>
                    <span className="font-mono">$1,800</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2">
                    <span>Total Revenue</span>
                    <span className="font-mono text-green-600">$16,025</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-neutral-900 mb-3">Content Costs</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Video Editor</span>
                    <span className="font-mono text-red-600">$2,400</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thumbnail Designer</span>
                    <span className="font-mono text-red-600">$600</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Equipment/Software</span>
                    <span className="font-mono text-red-600">$450</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Music Licensing</span>
                    <span className="font-mono text-red-600">$150</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Misc Production</span>
                    <span className="font-mono text-red-600">$400</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2">
                    <span>Net Profit (75%)</span>
                    <span className="font-mono text-green-600">$12,025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Podcast Monetization and Sponsorship Management
          </h2>

          <p className="text-neutral-700 mb-6">
            Podcast revenue models differ from video platforms. AI tracks complex sponsorship deals and 
            audience metrics:
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Podcast Revenue Streams</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Sponsorship Rates</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Pre-roll (15 sec)</span>
                    <span className="text-neutral-600">$18 CPM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mid-roll (60 sec)</span>
                    <span className="text-neutral-600">$25 CPM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Post-roll (15 sec)</span>
                    <span className="text-neutral-600">$10 CPM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Host-read premium</span>
                    <span className="text-neutral-600">+40%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Additional Revenue</h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Patreon subscriptions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Premium ad-free feeds</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Live show tickets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Merchandise sales</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Sponsorship Deal Tracking and Management
          </h2>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Sponsorship Portfolio Analysis</h3>
            
            <div className="bg-white/80 rounded-xl p-6">
              <h4 className="font-semibold text-neutral-900 mb-4">Active Sponsorship Deals</h4>
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-5 gap-4 font-semibold border-b pb-2">
                  <span>Brand</span>
                  <span>Type</span>
                  <span>Rate</span>
                  <span>Deliverables</span>
                  <span>Monthly Value</span>
                </div>
                <div className="grid grid-cols-5 gap-4">
                  <span>VPN Service</span>
                  <span>Annual</span>
                  <span className="font-mono">$3,000</span>
                  <span>4 videos/mo</span>
                  <span className="font-mono text-green-600">$3,000</span>
                </div>
                <div className="grid grid-cols-5 gap-4">
                  <span>Meal Kit</span>
                  <span>Campaign</span>
                  <span className="font-mono">$5,000</span>
                  <span>2 videos</span>
                  <span className="font-mono text-green-600">$2,500</span>
                </div>
                <div className="grid grid-cols-5 gap-4">
                  <span>Software</span>
                  <span>Affiliate</span>
                  <span className="font-mono">40%</span>
                  <span>Ongoing</span>
                  <span className="font-mono text-green-600">$1,800</span>
                </div>
                <div className="grid grid-cols-5 gap-4">
                  <span>Audio Gear</span>
                  <span>Product</span>
                  <span className="font-mono">$2,000</span>
                  <span>1 review</span>
                  <span className="font-mono text-green-600">$2,000</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Equipment and Production Cost Management
          </h2>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Content Creation Investment</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-semibold text-neutral-900">Camera Setup</p>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Main Camera</span>
                    <span className="font-mono">$3,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Lenses</span>
                    <span className="font-mono">$2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Lighting</span>
                    <span className="font-mono">$1,200</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-semibold text-neutral-900">Audio Equipment</p>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Microphones</span>
                    <span className="font-mono">$800</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Audio Interface</span>
                    <span className="font-mono">$400</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Acoustic Treatment</span>
                    <span className="font-mono">$600</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-semibold text-neutral-900">Post-Production</p>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Computer</span>
                    <span className="font-mono">$3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Software</span>
                    <span className="font-mono">$70/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Storage</span>
                    <span className="font-mono">$50/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Affiliate Marketing and Product Sales
          </h2>

          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Diversified Revenue Streams</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Top Affiliate Programs</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Amazon Associates</span>
                    <span className="font-mono">$850/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Software Tools</span>
                    <span className="font-mono">$1,200/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Course Platforms</span>
                    <span className="font-mono">$600/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gear Recommendations</span>
                    <span className="font-mono">$450/mo</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Merchandise Sales</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>T-Shirts/Hoodies</span>
                    <span className="font-mono">$1,100/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Digital Products</span>
                    <span className="font-mono">$800/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Print on Demand</span>
                    <span className="font-mono">$400/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Limited Editions</span>
                    <span className="font-mono">$600/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">
            Tax Deductions for Content Creators
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Maximizing Creator Tax Benefits</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Equipment & Tech</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Cameras and lenses</li>
                  <li>• Computers and monitors</li>
                  <li>• Microphones and audio</li>
                  <li>• Lighting equipment</li>
                  <li>• Streaming gear</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Production Costs</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Editing software</li>
                  <li>• Music licensing</li>
                  <li>• Stock footage</li>
                  <li>• Props and sets</li>
                  <li>• Travel for content</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Business Operations</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Home studio space</li>
                  <li>• Internet and utilities</li>
                  <li>• Virtual assistants</li>
                  <li>• Thumbnail designers</li>
                  <li>• Video editors</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 mt-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Build Your Creator Business on Solid Financial Ground
            </h2>
            <p className="text-neutral-700 mb-6">
              Let AI handle the complex multi-platform revenue tracking while you focus on creating content 
              your audience loves. From AdSense analytics to sponsorship management and equipment depreciation, 
              automated bookkeeping ensures your creator business thrives financially.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Creator Bookkeeping
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}