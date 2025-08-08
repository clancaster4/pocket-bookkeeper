import { NextRequest, NextResponse } from 'next/server'
// import { auth } from '@clerk/nextjs/server'
// import { supabaseAdmin } from '@/lib/supabase'

// In-memory storage for demo purposes (fallback)
// In production, use a proper database like PostgreSQL, Redis, or MongoDB
const ipUsageMap = new Map<string, { count: number, lastReset: Date }>()

// Get client IP address (fallback for unauthenticated users)
function getClientIP(request: NextRequest): string {
  // Try different headers for IP address
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const cfConnectingIP = request.headers.get('cf-connecting-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  if (realIP) {
    return realIP
  }
  if (cfConnectingIP) {
    return cfConnectingIP
  }
  
  // Fallback to connection remote address
  return request.ip || 'unknown'
}

// Check and update usage for an IP address
function checkAndUpdateUsage(ip: string, limit: number = 10): { allowed: boolean, remaining: number, resetTime: Date } {
  const now = new Date()
  const currentUsage = ipUsageMap.get(ip)
  
  // If no usage recorded yet, initialize
  if (!currentUsage) {
    ipUsageMap.set(ip, { count: 1, lastReset: now })
    return { allowed: true, remaining: limit - 1, resetTime: now }
  }
  
  // Check if user has exceeded limit (no monthly reset)
  if (currentUsage.count >= limit) {
    return { allowed: false, remaining: 0, resetTime: currentUsage.lastReset }
  }
  
  // Increment usage
  currentUsage.count++
  ipUsageMap.set(ip, currentUsage)
  
  return { 
    allowed: true, 
    remaining: limit - currentUsage.count, 
    resetTime: currentUsage.lastReset 
  }
}

// Get usage info for an IP address
function getUsageInfo(ip: string, limit: number = 10): { count: number, remaining: number, resetTime: Date } {
  const currentUsage = ipUsageMap.get(ip)
  const now = new Date()
  
  if (!currentUsage) {
    return { count: 0, remaining: limit, resetTime: now }
  }
  
  // No monthly reset - return current usage
  return { 
    count: currentUsage.count, 
    remaining: Math.max(0, limit - currentUsage.count), 
    resetTime: currentUsage.lastReset 
  }
}

// Mock AI response function - replace with actual AI API integration
async function getAIResponse(message: string, history: any[], model: string = 'standard-ai', attachments?: any[]): Promise<{ response: string, modelUsed: string }> {
  // This is a mock implementation - replace with actual AI API call
  // The model parameter determines which AI model to use
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))
  
  // Analyze the user's message and attachments to provide relevant bookkeeping guidance
  const lowerMessage = message.toLowerCase()
  const hasAttachments = attachments && attachments.length > 0
  
  let response = ''
  
  // Handle document/image analysis
  if (hasAttachments) {
    const imageCount = attachments.filter(att => att.type.startsWith('image/')).length
    const documentCount = attachments.filter(att => !att.type.startsWith('image/')).length
    
    response = `📄 **Document Analysis Results:**

I've analyzed the ${attachments.length} file${attachments.length > 1 ? 's' : ''} you uploaded:

**Files Received:**
${attachments.map(att => `• ${att.name} (${att.type})`).join('\n')}

**Analysis Summary:**
${imageCount > 0 ? `• ${imageCount} image${imageCount > 1 ? 's' : ''} - I can see visual content like receipts, invoices, or financial documents\n` : ''}${documentCount > 0 ? `• ${documentCount} document${documentCount > 1 ? 's' : ''} - I can extract text and data from these files\n` : ''}

**What I can help you with:**
• 📊 **Data Extraction**: Extract amounts, dates, vendor names, and line items
• 💰 **Expense Categorization**: Identify and categorize business expenses
• 📋 **Document Classification**: Determine if it's a receipt, invoice, bank statement, etc.
• ✅ **Validation**: Check for missing information or potential issues
• 📈 **Analysis**: Provide insights on spending patterns or financial trends

**Next Steps:**
Please let me know what specific information you'd like me to extract or analyze from these documents. For example:
• "What expenses can I deduct from this receipt?"
• "Can you extract the line items from this invoice?"
• "Is this document properly formatted for tax purposes?"
• "What category should I put this expense in?"`
  }
  
  // Basic bookkeeping topics
  else if (lowerMessage.includes('expense') || lowerMessage.includes('cost') || lowerMessage.includes('spend')) {
    response = `📝 **Expense Tracking Best Practices:**

**1. Categorize Your Expenses**
- Business vs Personal: Always separate business and personal expenses
- Use clear categories: Office supplies, travel, meals, utilities, etc.
- Consider using accounting software for automatic categorization

**2. Keep Receipts & Documentation**
- Save all receipts (physical or digital)
- Use apps like Expensify or QuickBooks for receipt scanning
- Store receipts for at least 3-7 years for tax purposes

**3. Regular Recording**
- Record expenses weekly or monthly
- Don't let receipts pile up
- Use a consistent system (spreadsheet, software, or app)

**4. Common Business Expense Categories:**
- 🏢 Office & Supplies
- 🚗 Travel & Transportation  
- 🍽️ Meals & Entertainment
- 💻 Technology & Software
- 📚 Professional Development
- 🏥 Health Insurance
- 💰 Insurance & Legal

**5. Tax Deductible vs Non-Deductible**
- Most business expenses are tax deductible
- Personal expenses are NOT deductible
- Mixed-use items need proper allocation

**💡 Pro Tip**: You can upload photos of receipts or documents, and I'll help you categorize and analyze them!

Would you like me to help you set up a specific expense tracking system for your business?`
  }
  
  // Tax-related questions
  else if (lowerMessage.includes('tax') || lowerMessage.includes('deduct') || lowerMessage.includes('irs')) {
    response = `💰 **Tax Deduction Guide:**

**Common Business Tax Deductions:**

**1. Home Office Deduction**
- Must be used regularly and exclusively for business
- Calculate: (Business square footage / Total square footage) × Total home expenses
- Simplified method: $5 per square foot (max 300 sq ft)

**2. Vehicle Expenses**
- Standard mileage rate: 65.5¢ per business mile (2024)
- Or actual expenses: gas, maintenance, insurance, depreciation
- Keep detailed mileage logs

**3. Equipment & Technology**
- Computers, software, office equipment
- Can deduct full cost if under $2,500 (de minimis safe harbor)
- Larger items may need to be depreciated

**4. Professional Services**
- Accounting fees
- Legal fees
- Business consulting
- Professional memberships

**5. Marketing & Advertising**
- Website costs
- Business cards
- Online advertising
- Print materials

**6. Travel & Meals**
- Business travel (50% deductible for meals)
- Client entertainment (50% deductible)
- Conference and training costs

**Important Notes:**
- Keep detailed records and receipts
- Separate business and personal expenses
- Consider consulting a tax professional
- Rules vary by business structure (LLC, Corp, etc.)

**💡 Pro Tip**: Upload photos of your receipts and I can help identify which expenses are deductible!

What specific tax deduction questions do you have?`
  }
  
  // Cash flow questions
  else if (lowerMessage.includes('cash flow') || lowerMessage.includes('money') || lowerMessage.includes('revenue')) {
    response = `💵 **Cash Flow Management:**

**Understanding Cash Flow:**
Cash flow = Money coming in - Money going out

**Three Types of Cash Flow:**
1. **Operating**: Day-to-day business activities
2. **Investing**: Equipment, property purchases
3. **Financing**: Loans, investments, owner contributions

**Improving Cash Flow:**

**1. Speed Up Incoming Cash**
- Send invoices immediately
- Offer early payment discounts
- Accept multiple payment methods
- Follow up on overdue payments

**2. Slow Down Outgoing Cash**
- Negotiate payment terms with suppliers
- Use credit cards strategically (30-day float)
- Pay bills on time, not early
- Consider leasing instead of buying

**3. Monitor Regularly**
- Create cash flow projections
- Track accounts receivable aging
- Maintain emergency fund (3-6 months expenses)
- Review monthly cash flow statements

**4. Cash Flow Tools:**
- QuickBooks, Xero, or FreshBooks
- Simple spreadsheet tracking
- Bank account monitoring
- Regular financial reviews

**5. Warning Signs:**
- Late payments to suppliers
- Maxed out credit cards
- Difficulty paying bills
- Declining bank balance

**💡 Pro Tip**: Upload bank statements or financial reports, and I can help analyze your cash flow patterns!

Would you like help creating a cash flow projection for your business?`
  }
  
  // General bookkeeping setup
  else if (lowerMessage.includes('setup') || lowerMessage.includes('start') || lowerMessage.includes('begin')) {
    response = `🏗️ **Setting Up Your Bookkeeping System:**

**Step 1: Choose Your Business Structure**
- Sole Proprietorship: Simple, but no liability protection
- LLC: Good liability protection, flexible
- Corporation: More complex, potential tax benefits
- Partnership: Shared ownership and responsibilities

**Step 2: Get Required Documents**
- EIN (Employer Identification Number) from IRS
- Business license and permits
- Separate business bank account
- Business credit card (optional but recommended)

**Step 3: Choose Your Accounting Method**
- **Cash Basis**: Record when money changes hands (simpler)
- **Accrual Basis**: Record when transaction occurs (more accurate)

**Step 4: Select Your Tools**
**Free Options:**
- Google Sheets/Excel
- Wave (free accounting software)
- GnuCash (open source)

**Paid Options:**
- QuickBooks Online ($30-80/month)
- Xero ($13-70/month)
- FreshBooks ($15-55/month)

**Step 5: Set Up Your Chart of Accounts**
Basic categories:
- Assets (bank accounts, equipment)
- Liabilities (loans, credit cards)
- Equity (owner investments, retained earnings)
- Revenue (sales, income)
- Expenses (costs, bills)

**Step 6: Establish Processes**
- Weekly/monthly bookkeeping schedule
- Receipt collection system
- Invoice and payment tracking
- Regular financial reviews

**Step 7: Consider Professional Help**
- CPA for tax preparation
- Bookkeeper for ongoing maintenance
- Financial advisor for planning

**💡 Pro Tip**: You can upload existing documents or receipts, and I'll help you set up the right categories and processes!

What type of business are you setting up? I can provide more specific guidance!`
  }
  
  // Default response for other questions
  else {
    response = `🤖 **Bookkeeping Assistant Response:**

I understand you're asking about: "${message}"

Here's some general bookkeeping guidance:

**Key Principles:**
1. **Separate Business & Personal**: Always keep business and personal finances separate
2. **Keep Good Records**: Save receipts, invoices, and bank statements
3. **Be Consistent**: Use the same system and categories regularly
4. **Review Regularly**: Check your books monthly or quarterly
5. **Plan Ahead**: Create budgets and cash flow projections

**Common Bookkeeping Tasks:**
- Recording income and expenses
- Reconciling bank statements
- Creating financial reports
- Managing accounts receivable/payable
- Preparing for tax time

**Tools You Might Need:**
- Accounting software (QuickBooks, Xero, etc.)
- Receipt scanner app
- Business bank account
- Filing system (digital or physical)

**💡 Pro Tip**: You can upload photos of receipts, invoices, or documents, and I'll help you analyze and categorize them!

Could you provide more specific details about your question? I can give you more targeted advice for your situation!`
  }
  
  // Add model-specific enhancements for Premium AI
  if (model === 'premium-ai') {
    response += `\n\n🤖 **Powered by Premium AI**: This response was generated using our most advanced AI model for superior reasoning and comprehensive guidance.`
  } else {
    response += `\n\n🤖 **Powered by Standard AI**: This response was generated using our standard AI model.`
  }
  
  return {
    response,
    modelUsed: model
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
    usageCheck = checkAndUpdateUsage(clientIP, 10)
    
    if (!usageCheck.allowed) {
      return NextResponse.json(
        { 
          error: 'Free query limit exceeded',
          details: {
            limit: 10,
            resetTime: usageCheck.resetTime.toISOString(),
            message: 'You have exceeded your free query limit. Please upgrade to a paid plan for unlimited access.'
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

    // Get AI response
    const { response, modelUsed } = await getAIResponse(message, limitedHistory, modelToUse, attachments)

    // Log the interaction (in production, save to database)
    console.log(`Chat interaction: IP=${clientIP}, Model=${modelUsed}, Message length=${message.length}, Response length=${response.length}, Attachments=${attachments?.length || 0}, Remaining queries=${usageCheck.remaining}`)

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
    return NextResponse.json(
      { error: 'Internal server error' },
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
    usageInfo = getUsageInfo(clientIP, 10)
    
    return NextResponse.json({
      ip: clientIP,
      userId: userId || null,
      usage: {
        count: usageInfo.count,
        remaining: usageInfo.remaining,
        limit: usageInfo.remaining === -1 ? 'unlimited' : 10,
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