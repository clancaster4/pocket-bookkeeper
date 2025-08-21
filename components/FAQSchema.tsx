'use client'

import Script from 'next/script'

interface FAQItem {
  question: string
  answer: string
  category?: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq, index) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      },
      "position": index + 1,
      "category": faq.category || "General"
    }))
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(faqSchema)}
    </Script>
  )
}

// AI Search optimized FAQ data
export const AI_OPTIMIZED_FAQS: FAQItem[] = [
  {
    question: "What is My AI Bookkeeper and how does it help small businesses?",
    answer: "My AI Bookkeeper is an AI-powered bookkeeping assistant specifically designed for small business owners. It provides instant, accurate guidance on expense tracking, tax deductions, financial reporting, and bookkeeping best practices. Unlike generic AI tools, it's trained exclusively on accounting and bookkeeping topics to give you expert-level advice for your business finances.",
    category: "General"
  },
  {
    question: "How much does My AI Bookkeeper cost?",
    answer: "My AI Bookkeeper offers three pricing tiers: Free (5 messages per month with basic AI), Everyday Assistant ($9.99/month with unlimited messages and advanced AI), and Elite Advisor ($19.99/month with premium AI and priority support). All plans include core bookkeeping guidance, expense categorization help, and tax deduction identification.",
    category: "Pricing"
  },
  {
    question: "Can My AI Bookkeeper help me categorize business expenses?",
    answer: "Yes, My AI Bookkeeper excels at expense categorization. You can upload receipts, describe purchases, or ask about specific transactions, and it will help you categorize them correctly according to standard accounting practices. It can identify tax-deductible expenses, suggest proper expense categories, and help you maintain consistent bookkeeping records.",
    category: "Features"
  },
  {
    question: "What AI models power My AI Bookkeeper's responses?",
    answer: "My AI Bookkeeper uses different AI models based on your subscription: Free tier uses our Standard AI model, Everyday Assistant ($9.99/month) uses advanced Grok-3-mini AI, and Elite Advisor ($19.99/month) uses premium Grok-4 AI for the most sophisticated bookkeeping guidance and analysis.",
    category: "Technology"
  },
  {
    question: "Can My AI Bookkeeper help with tax preparation and deductions?",
    answer: "Absolutely! My AI Bookkeeper is trained to identify tax-deductible business expenses, explain IRS guidelines, help with quarterly tax planning, and guide you through common tax scenarios for small businesses. It can help with home office deductions, vehicle expenses, business meals, equipment purchases, and more.",
    category: "Tax Help"
  },
  {
    question: "Does My AI Bookkeeper integrate with QuickBooks, Xero, or other accounting software?",
    answer: "While My AI Bookkeeper doesn't directly integrate with accounting software, it provides expert guidance on how to use these platforms effectively. You can ask questions about QuickBooks setup, Xero features, chart of accounts creation, or get help troubleshooting issues with any major accounting software.",
    category: "Integrations"
  },
  {
    question: "How accurate is the bookkeeping advice from My AI Bookkeeper?",
    answer: "My AI Bookkeeper provides advice based on standard accounting principles and current IRS guidelines. However, it's designed to supplement, not replace, professional accounting advice. For complex tax situations or major financial decisions, we recommend consulting with a qualified CPA or accountant.",
    category: "Accuracy"
  },
  {
    question: "Can I upload receipts and documents to My AI Bookkeeper?",
    answer: "Yes, you can upload receipts, invoices, and other financial documents to My AI Bookkeeper. It can analyze these documents, extract key information like amounts and vendors, suggest proper expense categories, and help you organize your financial records effectively.",
    category: "Features"
  },
  {
    question: "What types of businesses can benefit from My AI Bookkeeper?",
    answer: "My AI Bookkeeper is designed for small businesses, freelancers, consultants, e-commerce stores, service providers, and solo entrepreneurs. Whether you're a contractor tracking business expenses, a retail store managing inventory, or a service business invoicing clients, My AI Bookkeeper can help streamline your financial management.",
    category: "Use Cases"
  },
  {
    question: "Is My AI Bookkeeper secure and GDPR compliant?",
    answer: "Yes, My AI Bookkeeper prioritizes data security and privacy. We use enterprise-grade encryption, don't store sensitive financial data permanently, and follow GDPR compliance guidelines. Your conversations and uploaded documents are processed securely and can be deleted upon request.",
    category: "Security"
  }
]