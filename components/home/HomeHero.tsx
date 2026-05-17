'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { GOOGLE_REVIEWS_URL, LOCATION_AREA, LOCATION_REGION } from '@/lib/constants'
import { imageSrc, restaurantImages } from '@/lib/images'

const words = ['Where', 'Good', 'Food', 'Meets', 'Great', 'Vibes']

export function HomeHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-green-dark-bg px-4 pb-16 pt-36 sm:px-6 lg:px-8 lg:pb-20">
      <Image
        src={imageSrc('heroFeature')}
        alt={restaurantImages.heroFeature.alt}
        fill
        priority
        quality={90}
        className="scale-[1.02] object-cover"
        style={{ objectPosition: restaurantImages.heroFeature.objectPosition }}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/86 via-black/56 to-black/84" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-green-dark-bg to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-5xl">
          <motion.p
            className="mb-5 text-xs font-bold uppercase tracking-[0.36em] text-gold"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.42 }}
          >
            {LOCATION_REGION}
          </motion.p>
          <motion.h1
            className="flex max-w-5xl flex-wrap gap-x-4 gap-y-1 text-5xl font-bold leading-[0.98] text-off-white sm:text-7xl lg:text-8xl"
            aria-label="Where Good Food Meets Great Vibes"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.045 } } }}
          >
            {words.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                aria-hidden="true"
                className={index === 3 ? 'basis-full' : ''}
                variants={{
                  hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: reduceMotion ? 0 : 0.46, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="mt-6 font-accent text-2xl italic text-white/86 md:text-3xl"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.2, duration: reduceMotion ? 0 : 0.42 }}
          >
            African grill, cocktails, and live music on {LOCATION_AREA}.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.28, duration: reduceMotion ? 0 : 0.42 }}
          >
            <Button asChild className="h-13 rounded-full bg-gold px-8 text-green-deep hover:bg-gold-light">
              <Link href="/reservations">Book a Table</Link>
            </Button>
            <Button asChild variant="outline" className="h-13 rounded-full border-white/60 bg-white/5 px-8 text-white backdrop-blur hover:bg-white hover:text-green-deep">
              <Link href="/menu">View Menu</Link>
            </Button>
          </motion.div>
          <motion.p
            className="mt-4 text-sm text-white/78"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.34, duration: reduceMotion ? 0 : 0.38 }}
          >
            We confirm bookings within minutes during opening hours.
          </motion.p>
          <motion.p
            className="mt-5 text-sm font-semibold text-white/82"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.4, duration: reduceMotion ? 0 : 0.38 }}
          >
            {GOOGLE_REVIEWS_URL ? (
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="underline decoration-gold/60 underline-offset-4 hover:text-gold">
                4.4 rating on Google
              </a>
            ) : (
              '4.4 rating'
            )}{' '}
            {'\u00b7'} Loved in {LOCATION_AREA} {'\u00b7'} Live Jazz Fridays from 7 PM
          </motion.p>
        </div>
      </div>
      <ArrowDown className="absolute bottom-8 left-1/2 z-10 size-6 -translate-x-1/2 animate-bounce text-gold" />
    </section>
  )
}
