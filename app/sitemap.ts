import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

const routes = ['/', '/menu', '/events', '/reservations', '/gallery', '/about', '/contact', '/privacy', '/links']

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
