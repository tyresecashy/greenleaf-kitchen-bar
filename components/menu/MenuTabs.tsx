'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { Search, X } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { MagneticCard } from '@/components/motion/MagneticCard'
import { categories, menuData, type MenuItem } from '@/lib/menu-data'
import { whatsappMessages, whatsappUrl } from '@/lib/constants'
import { imageFit, imageObjectPosition, resolveImage } from '@/lib/images'
import { cn } from '@/lib/utils'

const categoryMap: Record<string, string | null> = {
  All: null,
  Starters: 'starters',
  Mains: 'mains',
  'Grills & BBQ': 'grills',
  Seafood: 'seafood',
  Vegetarian: 'vegetarian',
  Cocktails: 'cocktails',
  Mocktails: 'mocktails',
  'Beer & Wine': 'beerAndWine',
  'Whisky & Spirits': 'spirits',
  Desserts: 'desserts',
}

function badges(item: MenuItem) {
  return [
    item.vegan && 'Vegan',
    item.spicy && 'Spicy',
    item.chefsPick && "Chef's Pick",
    item.mostLoved && 'Most Loved',
    item.premium && 'Premium',
    item.signature && 'Signature',
  ].filter(Boolean) as string[]
}

export function MenuTabs() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<MenuItem | null>(null)

  const items = useMemo(() => {
    const key = categoryMap[activeCategory]
    const source = key ? menuData[key] : Object.values(menuData).flat()
    const normalized = query.trim().toLowerCase()
    return normalized
      ? source.filter((item) => `${item.name} ${item.desc ?? ''}`.toLowerCase().includes(normalized))
      : source
  }, [activeCategory, query])

  return (
    <>
      <div className="sticky top-28 z-20 border-y border-green-deep/10 bg-off-white/95 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              type="button"
              className={cn(
                'h-10 shrink-0 rounded-full px-4 text-sm font-bold transition',
                activeCategory === category ? 'bg-green-deep text-gold' : 'bg-white text-green-deep hover:bg-green-primary hover:text-white',
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-xl">
          <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-stone" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search dishes, drinks, cocktails..."
            className="h-13 w-full rounded-full border border-green-deep/15 bg-white pl-12 pr-12 text-green-deep outline-none ring-gold/40 focus:ring-4"
          />
          {query ? (
            <button onClick={() => setQuery('')} aria-label="Clear menu search" type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-stone">
              <X className="size-5" />
            </button>
          ) : null}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <MagneticCard key={`${item.name}-${index}`}>
              <button
                onClick={() => setSelected(item)}
                aria-label={`View details for ${item.name}`}
                type="button"
                className="premium-border-glow group w-full overflow-hidden rounded-xl bg-white text-left shadow-sm transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/45 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative mx-auto aspect-square w-full max-w-[400px] overflow-hidden">
                  <Image
                  src={resolveImage(item.image)}
                  alt={item.name}
                  fill
                  quality={90}
                  className={`${imageFit(resolveImage(item.image)) === 'contain' ? 'object-contain p-3' : 'object-cover'} contrast-[1.03] saturate-[1.06] transition duration-700 group-hover:scale-105`}
                  style={{ objectPosition: imageObjectPosition(resolveImage(item.image)) }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 384px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/8 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl font-bold text-green-deep">{item.name}</h3>
                    <p className="font-serif text-xl font-bold text-gold">KES {item.price.toLocaleString()}</p>
                  </div>
                  {item.desc ? <p className="mt-3 text-sm leading-6 text-stone">{item.desc}</p> : null}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {badges(item).map((badge) => (
                      <span key={badge} className="rounded-full bg-green-primary/10 px-3 py-1 text-xs font-bold text-green-primary transition group-hover:bg-gold/20 group-hover:text-green-deep">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </MagneticCard>
          ))}
        </div>
      </div>
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[92vh] max-w-5xl overflow-hidden border-0 bg-green-dark-bg p-0 text-white">
          {selected ? (
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[320px]">
                <Image
                  src={resolveImage(selected.image)}
                  alt={selected.name}
                  fill
                  quality={90}
                  className={imageFit(resolveImage(selected.image)) === 'contain' ? 'object-contain p-4' : 'object-cover'}
                  style={{ objectPosition: imageObjectPosition(resolveImage(selected.image)) }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 md:p-10">
                <DialogTitle className="font-serif text-4xl text-off-white">{selected.name}</DialogTitle>
                <p className="mt-4 font-serif text-3xl font-bold text-gold">KES {selected.price.toLocaleString()}</p>
                <p className="mt-5 leading-7 text-white/72">{selected.desc ?? 'Freshly prepared by the GreenLeaf kitchen.'}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {badges(selected).map((badge) => (
                    <span key={badge} className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-gold">
                      {badge}
                    </span>
                  ))}
                </div>
                <Button asChild className="mt-8 rounded-full bg-gold text-green-deep hover:bg-gold-light">
                  <a href={whatsappUrl(whatsappMessages.menuNote(selected.name))} target="_blank" rel="noopener noreferrer">
                    Add to Reservation Notes
                  </a>
                </Button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  )
}
