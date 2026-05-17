'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export function EventsTicker() {
  const [dismissed, setDismissed] = useState(true)

  useEffect(() => {
    setDismissed(sessionStorage.getItem('greenleaf:ticker') === 'hidden')
  }, [])

  if (dismissed) return null

  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex min-h-11 items-center gap-3 bg-green-dark-bg px-3 text-off-white sm:px-4">
      <div className="min-w-0 flex-1 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-gold sm:text-xs">
        <span>Live Jazz Fridays 7 PM · BBQ Sundays 1–8 PM · Happy Hour Mon–Fri 5–6 PM</span>
        <Link href="/events" className="ml-3 inline-flex font-bold text-off-white transition hover:text-gold">
          See This Week&apos;s Lineup
        </Link>
      </div>
      <button
        className="grid size-9 shrink-0 place-items-center border-l border-white/10 text-white/70 hover:text-white"
        aria-label="Dismiss events ticker"
        onClick={() => {
          sessionStorage.setItem('greenleaf:ticker', 'hidden')
          setDismissed(true)
        }}
      >
        <X className="size-4" />
      </button>
    </div>
  )
}
