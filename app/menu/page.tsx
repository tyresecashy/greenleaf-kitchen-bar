import type { Metadata } from 'next'
import Image from 'next/image'
import { MenuTabs } from '@/components/menu/MenuTabs'
import { BUSINESS_NAME, HAPPY_HOUR_DISPLAY } from '@/lib/constants'
import { imageSrc, restaurantImages } from '@/lib/images'

export const metadata: Metadata = {
  title: `Menu | ${BUSINESS_NAME}`,
  description: `Explore ${BUSINESS_NAME} dishes, grills, seafood, cocktails, mocktails, whisky, wine, and desserts.`,
}

export default function MenuPage() {
  return (
    <main className="bg-off-white pt-29">
      <section className="relative grid min-h-[46vh] place-items-center overflow-hidden px-4 py-20 text-center">
        <Image src={imageSrc('heroFeature')} alt={restaurantImages.heroFeature.alt} fill quality={90} className="scale-105 object-cover" style={{ objectPosition: restaurantImages.heroFeature.objectPosition }} sizes="100vw" />
        <div className="absolute inset-0 bg-green-dark-bg/78" />
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Home / Menu</p>
          <h1 className="mt-4 text-5xl font-bold text-off-white md:text-7xl">Our Menu</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/75">Prices in KES. All dishes freshly prepared. Allergen info available on request.</p>
        </div>
      </section>
      <MenuTabs />
      <section className="mx-auto max-w-7xl px-4 pb-20 text-center text-sm text-stone sm:px-6 lg:px-8">
        <p>{HAPPY_HOUR_DISPLAY} - 20% off all cocktails.</p>
      </section>
    </main>
  )
}
