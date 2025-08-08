import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-accent-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Create Account</h1>
          <p className="text-neutral-600">Join Pocket Bookkeeper and get started with AI-powered bookkeeping</p>
        </div>
        <SignUp 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-2xl border-0 rounded-2xl",
              headerTitle: "text-2xl font-bold text-neutral-900",
              headerSubtitle: "text-neutral-600",
              formButtonPrimary: "bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-4 rounded-xl transition-colors",
              formFieldInput: "border border-neutral-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary-500 focus:border-transparent",
              formFieldLabel: "text-neutral-700 font-medium",
              footerActionLink: "text-secondary-600 hover:text-secondary-700 font-medium",
              dividerLine: "bg-neutral-200",
              dividerText: "text-neutral-500",
              socialButtonsBlockButton: "border border-neutral-200 rounded-xl py-3 px-4 hover:bg-neutral-50 transition-colors",
            }
          }}
        />
      </div>
    </div>
  )
} 