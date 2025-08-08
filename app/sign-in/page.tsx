'use client'

import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center p-6">
      <SignIn appearance={{ elements: { formButtonPrimary: 'bg-secondary-600 hover:bg-secondary-700' } }} />
    </main>
  )
} 