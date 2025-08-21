# My AI Bookkeeper

An AI-powered bookkeeping chat advisor with a three-tier freemium subscription model designed to help small business owners manage their financial records with confidence and accuracy.

## 🎯 Overview

My AI Bookkeeper is a single-page web application that provides instant, accurate guidance on bookkeeping and accounting tasks. It features a three-tier model with different AI capabilities:

- **Free Tier**: 10 queries per month with Standard AI model
- **Everyday Assistant Tier**: $9.99/month with unlimited queries using Advanced AI
- **Elite Advisor Tier**: $19.99/month with unlimited queries using Premium AI model
- **Payment Processing**: Stripe-powered subscriptions with email collection
- **Usage Tracking**: Real-time query counting and limits

## ✨ Features

### 🔐 User Management
- **IP-based Tracking**: Anonymous usage tracking by IP address
- **Subscription Management**: Stripe-powered subscription handling
- **Email Collection**: Automatic email collection through Stripe checkout

### 💳 Three-Tier Subscription Management
- **Free Tier**: 10 queries/month with Standard AI
- **Everyday Assistant**: $9.99/month with unlimited access to Advanced AI
- **Elite Advisor**: $19.99/month with unlimited access to Premium AI
- **Stripe Integration**: Secure payment processing with email collection
- **Webhook Handling**: Automatic subscription management

### 🤖 AI Model Differentiation
- **Standard AI**: Basic AI model for Free tier
- **Advanced AI**: Enhanced AI model for Everyday Assistant tier
- **Premium AI**: Premium AI model with superior reasoning for Elite Advisor tier
- **Model Selection**: Automatic model selection based on user tier
- **Response Enhancement**: Premium AI responses include advanced reasoning indicators

### 📊 Usage Tracking
- **Real-time Counters**: Track remaining queries for free users
- **Progress Indicators**: Visual usage progress bars
- **Upgrade Prompts**: Smart prompts when limits approach
- **Analytics**: Monthly usage statistics with model tracking

### 🎨 UI/UX Features
- **Tier Indicators**: Clear visual indicators for current tier and AI model
- **Upgrade Paths**: Seamless upgrade options from any tier
- **Model Badges**: Visual badges showing which AI model is being used
- **Responsive Design**: Mobile-optimized interface

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Stripe account (for payments)
- Supabase account (for database)

### 1. Clone and Install

```bash
git clone <repository-url>
cd pocket-bookkeeper
npm install
```

### 2. Environment Setup

Copy the example environment file and configure your services:

```bash
cp env.example .env.local
```

Fill in your environment variables:

```env
# Database - Supabase
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

### 3. Stripe Setup

1. **Create a Stripe Account**:
   - Go to [stripe.com](https://stripe.com)
   - Set up your account and get your API keys

2. **Configure Webhooks**:
   - Go to Stripe Dashboard > Webhooks
   - Add endpoint: `https://your-domain.com/api/webhook/stripe`
   - Select events: `checkout.session.completed`, `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`
   - Copy the webhook secret to your environment variables

### 4. Supabase Setup

1. **Create a Supabase Project**:
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Copy your project URL and keys

2. **Set Up Database**:
   - Run the SQL schema from `database/schema.sql`
   - Enable Row Level Security (RLS)
   - Configure authentication settings

3. **Database Schema**:
   ```sql
   -- Run the complete schema from database/schema.sql
   -- This creates all necessary tables and policies for the three-tier system
   ```

### 5. Run the Application

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🔧 How It Works

### Subscription Flow
1. **Free Tier**: Users get 10 queries per month tracked by IP address
2. **Upgrade**: Users click "Hire your Bookkeeper" to open subscription modal
3. **Stripe Checkout**: Users are redirected to Stripe for secure payment and email collection
4. **Success**: Users return to the app with unlimited access to their chosen tier
5. **Webhook**: Stripe webhooks update user subscription status automatically

### Email Collection
- Email addresses are automatically collected during Stripe checkout
- No manual email form required
- Emails are stored securely in Stripe's system
- Can be exported for marketing purposes through Stripe Dashboard

### 6. Start Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Zustand**: State management
- **SWR**: Data fetching and caching

### Backend
- **Next.js API Routes**: Serverless functions
- **Stripe**: Payment processing and subscriptions
- **Supabase**: PostgreSQL database with real-time features

### External Services
- **Stripe**: Payment processing and subscription management
- **Supabase**: Database and real-time features

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── chat/          # Chat API with IP-based usage tracking
│   │   ├── webhook/       # Stripe webhooks for subscription management
│   │   └── create-checkout-session/ # Stripe checkout sessions
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page with chat interface
├── components/            # React components
│   ├── ChatInterface.tsx  # Main chat interface with AI model selection
│   ├── ChatMessage.tsx    # Individual chat messages
│   ├── ConversationSidebar.tsx # Conversation history sidebar
│   ├── Header.tsx         # App header with subscription status
│   ├── SubscriptionModal.tsx # Stripe-powered subscription modal
│   ├── FileUpload.tsx     # File upload component
│   └── Disclaimer.tsx     # Legal disclaimer
├── lib/                   # Utility libraries
│   ├── supabase.ts        # Database client
│   ├── stripe.ts          # Stripe configuration and checkout
│   └── store.ts           # Zustand state management
├── hooks/                 # Custom React hooks
│   ├── useUser.ts         # User data and usage tracking
│   └── useConversations.ts # Conversation management
├── types/                 # TypeScript definitions
│   ├── chat.ts           # Chat-related types
│   └── database.ts       # Database schema types
├── database/              # Database setup
│   └── schema.sql        # Database schema with Stripe customer tracking
└── README.md             # This file
```

## 🔧 Configuration

### Tier Configuration

The application supports three tiers with different AI models:

```typescript
// lib/stripe.ts
export const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    model: 'grok-3-mini',
    features: ['10 queries per month', 'Grok-3-mini AI model', ...]
  },
  {
    id: 'basic-helper',
          name: 'Everyday Assistant',
    price: 9.99,
    model: 'grok-3-mini',
    features: ['Unlimited queries', 'Grok-3-mini AI model', ...]
  },
  {
    id: 'elite-advisor',
    name: 'Elite Advisor',
    price: 19.99,
    model: 'grok-4',
    features: ['Unlimited queries', 'Grok 4 AI model', ...]
  }
]
```

### AI Model Selection

The system automatically selects the appropriate AI model based on user tier:

```typescript
// lib/stripe.ts
export const getModelForTier = (tier: string): string => {
  switch (tier) {
    case 'elite':
      return 'grok-4'
    case 'basic':
    case 'free':
    default:
      return 'grok-3-mini'
  }
}
```

## 🚀 Deployment

### Vercel Deployment

1. **Connect Repository**:
   - Push your code to GitHub
   - Connect to Vercel
   - Configure environment variables

2. **Environment Variables**:
   - Add all environment variables from `.env.local`
   - Ensure Stripe webhook URL is updated for production

3. **Database Migration**:
   - Run the database schema on your Supabase production instance
   - Update environment variables with production keys

### Production Checklist

- [ ] All environment variables configured
- [ ] Database schema deployed
- [ ] Stripe webhooks configured
- [ ] Clerk domain settings updated
- [ ] Grok API access confirmed
- [ ] SSL certificates enabled
- [ ] Error monitoring configured

## 🔒 Security & Compliance

### Data Protection
- **GDPR Compliance**: User data handling follows GDPR guidelines
- **Data Encryption**: All data encrypted in transit and at rest
- **Access Control**: Row Level Security (RLS) in Supabase
- **API Security**: Secure API key management

### Payment Security
- **Stripe Compliance**: PCI DSS compliant payment processing
- **Webhook Verification**: Signed webhook verification
- **Fraud Protection**: Stripe's built-in fraud detection

### AI Model Security
- **Model Access Control**: Tier-based model access
- **Response Filtering**: Content filtering for inappropriate responses
- **Usage Monitoring**: Track and monitor AI model usage

## 📊 Analytics & Monitoring

### Usage Analytics
- **Query Tracking**: Monitor query usage per tier
- **Model Performance**: Track response quality by AI model
- **User Behavior**: Analyze upgrade patterns and user engagement

### Performance Monitoring
- **Response Times**: Monitor AI response latency
- **Error Rates**: Track API failures and errors
- **System Health**: Monitor overall application performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Legal Disclaimer

**AI Guidance Only**: This application provides AI-powered guidance for bookkeeping and accounting tasks. It is not a substitute for professional accounting, legal, or tax advice. Always consult with qualified professionals for your specific situation.

**Model Limitations**: AI responses are generated by machine learning models and may contain inaccuracies. Users should verify all information independently.

---

Built with ❤️ for small business owners everywhere. 