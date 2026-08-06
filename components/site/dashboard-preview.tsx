'use client'

import { motion } from 'motion/react'
import { DollarSign, MessageSquare, Package, Timer } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const stats = [
  { label: 'Today’s conversations', value: '2,481', delta: '+18%', icon: MessageSquare },
  { label: 'Revenue generated', value: '$48.2k', delta: '+32%', icon: DollarSign },
  { label: 'Orders', value: '1,204', delta: '+11%', icon: Package },
  { label: 'Avg. response time', value: '1.9s', delta: '−0.4s', icon: Timer },
]

const bars = [42, 55, 38, 68, 74, 60, 82, 70, 90, 78, 96, 88]

const chat = [
  { from: 'user', text: 'Hi! Do you have the black hoodie in size M?' },
  { from: 'ai', text: 'Yes — 6 in stock. Want me to reserve one for you?' },
  { from: 'user', text: 'Please! And can I get it by Friday?' },
  { from: 'ai', text: 'Absolutely. Express delivery lands Thursday. Shall I check you out?' },
]

export function DashboardPreview() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Command center"
          title="Everything, in one calm dashboard."
          subtitle="Watch your AI team perform in real time — conversations, revenue and response times at a glance."
        />

        <Reveal className="mt-14">
          <div className="animated-border relative overflow-hidden rounded-[28px]">
            <div className="glass-strong glow-soft rounded-[28px] p-5 sm:p-7">
              {/* stat cards */}
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="glass rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-[#d6cbfb]">
                        <s.icon className="size-4" />
                      </span>
                      <span className="text-xs font-medium text-accent">{s.delta}</span>
                    </div>
                    <div className="mt-4 font-display text-2xl font-bold tracking-tight">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-5">
                {/* chart */}
                <div className="glass rounded-2xl p-5 lg:col-span-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold">Conversations this week</div>
                      <div className="text-xs text-muted-foreground">
                        Handled automatically by Orbit
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-xs text-accent">
                      <span className="size-1.5 rounded-full bg-accent" /> Live
                    </span>
                  </div>
                  <div className="mt-6 flex h-40 items-end gap-2">
                    {bars.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-primary/30 to-primary"
                      />
                    ))}
                  </div>
                </div>

                {/* live chat */}
                <div className="glass rounded-2xl p-5 lg:col-span-2">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-full bg-primary/20 text-[#d6cbfb]">
                      <MessageSquare className="size-4" />
                    </span>
                    <div className="text-sm font-semibold">Live chat</div>
                    <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-accent">
                      <span className="size-1.5 rounded-full bg-accent" /> Online
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {chat.map((m, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.15 }}
                        className={`flex ${m.from === 'ai' ? 'justify-start' : 'justify-end'}`}
                      >
                        <p
                          className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${
                            m.from === 'ai'
                              ? 'bg-primary/20 text-foreground'
                              : 'bg-white/10 text-foreground/90'
                          }`}
                        >
                          {m.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
