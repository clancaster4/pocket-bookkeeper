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
  queryLimit: integer('query_limit').notNull().default(5), // Monthly query limit
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

// Note: Chat messages are no longer stored in the database for privacy.
// All conversations are ephemeral and only exist during the user session.

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

// IP Usage tracking table - for anonymous/free users
export const ipUsage = pgTable('ip_usage', {
  id: uuid('id').primaryKey().defaultRandom(),
  ipAddress: varchar('ip_address', { length: 45 }).notNull(), // IPv4 or IPv6
  queryCount: integer('query_count').notNull().default(0),
  queryLimit: integer('query_limit').notNull().default(5),
  firstUsed: timestamp('first_used').notNull().defaultNow(),
  lastUsed: timestamp('last_used').notNull().defaultNow(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}, (table) => ({
  ipAddressIdx: index('idx_ip_usage_ip_address').on(table.ipAddress),
  lastUsedIdx: index('idx_ip_usage_last_used').on(table.lastUsed),
}))

// Define relationships
export const usersRelations = relations(users, ({ many }) => ({
  subscriptionEvents: many(subscriptionEvents),
  usageAnalytics: many(usageAnalytics),
  stripeCustomers: many(stripeCustomers),
}))

// Removed chatMessagesRelations since chat messages are no longer stored

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
export const insertSubscriptionEventSchema = createInsertSchema(subscriptionEvents)
export const selectSubscriptionEventSchema = createSelectSchema(subscriptionEvents)
export const insertUsageAnalyticsSchema = createInsertSchema(usageAnalytics)
export const selectUsageAnalyticsSchema = createSelectSchema(usageAnalytics)
export const insertStripeCustomerSchema = createInsertSchema(stripeCustomers)
export const selectStripeCustomerSchema = createSelectSchema(stripeCustomers)
export const insertIpUsageSchema = createInsertSchema(ipUsage)
export const selectIpUsageSchema = createSelectSchema(ipUsage)

// Export types for easier use
export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert
export type SubscriptionEvent = typeof subscriptionEvents.$inferSelect
export type NewSubscriptionEvent = typeof subscriptionEvents.$inferInsert
export type UsageAnalytics = typeof usageAnalytics.$inferSelect
export type NewUsageAnalytics = typeof usageAnalytics.$inferInsert
export type StripeCustomer = typeof stripeCustomers.$inferSelect
export type NewStripeCustomer = typeof stripeCustomers.$inferInsert
export type IpUsage = typeof ipUsage.$inferSelect
export type NewIpUsage = typeof ipUsage.$inferInsert