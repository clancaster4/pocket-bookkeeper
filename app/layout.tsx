import type { Metadata, Viewport } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'react-hot-toast'
import HamburgerMenu from '@/components/HamburgerMenu'
import SEOScripts from '@/components/SEOScripts'
import './globals.css'

const localization = {
  signUp: {
    start: {
      title: 'Create your account',
      subtitle: 'to continue to My AI Bookkeeper',
    }
  }
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://myaibookkeeper.com'),
  title: {
    default: 'My AI Bookkeeper - AI-Powered Bookkeeping Assistant for Small Business',
    template: '%s | My AI Bookkeeper'
  },
  description: 'Get instant, accurate bookkeeping guidance with My AI Bookkeeper. AI-powered assistant helping small business owners manage expenses, taxes, and financial records efficiently.',
  keywords: [
    'AI bookkeeping assistant',
    'small business bookkeeping software',
    'automated accounting help',
    'expense tracking AI',
    'tax preparation assistant', 
    'QuickBooks help',
    'bookkeeping automation',
    'small business financial management',
    'AI accounting advisor',
    'bookkeeping chat bot',
    'financial record keeping',
    'business expense categorization'
  ],
  authors: [{ name: 'My AI Bookkeeper', url: 'https://myaibookkeeper.com' }],
  creator: 'My AI Bookkeeper',
  publisher: 'My AI Bookkeeper',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://myaibookkeeper.com',
    siteName: 'My AI Bookkeeper',
    title: 'My AI Bookkeeper - AI-Powered Bookkeeping Assistant',
    description: 'Transform your small business bookkeeping with AI. Get instant guidance on expenses, taxes, and financial management from your personal AI bookkeeper.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'My AI Bookkeeper - AI-Powered Bookkeeping Assistant',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My AI Bookkeeper - AI Bookkeeping Assistant',
    description: 'Get instant AI-powered bookkeeping help for your small business. Manage expenses, taxes, and finances efficiently.',
    images: ['/twitter-image.png'],
    creator: '@myaibookkeeper',
    site: '@myaibookkeeper',
  },
  alternates: {
    canonical: 'https://myaibookkeeper.com',
  },
  category: 'business',
  classification: 'Business Software',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'My AI Bookkeeper',
    'mobile-web-app-capable': 'yes',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={localization}>
      <html lang="en">
        <body className="antialiased">
          <SEOScripts />
          <HamburgerMenu />
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#ffffff',
                color: '#1f2937',
              },
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  )
} 