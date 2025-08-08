import type { Metadata, Viewport } from 'next'
// import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import NavBar from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Pocket Bookkeeper - Best bookkeeping app for small business',
  description: 'Pocket Bookkeeper is an AI-powered small business accounting app. Simple, affordable bookkeeping software with invoicing, payroll tips, and cloud accounting.',
  keywords: [
    'best bookkeeping app for small business',
    'bookkeeping software for small business',
    'small business accounting app',
    'free bookkeeping app for small business',
    'best accounting software for small business',
    'online bookkeeping app',
    'affordable bookkeeping software',
    'small business bookkeeping tools',
    'download bookkeeping app',
    'best app for small business expenses',
    'invoicing and bookkeeping app',
    'cloud accounting software for small business',
    'bookkeeping app with payroll',
    'simple bookkeeping app for small business',
    'top small business accounting apps',
    'bookkeeping app reviews 2025',
    'small business financial app',
    'quickbooks alternative for small business',
    'mobile bookkeeping app for owners',
    'virtual bookkeeping software for small business'
  ],
  authors: [{ name: 'Pocket Bookkeeper' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Pocket Bookkeeper – AI Bookkeeping for Small Business',
    description: 'Simple, affordable, cloud bookkeeping software and accounting app for small business owners.',
    url: 'https://pocket-bookkeeper.example.com',
    siteName: 'Pocket Bookkeeper',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pocket Bookkeeper – AI Bookkeeping for Small Business',
    description: 'Simple, affordable, cloud bookkeeping software and accounting app for small business owners.'
  }
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
    <html lang="en">
      <body className="antialiased">
        <NavBar />
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
  )
} 