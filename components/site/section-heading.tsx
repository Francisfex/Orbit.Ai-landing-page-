import type { ReactNode } from 'react'
import { Reveal } from './reveal'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'center' | 'left'
}) {
  return (
    <Reveal
      className={`flex max-w-2xl flex-col gap-4 ${
        align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left'
      }`}
    >
      {eyebrow && (
        <span className="glass inline-flex items-center rounded-full px-3.5 py-1 text-xs font-medium tracking-wide text-[#c4b5fd]">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
