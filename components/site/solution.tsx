import {
  Boxes,
  CalendarClock,
  Headset,
  ReceiptText,
  Sparkles,
  UserRound,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

type Employee = {
  role: string
  desc: string
  icon: LucideIcon
}

const team: Employee[] = [
  { role: 'Receptionist', desc: 'Greets every visitor and routes them instantly.', icon: UserRound },
  { role: 'Sales Expert', desc: 'Qualifies leads and closes deals in chat.', icon: Sparkles },
  { role: 'Customer Support', desc: 'Resolves questions before they escalate.', icon: Headset },
  { role: 'Order Assistant', desc: 'Tracks, updates and manages every order.', icon: ReceiptText },
  { role: 'Appointment Setter', desc: 'Books meetings and fills your calendar.', icon: CalendarClock },
  { role: 'Inventory Assistant', desc: 'Monitors stock and flags what’s running low.', icon: Boxes },
]

export function Solution() {
  return (
    <section id="solution" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="The solution"
          title={
            <>
              Meet Your <span className="text-gradient-violet">AI Team.</span>
            </>
          }
          subtitle="Specialised AI employees, ready to work the moment you hire them. Always online, never off."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <StaggerItem key={m.role}>
              <div className="animated-border group relative h-full overflow-hidden rounded-3xl">
                <div className="glass h-full rounded-3xl p-6 transition-all duration-300 group-hover:-translate-y-1.5">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/40 to-primary/10 text-foreground ring-1 ring-white/10">
                        <m.icon className="size-6 text-[#d6cbfb]" />
                      </div>
                      <span className="absolute -bottom-1 -right-1 flex size-4 items-center justify-center rounded-full bg-background">
                        <span className="size-2.5 rounded-full bg-accent shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]" />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tight">
                        {m.role}
                      </h3>
                      <span className="mt-1 inline-flex items-center gap-1.5 text-xs text-accent">
                        <span className="size-1.5 rounded-full bg-accent" />
                        Online
                      </span>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {m.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
