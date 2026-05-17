import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  inverted = false,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
  inverted?: boolean
}) {
  return (
    <div className={cn('mx-auto max-w-3xl text-center', className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
      ) : null}
      <h2 className={cn('text-4xl font-bold leading-tight md:text-6xl', inverted ? 'text-off-white' : 'text-green-deep')}>
        {title}
      </h2>
      {subtitle ? (
        <p className={cn('mt-4 text-base leading-7 md:text-lg', inverted ? 'text-white/70' : 'text-stone')}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
