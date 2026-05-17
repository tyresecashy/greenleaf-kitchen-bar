import Link from 'next/link'
import { Facebook, Instagram, Mail, MessageCircle, Music2 } from 'lucide-react'
import {
  ADDRESS,
  BUSINESS_NAME,
  EMAIL,
  HAPPY_HOUR_DISPLAY,
  LOCATION_AREA,
  LOCATION_REGION,
  PHONE_DISPLAY,
  PHONE_TEL,
  openingHoursDisplay,
  type SocialIcon,
  socialLinks,
} from '@/lib/constants'
import { Logo } from './Logo'

const links = [
  ['Home', '/'],
  ['Menu', '/menu'],
  ['Events', '/events'],
  ['Reservations', '/reservations'],
  ['Gallery', '/gallery'],
  ['About', '/about'],
  ['Contact', '/contact'],
  ['Privacy', '/privacy'],
]

const iconMap: Record<SocialIcon, typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
  whatsapp: MessageCircle,
  tiktok: Music2,
}

export function Footer() {
  return (
    <footer className="bg-green-deep text-off-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">
            Warm African flavours, craft cocktails, live music, and easy nights on the {LOCATION_AREA}.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon]
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open GreenLeaf on ${social.label}`}
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-gold hover:bg-white/10"
                >
                  <Icon className="size-5" />
                </a>
              )
            })}
          </div>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Quick Links</h3>
          <div className="mt-5 grid gap-3">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="text-sm text-white/65 hover:text-gold">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Opening Hours</h3>
          <div className="mt-5 space-y-3 text-sm text-white/65">
            {openingHoursDisplay.map((hours) => (
              <p key={hours}>{hours}</p>
            ))}
            <p className="inline-flex rounded-full bg-gold/15 px-3 py-1 text-gold">{HAPPY_HOUR_DISPLAY}</p>
          </div>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Stay Close</h3>
          <p className="mt-5 text-sm leading-7 text-white/65">{ADDRESS}</p>
          <a href={`tel:${PHONE_TEL}`} className="mt-4 block text-sm text-white/75 hover:text-gold">
            {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="mt-2 flex items-center gap-2 text-sm text-white/75 hover:text-gold">
            <Mail className="size-4" aria-hidden="true" />
            {EMAIL}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/45">
        &copy; 2026 {BUSINESS_NAME}. All rights reserved. | {LOCATION_REGION}
      </div>
    </footer>
  )
}

