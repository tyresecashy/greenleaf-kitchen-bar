'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
}

export function MotionReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
}: {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
  once?: boolean
}) {
  const reduceMotion = useReducedMotion()
  const offset = reduceMotion ? offsets.none : offsets[direction]

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, x: offset.x, y: offset.y, filter: reduceMotion ? 'none' : 'blur(8px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: reduceMotion ? 0.01 : 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
