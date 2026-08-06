'use client'

import { ArrowRight } from 'lucide-react'

/* Waitlist buttons and forms now redirect directly to Google Form */

export function WaitlistButton({
  children = 'Join Waitlist',
  variant = 'primary',
  className = '',
}: {
  children?: React.ReactNode
  variant?: 'primary' | 'ghost'
  className?: string
}) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70'
  const styles =
    variant === 'primary'
      ? 'bg-primary text-primary-foreground shadow-[0_10px_40px_-10px_rgba(124,58,237,0.8)] hover:shadow-[0_14px_50px_-8px_rgba(124,58,237,0.95)] hover:-translate-y-0.5'
      : 'glass text-foreground hover:bg-white/10 hover:-translate-y-0.5'

  return (
    <a
      href="https://forms.gle/WHaBG9ecrSkiKhmz9"
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  )
}

export function InlineWaitlist({ className = '' }: { className?: string }) {
  return (
    <a
      href="https://forms.gle/WHaBG9ecrSkiKhmz9"
      target="_blank"
      rel="noopener noreferrer"
      className={`glass-strong flex w-full max-w-md items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary transition-all hover:-translate-y-0.5 shadow-[0_10px_40px_-10px_rgba(124,58,237,0.8)] hover:shadow-[0_14px_50px_-8px_rgba(124,58,237,0.95)] ${className}`}
    >
      Join Waitlist <ArrowRight className="size-4" />
    </a>
  )
}
