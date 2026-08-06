'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Play, X } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const DEMO_VIDEO_URL = 'https://www.youtube.com/embed/5hUO-Xgd_Cg?rel=0&modestbranding=1&playsinline=1'

export function DemoSection() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <>
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="See Orbit AI In Action"
            subtitle="Watch how Orbit AI handles conversations, manages leads and helps businesses save hours every week."
          />

          <Reveal className="mt-16">
            <div className="relative overflow-hidden rounded-2xl">
              <div
                onClick={() => setShowVideo(true)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-b from-primary/20 to-background"
              >
                {/* Video placeholder thumbnail */}
                <div className="aspect-video w-full bg-black/40 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex size-20 items-center justify-center rounded-full bg-primary/30 backdrop-blur-md transition-all duration-300 group-hover:bg-primary/50"
                  >
                    <Play className="size-8 fill-primary text-primary ml-1" />
                  </motion.div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowVideo(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl mx-4"
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close video"
            >
              <X className="size-6" />
            </button>
            <div
              className="relative bg-black rounded-xl overflow-hidden"
              style={{ paddingBottom: '56.25%' }}
            >
              <iframe
                src={DEMO_VIDEO_URL}
                title="Orbit AI Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
