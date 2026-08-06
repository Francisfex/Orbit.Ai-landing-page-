'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'

export function DemoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
      >
        <svg className="size-4 fill-current" viewBox="0 0 24 24">
          <polygon points="5 3 19 12 5 21" />
        </svg>
        Watch Demo
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setIsOpen(false)}
            >
              <div
                className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-50 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
                  aria-label="Close modal"
                >
                  <X className="size-5" />
                </button>

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
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
