import { NextRequest, NextResponse } from 'next/server'
// import { auth } from '@clerk/nextjs/server'
// import { supabaseAdmin } from '@/lib/supabase'

// Grok API call function
async function callGrokAPI(message: string, history: any[], model: string, attachments?: any[]): Promise<{ response: string, modelUsed: string }> {
  try {
    const grokApiKey = process.env.GROK_API_KEY
    const grokApiUrl = process.env.GROK_API_URL
    
    if (!grokApiKey || !grokApiUrl) {
      throw new Error('Grok API credentials not configured')
    }

    // Determine which Grok model to use
    const grokModel = model === 'premium-ai' 
      ? process.env.GROK_4_MODEL || 'grok-beta' 
      : process.env.GROK_3_MINI_MODEL || 'grok-beta'

    // Format conversation history for Grok API
    const messages = [
      {
        role: 'system',
        content: `You are My AI Bookkeeper, a friendly and knowledgeable AI assistant specialized in accounting, bookkeeping, and finance for small businesses.

COMMUNICATION STYLE:
- Explain complex accounting concepts in simple, everyday language
- Always provide the "plain English" explanation first, then the technical term
- Use relatable examples that small business owners can understand
- Mix professional expertise with approachable, conversational tone
- Break down complicated topics into easy-to-follow steps
- Avoid overwhelming users with too much jargon at once

RESPONSE FORMAT:
- Start with a simple, clear answer
- Follow with practical steps or examples
- Include relevant technical terms in parentheses for learning
- Use analogies when helpful (e.g., "Think of cash flow like water flowing through pipes...")
- End with actionable next steps when appropriate

AREAS OF EXPERTISE:
1. You ONLY answer questions related to:
   - Bookkeeping and accounting (tracking money in and out)
   - Tax preparation and deductions (keeping more of what you earn)
   - Financial management and cash flow (making sure you have money when you need it)
   - Business expenses and income tracking (knowing where your money goes)
   - Financial software guidance (QuickBooks, Xero, etc.)
   - Business structure decisions (LLC, S-Corp, etc. - choosing the right setup)
   - Payroll and employee finances (paying your team properly)
   - Financial reporting and compliance (required paperwork and reports)
   - Invoicing and payments (getting paid by customers)

2. POLITELY DECLINE questions about:
   - Non-financial topics
   - Personal advice unrelated to business finance
   - Technical/programming help (unless related to accounting software)
   - Academic homework (unless it's accounting/finance coursework)
   - Medical, legal (non-tax), or other professional services

3. When declining, redirect to financial topics and offer helpful alternatives.
4. Always balance professional expertise with accessibility.
5. Remember: your users are business owners, not accountants - help them succeed!`
      },
      ...history.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: 'user',
        content: message
      }
    ]

    // Make API call to Grok
    const response = await fetch(grokApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${grokApiKey}`
      },
      body: JSON.stringify({
        model: grokModel,
        messages: messages,
        max_tokens: 1500,
        temperature: 0.7,
        stream: false
      })
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error(`Grok API error ${response.status}:`, errorData)
      throw new Error(`Grok API request failed: ${response.status}`)
    }

    const data = await response.json()
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Invalid response format from Grok API')
    }

    const aiResponse = data.choices[0].message.content

    return {
      response: aiResponse,
      modelUsed: model
    }

  } catch (error) {
    console.error('Grok API call failed:', error)
    
    // Fallback to mock response if API fails
    const fallbackResponse = `AI Service Temporarily Unavailable

I'm experiencing a temporary connection issue with the advanced AI service. Here's some general bookkeeping guidance:

Key Bookkeeping Principles:
• Separate business and personal finances
• Keep detailed records of all transactions
• Reconcile accounts regularly
• Categorize expenses properly
• Save receipts and documentation

Common Business Expense Categories:
• Office supplies and materials
• Business meals (50% deductible)
• Vehicle/travel expenses
• Professional services
• Insurance premiums
• Equipment and software

For immediate help: Please try your question again in a few moments, or contact our support team.

Service Status: Using fallback response due to temporary AI service disruption.`

    return {
      response: fallbackResponse,
      modelUsed: 'fallback-ai'
    }
  }
}

import { getDb, ipUsage, NewIpUsage } from '@/lib/db'
import { eq } from 'drizzle-orm'

// Get client IP address (fallback for unauthenticated users)
function getClientIP(request: NextRequest): string {
  // Try different headers for IP address
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const cfConnectingIP = request.headers.get('cf-connecting-ip')
  const userAgent = request.headers.get('user-agent') || ''
  
  // Get client fingerprint from headers if available
  const clientFingerprint = request.headers.get('x-client-fingerprint')
  
  // Log IP detection for debugging
  console.log('IP Detection Debug:', {
    forwarded,
    realIP,
    cfConnectingIP,
    requestIP: request.ip,
    userAgent: userAgent.substring(0, 100),
    clientFingerprint
  })
  
  let detectedIP = 'unknown'
  
  // If we have a client fingerprint, use that for more consistent tracking
  if (clientFingerprint) {
    detectedIP = `fp_${clientFingerprint}`
  } else if (forwarded) {
    detectedIP = forwarded.split(',')[0].trim()
  } else if (realIP) {
    detectedIP = realIP
  } else if (cfConnectingIP) {
    detectedIP = cfConnectingIP
  } else {
    detectedIP = request.ip || 'unknown'
  }
  
  console.log('Final detected IP/fingerprint:', detectedIP)
  return detectedIP
}

// Temporary in-memory fallback for IP tracking
const ipUsageMap = new Map<string, { count: number, resetTime: Date }>()

// Check and update usage for an IP address using database persistence with fallback
async function checkAndUpdateUsage(ip: string, limit: number = 5): Promise<{ allowed: boolean, remaining: number, resetTime: Date }> {
  const now = new Date()
  
  try {
    const db = getDb()
    
    // Check if IP exists in database
    const existingUsage = await db.query.ipUsage.findFirst({
      where: eq(ipUsage.ipAddress, ip),
    })
    
    if (!existingUsage) {
      // Create new IP usage record
      const newUsage: NewIpUsage = {
        ipAddress: ip,
        queryCount: 1,
        queryLimit: limit,
        firstUsed: now,
        lastUsed: now,
      }
      
      await db.insert(ipUsage).values(newUsage)
      return { allowed: true, remaining: limit - 1, resetTime: now }
    }
    
    // Check if user has exceeded limit
    if (existingUsage.queryCount >= limit) {
      return { allowed: false, remaining: 0, resetTime: existingUsage.firstUsed }
    }
    
    // Increment usage count
    const newCount = existingUsage.queryCount + 1
    await db.update(ipUsage)
      .set({ 
        queryCount: newCount,
        lastUsed: now,
        updatedAt: now
      })
      .where(eq(ipUsage.ipAddress, ip))
    
    return { 
      allowed: true, 
      remaining: limit - newCount, 
      resetTime: existingUsage.firstUsed 
    }
  } catch (error) {
    console.error('Database error in checkAndUpdateUsage, using fallback:', error)
    
    // Fallback to in-memory tracking
    const existing = ipUsageMap.get(ip)
    if (!existing) {
      ipUsageMap.set(ip, { count: 1, resetTime: now })
      return { allowed: true, remaining: limit - 1, resetTime: now }
    }
    
    if (existing.count >= limit) {
      return { allowed: false, remaining: 0, resetTime: existing.resetTime }
    }
    
    existing.count++
    return { allowed: true, remaining: limit - existing.count, resetTime: existing.resetTime }
  }
}

// Get usage info for an IP address using database with fallback
async function getUsageInfo(ip: string, limit: number = 5): Promise<{ count: number, remaining: number, resetTime: Date }> {
  const now = new Date()
  
  try {
    const db = getDb()
    const existingUsage = await db.query.ipUsage.findFirst({
      where: eq(ipUsage.ipAddress, ip),
    })
    
    if (!existingUsage) {
      return { count: 0, remaining: limit, resetTime: now }
    }
    
    return { 
      count: existingUsage.queryCount, 
      remaining: Math.max(0, limit - existingUsage.queryCount), 
      resetTime: existingUsage.firstUsed 
    }
  } catch (error) {
    console.error('Database error in getUsageInfo, using fallback:', error)
    
    // Fallback to in-memory tracking
    const existing = ipUsageMap.get(ip)
    if (!existing) {
      return { count: 0, remaining: limit, resetTime: now }
    }
    
    return { 
      count: existing.count, 
      remaining: Math.max(0, limit - existing.count), 
      resetTime: existing.resetTime 
    }
  }
}

// Topic validation - Check if the message is related to accounting/bookkeeping/finance
function isTopicValid(message: string): { valid: boolean, reason?: string } {
  const lowerMessage = message.toLowerCase()
  
  // List of allowed topics and keywords
  const allowedTopics = [
    // Bookkeeping
    'bookkeep', 'accounting', 'accountant', 'ledger', 'journal', 'entry', 'entries',
    'reconcile', 'reconciliation', 'balance', 'books', 'record', 'transaction',
    
    // Expenses & Income
    'expense', 'cost', 'spend', 'payment', 'invoice', 'receipt', 'bill',
    'revenue', 'income', 'earning', 'profit', 'loss', 'margin',
    
    // Taxes
    'tax', 'deduct', 'irs', 'w2', 'w9', '1099', '1040', 'filing',
    'withhold', 'quarterly', 'estimated tax', 'sales tax', 'payroll tax',
    
    // Financial Management
    'cash flow', 'budget', 'forecast', 'financial', 'fiscal', 'audit',
    'asset', 'liability', 'equity', 'capital', 'depreciation', 'amortization',
    
    // Business Finance
    'business', 'company', 'llc', 'corporation', 's-corp', 'c-corp',
    'sole proprietor', 'partnership', 'ein', 'dba', 'contractor', 'freelance',
    
    // Software & Tools
    'quickbooks', 'xero', 'freshbooks', 'wave', 'sage', 'peachtree',
    'spreadsheet', 'excel', 'category', 'categorize', 'chart of accounts',
    
    // Banking
    'bank', 'checking', 'savings', 'credit card', 'merchant', 'stripe',
    'paypal', 'square', 'venmo', 'zelle', 'ach', 'wire',
    
    // Payroll
    'payroll', 'salary', 'wage', 'employee', 'contractor', 'benefits',
    'overtime', 'commission', 'bonus', 'withholding',
    
    // Reporting
    'report', 'statement', 'p&l', 'profit and loss', 'balance sheet',
    'cash flow statement', 'trial balance', 'general ledger', 'aging',
    
    // Compliance
    'compliance', 'regulation', 'gaap', 'audit', 'documentation',
    'record keeping', 'retention', 'filing deadline'
  ]
  
  // Check if message contains any allowed topics
  const hasAllowedTopic = allowedTopics.some(topic => lowerMessage.includes(topic))
  
  // List of explicitly blocked topics (non-financial)
  const blockedTopics = [
    // Entertainment
    'movie', 'film', 'music', 'game', 'sport', 'entertainment',
    
    // Personal non-financial
    'recipe', 'cooking', 'travel', 'vacation', 'weather', 'news',
    'relationship', 'dating', 'health', 'medical', 'doctor',
    
    // Technical non-financial
    'programming', 'coding', 'javascript', 'python', 'html', 'css',
    'computer', 'software development', 'app development',
    
    // Academic non-financial
    'homework', 'essay', 'poem', 'story', 'creative writing',
    'history', 'science', 'math problem', 'physics', 'chemistry'
  ]
  
  // Check if message contains blocked topics
  const hasBlockedTopic = blockedTopics.some(topic => lowerMessage.includes(topic))
  
  // Special case: Allow general greetings and basic questions about the service
  const isGreeting = /^(hi|hello|hey|good morning|good afternoon|good evening|thanks|thank you|bye|goodbye)[\s!.,?]*$/i.test(message.trim())
  const isServiceQuestion = lowerMessage.includes('what can you help') || 
                           lowerMessage.includes('what do you do') ||
                           lowerMessage.includes('how can you help') ||
                           lowerMessage.includes('what services')
  
  if (isGreeting || isServiceQuestion) {
    return { valid: true }
  }
  
  // If it has blocked topics, reject
  if (hasBlockedTopic && !hasAllowedTopic) {
    return { 
      valid: false, 
      reason: 'off-topic' 
    }
  }
  
  // If it doesn't have allowed topics and is more than just a short phrase, reject
  if (!hasAllowedTopic && message.split(' ').length > 3) {
    return { 
      valid: false, 
      reason: 'not-financial' 
    }
  }
  
  return { valid: true }
}

// System prompt for the AI to enforce topic restrictions
const SYSTEM_PROMPT = `You are My AI Bookkeeper, a friendly and knowledgeable AI assistant specialized in accounting, bookkeeping, and finance for small businesses.

COMMUNICATION STYLE:
- Explain complex accounting concepts in simple, everyday language
- Always provide the "plain English" explanation first, then the technical term
- Use relatable examples that small business owners can understand
- Mix professional expertise with approachable, conversational tone
- Break down complicated topics into easy-to-follow steps
- Avoid overwhelming users with too much jargon at once

RESPONSE FORMAT:
- Start with a simple, clear answer
- Follow with practical steps or examples
- Include relevant technical terms in parentheses for learning
- Use analogies when helpful (e.g., "Think of your business budget like a household budget...")
- End with actionable next steps when appropriate

AREAS OF EXPERTISE:
1. You ONLY answer questions related to:
   - Bookkeeping and accounting (tracking money in and out)
   - Tax preparation and deductions (keeping more of what you earn)
   - Financial management and cash flow (making sure you have money when you need it)
   - Business expenses and income tracking (knowing where your money goes)
   - Financial software guidance (QuickBooks, Xero, etc.)
   - Business structure decisions (LLC, S-Corp, etc. - choosing the right setup)
   - Payroll and employee finances (paying your team properly)
   - Financial reporting and compliance (required paperwork and reports)
   - Invoicing and payments (getting paid by customers)

2. POLITELY DECLINE questions about:
   - Non-financial topics
   - Personal advice unrelated to business finance
   - Technical/programming help (unless related to accounting software)
   - Academic homework (unless it's accounting/finance coursework)
   - Medical, legal (non-tax), or other professional services

3. When declining, redirect to financial topics and offer helpful alternatives.
4. Always balance professional expertise with accessibility.
5. Remember: your users are business owners, not accountants - help them succeed!`

// Call actual Grok API for premium tiers, mock responses for free tier
async function getAIResponse(message: string, history: any[], model: string = 'standard-ai', attachments?: any[], userTier: string = 'free'): Promise<{ response: string, modelUsed: string }> {
  // First, validate the topic
  const topicValidation = isTopicValid(message)
  
  if (!topicValidation.valid) {
    // Return a helpful error message based on the reason
    let response = ''
    
    if (topicValidation.reason === 'off-topic') {
      response = `I'm a Bookkeeping Specialist

I apologize, but I can only help with accounting, bookkeeping, and finance-related questions. I noticed your question seems to be about a non-financial topic.

I can help you with:
• Expense tracking and categorization
• Tax deductions and preparation
• Financial reports and analysis
• Cash flow management
• Invoice and payment processing
• QuickBooks and accounting software
• Business structure and compliance
• Payroll and employee finances

Example questions I can answer:
• "How should I categorize this business expense?"
• "What tax deductions can I claim as a freelancer?"
• "How do I reconcile my bank statements?"
• "Should I form an LLC or S-Corp?"

Please ask me a bookkeeping or finance-related question, and I'll be happy to help!`
    } else {
      response = `Let Me Help With Your Bookkeeping Needs

I'm My AI Bookkeeper, your AI assistant for all things accounting and finance. I'm not sure how to help with that particular request, but I'm an expert in business financial management!

Try asking me about:
• How to track business expenses
• Understanding financial statements
• Tax-saving strategies for small businesses
• Setting up your chart of accounts
• Managing cash flow
• Using accounting software effectively
• Business banking best practices
• Financial planning and budgeting

Quick Start Questions:
• "What expenses can I deduct as a business owner?"
• "How do I prepare for tax season?"
• "What's the difference between cash and accrual accounting?"

What bookkeeping or financial question can I help you with today?`
    }
    
    return { response, modelUsed: model }
  }

  // Validate subscription tier access
  if (model === 'advanced-ai' && userTier !== 'basic' && userTier !== 'elite') {
    return { 
      response: `Upgrade Required for Advanced AI

The Advanced AI model (Grok-3-mini) is available with the Everyday Assistant subscription tier.

Available with your subscription:
• Standard AI responses
• Basic bookkeeping guidance
• 10 queries per month (free tier)

Upgrade to Everyday Assistant ($9.99/month) for:
• Unlimited queries
• Advanced AI powered by Grok-3-mini
• Enhanced bookkeeping guidance
• Faster response times

Would you like to upgrade your subscription?`,
      modelUsed: 'standard-ai'
    }
  }

  if (model === 'premium-ai' && userTier !== 'elite') {
    return { 
      response: `Upgrade Required for Premium AI

The Premium AI model (Grok-4) is available with the Elite Advisor subscription tier.

Available with your subscription:
${userTier === 'basic' ? '• Advanced AI powered by Grok-3-mini\n• Unlimited queries\n' : '• Standard AI responses\n• 10 queries per month\n'}

Upgrade to Elite Advisor ($19.99/month) for:
• Premium AI powered by Grok-4
• Most advanced reasoning and analysis
• Priority support
• All Everyday Assistant features

Would you like to upgrade your subscription?`,
      modelUsed: userTier === 'basic' ? 'advanced-ai' : 'standard-ai'
    }
  }

  // Call Grok API for premium models
  if ((model === 'advanced-ai' && (userTier === 'basic' || userTier === 'elite')) || 
      (model === 'premium-ai' && userTier === 'elite')) {
    return await callGrokAPI(message, history, model, attachments)
  }
  
  // Free tier: provide mock responses (standard-ai)
  return await getFreeResponse(message, history, attachments)
}

// Mock AI response function for free tier users
async function getFreeResponse(message: string, history: any[], attachments?: any[]): Promise<{ response: string, modelUsed: string }> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))
  
  // Analyze the user's message and attachments to provide relevant bookkeeping guidance
  const lowerMessage = message.toLowerCase()
  const hasAttachments = attachments && attachments.length > 0
  
  let response = ''
  
  // Handle greetings
  if (/^(hi|hello|hey|good morning|good afternoon|good evening)[\s!.,?]*$/i.test(message.trim())) {
    response = `Hello! Welcome to My AI Bookkeeper

I'm your friendly AI bookkeeping assistant! Think of me as your personal finance expert who speaks in plain English, not confusing accounting jargon.

I can help you with:
• Tracking your money - Know where every dollar goes (expense tracking)
• Keeping more of what you earn - Find tax breaks you might be missing
• Understanding your numbers - Make sense of reports and financial data
• Cash flow - Make sure you have money when bills are due
• Paperwork made simple - Organize receipts and invoices
• Software help - QuickBooks, Xero, or whatever you use
• Business setup - LLC, S-Corp, or stay simple? I'll explain the difference
• Paying employees - Do it right and stay compliant

How can I help your business today?

I'm here to:
• Answer questions in simple terms (no confusing accountant-speak!)
• Look at your receipts or documents and explain what they mean
• Help you save money on taxes
• Show you the best practices that actually work for small businesses

What's your biggest money question right now?`
  }
  
  // Handle service questions
  else if (lowerMessage.includes('what can you help') || lowerMessage.includes('what do you do')) {
    response = `I'm Your Expert Bookkeeping Assistant

I specialize exclusively in accounting, bookkeeping, and financial management for small businesses. Here's how I can help:

My Areas of Expertise:

Bookkeeping & Accounting
• Expense categorization
• Double-entry bookkeeping
• Chart of accounts setup
• Journal entries
• Bank reconciliation

Tax Assistance
• Identifying deductions
• Quarterly tax planning
• 1099 vs W-2 guidance
• Business vs personal expenses
• Tax document preparation

Financial Analysis
• Understanding P&L statements
• Balance sheet analysis
• Cash flow forecasting
• Financial ratios
• Profit margin calculations

Business Finance
• LLC vs S-Corp decisions
• Business structure advice
• Contractor vs employee classification
• Business banking setup
• Credit and loan guidance

Software Support
• QuickBooks assistance
• Excel/spreadsheet formulas
• Xero, FreshBooks, Wave help
• Integration guidance
• Report generation

Compliance & Documentation
• Record keeping requirements
• Audit preparation
• Financial documentation
• Retention policies
• Regulatory compliance

Note: I focus solely on financial topics. For non-financial questions, please consult appropriate specialists.

What specific bookkeeping or financial question can I help you with?`
  }
  
  // Handle document/image analysis
  if (hasAttachments) {
    const imageCount = attachments.filter(att => att.type.startsWith('image/')).length
    const documentCount = attachments.filter(att => !att.type.startsWith('image/')).length
    
    response = `Document Analysis Results:

I've analyzed the ${attachments.length} file${attachments.length > 1 ? 's' : ''} you uploaded:

Files Received:
${attachments.map(att => `• ${att.name} (${att.type})`).join('\n')}

Analysis Summary:
${imageCount > 0 ? `• ${imageCount} image${imageCount > 1 ? 's' : ''} - I can see visual content like receipts, invoices, or financial documents\n` : ''}${documentCount > 0 ? `• ${documentCount} document${documentCount > 1 ? 's' : ''} - I can extract text and data from these files\n` : ''}

What I can help you with:
• Data Extraction: Extract amounts, dates, vendor names, and line items
• Expense Categorization: Identify and categorize business expenses
• Document Classification: Determine if it's a receipt, invoice, bank statement, etc.
• Validation: Check for missing information or potential issues
• Analysis: Provide insights on spending patterns or financial trends

Next Steps:
Please let me know what specific information you'd like me to extract or analyze from these documents. For example:
• "What expenses can I deduct from this receipt?"
• "Can you extract the line items from this invoice?"
• "Is this document properly formatted for tax purposes?"
• "What category should I put this expense in?"`
  }
  
  // Basic bookkeeping topics
  else if (lowerMessage.includes('expense') || lowerMessage.includes('cost') || lowerMessage.includes('spend')) {
    response = `Let's Make Expense Tracking Simple!

Think of tracking expenses like keeping a detailed diary of where your business money goes. Here's how to do it without the headache:

1. The Golden Rule: Keep Business and Personal Separate
Just like you wouldn't mix your personal grocery receipts with business ones, always keep these completely separate. It'll save you huge headaches come tax time!

2. Create Simple Categories (Don't Overthink It!)
Start with these basic buckets:
- Office Stuff - Supplies, rent, utilities
- Getting Around - Gas, parking, travel costs  
- Business Meals - Client dinners, team lunches (50% tax deductible!)
- Tech & Tools - Software, equipment, apps
- Learning & Growing - Training, books, conferences
- Insurance & Protection - Business insurance, legal fees

3. The "Shoebox Method" vs. Going Digital
- Old School: Keep all receipts in a shoebox (but please organize monthly!)
- Smart Way: Use your phone to snap photos or apps like QuickBooks/Expensify
- Either works - just pick one and stick with it!

4. The Tax Question Everyone Asks
Simple rule: If you bought it FOR your business, it's probably deductible. If you bought it for personal use, it's not. When in doubt, ask yourself: "Did I buy this to make money in my business?"

Real Talk: Most small business owners overthink this. Start simple, stay consistent, and upgrade your system as you grow.

What specific expense question do you have? I can explain it in plain English - no accounting degree required!`
  }
  
  // Tax-related questions
  else if (lowerMessage.includes('tax') || lowerMessage.includes('deduct') || lowerMessage.includes('irs')) {
    response = `Let's Talk Taxes - In Plain English!

Taxes don't have to be scary! Think of deductions as "business expenses that save you money." Here are the big ones:

1. Your Home Office (If You Work From Home)
Simple question: Do you have a room or area used ONLY for business? If yes, you can deduct it!
• Easy way: $5 per square foot (up to 300 sq ft = $1,500 max)
• Detailed way: Figure out what percentage of your home is for business, then deduct that percentage of your home costs
• Real talk: Most people use the easy way - it's simpler and usually just as good!

2. Your Car for Business
Every mile you drive for business can save you money on taxes!
• 2024 rate: 65.5¢ per business mile (this rate goes up most years)
• What counts: Driving to meet clients, going to the bank for business, picking up supplies
• What doesn't count: Your regular commute to a main office
• Keep track: Use a simple mileage app or even a notebook in your car

3. The Stuff You Buy for Business
• Under $2,500: Just deduct the full amount this year (called "de minimis safe harbor" - fancy term for "small stuff rule")
• Over $2,500: You might need to spread it out over several years (called "depreciation" - like paying for it bit by bit on your taxes)
• Examples: Computers, software, desks, cameras, tools

4. Getting Help From Pros
• Your accountant's fees (yes, paying someone to do your taxes is tax-deductible!)
• Lawyer fees for business stuff
• Business coaches or consultants
• Professional memberships that help your business

5. Telling People About Your Business
• Website costs
• Business cards and flyers  
• Facebook/Google ads
• Networking event costs

6. Business Travel & Meals
• Travel: 100% deductible if it's truly for business
• Meals: 50% deductible (the IRS figures you'd eat anyway, so they only give you half)
• Client entertainment: Also 50% deductible

The Golden Rules:
1. Keep receipts - Your phone camera works great for this!
2. Business only - Don't try to deduct personal stuff (the IRS will notice)
3. When in doubt, ask - Better safe than sorry
4. Different business types have different rules - LLC vs Corporation vs Sole Proprietor all work a bit differently

Pro Tip: Take a photo of any business receipt and I can help you figure out if it's deductible and how to categorize it!

What specific tax question is keeping you up at night? Let's make it simple!`
  }
  
  // Cash flow questions
  else if (lowerMessage.includes('cash flow') || lowerMessage.includes('money') || lowerMessage.includes('revenue')) {
    response = `Let's Fix Your Money Flow - Think of It Like Water!

Cash flow is just a fancy way of saying "making sure you have money when you need it." Think of your business like a bathtub:
• Water flowing IN = money from customers
• Water flowing OUT = money for bills and expenses
• You want more coming in than going out!

The Three "Buckets" of Money Movement:
1. Day-to-Day Stuff (Operating) - Paying for supplies, rent, your salary
2. Big Purchases (Investing) - Buying equipment, a new computer, office space
3. Getting Money to Start/Grow (Financing) - Loans, investor money, money you put in yourself

How to Get Money Coming In FASTER:

1. Send Bills Right Away
Don't wait! The day you finish work for a client, send that invoice. Every day you wait is money sitting on the table.

2. Make It Easy for People to Pay You
• Accept credit cards (yes, even if there's a fee - you'll get paid faster)
• Try Venmo, PayPal, Zelle for small amounts
• Offer a small discount for paying early (like "2% off if paid in 10 days")

3. Follow Up on Late Payments
Don't feel bad about this! You did the work, you deserve to get paid. A friendly "Hey, just checking on this invoice" email works wonders.

How to Keep Money In Your Pocket LONGER:

1. Ask Suppliers for Better Payment Terms
Instead of paying immediately, ask if you can pay in 30 days. Free money for a month!

2. Use Credit Cards Smartly
Pay business expenses on a credit card, then pay it off when the bill comes. That's 30 days of keeping your cash in the bank earning interest.

3. Don't Pay Bills Early
If it's due on the 15th, pay it on the 15th (not the 1st). Keep that money working for you until you actually need to spend it.

Warning Signs Your Cash Flow Needs Help:
• You're paying bills late (not by choice)
• Your credit cards are maxed out
• You're stressed about having enough money next month
• Your bank balance keeps going down

Simple Tools to Track This:
• Spreadsheet: Just track what's coming in and going out each month
• Apps: QuickBooks, Xero, or even a simple banking app
• The Eyeball Test: Check your bank balance weekly - is it going up or down?

Emergency Fund Rule:
Try to save up 3-6 months of business expenses. Think of it as your "sleep better at night" fund.

Real Talk: Most small business owners wing this and stress about money constantly. Even a simple spreadsheet tracking your monthly ins and outs will put you ahead of 80% of businesses.

Show me your numbers - upload a bank statement or tell me about your situation, and I'll help you create a simple plan that actually works!`
  }
  
  // General bookkeeping setup
  else if (lowerMessage.includes('setup') || lowerMessage.includes('start') || lowerMessage.includes('begin')) {
    response = `Starting Your Business Bookkeeping - No MBA Required!

Let's get your money tracking set up right from the start. Think of this like organizing your personal finances, but with a few extra steps for tax purposes.

Step 1: Pick Your Business Type (This Affects Your Taxes)
Confused by the options? Here's the simple breakdown:

• Just You, Simple Business (Sole Proprietorship): Easiest to start, but if someone sues you, they can come after your personal stuff
• You Want Protection (LLC): Costs a bit more to set up, but keeps your business and personal assets separate. Most small businesses choose this
• You're Thinking Big (Corporation): More paperwork, but potential tax benefits. Usually for businesses planning to have employees or investors
• You Have a Partner (Partnership): Like sole proprietorship but with shared ownership and headaches

Step 2: Get Your Official Paperwork
• EIN Number: Think of this like a Social Security number for your business (get it free from IRS.gov - don't pay a service!)
• Business License: Whatever your city/state requires
• Business Bank Account: CRUCIAL - never mix business and personal money
• Business Credit Card: Optional but makes tracking expenses super easy

Step 3: Pick How You Count Money
• Cash Method: Count money when it actually moves (you get paid = income, you pay a bill = expense). Simpler for most small businesses
• Accrual Method: Count money when you earn it or owe it, even if no cash moved yet. More accurate but complicated. Required if you make over $25M (if that's you, hire an accountant!)

Step 4: Choose Your Tools (Start Simple!)

FREE and Good Enough:
• Google Sheets or Excel: Honestly, a simple spreadsheet works for many small businesses
• Wave: Free accounting software that's actually pretty good
• Your Bank's Tools: Many business accounts have basic tracking

PAID But Worth It:
• QuickBooks Online: $30-80/month - most popular, connects to everything
• Xero: $13-70/month - clean, simple, great for service businesses  
• FreshBooks: $15-55/month - awesome for freelancers and consultants

My Advice: Start with a spreadsheet or Wave. You can always upgrade later!

Step 5: Set Up Your Money Categories
Think of these like folders for your money:

• What You Own (Assets): Bank accounts, equipment, money people owe you
• What You Owe (Liabilities): Credit cards, loans, bills you haven't paid yet
• Your Ownership (Equity): Money you put into the business, profits you kept
• Money Coming In (Revenue): Sales, service fees, any income
• Money Going Out (Expenses): Everything you spend for the business

Step 6: Create Simple Habits
• Weekly: Snap photos of receipts, update your tracking
• Monthly: Reconcile your bank account (make sure your records match the bank)
• Quarterly: Review how you're doing, prepare for tax payments
• Yearly: Get ready for tax time (or hire someone to do it)

Step 7: Know When to Get Help
• CPA for Taxes: Usually worth it unless your business is super simple
• Bookkeeper: If you'd rather focus on your business than counting pennies
• Financial Advisor: When you're making good money and want to plan for the future

Start Here TODAY: Open a business bank account and start taking photos of all business receipts. That's 80% of good bookkeeping right there!

What type of business are you starting? Tell me and I'll give you specific advice for your situation!`
  }
  
  // Default response for other questions
  else {
    response = `Bookkeeping Assistant Response:

I understand you're asking about: "${message}"

Here's some general bookkeeping guidance:

Key Principles:
1. Separate Business & Personal: Always keep business and personal finances separate
2. Keep Good Records: Save receipts, invoices, and bank statements
3. Be Consistent: Use the same system and categories regularly
4. Review Regularly: Check your books monthly or quarterly
5. Plan Ahead: Create budgets and cash flow projections

Common Bookkeeping Tasks:
- Recording income and expenses
- Reconciling bank statements
- Creating financial reports
- Managing accounts receivable/payable
- Preparing for tax time

Tools You Might Need:
- Accounting software (QuickBooks, Xero, etc.)
- Receipt scanner app
- Business bank account
- Filing system (digital or physical)

Pro Tip: You can upload photos of receipts, invoices, or documents, and I'll help you analyze and categorize them!

Could you provide more specific details about your question? I can give you more targeted advice for your situation!`
  }
  
  return {
    response,
    modelUsed: 'standard-ai'
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, history, attachments, aiModel } = body

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      )
    }

    // Validate message length
    if (message.length > 2000) {
      return NextResponse.json(
        { error: 'Message too long. Please keep messages under 2000 characters.' },
        { status: 400 }
      )
    }

    // Temporarily disable authentication for testing
    // const { userId } = auth()
    
    let usageCheck: { allowed: boolean, remaining: number, resetTime: Date }
    let clientIP = 'unknown'
    
    // For now, use IP-based tracking
    clientIP = getClientIP(request)
    usageCheck = await checkAndUpdateUsage(clientIP, 5)
    
    if (!usageCheck.allowed) {
      return NextResponse.json(
        { 
          error: 'Free message limit exceeded',
          details: {
            limit: 5,
            resetTime: usageCheck.resetTime.toISOString(),
            message: 'You have exceeded your free message limit. Please upgrade to a paid plan for unlimited access.'
          }
        },
        { status: 429 }
      )
    }
    
    // Validate history format
    if (history && !Array.isArray(history)) {
      return NextResponse.json(
        { error: 'History must be an array' },
        { status: 400 }
      )
    }

    // Filter and validate history entries
    const validHistory = history?.filter((entry: any) => 
      entry && 
      typeof entry.role === 'string' && 
      ['user', 'assistant'].includes(entry.role) &&
      typeof entry.content === 'string' &&
      entry.content.length <= 2000
    ) || []

    // Limit history length to prevent token overflow
    const limitedHistory = validHistory.slice(-10) // Keep last 10 messages

    // Validate attachments if provided
    if (attachments && !Array.isArray(attachments)) {
      return NextResponse.json(
        { error: 'Attachments must be an array' },
        { status: 400 }
      )
    }

    // Validate individual attachments
    if (attachments) {
      for (const attachment of attachments) {
        if (!attachment.id || !attachment.name || !attachment.type || typeof attachment.size !== 'number') {
          return NextResponse.json(
            { error: 'Invalid attachment format' },
            { status: 400 }
          )
        }
      }
    }

    // Determine which model to use based on user's selection and subscription
    let modelToUse = 'standard-ai' // Default to free tier model
    
    if (aiModel === 'elite') {
      // Check if user has access to Elite model (would need subscription validation in production)
      modelToUse = 'premium-ai'
    } else if (aiModel === 'everyday') {
      modelToUse = 'advanced-ai'
    }

    // Get user subscription tier (mock implementation for now)
    // In production, get this from database based on userId
    let userTier = 'free' // Default to free tier
    
    // Mock tier determination based on aiModel selection
    // In production, this should come from actual subscription database
    if (aiModel === 'elite') {
      userTier = 'elite' // Only allow if user actually has elite subscription
    } else if (aiModel === 'everyday') {
      userTier = 'basic' // Only allow if user actually has basic subscription
    }

    // Get AI response
    const { response, modelUsed } = await getAIResponse(message, limitedHistory, modelToUse, attachments, userTier)

    // Log the interaction for analytics (no personal data stored)
    console.log(`Chat interaction: IP=${clientIP.slice(0, 8)}***, Model=${modelUsed}, Message length=${message.length}, Response length=${response.length}, Attachments=${attachments?.length || 0}, Remaining queries=${usageCheck.remaining}`)

    return NextResponse.json({
      response,
      modelUsed,
      timestamp: new Date().toISOString(),
      usage: {
        remaining: usageCheck.remaining,
        resetTime: usageCheck.resetTime.toISOString()
      }
    })

  } catch (error) {
    console.error('Chat API error:', error)
    console.error('Error details:', JSON.stringify(error, null, 2))
    console.error('Stack trace:', error instanceof Error ? error.stack : 'No stack trace')
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

// GET endpoint to check usage for a user or IP address
export async function GET(request: NextRequest) {
  try {
    // const { userId } = auth()
    const userId = null
    
    let usageInfo: { count: number, remaining: number, resetTime: Date }
    let clientIP = 'unknown'
    
    // For now, use IP-based tracking
    clientIP = getClientIP(request)
    usageInfo = await getUsageInfo(clientIP, 5)
    
    return NextResponse.json({
      ip: clientIP,
      userId: userId || null,
      usage: {
        count: usageInfo.count,
        remaining: usageInfo.remaining,
        limit: usageInfo.remaining === -1 ? 'unlimited' : 5,
        resetTime: usageInfo.resetTime.toISOString()
      }
    })
  } catch (error) {
    console.error('Usage check error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 