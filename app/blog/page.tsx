import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Users, Bot, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - AI Bookkeeping Tips & Small Business Finance Guides',
  description: 'Expert guides on DIY bookkeeping, AI accounting tools, and financial management tips for small business owners, freelancers, and solopreneurs.',
  keywords: [
    'bookkeeping blog',
    'small business accounting tips',
    'AI bookkeeping guides',
    'freelancer finance advice',
    'DIY bookkeeping tutorials',
    'accounting software reviews',
    'bookkeeping automation tips'
  ],
  openGraph: {
    title: 'Blog - My AI Bookkeeper',
    description: 'Expert guides on AI-powered bookkeeping and financial management for small businesses',
    type: 'website',
    url: 'https://myaibookkeeper.com/blog',
  }
}

const blogPosts = [
  {
    slug: 'diy-bookkeeping-small-business-ai-saves-time',
    title: 'DIY Bookkeeping for Small Business Owners: How AI Can Save You 10 Hours a Month',
    excerpt: 'Discover how AI-powered bookkeeping tools can transform your DIY bookkeeping process, saving you 10+ hours monthly while improving accuracy and tax readiness.',
    date: '2024-12-28',
    readTime: '8 min read',
    icon: Clock,
    category: 'DIY Bookkeeping',
    featured: true
  },
  {
    slug: 'best-quickbooks-alternatives-freelancers-2025',
    title: 'The Best QuickBooks Alternatives for Freelancers in 2025 (Including AI Tools)',
    excerpt: 'Compare top QuickBooks alternatives designed for freelancers, including affordable AI-powered bookkeeping solutions that automate expense tracking and tax preparation.',
    date: '2024-12-27',
    readTime: '10 min read',
    icon: TrendingUp,
    category: 'Software Reviews',
    featured: true
  },
  {
    slug: 'how-to-do-bookkeeping-without-accountant',
    title: 'How to Do Your Own Bookkeeping Without an Accountant (Step-by-Step Guide)',
    excerpt: 'Learn how to manage your small business bookkeeping yourself with this comprehensive step-by-step guide, including AI tools that make the process simple and error-free.',
    date: '2024-12-26',
    readTime: '12 min read',
    icon: BookOpen,
    category: 'How-To Guides',
    featured: false
  },
  {
    slug: 'ai-vs-human-bookkeeper-small-business',
    title: 'AI vs Human Bookkeeper: Which Is Right for Your Small Business?',
    excerpt: 'Compare the pros and cons of AI bookkeeping tools versus traditional human bookkeepers to make the best decision for your small business needs and budget.',
    date: '2024-12-25',
    readTime: '9 min read',
    icon: Bot,
    category: 'AI Technology',
    featured: false
  },
  {
    slug: '5-bookkeeping-mistakes-small-business-owners',
    title: '5 Bookkeeping Mistakes Small Business Owners Make (and How AI Can Fix Them)',
    excerpt: 'Avoid these common bookkeeping mistakes that cost small business owners time and money. Learn how AI automation can prevent errors and keep you tax-ready year-round.',
    date: '2024-12-24',
    readTime: '7 min read',
    icon: AlertCircle,
    category: 'Tips & Mistakes',
    featured: false
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-secondary-50 via-white to-accent-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
              AI Bookkeeping Blog
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Expert guides, tips, and insights on DIY bookkeeping, AI accounting tools, and financial management for small business owners
            </p>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-8">Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {blogPosts.filter(post => post.featured).map((post) => {
            const Icon = post.icon
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-100"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-secondary-100 rounded-lg group-hover:bg-secondary-200 transition-colors">
                      <Icon className="w-5 h-5 text-secondary-600" />
                    </div>
                    <span className="text-sm font-medium text-secondary-600">{post.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-secondary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-secondary-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* All Posts */}
        <h2 className="text-2xl font-bold text-neutral-900 mb-8">All Articles</h2>
        <div className="space-y-6">
          {blogPosts.map((post) => {
            const Icon = post.icon
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100 p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-neutral-100 rounded-lg group-hover:bg-secondary-100 transition-colors">
                    <Icon className="w-5 h-5 text-neutral-600 group-hover:text-secondary-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-medium text-secondary-600">{post.category}</span>
                      <span className="text-sm text-neutral-400">•</span>
                      <span className="text-sm text-neutral-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-secondary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-neutral-600 mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-neutral-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                  <ArrowRight className="flex-shrink-0 w-5 h-5 text-neutral-400 group-hover:text-secondary-500 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-secondary-50 to-accent-50 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Ready to Transform Your Bookkeeping?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Try My AI Bookkeeper free today and discover how AI can simplify your business finances
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}