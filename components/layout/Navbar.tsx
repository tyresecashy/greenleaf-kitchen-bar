'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Logo } from './Logo'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Events', href: '/events' },
  { label: 'Reservations', href: '/reservations' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const darkHeroRoutes = ['/', '/menu', '/events', '/gallery', '/about']
  const usesDarkHero = darkHeroRoutes.includes(pathname)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    handler()
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-9 z-40 transition-all duration-500',
        scrolled || open ? 'bg-green-deep/95 shadow-2xl shadow-black/20 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo light />
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href
            const inactiveClass = scrolled || open || usesDarkHero ? 'text-white/78 hover:text-gold' : 'text-green-deep/90 hover:text-green-primary'
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'nav-underline text-xs font-bold uppercase tracking-[0.2em] transition-colors',
                  active ? 'text-gold' : inactiveClass,
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
        <div className="hidden lg:block">
          <Button asChild className="rounded-full bg-gold px-6 text-green-deep hover:bg-gold-light">
            <Link href="/reservations">Book a Table</Link>
          </Button>
        </div>
        <button
          id="mobile-menu-button"
          className="grid size-11 place-items-center rounded-full border border-white/25 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          type="button"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {open ? (
        <motion.nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          aria-modal="true"
          role="dialog"
          className="fixed bottom-0 right-0 top-20 z-50 w-full max-w-sm bg-green-dark-bg p-7 shadow-2xl lg:hidden"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
        >
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 text-lg font-semibold text-off-white hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-4 h-12 rounded-full bg-gold text-green-deep hover:bg-gold-light">
              <Link href="/reservations">Book a Table</Link>
            </Button>
          </div>
        </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
