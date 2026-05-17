'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

export function CursorGlow() {
  const reduceMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const springX = useSpring(x, { stiffness: 90, damping: 22 })
  const springY = useSpring(y, { stiffness: 90, damping: 22 })

  useEffect(() => {
    if (reduceMotion) return
    const fineDesktopPointer = window.matchMedia('(pointer: fine) and (min-width: 1024px)')
    const activate = () => setEnabled(fineDesktopPointer.matches)
    activate()
    fineDesktopPointer.addEventListener('change', activate)
    if (!fineDesktopPointer.matches) {
      return () => fineDesktopPointer.removeEventListener('change', activate)
    }
    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      setVisible(true)
      x.set(event.clientX - 180)
      y.set(event.clientY - 180)
    }
    const leave = () => setVisible(false)
    window.addEventListener('pointermove', move)
    window.addEventListener('blur', leave)
    document.documentElement.addEventListener('mouseleave', leave)
    return () => {
      fineDesktopPointer.removeEventListener('change', activate)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('blur', leave)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [reduceMotion, x, y])

  if (reduceMotion || !enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[5] hidden size-[360px] rounded-full bg-gold/10 blur-3xl lg:block"
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    />
  )
}
