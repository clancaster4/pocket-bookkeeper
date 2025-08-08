import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'

const connectionString = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL
if (!connectionString) {
  throw new Error('NEON_DATABASE_URL (or DATABASE_URL) is required')
}

export const sql = neon(connectionString)
export const db = drizzle(sql)