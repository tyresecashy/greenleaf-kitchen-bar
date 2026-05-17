import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { EventsTicker } from '@/components/layout/EventsTicker'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { WhatsAppFAB } from '@/components/layout/WhatsAppFAB'
import { CursorGlow } from '@/components/motion/CursorGlow'
import { LoadingBoot } from '@/components/motion/LoadingBoot'
import { Toaster } from '@/components/ui/sonner'
import {
  ADDRESS,
  BUSINESS_NAME,
  LOCATION_ADMIN_AREA,
  LOCATION_AREA,
  LOCATION_LOCALITY,
  LOCATION_REGION,
  OPENING_HOURS_STRUCTURED,
  PHONE_TEL,
  SITE_URL,
  mapUrl,
  socialProfileLinks,
} from '@/lib/constants'
import { imageSrc } from '@/lib/images'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${BUSINESS_NAME} | ${LOCATION_REGION}`,
  description:
    `Nyama choma, African food, cocktails, bar seating, and indoor and outdoor dining on ${LOCATION_AREA}. Book a table online or via WhatsApp.`,
  keywords: [
    'kamakis restaurant',
    'kamakis bar',
    'restaurant ruiru',
    'bar nairobi eastern bypass',
    'kamakis eastern bypass',
    'african food nairobi',
    'cocktails ruiru',
    'nyama choma ruiru',
  ],
  openGraph: {
    title: BUSINESS_NAME,
    description: `Where Good Food Meets Great Vibes - ${LOCATION_REGION}`,
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    images: [{ url: imageSrc('ogImage'), width: 1200, height: 630 }],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [imageSrc('ogImage')],
  },
}

export const viewport = {
  themeColor: '#0f2d14',
}

const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: BUSINESS_NAME,
  url: SITE_URL,
  telephone: PHONE_TEL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS,
    addressLocality: LOCATION_LOCALITY,
    addressRegion: LOCATION_ADMIN_AREA,
    addressCountry: 'KE',
  },
  servesCuisine: ['African cuisine', 'Grill', 'Cocktails'],
  openingHours: OPENING_HOURS_STRUCTURED,
  hasMap: mapUrl,
  sameAs: socialProfileLinks,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <LoadingBoot />
        <CursorGlow />
        <EventsTicker />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFAB />
        <Toaster richColors position="top-right" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
