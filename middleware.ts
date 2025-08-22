import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/about",
    "/how-to-use", 
    "/faq",
    "/popular-uses",
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/api/webhook(.*)",
    "/api/create-checkout-session",
    "/sitemap.xml",
  ],
  ignoredRoutes: [
    "/api/webhook(.*)",
    "/sitemap.xml",
    "/_next(.*)",
    "/favicon.ico",
  ],
});

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|.*\\..*).)",
    "/(api|trpc)(.*)"
  ],
};