'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function AnimatedGradientBackground({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <motion.span
        className="premium-blob left-[8%] top-[12%] bg-gold/28"
        animate={reduceMotion ? undefined : { x: [0, 28, -18, 0], y: [0, -18, 20, 0], scale: [1, 1.12, 0.98, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="premium-blob bottom-[8%] right-[4%] bg-green-primary/40"
        animate={reduceMotion ? undefined : { x: [0, -35, 10, 0], y: [0, 20, -16, 0], scale: [1, 0.92, 1.08, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />
      <span className="grain-overlay" />
    </div>
  )
}
