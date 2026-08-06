import { Cable, Sparkles, Rocket } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

const steps = [
  {
    n: '01',
    icon: Cable,
    title: 'Connect your business.',
    body: 'Link your Website, WhatsApp, Instagram or Shopify. No code required — takes minutes.',
  },
  {
    n: '02',
    icon: Sparkles,
    title: 'Orbit learns automatically.',
    body: 'Upload your knowledge base, PDFs, FAQs, pricing. Orbit crawls your site and learns your business.',
  },
  {
    n: '03',
    icon: Rocket,
    title: 'Hire AI Employees.',
    body: 'Choose roles: Receptionist, Sales, Support. Go live instantly. Never miss another customer.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps to always-on support."
          subtitle="From your first customer to full automation in minutes."
        />

        <StaggerGroup className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* connecting line */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[16%] right-[16%] top-16 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block"
          />
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="glass group relative h-full rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.07]">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-transparent ring-1 ring-white/10">
                    <s.icon className="size-7 text-[#d6cbfb]" />
                  </div>
                  <span className="font-display text-4xl font-black text-white/[0.08]">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
