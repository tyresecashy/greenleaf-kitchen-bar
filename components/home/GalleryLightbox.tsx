'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { motion, useReducedMotion } from 'framer-motion'
import { imageFit, imageObjectPosition, resolveImage } from '@/lib/images'

const GalleryModal = dynamic(() => import('@/components/home/GalleryModal').then((module) => module.GalleryModal), {
  ssr: false,
})

type GalleryImage = {
  src: string
  category: string
  caption: string
  aspect?: 'landscape' | 'portrait' | 'square'
  teaserLabel?: string
  teaserSize?: 'feature'
}

export function GalleryLightbox({ images, teaser = false }: { images: GalleryImage[]; teaser?: boolean }) {
  const [active, setActive] = useState<number | null>(null)
  const reduceMotion = useReducedMotion()
  const close = useCallback(() => setActive(null), [])
  const go = useCallback((direction: number) => setActive((current) => current === null ? 0 : (current + direction + images.length) % images.length), [images.length])

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (active === null) return
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') go(1)
      if (event.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [active, close, go])

  return (
    <>
      <div className={teaser ? 'mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4' : 'mx-auto mt-12 max-w-5xl columns-1 gap-4 sm:columns-2 lg:columns-3'}>
        {images.map((image, index) => {
          const imageSizes = !teaser
            ? '(max-width: 768px) 100vw, 384px'
            : image.teaserSize === 'feature'
              ? '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px'
              : '(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 384px'
          const teaserShape =
            image.teaserSize === 'feature'
              ? 'min-h-56 aspect-[4/3] md:col-span-2 md:min-h-80 md:aspect-[16/10]'
              : image.aspect === 'portrait'
                ? 'min-h-60 aspect-[3/4]'
                : image.aspect === 'square'
                  ? 'min-h-52 aspect-square'
                  : 'min-h-48 aspect-[4/3]'

          return (
          <motion.button
            key={`${image.src}-${index}`}
            onClick={() => setActive(index)}
            className={teaser ? `premium-border-glow group relative overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/45 ${teaserShape}` : 'premium-border-glow group relative mb-4 block w-full overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/45'}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.22 }}
          >
            <Image
              src={resolveImage(image.src)}
              alt={image.caption}
              width={384}
              height={image.aspect === 'portrait' ? 460 : 343}
              loading="lazy"
              quality={90}
              className={teaser ? `absolute inset-0 h-full w-full ${imageFit(resolveImage(image.src)) === 'contain' ? 'object-contain p-3' : 'object-cover'} contrast-[1.03] saturate-[1.06] transition duration-500 group-hover:scale-105` : `h-auto w-full ${imageFit(resolveImage(image.src)) === 'contain' ? 'object-contain bg-off-white p-3' : 'object-cover'} contrast-[1.03] saturate-[1.06] transition duration-500 group-hover:scale-105`}
              style={{ objectPosition: imageObjectPosition(resolveImage(image.src)) }}
              sizes={imageSizes}
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-transparent" />
            <span className="absolute inset-0 bg-green-deep/0 transition group-hover:bg-green-deep/45" />
            <span className="absolute bottom-4 left-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-green-deep opacity-0 transition group-hover:opacity-100">
              {image.category}
            </span>
            <span className="absolute bottom-4 right-4 max-w-[70%] text-right font-serif text-xl font-bold text-white opacity-0 drop-shadow transition group-hover:opacity-100">
              {image.caption}
            </span>
            {teaser && image.teaserLabel ? (
              <span className="absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                {image.teaserLabel}
              </span>
            ) : null}
          </motion.button>
          )
        })}
      </div>
      {active !== null ? <GalleryModal active={active} images={images} onClose={close} onNext={() => go(1)} onPrevious={() => go(-1)} /> : null}
    </>
  )
}
