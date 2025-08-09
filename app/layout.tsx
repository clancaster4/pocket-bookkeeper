import type { Metadata, Viewport } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'react-hot-toast'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pocket Bookkeeper - AI Bookkeeping Assistant',
  description: 'Get instant, accurate guidance on bookkeeping and accounting tasks. Your AI-powered assistant for small business financial management.',
  keywords: 'bookkeeping, accounting, small business, AI assistant, financial management',
  authors: [{ name: 'Pocket Bookkeeper' }],
  robots: 'index, follow',
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
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased">
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