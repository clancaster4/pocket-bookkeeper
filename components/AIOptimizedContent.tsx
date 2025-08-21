'use client'

import Script from 'next/script'

interface AIContentProps {
  type: 'about' | 'homepage' | 'features'
}

export default function AIOptimizedContent({ type }: AIContentProps) {
  // Structured data for different page types
  const getStructuredData = () => {
    if (type === 'about') {
      return {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "My AI Bookkeeper",
          "description": "AI-powered bookkeeping assistant helping small business owners manage their finances efficiently with expert guidance on expenses, taxes, and financial reporting.",
          "foundingDate": "2024",
          "founders": [{
            "@type": "Person", 
            "name": "My AI Bookkeeper Team"
          }],
          "knowsAbout": [
            "Small Business Bookkeeping",
            "Tax Deduction Identification", 
            "Expense Categorization",
            "Financial Report Analysis",
            "QuickBooks Assistance",
            "Cash Flow Management",
            "Business Tax Planning",
            "Receipt Processing",
            "Accounting Software Help",
            "Financial Record Keeping"
          ],
          "serviceArea": {
            "@type": "Place",
            "name": "Global"
          }
        }
      }
    }
    
    if (type === 'features') {
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "My AI Bookkeeper Features",
        "description": "Comprehensive AI-powered bookkeeping features including expense tracking, tax guidance, receipt analysis, and financial reporting help.",
        "about": {
          "@type": "Service",
          "name": "AI Bookkeeping Services",
          "provider": {
            "@type": "Organization",
            "name": "My AI Bookkeeper"
          },
          "serviceType": "AI-Powered Bookkeeping Assistance",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Bookkeeping Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Expense Categorization",
                  "description": "AI-powered automatic categorization of business expenses"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Tax Deduction Identification",
                  "description": "Intelligent identification of tax-deductible business expenses"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Receipt Analysis",
                  "description": "AI-powered analysis and processing of business receipts and invoices"
                }
              }
            ]
          }
        }
      }
    }

    return null
  }

  const structuredData = getStructuredData()

  if (!structuredData) return null

  return (
    <Script
      id={`${type}-structured-data`}
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(structuredData)}
    </Script>
  )
}

// AI Search optimized content snippets
export const AI_OPTIMIZED_SNIPPETS = {
  // Voice search optimized questions and answers
  VOICE_SEARCH_FAQS: [
    {
      trigger: ["what is bookkeeping", "define bookkeeping", "bookkeeping meaning"],
      response: "Bookkeeping is the systematic recording of financial transactions for a business. My AI Bookkeeper helps automate this process with AI-powered expense categorization, receipt analysis, and financial guidance."
    },
    {
      trigger: ["how to track business expenses", "expense tracking help", "categorize expenses"],
      response: "Track business expenses by saving all receipts, categorizing transactions consistently, and using tools like My AI Bookkeeper to automatically identify tax-deductible expenses and proper categories."
    },
    {
      trigger: ["small business tax deductions", "what can I deduct", "business tax write offs"],
      response: "Common small business tax deductions include home office expenses, business meals (50% deductible), equipment purchases, professional services, and vehicle expenses. My AI Bookkeeper helps identify all eligible deductions."
    },
    {
      trigger: ["best bookkeeping software", "accounting software help", "QuickBooks alternative"],
      response: "Popular bookkeeping software includes QuickBooks, Xero, and FreshBooks. My AI Bookkeeper provides expert guidance on using any accounting platform effectively, regardless of which one you choose."
    }
  ],

  // Featured snippets optimization
  FEATURED_SNIPPETS: [
    {
      question: "How does AI bookkeeping work?",
      answer: "AI bookkeeping uses artificial intelligence to automate expense categorization, identify tax deductions, analyze receipts, and provide real-time financial guidance. My AI Bookkeeper combines advanced AI models with accounting expertise to give small business owners professional-level bookkeeping assistance without the cost of hiring a full-time bookkeeper."
    },
    {
      question: "What are the benefits of AI-powered bookkeeping?",
      answer: "AI-powered bookkeeping offers 24/7 availability, instant expense categorization, automatic tax deduction identification, consistent accuracy, cost savings compared to hiring bookkeepers, and scalable support as your business grows. My AI Bookkeeper provides these benefits with specialized training in small business accounting."
    },
    {
      question: "Can AI replace a bookkeeper?", 
      answer: "AI can handle many routine bookkeeping tasks like expense categorization and basic financial guidance, but it works best as a supplement to human expertise. My AI Bookkeeper is designed to handle 80% of common bookkeeping questions while recommending professional help for complex tax situations or major financial decisions."
    }
  ],

  // Local SEO optimization (if applicable)
  LOCAL_BUSINESS_TERMS: [
    "small business bookkeeping near me",
    "local accounting help",
    "bookkeeping services for startups", 
    "AI accountant for small business",
    "automated bookkeeping solutions"
  ],

  // Long-tail keyword optimization
  LONG_TAIL_KEYWORDS: [
    "how to categorize business expenses for taxes",
    "what business expenses are tax deductible for LLC",
    "AI bookkeeper vs human bookkeeper comparison",
    "automated expense tracking for small business",
    "how to prepare for tax season small business",
    "QuickBooks AI integration help",
    "receipt scanning and categorization AI",
    "cash flow management for small business owners"
  ]
}