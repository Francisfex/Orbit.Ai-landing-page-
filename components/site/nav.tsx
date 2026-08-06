'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Logo } from './logo'
import { WaitlistButton } from './waitlist'

const links = [
  { label: 'Solution', href: '#solution' },
  { label: 'How it works', href: '#how' },
  { label: 'Marketplace', href: '#marketplace' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${
          scrolled ? 'glass-strong glow-soft' : 'border border-transparent'
        }`}
      >
        <a href="#top" aria-label="Orbit.Ai home">
          <Logo size={32} />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <WaitlistButton className="px-5 py-2.5 text-[13px]">Join Waitlist</WaitlistButton>
      </nav>
    </motion.header>
  )
}
