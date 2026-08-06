'use client'

import { useMemo } from 'react'
import { motion } from 'motion/react'

export function Particles({ count = 26 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        duration: Math.random() * 8 + 8,
        delay: Math.random() * 6,
        opacity: Math.random() * 0.5 + 0.2,
      })),
    [count],
  )

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
          }}
          animate={{ y: [0, -30, 0], opacity: [d.opacity, d.opacity * 1.8, d.opacity] }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
