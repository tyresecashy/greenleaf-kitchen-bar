import type { Metadata } from 'next'
import Image from 'next/image'
import { ReservationForm } from '@/components/reservations/ReservationForm'
import { BUSINESS_NAME, LOCATION_LOCALITY, PHONE_DISPLAY, PHONE_TEL } from '@/lib/constants'
import { imageSrc, restaurantImages } from '@/lib/images'

export const metadata: Metadata = {
  title: `Reservations | ${BUSINESS_NAME}`,
  description: `Book a table at ${BUSINESS_NAME} in ${LOCATION_LOCALITY} online or via WhatsApp.`,
}

export default function ReservationsPage() {
  return (
    <main className="bg-off-white pt-29">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Reservations</p>
          <h1 className="mt-4 text-5xl font-bold text-green-deep md:text-7xl">Book your table</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone">Tell us when you&apos;re coming and we&apos;ll open WhatsApp with your booking details ready to confirm.</p>
          <ReservationForm />
        </div>
        <aside className="premium-border-glow h-fit rounded-2xl bg-green-deep p-7 text-off-white shadow-xl">
          <div className="relative mb-7 min-h-72 overflow-hidden rounded-xl">
            <Image
              src={imageSrc('outdoorSeating')}
              alt={restaurantImages.outdoorSeating.alt}
              fill
              className="object-cover"
              style={{ objectPosition: restaurantImages.outdoorSeating.objectPosition }}
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-dark-bg/55 to-transparent" />
          </div>
          <h2 className="text-3xl font-bold">What to expect</h2>
          <div className="mt-6 space-y-4 text-white/72">
            <p>Fresh African plates, grills and cocktail pairings.</p>
            <p>Indoor and terrace seating depending on availability.</p>
            <p>Live music energy on Fridays and BBQ Sundays.</p>
            <p>For groups of 10+, call ahead for the best setup.</p>
          </div>
          <a href={`tel:${PHONE_TEL}`} className="mt-8 block rounded-full bg-gold px-5 py-3 text-center font-bold text-green-deep hover:bg-gold-light">
            Call {PHONE_DISPLAY}
          </a>
        </aside>
      </section>
    </main>
  )
}
