-- Create ip_usage table if it doesn't exist
CREATE TABLE IF NOT EXISTS ip_usage (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ip_address VARCHAR(45) NOT NULL,
    query_count INTEGER NOT NULL DEFAULT 0,
    query_limit INTEGER NOT NULL DEFAULT 5,
    first_used TIMESTAMP NOT NULL DEFAULT NOW(),
    last_used TIMESTAMP NOT NULL DEFAULT NOW(),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Create index on ip_address for faster lookups
CREATE INDEX IF NOT EXISTS idx_ip_usage_ip_address ON ip_usage(ip_address);
CREATE INDEX IF NOT EXISTS idx_ip_usage_last_used ON ip_usage(last_used);