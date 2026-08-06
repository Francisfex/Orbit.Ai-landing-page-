import {
  Dumbbell,
  Gavel,
  Home,
  Shirt,
  Stethoscope,
  UtensilsCrossed,
  Star,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

type Listing = {
  name: string
  category: string
  creator: string
  rating: number
  icon: LucideIcon
}

const listings: Listing[] = [
  { name: 'Restaurant Sales Expert', category: 'Food & Beverage', creator: 'Orbit Labs', rating: 4.9, icon: UtensilsCrossed },
  { name: 'Real Estate Closer', category: 'Real Estate', creator: 'Nova Studio', rating: 4.8, icon: Home },
  { name: 'Gym Receptionist', category: 'Fitness', creator: 'Orbit Labs', rating: 4.9, icon: Dumbbell },
  { name: 'Fashion Store Expert', category: 'Retail', creator: 'Atelier AI', rating: 4.7, icon: Shirt },
  { name: 'Medical Assistant', category: 'Healthcare', creator: 'Vitals Co', rating: 5.0, icon: Stethoscope },
  { name: 'Legal Intake Assistant', category: 'Legal', creator: 'Lex Systems', rating: 4.8, icon: Gavel },
]

export function Marketplace() {
  return (
    <section id="marketplace" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Coming soon"
          title="AI Employee Marketplace"
          subtitle="Install a ready-made, industry-trained AI employee in one click. A preview of what’s next."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((l) => (
            <StaggerItem key={l.name}>
              <div className="glass group flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.07] hover:glow-soft">
                <div className="flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-[#d6cbfb] ring-1 ring-white/10">
                    <l.icon className="size-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-xs text-foreground/80">
                    <Star className="size-3 fill-accent text-accent" />
                    {l.rating.toFixed(1)}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                  {l.name}
                </h3>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-white/5 px-2 py-0.5">{l.category}</span>
                  <span>by {l.creator}</span>
                </div>
                <div className="mt-6 flex-1" />
                <button
                  disabled
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-border bg-white/5 px-4 py-2.5 text-sm font-semibold text-foreground/70 transition-colors group-hover:border-primary/40 group-hover:text-foreground"
                >
                  Install
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Preview only — the marketplace opens after launch.
        </p>
      </div>
    </section>
  )
}
