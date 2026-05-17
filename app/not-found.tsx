import Link from 'next/link'
import { CalendarDays, Home, MessageCircle, Phone, Utensils } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { whatsappMessages, whatsappUrl } from '@/lib/constants'

export default function NotFound() {
  return (
    <main className="grid min-h-[78vh] place-items-center bg-off-white px-4 py-20 text-center sm:px-6 lg:px-8">
      <section className="mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Page not found</p>
        <h1 className="mt-5 text-5xl font-bold text-green-deep md:text-7xl">This table is not on the floor plan.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone">
          The page may have moved, but the menu, bookings, and GreenLeaf vibes are still close by.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild className="rounded-full bg-green-primary px-7 hover:bg-green-deep">
            <Link href="/">
              <Home className="mr-2 size-4" />
              Back Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-green-primary px-7 text-green-primary hover:bg-green-primary hover:text-white">
            <Link href="/menu">
              <Utensils className="mr-2 size-4" />
              View Menu
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-green-primary px-7 text-green-primary hover:bg-green-primary hover:text-white">
            <Link href="/events">
              <CalendarDays className="mr-2 size-4" />
              Events
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-green-primary px-7 text-green-primary hover:bg-green-primary hover:text-white">
            <Link href="/reservations">Reservations</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-green-primary px-7 text-green-primary hover:bg-green-primary hover:text-white">
            <Link href="/contact">
              <Phone className="mr-2 size-4" />
              Contact
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-green-primary px-7 text-green-primary hover:bg-green-primary hover:text-white">
            <a href={whatsappUrl(whatsappMessages.booking)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 size-4" />
              Book via WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}
