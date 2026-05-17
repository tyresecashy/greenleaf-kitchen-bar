'use client'

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function MagneticCard({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 170, damping: 18 })
  const springY = useSpring(y, { stiffness: 170, damping: 18 })
  const rotateX = useTransform(springY, [-1, 1], [4, -4])
  const rotateY = useTransform(springX, [-1, 1], [-4, 4])

  return (
    <motion.div
      className={cn('transform-gpu', className)}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={(event) => {
        if (reduceMotion || window.matchMedia('(max-width: 1023px)').matches) return
        const rect = event.currentTarget.getBoundingClientRect()
        x.set(((event.clientX - rect.left) / rect.width - 0.5) * 2)
        y.set(((event.clientY - rect.top) / rect.height - 0.5) * 2)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.22 }}
    >
      {children}
    </motion.div>
  )
}
