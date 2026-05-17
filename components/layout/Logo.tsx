import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { imageSrc, restaurantImages } from '@/lib/images'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className={cn('relative grid size-11 place-items-center overflow-hidden rounded-full', light ? 'bg-gold' : 'bg-green-deep')}>
        <Image
          src={imageSrc('logoPrimary')}
          alt={restaurantImages.logoPrimary.alt}
          fill
          className="object-contain p-1.5"
          sizes="44px"
        />
      </span>
      <span className="leading-none">
        <span className={cn('block font-serif text-2xl font-bold tracking-tight', light ? 'text-off-white' : 'text-green-deep')}>
          GreenLeaf
        </span>
        <span className={cn('block text-[10px] font-bold uppercase tracking-[0.28em]', light ? 'text-gold' : 'text-gold')}>
          Kitchen & Bar
        </span>
      </span>
    </Link>
  )
}
