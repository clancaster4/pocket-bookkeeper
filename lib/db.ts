import { drizzle } from 'drizzle-orm/neon-serverless'
import { Pool } from '@neondatabase/serverless'
import * as schema from './schema'

// Lazy database connection
let db: ReturnType<typeof drizzle> | null = null

export function getDb() {
  if (!db) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not defined')
    }
    
    // Create connection pool
    const pool = new Pool({ connectionString: process.env.DATABASE_URL })
    
    // Create Drizzle database instance
    db = drizzle(pool, { schema })
  }
  
  return db
}

// Export for backward compatibility
export { getDb as db }

// Export types for easier imports
export type Database = typeof db
export * from './schema'