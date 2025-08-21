import type { Metadata } from 'next'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import AccountManagement from '@/components/AccountManagement'

export const metadata: Metadata = {
  title: 'Account Management | My AI Bookkeeper',
  description: 'Manage your My AI Bookkeeper account, subscription, and data. Cancel subscription, export data, or delete your account.',
  robots: 'noindex, nofollow', // Don't index account management pages
}

export default function AccountPage() {
  const { userId } = auth()

  // Redirect to sign-in if not authenticated
  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="py-8">
        <AccountManagement />
      </div>
    </div>
  )
}