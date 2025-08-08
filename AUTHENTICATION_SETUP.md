# Authentication Setup Guide for Pocket Bookkeeper

## Overview

This guide will help you set up user authentication and account management for Pocket Bookkeeper using Clerk. The system includes:

- User registration and sign-in
- Subscription status tracking
- User-specific query limits
- Account management

## Prerequisites

1. A Clerk account (sign up at https://clerk.com)
2. A Supabase account for database storage
3. Stripe account for subscription management

## Step 1: Set Up Clerk Authentication

### 1. Create a Clerk Application

1. Go to https://clerk.com and create an account
2. Create a new application
3. Choose "Next.js" as your framework
4. Copy your API keys from the Clerk Dashboard

### 2. Configure Environment Variables

Add these to your `.env.local` file:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### 3. Configure Clerk Settings

1. **Domains**: Add your development domain (localhost:3000) and production domain
2. **Email Templates**: Customize sign-in and sign-up emails
3. **Social Connections**: Enable Google, GitHub, or other providers (optional)

## Step 2: Set Up Database (Supabase)

### 1. Create Supabase Project

1. Go to https://supabase.com and create a new project
2. Copy your project URL and API keys

### 2. Configure Environment Variables

Add these to your `.env.local` file:

```env
# Supabase Database
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 3. Run Database Schema

1. Connect to your Supabase database
2. Run the SQL from `database/schema.sql`
3. This creates the necessary tables for users, conversations, and subscriptions

## Step 3: Configure Stripe Integration

Follow the `STRIPE_SETUP.md` guide to set up Stripe for subscription management.

## Step 4: Test the Authentication Flow

### 1. Start the Development Server

```bash
npm run dev
```

### 2. Test User Registration

1. Go to `http://localhost:3000`
2. Click "Create one here" to sign up
3. Complete the registration process
4. Verify you're redirected to the main app

### 3. Test User Sign-In

1. Sign out using the user menu
2. Click "Sign In" 
3. Enter your credentials
4. Verify you're redirected to the main app

### 4. Test Subscription Integration

1. Try to use the chat feature
2. Check that query limits are enforced
3. Test the subscription upgrade flow

## Step 5: User Account Features

### Available Features:

✅ **User Registration**: Email/password and social login
✅ **User Sign-In**: Secure authentication with Clerk
✅ **Account Management**: User profile and settings
✅ **Subscription Tracking**: Database-based usage limits
✅ **Query Limits**: 10 free queries per user (no monthly reset)
✅ **Paid Plans**: Unlimited queries for subscribers
✅ **User-Specific Data**: Conversations and usage history

### User Flow:

1. **New User**: Signs up → Gets 10 free queries → Can upgrade to paid plan
2. **Returning User**: Signs in → Sees remaining queries → Can continue chatting
3. **Paid User**: Signs in → Has unlimited queries → Access to premium features

## Step 6: Production Deployment

### 1. Update Environment Variables

For production, update your environment variables with live keys:

```env
# Production Clerk Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_your_clerk_publishable_key
CLERK_SECRET_KEY=sk_live_your_clerk_secret_key

# Production Stripe Keys
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key

# Production Supabase
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_production_supabase_service_role_key
```

### 2. Update Clerk Settings

1. Add your production domain to Clerk
2. Configure production email templates
3. Set up webhooks for user events (optional)

### 3. Database Migration

1. Run the database schema on your production Supabase instance
2. Test the connection and queries

## Troubleshooting

### Common Issues:

1. **"Clerk not configured"**
   - Check that all Clerk environment variables are set
   - Verify the keys are correct

2. **"Database connection failed"**
   - Check Supabase environment variables
   - Verify the database schema is installed

3. **"User not found"**
   - Check that the user was created in the database
   - Verify the Clerk user ID mapping

4. **"Query limit exceeded"**
   - Check user's subscription status
   - Verify query count in database

### Debug Steps:

1. Check browser console for JavaScript errors
2. Check server logs for API errors
3. Verify environment variables are loaded
4. Test database connections
5. Check Clerk dashboard for user status

## Security Considerations

1. **Environment Variables**: Never commit sensitive keys to version control
2. **Database Access**: Use service role key only on the server side
3. **User Data**: Implement proper data validation and sanitization
4. **Rate Limiting**: Consider implementing additional rate limiting
5. **Webhooks**: Set up webhooks for real-time user event handling

## Support

If you encounter issues:

1. Check Clerk documentation: https://clerk.com/docs
2. Check Supabase documentation: https://supabase.com/docs
3. Verify all environment variables are correctly set
4. Test with a fresh user account
5. Check the browser console and server logs for errors 