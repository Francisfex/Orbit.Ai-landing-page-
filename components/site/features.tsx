'use client'

import { motion } from 'motion/react'
import {
  MessageSquare,
  TrendingUp,
  Inbox,
  Calendar,
  BookOpen,
  BarChart3,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const features = [
  {
    icon: MessageSquare,
    title: 'AI Chat Assistant',
    description: 'Answers customer questions instantly.',
  },
  {
    icon: TrendingUp,
    title: 'AI Lead Qualification',
    description: 'Automatically qualifies prospects.',
  },
  {
    icon: Inbox,
    title: 'Unified Inbox',
    description: 'Manage conversations in one place.',
  },
  {
    icon: Calendar,
    title: 'Appointment Booking',
    description: 'Books meetings automatically.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base',
    description: 'Train AI using your business information.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track conversations and performance.',
  },
]

export function Features() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Powerful Features"
          subtitle="Everything you need to automate and scale your business."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="group glass-strong rounded-2xl p-6 transition-all duration-300 hover:glow-soft hover:border-primary/50"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-all duration-300 group-hover:scale-110">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
