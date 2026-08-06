'use client'

import { motion } from 'motion/react'
import { Briefcase, Zap, Users, Rocket } from 'lucide-react'
import { Reveal } from './reveal'

const categories = [
  { icon: Users, label: 'Small Businesses' },
  { icon: Briefcase, label: 'Agencies' },
  { icon: Zap, label: 'Sales Teams' },
  { icon: Rocket, label: 'Startups' },
]

export function Trust() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold text-muted-foreground">BUILT FOR</p>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <cat.icon className="size-6" />
                </div>
                <p className="text-sm font-medium text-foreground">{cat.label}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
