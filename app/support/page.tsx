import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support | Pocket Bookkeeper – Online bookkeeping app help',
  description: 'Get help with Pocket Bookkeeper, the online bookkeeping app for small business. Find FAQs, contact options, and resources.',
  alternates: { canonical: '/support' },
  keywords: [
    'online bookkeeping app',
    'small business financial app',
    'bookkeeping app reviews 2025',
    'small business bookkeeping tools'
  ]
}

export default function SupportPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Support</h1>
      <p className="text-neutral-600 mb-8">
        Need help with your small business accounting app? We’re here for you.
      </p>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">Contact</h2>
          <p className="text-neutral-700">Email us at <a href="mailto:support@pocketbookkeeper.app" className="text-secondary-600 hover:underline">support@pocketbookkeeper.app</a></p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">Getting Started</h2>
          <p className="text-neutral-700">
            New here? Read our <Link href="/how-to-use" className="text-secondary-600 hover:underline">How to Use</Link> guide to get the most from our affordable bookkeeping software.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">Billing & Plans</h2>
          <p className="text-neutral-700">
            View plan details on the <Link href="/pricing" className="text-secondary-600 hover:underline">Pricing</Link> page or start now with the Free plan.
          </p>
        </div>
      </section>

      <div className="mt-10">
        <Link href="/?openSubscription=true" className="px-5 py-2.5 rounded-full text-white bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700">
          Get Started Free
        </Link>
      </div>
    </main>
  )
}