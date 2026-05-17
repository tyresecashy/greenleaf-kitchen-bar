import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarDays, Facebook, Instagram, MapPin, MessageCircle, Phone, Utensils } from 'lucide-react'
import { Logo } from '@/components/layout/Logo'
import {
  BUSINESS_NAME,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LOCATION_AREA,
  OPENING_HOURS_DISPLAY,
  mapUrl,
  whatsappMessages,
  whatsappUrl,
} from '@/lib/constants'

export const metadata: Metadata = {
  title: 'GreenLeaf Kitchen & Bar Links',
  description: 'Book, view the menu, open maps, and connect with GreenLeaf Kitchen & Bar in Kamakis, Ruiru.',
}

const links = [
  { label: 'Book a Table', href: '/reservations', icon: CalendarDays, external: false },
  { label: 'View Menu', href: '/menu', icon: Utensils, external: false },
  { label: 'Open Maps', href: mapUrl, icon: MapPin, external: true },
  { label: 'WhatsApp GreenLeaf', href: whatsappUrl(whatsappMessages.booking), icon: MessageCircle, external: true },
  { label: "Today's Events", href: '/events', icon: CalendarDays, external: false },
  { label: 'Instagram', href: INSTAGRAM_URL, icon: Instagram, external: true },
  { label: 'Facebook', href: FACEBOOK_URL, icon: Facebook, external: true },
  { label: 'Contact', href: '/contact', icon: Phone, external: false },
]

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-green-dark-bg px-4 py-10 text-off-white sm:px-6">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md flex-col justify-center">
        <div className="rounded-2xl border border-gold/20 bg-green-deep/82 p-5 shadow-2xl shadow-black/25">
          <div className="flex justify-center">
            <Logo light />
          </div>
          <div className="mt-7 text-center">
            <h1 className="font-serif text-3xl font-bold text-off-white">{BUSINESS_NAME}</h1>
            <p className="mt-3 text-sm leading-6 text-white/72">{LOCATION_AREA}</p>
            <p className="text-sm leading-6 text-gold">Open daily from 9:00 AM till late</p>
          </div>

          <div className="mt-8 grid gap-3">
            {links.map(({ label, href, icon: Icon, external }) => {
              const className =
                'flex h-13 items-center justify-between rounded-full border border-gold/20 bg-off-white px-5 text-sm font-bold text-green-deep shadow-sm transition hover:-translate-y-0.5 hover:bg-gold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/45'
              const content = (
                <>
                  <span>{label}</span>
                  <Icon className="size-4" aria-hidden="true" />
                </>
              )

              return external ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={className}>
                  {content}
                </a>
              ) : (
                <Link key={label} href={href} className={className}>
                  {content}
                </Link>
              )
            })}
          </div>

          <p className="mt-7 text-center text-xs leading-5 text-white/52">
            Nyama choma, African food, cocktails, and indoor and outdoor seating in Kamakis, Ruiru.
          </p>
        </div>
      </section>
    </main>
  )
}
