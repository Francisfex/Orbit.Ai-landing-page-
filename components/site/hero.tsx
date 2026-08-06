'use client'

import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import {
  BarChart3,
  Globe,
  Headphones,
  MessageCircle,
  Package,
  Play,
  ShoppingBag,
  TrendingUp,
} from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { Particles } from './particles'
import { InlineWaitlist, WaitlistButton } from './waitlist'
import { InstagramIcon } from './brand-icons'

type FloatCard = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  sub: string
  /** position in % of the stage */
  x: number
  y: number
  depth: number
  delay: number
  accent?: boolean
}

const cards: FloatCard[] = [
  { icon: MessageCircle, label: 'WhatsApp', sub: 'Conversation live', x: -6, y: 6, depth: 34, delay: 0 },
  { icon: Globe, label: 'Website', sub: 'Chat active', x: 68, y: -2, depth: 26, delay: 0.4 },
  { icon: Package, label: 'Appointment', sub: 'Booked confirmed', x: -12, y: 58, depth: 40, delay: 0.8 },
  { icon: BarChart3, label: 'Calendar', sub: 'Event scheduled', x: 70, y: 60, depth: 30, delay: 1.2, accent: true },
  { icon: TrendingUp, label: 'Sales', sub: 'Lead captured', x: 30, y: -14, depth: 20, delay: 0.6, accent: true },
  { icon: BarChart3, label: 'Analytics', sub: 'Real-time', x: 82, y: 30, depth: 22, delay: 1.4 },
  { icon: MessageCircle, label: 'Messages', sub: '12 replied', x: -16, y: 32, depth: 36, delay: 1.0 },
  { icon: TrendingUp, label: 'Notifications', sub: 'Alert sent', x: 40, y: 78, depth: 18, delay: 1.6 },
]

export function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 18 })
  const sy = useSpring(my, { stiffness: 60, damping: 18 })

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    mx.set(px)
    my.set(py)
  }

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="absolute inset-0 grid-fade" aria-hidden />
      <Particles count={30} />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8">
        {/* Left */}
        <div className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Launching soon — join the waitlist
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl font-black leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Hire <span className="text-gradient-violet">AI Employees.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            Orbit.Ai gives your business intelligent AI Employees that answer calls, reply to customers,
            book appointments, close sales and work 24/7 so you never miss another opportunity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <WaitlistButton>Join Waitlist</WaitlistButton>
            {/* TODO: Replace with actual demo video link */}
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Play className="size-4 fill-current" />
              Watch Demo
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-5 text-sm text-muted-foreground"
          >
            No credit card required.{' '}
            <span className="text-foreground/80">Launching soon.</span>
          </motion.p>
        </div>

        {/* Right — floating robot stage */}
        <div
          onMouseMove={handleMouse}
          onMouseLeave={() => {
            mx.set(0)
            my.set(0)
          }}
          className="relative mx-auto hidden aspect-square w-full max-w-[560px] lg:block"
        >
          {/* glow behind robot */}
          <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.55),transparent_65%)] blur-2xl" />

          {/* orbit rings */}
          <div className="absolute left-1/2 top-1/2 size-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
          <div className="absolute left-1/2 top-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />

          {/* robot */}
          <RobotLayer sx={sx} sy={sy} />

          {/* floating cards */}
          {cards.map((c) => (
            <FloatingCard key={c.label} card={c} sx={sx} sy={sy} />
          ))}
        </div>

        {/* mobile inline waitlist */}
        <div className="lg:hidden">
          <InlineWaitlist />
        </div>
      </div>
    </section>
  )
}

function RobotLayer({
  sx,
  sy,
}: {
  sx: ReturnType<typeof useSpring>
  sy: ReturnType<typeof useSpring>
}) {
  const tx = useTransform(sx, [-0.5, 0.5], [18, -18])
  const ty = useTransform(sy, [-0.5, 0.5], [18, -18])
  return (
    <motion.div
      style={{ x: tx, y: ty }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative h-[78%] w-[78%]"
      >
        <Image
          src="/orbit-robot.png"
          alt="Orbit.Ai 3D robot assistant"
          fill
          priority
          sizes="(max-width: 1024px) 0px, 440px"
          className="object-contain drop-shadow-[0_30px_60px_rgba(88,28,220,0.45)] [mask-image:radial-gradient(circle_at_center,#000_52%,transparent_74%)] [-webkit-mask-image:radial-gradient(circle_at_center,#000_52%,transparent_74%)]"
        />
      </motion.div>
    </motion.div>
  )
}

function FloatingCard({
  card,
  sx,
  sy,
}: {
  card: FloatCard
  sx: ReturnType<typeof useSpring>
  sy: ReturnType<typeof useSpring>
}) {
  const tx = useTransform(sx, [-0.5, 0.5], [card.depth, -card.depth])
  const ty = useTransform(sy, [-0.5, 0.5], [card.depth, -card.depth])
  const Icon = card.icon

  return (
    <motion.div
      style={{ left: `${card.x}%`, top: `${card.y}%`, x: tx, y: ty }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 + card.delay * 0.25 }}
      className="absolute"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4 + card.delay,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: card.delay,
        }}
        className="glass-strong flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 glow-soft"
      >
        <span
          className={`flex size-8 items-center justify-center rounded-xl ${
            card.accent
              ? 'bg-accent/15 text-accent'
              : 'bg-primary/20 text-[#c4b5fd]'
          }`}
        >
          <Icon className="size-4" />
        </span>
        <div className="pr-1">
          <div className="text-xs font-semibold leading-none text-foreground">
            {card.label}
          </div>
          <div className="mt-1 text-[10px] leading-none text-muted-foreground">
            {card.sub}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
