'use client'

import { motion } from 'motion/react'
import { Star } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const testimonials = [
  {
    quote:
      'Orbit AI transformed our customer service. We&apos;ve reduced response time by 80% and our team can now focus on high-value tasks instead of answering repetitive questions.',
    author: 'Sarah M.',
    role: 'Agency Owner',
  },
  {
    quote:
      'We implemented Orbit AI for lead qualification, and within the first month, we closed 40% more deals. The AI understands our sales process perfectly.',
    author: 'David K.',
    role: 'E-commerce Founder',
  },
  {
    quote:
      'As a consultant, time is money. Orbit AI handles appointment scheduling, follow-ups, and lead qualification automatically. Best investment we&apos;ve made this year.',
    author: 'Michael T.',
    role: 'Consultant',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Loved by Beta Users"
          subtitle="See what early adopters are saying about Orbit AI."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <Reveal key={testimonial.author} delay={idx * 0.1}>
              <motion.div
                className="glass-strong rounded-2xl p-8 flex flex-col"
                whileHover={{ y: -4 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="flex-1 text-sm leading-relaxed text-foreground mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
