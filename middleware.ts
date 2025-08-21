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
    "/api/chat",
    "/api/create-checkout-session",
  ],
  ignoredRoutes: [
    "/api/webhook(.*)",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}; 