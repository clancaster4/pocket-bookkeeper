import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  Calculator, 
  Users, 
  Target, 
  Heart, 
  TrendingUp, 
  Shield, 
  Clock,
  MessageCircle,
  ArrowRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - AI Bookkeeping Assistant for Small Business Owners',
  description: 'Learn about Pocket Bookkeeper\'s mission to make professional bookkeeping accessible to every small business through AI technology. Discover our story, values, and commitment to your success.',
  keywords: [
    'about pocket bookkeeper',
    'AI bookkeeping company',
    'small business accounting help',
    'bookkeeping assistant story',
    'financial technology for small business',
    'automated accounting solutions'
  ],
  openGraph: {
    title: 'About Pocket Bookkeeper - AI Bookkeeping Assistant',
    description: 'Discover how Pocket Bookkeeper is revolutionizing small business bookkeeping with AI technology. Learn our mission, values, and commitment to your financial success.',
    url: 'https://pocketbookkeeper.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-accent-50">
        <div className="absolute inset-0 bg-neutral-100/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-secondary-500/25">
                <Calculator className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Making Bookkeeping
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 to-accent-600"> Accessible</span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              We believe every small business deserves professional-level financial guidance, 
              regardless of size or budget. That's why we built an AI assistant that makes 
              expert bookkeeping knowledge available 24/7.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-secondary-600" />
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
                  Our Mission
                </h2>
              </div>
              <div className="prose prose-lg text-neutral-600 space-y-6">
                <p>
                  Small business owners wear many hats – but bookkeeping shouldn't be 
                  a source of stress or confusion. Our mission is to democratize access 
                  to professional bookkeeping knowledge through artificial intelligence.
                </p>
                <p>
                  We've seen too many brilliant entrepreneurs struggle with financial 
                  management, not because they lack business acumen, but because 
                  traditional bookkeeping services are expensive, inflexible, or 
                  intimidating. Pocket Bookkeeper changes that.
                </p>
                <p>
                  By combining decades of accounting expertise with cutting-edge AI 
                  technology, we provide instant, accurate guidance that adapts to 
                  your unique business needs – all at a fraction of the cost of 
                  traditional bookkeeping services.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-secondary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                    <Users className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      50,000+ Small Businesses Helped
                    </h3>
                    <p className="text-neutral-600">
                      From solo entrepreneurs to growing teams, we've supported 
                      businesses across every industry.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                    <Clock className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      Available 24/7
                    </h3>
                    <p className="text-neutral-600">
                      Get instant answers to your bookkeeping questions, 
                      whether it's 3 PM or 3 AM.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      Average 40% Time Saved
                    </h3>
                    <p className="text-neutral-600">
                      Users report spending significantly less time on 
                      bookkeeping tasks while improving accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 sm:py-20 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Heart className="w-8 h-8 text-accent-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
                Our Values
              </h2>
            </div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development 
              to customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Trustworthy & Secure',
                description: 'Your financial data is protected with bank-level security. We never store sensitive information and follow strict privacy protocols.',
                color: 'text-blue-600 bg-blue-50'
              },
              {
                icon: Users,
                title: 'Small Business First',
                description: 'Every feature is designed with small business owners in mind. We understand your challenges because we\'ve been there too.',
                color: 'text-secondary-600 bg-secondary-50'
              },
              {
                icon: TrendingUp,
                title: 'Always Improving',
                description: 'We continuously update our AI with the latest tax codes, regulations, and best practices to give you accurate guidance.',
                color: 'text-green-600 bg-green-50'
              },
              {
                icon: Heart,
                title: 'Human-Centered AI',
                description: 'Technology should enhance human capability, not replace it. Our AI complements your business knowledge.',
                color: 'text-accent-600 bg-accent-50'
              },
              {
                icon: MessageCircle,
                title: 'Clear Communication',
                description: 'No confusing jargon or complex terminology. We explain everything in plain English that makes sense.',
                color: 'text-purple-600 bg-purple-50'
              },
              {
                icon: Target,
                title: 'Results-Driven',
                description: 'We measure success by your success. Our goal is to help you make better financial decisions with confidence.',
                color: 'text-orange-600 bg-orange-50'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why AI Bookkeeping Section */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              Why AI-Powered Bookkeeping?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Traditional bookkeeping has limitations that modern technology can overcome.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                The Old Way vs. The Smart Way
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-neutral-600 line-through">
                      <strong>Expensive:</strong> Traditional bookkeepers cost $500-2000+ per month
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-neutral-600">
                      <strong>Affordable:</strong> Professional guidance starting at just $9/month
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-neutral-600 line-through">
                      <strong>Limited Hours:</strong> Only available during business hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-neutral-600">
                      <strong>24/7 Access:</strong> Get help whenever you need it, day or night
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-neutral-600 line-through">
                      <strong>One-Size-Fits-All:</strong> Generic advice that may not apply to your business
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-neutral-600">
                      <strong>Personalized:</strong> Tailored guidance based on your specific situation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-accent-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                The Technology Behind the Magic
              </h3>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Our AI doesn't just give generic answers – it understands context, 
                  learns from thousands of successful bookkeeping scenarios, and 
                  adapts to the unique needs of your industry and business size.
                </p>
                <p>
                  Built on the latest advances in natural language processing and 
                  trained on comprehensive financial databases, our system provides 
                  accuracy that rivals experienced human bookkeepers.
                </p>
                <div className="bg-white rounded-lg p-4 mt-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium text-neutral-900">AI Confidence: 98.2%</span>
                  </div>
                  <div className="text-xs text-neutral-600">
                    Based on accuracy validation against certified accountants
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-20 bg-gradient-to-r from-secondary-500 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Bookkeeping?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of small business owners who've made bookkeeping 
            stress a thing of the past.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-secondary-600 font-semibold rounded-xl hover:bg-neutral-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start Free Chat</span>
            </Link>
            <Link
              href="/popular-uses"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-200 border border-white/20 hover:border-white/40"
            >
              <span>See How It Works</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}