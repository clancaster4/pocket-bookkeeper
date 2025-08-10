import type { Metadata } from 'next'
import HowToUseClientPage from './HowToUseClientPage'

export const metadata: Metadata = {
  title: 'How to Use Pocket Bookkeeper - AI Bookkeeping Guide for Small Business',
  description: 'Learn how to use Pocket Bookkeeper AI assistant for bookkeeping. Step-by-step guide with examples, screenshots, and prompts for small business owners.',
  keywords: [
    'how to use AI bookkeeping',
    'bookkeeping assistant tutorial',
    'small business accounting guide',
    'AI bookkeeper examples',
    'bookkeeping prompts',
    'expense tracking tutorial',
    'tax deduction guide',
    'QuickBooks AI help',
    'financial management examples',
    'bookkeeping best practices'
  ],
  openGraph: {
    title: 'How to Use Pocket Bookkeeper - Complete Guide',
    description: 'Master AI-powered bookkeeping with our comprehensive guide. Real examples and prompts for small business owners.',
    url: 'https://pocketbookkeeper.com/how-to-use',
    type: 'article',
    images: [
      {
        url: 'https://pocketbookkeeper.com/og-how-to-use.jpg',
        width: 1200,
        height: 630,
        alt: 'Pocket Bookkeeper Tutorial'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Use Pocket Bookkeeper - AI Bookkeeping Guide',
    description: 'Step-by-step guide with real examples and prompts for small business bookkeeping.',
  },
  alternates: {
    canonical: 'https://pocketbookkeeper.com/how-to-use'
  }
}

export default function HowToUsePage() {
  return <HowToUseClientPage />
}
