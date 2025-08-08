import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing | Pocket Bookkeeper – Affordable bookkeeping software',
  description: 'Transparent pricing for our small business accounting app. Choose Free, Everyday Assistant ($6.99/mo), or Elite Advisor ($14.99/mo).',
  alternates: { canonical: '/pricing' },
  keywords: [
    'affordable bookkeeping software',
    'best accounting software for small business',
    'bookkeeping software for small business',
    'virtual bookkeeping software for small business',
    'quickbooks alternative for small business'
  ]
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Pocket Bookkeeper',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: [
    {
      '@type': 'Offer',
      name: 'Everyday Assistant',
      price: '6.99',
      priceCurrency: 'USD',
      description: 'Unlimited queries using advanced AI. Best app for small business expenses and everyday bookkeeping tasks.'
    },
    {
      '@type': 'Offer',
      name: 'Elite Advisor',
      price: '14.99',
      priceCurrency: 'USD',
      description: 'Unlimited queries using premium AI. Ideal for deeper financial analysis and advisory.'
    }
  ]
}

export default function PricingPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Pricing</h1>
      <p className="text-neutral-600 mb-10">
        Choose the plan that fits your small business. Start with the free bookkeeping app option and upgrade anytime.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Free */}
        <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
          <h2 className="text-xl font-semibold text-neutral-900">Free</h2>
          <p className="mt-1 text-neutral-600">10 queries/month • Standard AI</p>
          <p className="mt-4 text-4xl font-bold">$0</p>
          <ul className="mt-6 space-y-2 text-neutral-700 list-disc list-inside">
            <li>Try the online bookkeeping app</li>
            <li>Get answers to core questions</li>
            <li>No credit card required</li>
          </ul>
          <Link href="/?openSubscription=true" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800">Get Started Free</Link>
        </div>

        {/* Everyday Assistant */}
        <div className="rounded-2xl border-2 border-secondary-500 p-6 bg-secondary-50">
          <h2 className="text-xl font-semibold text-neutral-900">Everyday Assistant</h2>
          <p className="mt-1 text-neutral-700">Unlimited queries • Advanced AI</p>
          <p className="mt-4 text-4xl font-bold">$6.99<span className="text-lg font-medium text-neutral-600">/mo</span></p>
          <ul className="mt-6 space-y-2 text-neutral-800 list-disc list-inside">
            <li>Best bookkeeping app for small business day-to-day tasks</li>
            <li>Great small business accounting app for expenses and invoicing</li>
            <li>Cloud accounting software for small business—no downloads</li>
          </ul>
          <Link href="/?openSubscription=true&plan=basic-helper" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:from-secondary-600 hover:to-secondary-700">Choose Everyday Assistant</Link>
        </div>

        {/* Elite Advisor */}
        <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
          <h2 className="text-xl font-semibold text-neutral-900">Elite Advisor</h2>
          <p className="mt-1 text-neutral-600">Unlimited queries • Premium AI</p>
          <p className="mt-4 text-4xl font-bold">$14.99<span className="text-lg font-medium text-neutral-600">/mo</span></p>
          <ul className="mt-6 space-y-2 text-neutral-700 list-disc list-inside">
            <li>Top small business accounting apps level capabilities</li>
            <li>Advanced guidance; QuickBooks alternative for small business workflows</li>
            <li>Virtual bookkeeping software for small business owners</li>
          </ul>
          <Link href="/?openSubscription=true&plan=elite-advisor" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800">Choose Elite Advisor</Link>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-3">What’s included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-neutral-200 p-5">
            <h3 className="font-semibold text-neutral-900">For owners on the go</h3>
            <p className="text-neutral-700 mt-1">Mobile bookkeeping app for owners—access from any device with a browser.</p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-5">
            <h3 className="font-semibold text-neutral-900">Invoicing & expenses</h3>
            <p className="text-neutral-700 mt-1">Invoicing and bookkeeping app features to organize income and the best app for small business expenses.</p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-5">
            <h3 className="font-semibold text-neutral-900">Payroll tips</h3>
            <p className="text-neutral-700 mt-1">Bookkeeping app with payroll guidance for simple small business needs.</p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-5">
            <h3 className="font-semibold text-neutral-900">Get started fast</h3>
            <p className="text-neutral-700 mt-1">No installation. If you wanted to download a bookkeeping app, this cloud option is faster—just open and go.</p>
          </div>
        </div>
      </section>
    </main>
  )
}