import type { Metadata } from 'next'
import Image from 'next/image'
import { ContactForm } from '@/components/contact/ContactForm'
import {
  ADDRESS,
  BUSINESS_NAME,
  EMAIL,
  FACEBOOK_LABEL,
  INSTAGRAM_HANDLE,
  LOCATION_AREA,
  PHONE_DISPLAY,
  PHONE_TEL,
  mapEmbedUrl,
  whatsappUrl,
} from '@/lib/constants'
import { imageSrc, restaurantImages } from '@/lib/images'

export const metadata: Metadata = {
  title: `Contact | ${BUSINESS_NAME}`,
  description: `Contact ${BUSINESS_NAME} on ${LOCATION_AREA}.`,
}

export default function ContactPage() {
  return (
    <main className="bg-off-white pt-29">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <aside className="premium-border-glow rounded-2xl bg-green-deep p-7 text-off-white shadow-xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Contact</p>
          <h1 className="mt-4 text-5xl font-bold">Come through, or say hello.</h1>
          <div className="mt-7 space-y-4 text-white/72">
            <p>{ADDRESS}</p>
            <a className="block hover:text-gold" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            <a className="block hover:text-gold" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp GreenLeaf</a>
            <a className="block hover:text-gold" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <p>Instagram: {INSTAGRAM_HANDLE}</p>
            <p>Facebook: {FACEBOOK_LABEL}</p>
          </div>
          <div className="relative mt-8 min-h-72 overflow-hidden rounded-xl bg-off-white">
            <Image
              src={imageSrc('outdoorSeating')}
              alt={restaurantImages.outdoorSeating.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
          </div>
        </aside>
        <ContactForm />
      </section>
      <iframe className="h-[420px] w-full border-0" src={mapEmbedUrl} loading="lazy" title="GreenLeaf map" />
    </main>
  )
}
