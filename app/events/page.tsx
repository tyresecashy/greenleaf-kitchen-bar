import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, Clock } from 'lucide-react'
import { AnimatedGradientBackground } from '@/components/motion/AnimatedGradientBackground'
import { MagneticCard } from '@/components/motion/MagneticCard'
import { MotionReveal } from '@/components/motion/MotionReveal'
import { Button } from '@/components/ui/button'
import { upcomingEvents } from '@/lib/events-data'
import { BUSINESS_NAME, LOCATION_LOCALITY, whatsappMessages, whatsappUrl } from '@/lib/constants'
import { imageSrc, restaurantImages } from '@/lib/images'

export const metadata: Metadata = {
  title: `What's On | ${BUSINESS_NAME}`,
  description: `Live jazz, BBQ Sundays, happy hour and special events at ${BUSINESS_NAME} in ${LOCATION_LOCALITY}.`,
}

export default function EventsPage() {
  return (
    <main className="bg-off-white pt-29">
      <section className="relative overflow-hidden bg-green-dark-bg px-4 py-24 text-center text-off-white sm:px-6 lg:px-8">
        <AnimatedGradientBackground />
        <MotionReveal>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Calendar</p>
          <h1 className="mt-4 text-5xl font-bold md:text-7xl">What&apos;s On at GreenLeaf</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/70">Weekly rhythm, cold drinks, live music, and the kind of Sundays that stretch beautifully.</p>
        </MotionReveal>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        {upcomingEvents.map((event) => (
          <MagneticCard key={event.title}>
            <article className="premium-border-glow flex min-h-86 flex-col rounded-xl bg-green-deep p-6 text-white shadow-xl">
              <span className="w-fit rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-green-deep">{event.tag}</span>
              <h2 className="mt-6 font-serif text-3xl font-bold">{event.title}</h2>
              <p className="mt-4 flex items-center gap-2 text-gold"><CalendarDays className="size-4" /> {event.day}</p>
              <p className="mt-2 flex items-center gap-2 text-white/72"><Clock className="size-4" /> {event.time}</p>
              <p className="mt-5 flex-1 leading-7 text-white/68">{event.description}</p>
              <p className="mt-5 font-bold text-gold">{event.price}</p>
              <Button asChild className="mt-6 rounded-full bg-white text-green-deep hover:bg-gold">
                <a href={whatsappUrl(whatsappMessages.eventBooking(event.title))} target="_blank" rel="noopener noreferrer">Book via WhatsApp</a>
              </Button>
            </article>
          </MagneticCard>
        ))}
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="relative min-h-80 overflow-hidden rounded-2xl bg-green-deep shadow-xl">
          <Image
            src={imageSrc('eventsNightInterior')}
            alt={restaurantImages.eventsNightInterior.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>
        <div className="self-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Happy Hour</p>
          <h2 className="mt-3 text-4xl font-bold text-green-deep">A menu board worth planning around.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-stone">
            Keep an eye on the board for dinner specials, cocktail offers, and the kind of easy midweek plans that turn into long evenings.
          </p>
        </div>
      </section>
      <section className="bg-white px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-green-deep">Planning something special?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-stone">Birthdays, corporate dinners and group nights get extra care from the GreenLeaf team.</p>
        <Button asChild className="mt-7 rounded-full bg-green-primary px-7 hover:bg-green-deep">
          <Link href="/contact">Talk to Us</Link>
        </Button>
      </section>
    </main>
  )
}
