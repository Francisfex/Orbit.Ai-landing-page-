import { Clock, Phone, Wallet } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

const problems = [
  {
    icon: Clock,
    title: 'Missed Messages',
    body: 'Nobody replies after business hours. Customers reach out but get silence.',
  },
  {
    icon: Phone,
    title: 'Missed Calls',
    body: 'Customers call but nobody answers. Lost opportunities disappear into thin air.',
  },
  {
    icon: Wallet,
    title: 'Expensive Hiring',
    body: 'Hiring employees is expensive. Salaries, training, benefits. And they need time off.',
  },
]

export function Problem() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="The Problem"
          title="Businesses lose customers every day."
          subtitle="24/7 customer expectations meet 9-to-5 teams. Something has to change."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <StaggerItem key={p.title}>
              <div className="glass group h-full rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.07] hover:glow-soft">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-[#c4b5fd] transition-colors group-hover:bg-primary/25">
                  <p.icon className="size-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
