import type { Metadata } from 'next'
import { GalleryLightbox } from '@/components/home/GalleryLightbox'
import { AnimatedGradientBackground } from '@/components/motion/AnimatedGradientBackground'
import { MotionReveal } from '@/components/motion/MotionReveal'
import { galleryImages } from '@/lib/events-data'
import { BUSINESS_NAME, LOCATION_AREA, LOCATION_REGION } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Gallery | ${BUSINESS_NAME}`,
  description: `Food, drinks and ${BUSINESS_NAME} moments from ${LOCATION_REGION}.`,
}

export default function GalleryPage() {
  const groups = ['Food', 'Drinks', 'Interior', 'Events', 'Location'].map((category) => ({
    category,
    images: galleryImages.filter((image) => image.category === category),
  }))

  return (
    <main className="bg-off-white pt-29">
      <section className="relative overflow-hidden bg-green-dark-bg px-4 py-24 text-center text-off-white sm:px-6 lg:px-8">
        <AnimatedGradientBackground />
        <MotionReveal>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Gallery</p>
          <h1 className="mt-4 text-5xl font-bold md:text-7xl">The GreenLeaf Experience</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/70">A premium showcase of plates, people, flame and Friday-night energy.</p>
        </MotionReveal>
      </section>
      <section className="space-y-18 px-4 py-16 sm:px-6 lg:px-8">
        {groups.map((group) => (
          <div key={group.category}>
            <div className="mx-auto max-w-5xl">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-gold">{group.category}</p>
              <h2 className="mt-2 text-3xl font-bold text-green-deep md:text-4xl">
                {group.category === 'Food' && 'Plates from the kitchen'}
                {group.category === 'Drinks' && 'Cocktails, whisky and happy-hour energy'}
                {group.category === 'Interior' && 'Warm corners and relaxed seating'}
                {group.category === 'Events' && 'Nights made for regulars'}
                {group.category === 'Location' && `Find us on ${LOCATION_AREA}`}
              </h2>
            </div>
            <GalleryLightbox images={group.images} />
          </div>
        ))}
      </section>
    </main>
  )
}
