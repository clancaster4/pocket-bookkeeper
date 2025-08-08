-- Pocket Bookkeeper Database Schema
-- This schema supports a three-tier subscription system for AI-powered bookkeeping assistance

-- Users table - stores user information and subscription details
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clerk_id VARCHAR(255) UNIQUE NOT NULL, -- Clerk authentication ID
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    business_name VARCHAR(255),
    business_type VARCHAR(100), -- e.g., 'LLC', 'Sole Proprietorship', 'Corporation'
    tier VARCHAR(20) DEFAULT 'free' CHECK (tier IN ('free', 'basic', 'elite')), -- Subscription tier
    query_count INTEGER DEFAULT 0, -- Number of queries used this month
    query_limit INTEGER DEFAULT 10, -- Monthly query limit (unlimited for paid tiers)
    subscription_status VARCHAR(20) DEFAULT 'active' CHECK (subscription_status IN ('active', 'canceled', 'past_due')),
    stripe_customer_id VARCHAR(255),
    stripe_subscription_id VARCHAR(255),
    current_period_start TIMESTAMP,
    current_period_end TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Chat messages table - stores conversation history
CREATE TABLE chat_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    conversation_id UUID, -- Group messages by conversation
    role VARCHAR(20) NOT NULL CHECK (role IN ('user', 'assistant')),
    content TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT NOW(),
    model_used VARCHAR(20), -- Track which AI model was used (standard-ai, advanced-ai, premium-ai)
    tokens_used INTEGER, -- Track token usage for cost analysis
    response_time_ms INTEGER -- Track response time for performance monitoring
);

-- Subscription events table - tracks subscription changes
CREATE TABLE subscription_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    event_type VARCHAR(50) NOT NULL, -- 'subscription_created', 'subscription_updated', 'subscription_canceled', etc.
    stripe_event_id VARCHAR(255),
    old_tier VARCHAR(20),
    new_tier VARCHAR(20),
    event_data JSONB, -- Store additional event details
    created_at TIMESTAMP DEFAULT NOW()
);

-- Usage analytics table - tracks usage patterns
CREATE TABLE usage_analytics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    query_count INTEGER DEFAULT 0,
    total_tokens INTEGER DEFAULT 0,
    total_response_time_ms INTEGER DEFAULT 0,
    model_breakdown JSONB, -- Track usage by model type
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(user_id, date)
);

-- Stripe customers table - stores Stripe customer information
CREATE TABLE stripe_customers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    stripe_customer_id VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) NOT NULL,
    subscription_id VARCHAR(255),
    subscription_status VARCHAR(50),
    current_period_start TIMESTAMP,
    current_period_end TIMESTAMP,
    cancel_at_period_end BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_users_clerk_id ON users(clerk_id);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_tier ON users(tier);
CREATE INDEX idx_chat_messages_user_id ON chat_messages(user_id);
CREATE INDEX idx_chat_messages_conversation_id ON chat_messages(conversation_id);
CREATE INDEX idx_chat_messages_timestamp ON chat_messages(timestamp);
CREATE INDEX idx_subscription_events_user_id ON subscription_events(user_id);
CREATE INDEX idx_subscription_events_event_type ON subscription_events(event_type);
CREATE INDEX idx_usage_analytics_user_id ON usage_analytics(user_id);
CREATE INDEX idx_usage_analytics_date ON usage_analytics(date);
CREATE INDEX idx_stripe_customers_user_id ON stripe_customers(user_id);
CREATE INDEX idx_stripe_customers_stripe_customer_id ON stripe_customers(stripe_customer_id);
CREATE INDEX idx_stripe_customers_email ON stripe_customers(email);
CREATE INDEX idx_stripe_customers_subscription_id ON stripe_customers(subscription_id);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update the updated_at column
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_stripe_customers_updated_at BEFORE UPDATE ON stripe_customers
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for testing
INSERT INTO users (clerk_id, email, first_name, last_name, business_name, business_type, tier, query_count, query_limit) VALUES
('user_2abc123', 'john@example.com', 'John', 'Doe', 'John\'s Consulting', 'LLC', 'free', 5, 10),
('user_2def456', 'jane@example.com', 'Jane', 'Smith', 'Smith & Co', 'Corporation', 'basic', 25, 999999),
('user_2ghi789', 'bob@example.com', 'Bob', 'Johnson', 'Bob\'s Services', 'Sole Proprietorship', 'elite', 50, 999999);

-- Insert sample chat messages
INSERT INTO chat_messages (user_id, conversation_id, role, content, model_used) VALUES
((SELECT id FROM users WHERE email = 'john@example.com'), gen_random_uuid(), 'user', 'How do I record a business expense?', NULL),
((SELECT id FROM users WHERE email = 'john@example.com'), (SELECT conversation_id FROM chat_messages WHERE user_id = (SELECT id FROM users WHERE email = 'john@example.com') LIMIT 1), 'assistant', 'To record a business expense, you need to...', 'standard-ai'),
((SELECT id FROM users WHERE email = 'jane@example.com'), gen_random_uuid(), 'user', 'What tax deductions can I claim?', NULL),
((SELECT id FROM users WHERE email = 'jane@example.com'), (SELECT conversation_id FROM chat_messages WHERE user_id = (SELECT id FROM users WHERE email = 'jane@example.com') LIMIT 1), 'assistant', 'Common business tax deductions include...', 'advanced-ai');

-- Insert sample Stripe customers
INSERT INTO stripe_customers (user_id, stripe_customer_id, email, subscription_id, subscription_status, current_period_start, current_period_end) VALUES
((SELECT id FROM users WHERE email = 'jane@example.com'), 'cus_123456789', 'jane@example.com', 'sub_123456789', 'active', NOW(), NOW() + INTERVAL '1 month'),
((SELECT id FROM users WHERE email = 'bob@example.com'), 'cus_987654321', 'bob@example.com', 'sub_987654321', 'active', NOW(), NOW() + INTERVAL '1 month'); 