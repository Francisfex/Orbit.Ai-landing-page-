'use client'

import { motion } from 'motion/react'
import { Check, X as XIcon } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const comparison = [
  { feature: 'Response Time', traditional: 'Slow replies', orbit: 'Instant replies' },
  { feature: 'Lead Quality', traditional: 'Missed leads', orbit: 'Never misses leads' },
  { feature: 'Availability', traditional: 'Limited working hours', orbit: 'Works 24/7' },
  { feature: 'Operations', traditional: 'Manual follow-up', orbit: 'AI-powered automation' },
]

export function Comparison() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Why Orbit AI"
          subtitle="See how Orbit AI outperforms traditional support."
        />

        <div className="mt-16 space-y-4">
          {comparison.map((item, idx) => (
            <Reveal key={item.feature} delay={idx * 0.1}>
              <motion.div
                className="grid grid-cols-1 gap-4 md:grid-cols-3 glass-strong rounded-2xl p-6 items-center"
                whileHover={{ scale: 1.01 }}
              >
                <div className="font-display font-semibold text-foreground md:text-right">
                  {item.feature}
                </div>
                <div className="md:col-span-2 space-y-2 md:space-y-0">
                  <div className="flex items-center gap-3">
                    <div className="flex size-6 items-center justify-center rounded-full bg-destructive/20">
                      <XIcon className="size-4 text-destructive" />
                    </div>
                    <span className="text-muted-foreground">{item.traditional}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex size-6 items-center justify-center rounded-full bg-accent/20">
                      <Check className="size-4 text-accent" />
                    </div>
                    <span className="text-foreground">{item.orbit}</span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
