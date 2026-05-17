import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Flame, GlassWater, MapPin, Music2, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection, FadeIn } from '@/components/shared/AnimatedSection'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { GalleryLightbox } from '@/components/home/GalleryLightbox'
import { HomeHero } from '@/components/home/HomeHero'
import { TestimonialsSlider } from '@/components/home/TestimonialsSlider'
import { MagneticCard } from '@/components/motion/MagneticCard'
import { featuredDishes } from '@/lib/menu-data'
import { galleryImages } from '@/lib/events-data'
import {
  ADDRESS_INLINE,
  EMAIL,
  LOCATION_ACCESS_COPY,
  LOCATION_AREA,
  LOCATION_DISTANCE_COPY,
  PHONE_DISPLAY,
  PHONE_TEL,
  mapEmbedUrl,
  mapUrl,
  openingHoursDisplay,
  whatsappMessages,
  whatsappUrl,
} from '@/lib/constants'
import { imageFit, imageObjectPosition, imageSrc, resolveImage, restaurantImages } from '@/lib/images'

const easyEveningCards = [
  {
    title: 'Smoky Grill',
    copy: 'Ribs, beef wet fry, and charcoal-led plates built for a proper sit-down meal.',
    icon: Flame,
  },
  {
    title: 'Cocktails & Happy Hour',
    copy: 'Easy drinks, lively pairings, and a calmer reason to stay a little longer.',
    icon: GlassWater,
  },
  {
    title: 'Live Nights',
    copy: 'Friday jazz and weekend rhythm without turning dinner into a loud template.',
    icon: Music2,
  },
]

export default function Home() {
  return (
    <main className="overflow-hidden bg-off-white">
      <HomeHero />

      <AnimatedSection className="leaf-texture px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="premium-border-glow relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl shadow-green-deep/20 lg:-rotate-2">
            <Image
              src={imageSrc('guestCocktails')}
              alt={restaurantImages.guestCocktails.alt}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-700 hover:scale-105"
              style={{ objectPosition: restaurantImages.guestCocktails.objectPosition }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold">Our Story</p>
            <h2 className="text-4xl font-bold text-green-deep md:text-6xl">Born for bold flavour and warm nights.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone">
              GreenLeaf brings bold African flavours, thoughtful drinks, and warm hospitality to the {LOCATION_AREA}.
              Come for the grill, stay for an easy evening out.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {['4.4 Rating', '500+ Happy Guests/Week', 'Est. 2022'].map((stat) => (
                <div key={stat} className="premium-border-glow rounded-lg border-l-2 border-gold bg-white/70 px-4 py-4 shadow-sm">
                  <p className="font-serif text-2xl font-bold text-green-deep">{stat}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-green-primary hover:text-gold">
              Meet the Team <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="What We're Known For"
          title="Freshly made, boldly flavoured"
          subtitle="Guest favourites people come back for — smoky grill, bold flavours, and easy drinks."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredDishes.map((dish, index) => (
            <FadeIn key={dish.name} delay={index * 0.05}>
              <MagneticCard>
                <Link href="/menu" className="premium-border-glow group block overflow-hidden rounded-xl bg-off-white shadow-sm transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/45 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="relative mx-auto aspect-square w-full max-w-[400px] overflow-hidden">
                    <Image
                      src={resolveImage(dish.image)}
                      alt={dish.name}
                      fill
                      loading="lazy"
                      quality={90}
                      className={`${imageFit(resolveImage(dish.image)) === 'contain' ? 'object-contain p-3' : 'object-cover'} contrast-[1.03] saturate-[1.06] transition duration-700 group-hover:scale-105`}
                      style={{ objectPosition: imageObjectPosition(resolveImage(dish.image)) }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 384px"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/52 via-black/8 to-transparent" />
                    {dish.badge ? <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-green-deep shadow-lg transition group-hover:-translate-y-0.5 group-hover:scale-105">{dish.badge}</span> : null}
                    <span className="absolute right-4 top-4 rounded-full bg-green-deep/85 px-3 py-1 text-xs font-bold text-white transition group-hover:bg-green-primary">{dish.category}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-2xl font-bold text-green-deep">{dish.name}</h3>
                      <p className="whitespace-nowrap font-serif text-xl font-bold text-gold">{dish.price}</p>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-stone">{dish.description}</p>
                    {'note' in dish ? (
                      <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-green-primary">{dish.note}</p>
                    ) : null}
                  </div>
                </Link>
              </MagneticCard>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild className="rounded-full bg-green-primary px-7 hover:bg-green-deep">
            <Link href="/menu">Explore the Full Menu</Link>
          </Button>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-green-dark-bg px-4 py-20 text-off-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Built for Easy Evenings</p>
            <h2 className="mt-4 text-4xl font-bold md:text-6xl">Good food first. The vibe follows naturally.</h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              From smoky grills to cocktails and live jazz nights, GreenLeaf is the kind of place you come for one meal and stay for the vibe.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {easyEveningCards.map(({ title, copy, icon: Icon }) => (
              <div key={title} className="glass-panel rounded-2xl p-6">
                <span className="grid size-12 place-items-center rounded-full bg-gold text-green-deep">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-off-white">{title}</h3>
                <p className="mt-3 leading-7 text-white/70">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section className="relative bg-green-deep px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="stone-texture absolute inset-0" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-off-white md:text-6xl">Ready for an Unforgettable Evening?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
            We confirm bookings within minutes during opening hours.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="h-12 rounded-full bg-gold px-8 text-green-deep hover:bg-gold-light">
              <a href={whatsappUrl(whatsappMessages.booking)} target="_blank" rel="noopener noreferrer">Book via WhatsApp</a>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/25 bg-white/5 px-8 text-white hover:bg-white hover:text-green-deep">
              <Link href="/reservations">Reserve Online</Link>
            </Button>
          </div>
          <p className="mt-5 text-sm text-gold">Private events and group bookings are welcome too.</p>
          <div className="mt-8 rounded-2xl border border-white/12 bg-white/6 p-5 text-left sm:p-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Group bookings</p>
            <p className="mt-3 text-base leading-7 text-white/78">
              Groups of 10–50? Reach out for reserved sections, birthdays, and custom menus.
            </p>
            <Button asChild className="mt-5 rounded-full bg-white text-green-deep hover:bg-gold">
              <a href={whatsappUrl(whatsappMessages.groupBooking)} target="_blank" rel="noopener noreferrer">
                Plan a Group Booking
              </a>
            </Button>
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading eyebrow="The GreenLeaf Experience" title="A place with rhythm, flame, and shine" />
        <GalleryLightbox images={galleryImages.slice(0, 6)} teaser />
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="rounded-full border-green-primary px-7 text-green-primary hover:bg-green-primary hover:text-white">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </AnimatedSection>

      <TestimonialsSlider />

      <AnimatedSection className="bg-green-dark-bg px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
          <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-off-white shadow-2xl shadow-black/20">
            <Image
              src={imageSrc('outdoorSeating')}
              alt={restaurantImages.outdoorSeating.alt}
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
          <div className="px-1 py-2 text-off-white sm:px-2 lg:px-4 lg:py-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold">Find Us</p>
            <h2 className="text-4xl font-bold md:text-6xl">{LOCATION_AREA}</h2>
            <div className="mt-8 space-y-4 text-white/75">
              <p className="flex gap-3"><MapPin className="mt-1 size-5 text-gold" /> {ADDRESS_INLINE}.</p>
              <p>{LOCATION_ACCESS_COPY}</p>
              <p>{LOCATION_DISTANCE_COPY}</p>
              <a className="block hover:text-gold" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              <a className="block hover:text-gold" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              {openingHoursDisplay.map((hours) => (
                <p key={hours}>{hours}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full bg-gold text-green-deep hover:bg-gold-light">
                <a href={mapUrl} target="_blank" rel="noopener noreferrer">Open Maps</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/25 bg-transparent text-white hover:bg-white hover:text-green-deep">
                <a href={whatsappUrl(whatsappMessages.booking)} target="_blank" rel="noopener noreferrer">Book via WhatsApp</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/25 bg-transparent text-white hover:bg-white hover:text-green-deep">
                <a href={`tel:${PHONE_TEL}`}><Phone className="mr-2 size-4" />Call Us</a>
              </Button>
            </div>
          </div>
        </div>
        <iframe className="mx-auto mt-8 h-[420px] w-full max-w-7xl rounded-2xl border-0" src={mapEmbedUrl} loading="lazy" title="GreenLeaf location map" />
      </AnimatedSection>
    </main>
  )
}
