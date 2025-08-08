// Temporarily disable authentication middleware for testing
// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//   // Routes that can be accessed while signed out
//   publicRoutes: [
//     "/",
//     "/sign-in(.*)",
//     "/sign-up(.*)",
//     "/api/webhook(.*)",
//   ],
//   // Routes that can always be accessed, and have
//   // no authentication information
//   ignoredRoutes: [
//     "/api/webhook(.*)",
//   ],
// });

// Temporary middleware that allows all requests
export default function middleware() {
  // Allow all requests for now
  return
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}; 