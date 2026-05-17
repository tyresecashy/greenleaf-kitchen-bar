import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ADDRESS, BUSINESS_NAME, EMAIL, PHONE_DISPLAY, PHONE_TEL, mapUrl, socialLinks, whatsappUrl } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Privacy Policy | ${BUSINESS_NAME}`,
  description: `How ${BUSINESS_NAME} handles website contact and reservation information.`,
}

export default function PrivacyPage() {
  return (
    <main className="bg-off-white pt-29">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Privacy Policy</p>
        <h1 className="mt-4 text-5xl font-bold text-green-deep md:text-7xl">Your details stay practical.</h1>
        <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-green-primary">Last updated: 2026</p>
        <p className="mt-6 text-lg leading-8 text-stone">
          This page explains how {BUSINESS_NAME} handles information shared through this website.
          It is written for guests using our contact form, reservation form, WhatsApp links, map links, and
          social links.
        </p>

        <div className="mt-10 space-y-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <section>
            <h2 className="text-2xl font-bold text-green-deep">Information You Send Us</h2>
            <p className="mt-3 leading-7 text-stone">
              When you use the contact or reservation forms, we may receive details such as your name, phone
              number, email address, preferred date and time, number of guests, occasion, and any message or
              special request you choose to include.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-deep">WhatsApp, Calls, Maps, and Social Links</h2>
            <p className="mt-3 leading-7 text-stone">
              Some actions hand you off to third-party services. Reservation details may be opened in WhatsApp
              so you can confirm directly with GreenLeaf. Phone links may open your calling app, map links may
              open Google Maps, and social links may open Instagram or Facebook. Those services handle activity
              under their own privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-deep">Cookies and Analytics</h2>
            <p className="mt-3 leading-7 text-stone">
              This site does not currently add marketing tracking pixels or a cookie consent banner. Basic
              analytics or marketing tools may be added later, and if they are added, the site should explain
              what is used and request consent where required.
            </p>
            <p className="mt-3 leading-7 text-stone">
              As of this date, we do not run personalized ads or tracking pixels on this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-deep">How We Use Website Messages</h2>
            <p className="mt-3 leading-7 text-stone">
              We use submitted details to respond to enquiries, help with reservations, prepare for group
              bookings, and follow up on guest requests. Please avoid sending sensitive personal information
              through the website forms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-deep">Contact</h2>
            <p className="mt-3 leading-7 text-stone">
              For privacy questions, contact {BUSINESS_NAME} at {ADDRESS}, call{' '}
              <a className="font-bold text-green-primary underline" href={`tel:${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </a>
              , email{' '}
              <a className="font-bold text-green-primary underline" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              , or message us on WhatsApp.
            </p>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="rounded-full bg-green-primary px-7 hover:bg-green-deep">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 size-4" />
              WhatsApp GreenLeaf
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-green-primary px-7 text-green-primary hover:bg-green-primary hover:text-white">
            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
              Open Maps
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-green-primary px-7 text-green-primary hover:bg-green-primary hover:text-white">
            <Link href="/contact">
              <Mail className="mr-2 size-4" />
              Contact Page
            </Link>
          </Button>
        </div>

        <div className="mt-10 text-sm text-stone">
          <p>Official social links currently listed on this site:</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="font-bold text-green-primary underline">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
