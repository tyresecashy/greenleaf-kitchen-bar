'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { resolveImage } from '@/lib/images'

type GalleryModalImage = {
  src: string
  caption: string
}

export function GalleryModal({
  active,
  images,
  onClose,
  onNext,
  onPrevious,
}: {
  active: number
  images: GalleryModalImage[]
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}) {
  const reduceMotion = useReducedMotion()
  const image = images[active]

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] grid place-items-center bg-black/95 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button onClick={onClose} aria-label="Close gallery image" type="button" className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-white/10 text-white">
          <X className="size-5" />
        </button>
        <button onClick={onPrevious} aria-label="Show previous gallery image" type="button" className="absolute left-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white">
          <ChevronLeft />
        </button>
        <button onClick={onNext} aria-label="Show next gallery image" type="button" className="absolute right-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white">
          <ChevronRight />
        </button>
        <motion.div
          key={image.src}
          className="relative h-[78vh] w-full max-w-5xl"
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.98, y: reduceMotion ? 0 : 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.99 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        >
          <Image src={resolveImage(image.src)} alt={image.caption} fill quality={90} className="object-contain" sizes="90vw" />
        </motion.div>
        <p className="mt-4 text-center font-accent text-2xl italic text-white">{image.caption}</p>
      </motion.div>
    </AnimatePresence>
  )
}
