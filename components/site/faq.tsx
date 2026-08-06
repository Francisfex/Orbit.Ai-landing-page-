'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const faqs = [
  {
    q: 'What is Orbit?',
    a: 'Orbit is an AI Employee platform that lets businesses hire intelligent AI Employees to handle customer conversations, book appointments, close sales, and support customers 24/7 across WhatsApp, Website, Instagram, and Shopify.',
  },
  {
    q: 'Can it answer calls?',
    a: 'Phone answering is coming soon! For now, Orbit handles WhatsApp, Website, Instagram, and Shopify conversations.',
  },
  {
    q: 'Can it book appointments?',
    a: 'Yes. Orbit integrates with Google Calendar and Cal.com. Your AI Appointment Setter books meetings automatically, syncs to your calendar, and sends confirmations.',
  },
  {
    q: 'Can it close sales?',
    a: 'Absolutely. Our Sales Employee qualifies leads, answers objections, collects payment details, and closes deals in real-time across all your channels.',
  },
  {
    q: 'Which platforms are supported?',
    a: 'Currently: WhatsApp, Website Chat, Instagram, and Shopify. Coming Soon: Phone Calls, Telegram, and more.',
  },
  {
    q: 'When does Orbit launch?',
    a: 'We&apos;re launching very soon. Join the waitlist today to get founding pricing and be first to hire your AI team.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="FAQ" title="Questions, answered." />

        <Reveal className="mt-12">
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => {
              const isOpen = open === i
              return (
                <div
                  key={f.q}
                  className="glass overflow-hidden rounded-2xl transition-colors"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold tracking-tight">
                      {f.q}
                    </span>
                    <Plus
                      className={`size-5 shrink-0 text-[#c4b5fd] transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
