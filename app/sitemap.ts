import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pocket-bookkeeper.example.com'
  const lastModified = new Date()

  return [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/how-to-use`, lastModified },
    { url: `${baseUrl}/support`, lastModified },
    { url: `${baseUrl}/pricing`, lastModified },
  ]
}