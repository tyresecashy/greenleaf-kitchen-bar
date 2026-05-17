import type { Metadata } from 'next'
import Image from 'next/image'
import { Music2, Sparkles, Sprout, Users } from 'lucide-react'
import { MotionReveal } from '@/components/motion/MotionReveal'
import { BUSINESS_NAME, LOCATION_AREA, LOCATION_LOCALITY } from '@/lib/constants'
import { imageSrc, restaurantImages } from '@/lib/images'

export const metadata: Metadata = {
  title: `About | ${BUSINESS_NAME}`,
  description: `The story, values and people behind ${BUSINESS_NAME} on ${LOCATION_AREA}.`,
}

const values = [
  [Sprout, 'Fresh Ingredients', 'Every dish made fresh daily'],
  [Users, 'Warm Hospitality', "You're always a guest, never just a customer"],
  [Music2, 'Great Music', 'The playlist is always right'],
  [Sparkles, 'Kenyan At Heart', 'Rooted in our culture, proud of our flavours'],
]

const milestones = [
  ['2022', `GreenLeaf opens its doors on ${LOCATION_AREA}`],
  ['2023', 'Cocktail menu launched. Happy Hour introduced.'],
  ['2024', `Rated 4.4 - one of ${LOCATION_LOCALITY}'s top-rated restaurants`],
  ['2025', 'New outdoor terrace and private dining section opens'],
]

export default function AboutPage() {
  return (
    <main className="bg-off-white pt-29">
      <section className="relative min-h-[58vh] overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <Image src={imageSrc('aboutInterior')} alt={restaurantImages.aboutInterior.alt} fill className="scale-105 object-cover" style={{ objectPosition: restaurantImages.aboutInterior.objectPosition }} sizes="100vw" />
        <div className="absolute inset-0 bg-green-dark-bg/78" />
        <MotionReveal className="relative mx-auto max-w-5xl text-off-white">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Our Story</p>
          <h1 className="mt-4 text-5xl font-bold md:text-7xl">{LOCATION_LOCALITY} deserved a place with flavour and feeling.</h1>
        </MotionReveal>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <MotionReveal className="max-w-3xl">
          <h2 className="text-4xl font-bold text-green-deep">{BUSINESS_NAME} was born from a simple idea.</h2>
          <p className="mt-5 text-lg leading-8 text-stone">
            {LOCATION_LOCALITY} deserved a place where incredible food, quality cocktails, and great music came together.
            Located along {LOCATION_AREA}, we&apos;ve grown into one of Nairobi&apos;s most-loved dining destinations.
          </p>
        </MotionReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([Icon, title, desc]) => {
            const TypedIcon = Icon as typeof Sprout
            return (
              <MotionReveal key={title as string}>
                <div className="premium-border-glow rounded-xl bg-white p-6 shadow-sm">
                  <TypedIcon className="size-8 text-gold" />
                  <h3 className="mt-5 text-2xl font-bold text-green-deep">{title as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone">{desc as string}</p>
                </div>
              </MotionReveal>
            )
          })}
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {milestones.map(([year, event]) => (
            <div key={year} className="border-t-2 border-gold pt-4">
              <p className="font-serif text-4xl font-bold text-green-deep">{year}</p>
              <p className="mt-3 text-sm leading-6 text-stone">{event}</p>
            </div>
          ))}
        </div>
        <MotionReveal className="mt-16 grid gap-8 rounded-2xl bg-green-deep p-5 text-off-white shadow-xl md:grid-cols-[0.8fr_1.2fr] md:p-8">
          <div className="relative min-h-80 overflow-hidden rounded-xl bg-off-white">
            <Image
              src={imageSrc('roadsideMenuSign')}
              alt={restaurantImages.roadsideMenuSign.alt}
              fill
              className="object-contain p-3"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="self-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">On the Bypass</p>
            <h2 className="mt-4 text-4xl font-bold">Easy to find, hard to forget.</h2>
            <p className="mt-4 max-w-xl leading-7 text-white/70">
              GreenLeaf is a real {LOCATION_LOCALITY} stop with visible menu boards, warm service, and a growing crowd of regulars.
            </p>
          </div>
        </MotionReveal>
      </section>
    </main>
  )
}
