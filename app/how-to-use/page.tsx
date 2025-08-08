import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Use Pocket Bookkeeper | Simple bookkeeping app for small business',
  description: 'Learn how to use Pocket Bookkeeper – the simple, affordable bookkeeping software and small business accounting app. Get started fast with invoicing, expenses, and cash flow.',
  alternates: { canonical: '/how-to-use' },
  keywords: [
    'simple bookkeeping app for small business',
    'small business accounting app',
    'best bookkeeping app for small business',
    'online bookkeeping app',
    'small business bookkeeping tools',
    'best app for small business expenses'
  ]
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I track expenses in this small business accounting app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open a chat and ask Pocket Bookkeeper to categorize or record an expense. You can paste details, and the assistant suggests proper categories and entries.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is there a free bookkeeping app option for small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Free plan includes monthly query limits so you can try the AI bookkeeping assistant before upgrading.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use it as an invoicing and bookkeeping app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ask the assistant to draft invoices, categorize revenue, and reconcile payments to keep your books accurate.'
      }
    }
  ]
}

export default function HowToUsePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
        How to Use Pocket Bookkeeper
      </h1>
      <p className="text-neutral-600 mb-8">
        Pocket Bookkeeper is a simple, affordable bookkeeping software solution designed as an AI-powered small business accounting app. No downloads required—use it as an online bookkeeping app on any device.
      </p>

      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">1. Start a conversation</h2>
          <p className="text-neutral-700">
            Ask bookkeeping questions like expense categorization, basic payroll tips, invoicing steps, and tax-deduction ideas. It’s like having a virtual bookkeeping software advisor for small business.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">2. Track expenses and income</h2>
          <p className="text-neutral-700">
            Use the assistant as the best app for small business expenses. Paste transactions and the AI suggests appropriate categories, helping you keep tidy books.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">3. Create simple invoices</h2>
          <p className="text-neutral-700">
            Treat Pocket Bookkeeper as an invoicing and bookkeeping app. Draft invoice templates, record payments, and keep your receivables current.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">4. Get monthly insights</h2>
          <p className="text-neutral-700">
            Ask for cash flow summaries, category totals, and KPIs using the small business bookkeeping tools built into the chat assistant.
          </p>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <Link href="/?openSubscription=true" className="px-5 py-2.5 rounded-full text-white bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700">
          Get Started Free
        </Link>
        <Link href="/pricing" className="px-5 py-2.5 rounded-full border border-neutral-300 hover:bg-neutral-50 text-neutral-800">
          View Pricing
        </Link>
      </div>

      <div className="mt-12 text-sm text-neutral-500">
        Looking for a QuickBooks alternative for small business? Try Pocket Bookkeeper—one of the top small business accounting apps in 2025.
      </div>
    </main>
  )
}