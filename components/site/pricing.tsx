import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'
import { WaitlistButton } from './waitlist'

const plans = [
  {
    name: 'Starter',
    price: 'Launching',
    period: 'Soon',
    tagline: 'Validation-focused pricing for early adopters.',
    popular: false,
  },
  {
    name: 'Pro',
    price: 'Launching',
    period: 'Soon',
    tagline: 'Most Popular — Maximum features and support.',
    popular: true,
  },
  {
    name: 'Scale',
    price: 'Launching',
    period: 'Soon',
    tagline: 'For enterprises and high-volume use cases.',
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Launch pricing coming soon."
          subtitle="Join the waitlist now to get early-access pricing when we launch."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <StaggerItem key={p.name} className={p.popular ? 'md:-mt-4' : ''}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                  p.popular
                    ? 'animated-border glass-strong glow-violet'
                    : 'glass hover:bg-white/[0.07]'
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-[0_6px_20px_-4px_rgba(34,197,94,0.7)]">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {p.name}
                </h3>
                <div className="mt-4 flex items-end gap-1">
                  <span className="font-display text-4xl font-black tracking-tight">
                    {p.price}
                  </span>
                  {p.period && (
                    <span className="mb-1 text-sm text-muted-foreground">{p.period}</span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.tagline}
                </p>
                <div className="mt-8 flex-1" />
                <WaitlistButton
                  variant={p.popular ? 'primary' : 'ghost'}
                  className="w-full"
                >
                  Join Waitlist
                </WaitlistButton>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
