'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export function LoadingBoot() {
  const [show, setShow] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const seen = sessionStorage.getItem('greenleaf:boot')
    if (seen || reduceMotion) return
    setShow(true)
    sessionStorage.setItem('greenleaf:boot', '1')
    const id = window.setTimeout(() => setShow(false), 1000)
    return () => window.clearTimeout(id)
  }, [reduceMotion])

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-green-dark-bg text-center text-off-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-serif text-4xl font-bold text-gold">GreenLeaf</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.34em] text-white/60">Kitchen & Bar</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
