import { pgTable, uuid, varchar, integer, timestamp, text, jsonb, date, boolean, index } from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { relations } from 'drizzle-orm'
import { z } from 'zod'

// Users table - stores user information and subscription details
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  clerkId: varchar('clerk_id', { length: 255 }).notNull().unique(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  firstName: varchar('first_name', { length: 100 }),
  lastName: varchar('last_name', { length: 100 }),
  businessName: varchar('business_name', { length: 255 }),
  businessType: varchar('business_type', { length: 100 }), // e.g., 'LLC', 'Sole Proprietorship', 'Corporation'
  tier: varchar('tier', { length: 20 }).notNull().default('free'), // 'free', 'basic', 'elite'
  queryCount: integer('query_count').notNull().default(0), // Number of queries used this month
  queryLimit: integer('query_limit').notNull().default(10), // Monthly query limit
  subscriptionStatus: varchar('subscription_status', { length: 20 }).notNull().default('active'), // 'active', 'canceled', 'past_due'
  stripeCustomerId: varchar('stripe_customer_id', { length: 255 }),
  stripeSubscriptionId: varchar('stripe_subscription_id', { length: 255 }),
  currentPeriodStart: timestamp('current_period_start'),
  currentPeriodEnd: timestamp('current_period_end'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}, (table) => ({
  clerkIdIdx: index('idx_users_clerk_id').on(table.clerkId),
  emailIdx: index('idx_users_email').on(table.email),
  tierIdx: index('idx_users_tier').on(table.tier),
}))

// Chat messages table - stores conversation history
export const chatMessages = pgTable('chat_messages', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  conversationId: uuid('conversation_id').notNull(),
  role: varchar('role', { length: 20 }).notNull(), // 'user', 'assistant'
  content: text('content').notNull(),
  timestamp: timestamp('timestamp').notNull().defaultNow(),
  modelUsed: varchar('model_used', { length: 20 }), // Track which AI model was used
  tokensUsed: integer('tokens_used'), // Track token usage for cost analysis
  responseTimeMs: integer('response_time_ms'), // Track response time for performance monitoring
}, (table) => ({
  userIdIdx: index('idx_chat_messages_user_id').on(table.userId),
  conversationIdIdx: index('idx_chat_messages_conversation_id').on(table.conversationId),
  timestampIdx: index('idx_chat_messages_timestamp').on(table.timestamp),
}))

// Subscription events table - tracks subscription changes
export const subscriptionEvents = pgTable('subscription_events', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  eventType: varchar('event_type', { length: 50 }).notNull(),
  stripeEventId: varchar('stripe_event_id', { length: 255 }),
  oldTier: varchar('old_tier', { length: 20 }),
  newTier: varchar('new_tier', { length: 20 }),
  eventData: jsonb('event_data'), // Store additional event details
  createdAt: timestamp('created_at').notNull().defaultNow(),
}, (table) => ({
  userIdIdx: index('idx_subscription_events_user_id').on(table.userId),
  eventTypeIdx: index('idx_subscription_events_event_type').on(table.eventType),
}))

// Usage analytics table - tracks usage patterns
export const usageAnalytics = pgTable('usage_analytics', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  date: date('date').notNull(),
  queryCount: integer('query_count').notNull().default(0),
  totalTokens: integer('total_tokens').notNull().default(0),
  totalResponseTimeMs: integer('total_response_time_ms').notNull().default(0),
  modelBreakdown: jsonb('model_breakdown'), // Track usage by model type
  createdAt: timestamp('created_at').notNull().defaultNow(),
}, (table) => ({
  userIdIdx: index('idx_usage_analytics_user_id').on(table.userId),
  dateIdx: index('idx_usage_analytics_date').on(table.date),
  userDateIdx: index('idx_usage_analytics_user_date').on(table.userId, table.date),
}))

// Stripe customers table - stores Stripe customer information
export const stripeCustomers = pgTable('stripe_customers', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  stripeCustomerId: varchar('stripe_customer_id', { length: 255 }).notNull().unique(),
  email: varchar('email', { length: 255 }).notNull(),
  subscriptionId: varchar('subscription_id', { length: 255 }),
  subscriptionStatus: varchar('subscription_status', { length: 50 }),
  currentPeriodStart: timestamp('current_period_start'),
  currentPeriodEnd: timestamp('current_period_end'),
  cancelAtPeriodEnd: boolean('cancel_at_period_end').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}, (table) => ({
  userIdIdx: index('idx_stripe_customers_user_id').on(table.userId),
  stripeCustomerIdIdx: index('idx_stripe_customers_stripe_customer_id').on(table.stripeCustomerId),
  emailIdx: index('idx_stripe_customers_email').on(table.email),
  subscriptionIdIdx: index('idx_stripe_customers_subscription_id').on(table.subscriptionId),
}))

// Define relationships
export const usersRelations = relations(users, ({ many }) => ({
  chatMessages: many(chatMessages),
  subscriptionEvents: many(subscriptionEvents),
  usageAnalytics: many(usageAnalytics),
  stripeCustomers: many(stripeCustomers),
}))

export const chatMessagesRelations = relations(chatMessages, ({ one }) => ({
  user: one(users, {
    fields: [chatMessages.userId],
    references: [users.id],
  }),
}))

export const subscriptionEventsRelations = relations(subscriptionEvents, ({ one }) => ({
  user: one(users, {
    fields: [subscriptionEvents.userId],
    references: [users.id],
  }),
}))

export const usageAnalyticsRelations = relations(usageAnalytics, ({ one }) => ({
  user: one(users, {
    fields: [usageAnalytics.userId],
    references: [users.id],
  }),
}))

export const stripeCustomersRelations = relations(stripeCustomers, ({ one }) => ({
  user: one(users, {
    fields: [stripeCustomers.userId],
    references: [users.id],
  }),
}))

// Zod schemas for validation
export const insertUserSchema = createInsertSchema(users)
export const selectUserSchema = createSelectSchema(users)
export const insertChatMessageSchema = createInsertSchema(chatMessages)
export const selectChatMessageSchema = createSelectSchema(chatMessages)
export const insertSubscriptionEventSchema = createInsertSchema(subscriptionEvents)
export const selectSubscriptionEventSchema = createSelectSchema(subscriptionEvents)
export const insertUsageAnalyticsSchema = createInsertSchema(usageAnalytics)
export const selectUsageAnalyticsSchema = createSelectSchema(usageAnalytics)
export const insertStripeCustomerSchema = createInsertSchema(stripeCustomers)
export const selectStripeCustomerSchema = createSelectSchema(stripeCustomers)

// Export types for easier use
export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert
export type ChatMessage = typeof chatMessages.$inferSelect
export type NewChatMessage = typeof chatMessages.$inferInsert
export type SubscriptionEvent = typeof subscriptionEvents.$inferSelect
export type NewSubscriptionEvent = typeof subscriptionEvents.$inferInsert
export type UsageAnalytics = typeof usageAnalytics.$inferSelect
export type NewUsageAnalytics = typeof usageAnalytics.$inferInsert
export type StripeCustomer = typeof stripeCustomers.$inferSelect
export type NewStripeCustomer = typeof stripeCustomers.$inferInsert