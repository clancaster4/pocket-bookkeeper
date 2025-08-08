import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center p-6">
      <SignUp appearance={{ elements: { formButtonPrimary: 'bg-secondary-600 hover:bg-secondary-700' } }} />
    </main>
  )
} 