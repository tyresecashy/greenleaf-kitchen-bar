import { guestNotes } from '@/lib/events-data'

export function TestimonialsSlider() {
  return (
    <section className="bg-off-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Guest Notes</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {guestNotes.map((note) => (
            <article key={note.text} className="rounded-2xl border border-gold/20 bg-white p-6 text-left shadow-lg shadow-green-deep/5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{note.label}</p>
              <p className="mt-4 font-accent text-3xl italic leading-snug text-green-deep">"{note.text}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
