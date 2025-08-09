# Pocket Bookkeeper Setup Guide

This guide will help you set up the Pocket Bookkeeper application with Neon Database, Drizzle ORM, and Clerk authentication.

## 🗄️ **Database Setup (Neon)**

### 1. Create Neon Database
1. Go to [https://neon.tech](https://neon.tech) and create an account
2. Create a new project called "Pocket Bookkeeper"
3. Copy your connection string (it will look like this):
   ```
   postgresql://username:password@ep-example-123456.us-east-1.aws.neon.tech/pocket_bookkeeper?sslmode=require
   ```

### 2. Set Environment Variable
Add your Neon connection string to your `.env.local` file:
```env
DATABASE_URL="postgresql://username:password@ep-example-123456.us-east-1.aws.neon.tech/pocket_bookkeeper?sslmode=require"
```

### 3. Initialize Database Schema
Run these commands to set up your database:
```bash
# Install dependencies (if not already installed)
npm install

# Generate migration files
npm run db:generate

# Push schema to database
npm run db:push

# Optional: Open Drizzle Studio to view your database
npm run db:studio
```

---

## 🔐 **Authentication Setup (Clerk)**

### 1. Create Clerk Application
1. Go to [https://clerk.com](https://clerk.com) and create an account
2. Create a new application
3. Choose your preferred authentication methods (email, Google, etc.)
4. Copy your API keys from the dashboard

### 2. Set Environment Variables
Add these to your `.env.local` file:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# Optional: Customize URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### 3. Configure Clerk Dashboard
In your Clerk dashboard:
1. **Domains**: Add your local and production domains
2. **Sign-in Options**: Enable email and any OAuth providers you want
3. **User Profile**: Enable first name, last name fields
4. **Webhooks**: Set up webhooks for user events (optional)

---

## 💳 **Stripe Setup (Optional)**

### 1. Create Stripe Account
1. Go to [https://stripe.com](https://stripe.com) and create an account
2. Switch to test mode for development
3. Get your API keys from the dashboard

### 2. Set Environment Variables
```env
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

### 3. Create Products and Prices
In your Stripe dashboard, create:
- **Everyday Assistant** plan (e.g., $9/month)
- **Elite Advisor** plan (e.g., $29/month)
- Copy the price IDs and add them to your environment variables

---

## 🚀 **Running the Application**

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create a `.env.local` file based on `.env.example`:
```bash
cp env.example .env.local
```
Then fill in your actual values.

### 3. Database Setup
```bash
# Push schema to Neon database
npm run db:push

# Optional: Generate migrations for version control
npm run db:generate
```

### 4. Start Development Server
```bash
npm run dev
```

Your app should now be running at `http://localhost:3000`!

---

## 🧪 **Testing the Setup**

### 1. Database Connection
- Visit `/api/user` to test database connectivity
- Check Drizzle Studio: `npm run db:studio`

### 2. Authentication
- Try signing up/signing in
- Check that users are created in your database
- Verify JWT tokens are working

### 3. Chat Functionality  
- Send a test message
- Check usage tracking is working
- Verify rate limiting for free users

---

## 📁 **Project Structure**

```
pocket-bookkeeper/
├── app/                    # Next.js 14 app directory
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── support/           # Support page
│   └── popular-uses/      # Popular uses page
├── components/            # React components
├── lib/                   # Utility libraries
│   ├── db.ts             # Drizzle database config
│   └── schema.ts         # Database schema
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript types
├── drizzle.config.ts     # Drizzle configuration
└── package.json          # Dependencies
```

---

## 🛠️ **Available Scripts**

```bash
# Development
npm run dev              # Start development server
npm run build           # Build production app
npm run start           # Start production server

# Database
npm run db:generate     # Generate migration files
npm run db:migrate      # Run migrations  
npm run db:push         # Push schema to database
npm run db:studio       # Open Drizzle Studio

# Code Quality
npm run lint            # Run ESLint
npm run typecheck       # Check TypeScript types
```

---

## 🔧 **Common Issues**

### Database Connection Issues
- Ensure your `DATABASE_URL` is correct
- Check that Neon database is running
- Verify SSL settings (`?sslmode=require`)

### Authentication Issues  
- Confirm Clerk keys are correct
- Check domain settings in Clerk dashboard
- Verify environment variables are loaded

### Build Issues
- Run `npm run typecheck` to find TypeScript errors
- Check for missing environment variables
- Ensure all dependencies are installed

---

## 📞 **Support**

If you encounter issues:
1. Check the console for error messages
2. Verify all environment variables are set
3. Ensure database schema is up to date
4. Check Clerk and Neon service status

For additional help, refer to:
- [Neon Documentation](https://neon.tech/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [Clerk Documentation](https://clerk.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)