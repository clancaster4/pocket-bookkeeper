# Pocket Bookkeeper

An AI-powered bookkeeping chat advisor with a three-tier freemium subscription model designed to help small business owners manage their financial records with confidence and accuracy.

## Setup (Auth & Database)

- Authentication: Clerk
  - Set `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`
- Database: Neon + Drizzle ORM (PostgreSQL)
  - Set `NEON_DATABASE_URL` (or `DATABASE_URL`)
  - Generate and run migrations:
    - `npm run drizzle:generate`
    - `npm run drizzle:migrate`

Update environment variables in `.env.local` based on `env.example`.

## Plans
- Free: 10 queries/month (standard AI)
- Everyday Assistant: $6.99/month (advanced AI)
- Elite Advisor: $14.99/month (premium AI)

## Development
- `npm run dev` – start Next.js
- `npm run build` – production build
- `npm run drizzle:generate` – generate SQL
- `npm run drizzle:migrate` – push schema to Neon 