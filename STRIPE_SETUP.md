# Stripe Setup Guide for Pocket Bookkeeper

## Prerequisites
1. A Stripe account (sign up at https://stripe.com)
2. Access to your Stripe Dashboard

## Step 1: Get Your Stripe API Keys

1. Log into your Stripe Dashboard
2. Go to **Developers** → **API keys**
3. Copy your **Publishable key** and **Secret key**
4. Make sure you're using **Test keys** for development

## Step 2: Create Products and Prices in Stripe

### Create the "Everyday Assistant" Product:
1. Go to **Products** in your Stripe Dashboard
2. Click **Add product**
3. Set the following:
   - **Name**: Everyday Assistant
   - **Description**: Advanced bookkeeping guidance with unlimited queries
   - **Pricing**: $6.99/month
   - **Billing**: Recurring (monthly)
4. Copy the **Price ID** (starts with `price_`)

### Create the "Elite Advisor" Product:
1. Create another product with:
   - **Name**: Elite Advisor
   - **Description**: Premium AI model with advanced reasoning
   - **Pricing**: $14.99/month
   - **Billing**: Recurring (monthly)
4. Copy the **Price ID** (starts with `price_`)

## Step 3: Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Subscription Plans - Replace with your actual Price IDs
NEXT_PUBLIC_BASIC_MONTHLY_PRICE_ID=price_your_everyday_assistant_price_id
NEXT_PUBLIC_ELITE_MONTHLY_PRICE_ID=price_your_elite_advisor_price_id
```

## Step 4: Test the Integration

1. Restart your development server
2. Try to subscribe to a plan
3. You should be redirected to Stripe Checkout
4. Use Stripe's test card numbers:
   - **Success**: 4242 4242 4242 4242
   - **Decline**: 4000 0000 0000 0002

## Step 5: Webhook Setup (Optional)

For production, set up webhooks to handle subscription events:

1. Go to **Developers** → **Webhooks** in Stripe Dashboard
2. Add endpoint: `https://yourdomain.com/api/webhook/stripe`
3. Select events: `checkout.session.completed`, `customer.subscription.created`
4. Copy the webhook signing secret to your environment variables

## Troubleshooting

### Common Issues:

1. **"Payment processing not configured"**
   - Check that `STRIPE_SECRET_KEY` is set in your `.env.local`

2. **"Invalid subscription plan selected"**
   - Verify your Price IDs are correct in the environment variables

3. **"Failed to create Stripe session"**
   - Check your Stripe API keys are valid
   - Ensure you're using test keys for development

4. **Checkout page doesn't load**
   - Verify `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set correctly

### Debug Steps:

1. Check browser console for JavaScript errors
2. Check server logs for API errors
3. Verify all environment variables are loaded
4. Test with Stripe's test card numbers

## Production Deployment

When deploying to production:

1. Switch to **Live** API keys in Stripe Dashboard
2. Update environment variables with live keys
3. Set up production webhooks
4. Test the complete subscription flow

## Support

If you continue to have issues:
1. Check Stripe's documentation: https://stripe.com/docs
2. Verify your Stripe account is properly configured
3. Test with Stripe's sample applications 