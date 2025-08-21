'use client'

import Script from 'next/script'

export default function SEOScripts() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "My AI Bookkeeper",
    "description": "AI-powered bookkeeping assistant helping small business owners manage their finances efficiently",
    "url": "https://myaibookkeeper.com",
    "logo": "https://myaibookkeeper.com/logo.png",
    "sameAs": [
      "https://twitter.com/myaibookkeeper",
      "https://linkedin.com/company/myaibookkeeper"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@myaibookkeeper.com"
    }
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "My AI Bookkeeper",
    "description": "AI-powered bookkeeping assistant that helps small business owners manage expenses, taxes, and financial records with intelligent automation and expert guidance.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free tier with 5 messages per month, premium plans available"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "AI-powered bookkeeping guidance",
      "Expense tracking and categorization",
      "Tax deduction identification", 
      "Financial report analysis",
      "QuickBooks integration help",
      "Cash flow management advice",
      "Receipt processing and analysis",
      "Automated expense categorization",
      "Real-time financial insights",
      "Multi-platform compatibility"
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "My AI Bookkeeper",
        "item": "https://myaibookkeeper.com"
      }
    ]
  }

  return (
    <>
      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(organizationSchema)}
      </Script>

      {/* Software Application Schema */}
      <Script
        id="software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(softwareSchema)}
      </Script>

      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumbSchema)}
      </Script>
    </>
  )
}