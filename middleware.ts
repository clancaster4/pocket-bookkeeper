import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/how-to-use',
    '/pricing',
    '/support',
    '/api/chat',
    '/api/create-checkout-session',
    '/api/webhook/stripe'
  ],
})

export const config = {
  matcher: [
    '/((?!.*\..*|_next).*)',
    '/(api|trpc)(.*)'
  ],
} 