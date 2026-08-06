'use client'

import { motion } from 'motion/react'
import { SectionHeading } from './section-heading'

export function ProductDemo() {
  return (
    <section id="demo" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Watch Orbit AI in Action"
          subtitle="See how Orbit AI answers customers, books appointments, and manages conversations in real time."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 overflow-hidden rounded-3xl glass-strong p-1 glow-soft"
        >
          <div className="relative overflow-hidden rounded-[22px] bg-black/40">
            <div className="aspect-video w-full">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dw6annqq&public_id=lv_0_20260806033824_attmmk"
                style={{
                  width: '100%',
                  height: '100%',
                  aspectRatio: '16/9',
                  border: 'none',
                  borderRadius: '16px',
                }}
                allow="fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                title="Orbit AI Product Demo"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex size-5 items-center justify-center rounded-full bg-accent/20 text-accent text-xs font-bold">
              ✓
            </span>
            3-minute walkthrough
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex size-5 items-center justify-center rounded-full bg-accent/20 text-accent text-xs font-bold">
              ✓
            </span>
            Real product prototype
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex size-5 items-center justify-center rounded-full bg-accent/20 text-accent text-xs font-bold">
              ✓
            </span>
            Mobile-friendly
          </div>
        </motion.div>
      </div>
    </section>
  )
}
