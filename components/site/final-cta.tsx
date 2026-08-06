import { Reveal } from './reveal'
import { InlineWaitlist } from './waitlist'
import { Particles } from './particles'

export function FinalCta() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="animated-border relative overflow-hidden rounded-[32px]">
            <div className="glass-strong relative overflow-hidden rounded-[32px] px-6 py-16 text-center sm:px-16 sm:py-20">
              <Particles count={20} />
              <div className="absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.35),transparent_70%)] blur-2xl" />

              <div className="relative">
                <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-balance sm:text-5xl">
                  Your next employee isn&apos;t human.
                  <br />
                  <span className="text-gradient-violet">It&apos;s Orbit.</span>
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty">
                  Join the waitlist and be first to build your always-on AI team.
                </p>
                <div className="mt-8 flex justify-center">
                  <InlineWaitlist />
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  No credit card required. Launching soon.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
