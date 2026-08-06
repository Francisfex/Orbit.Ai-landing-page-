import { Reveal } from './reveal'

const companies = [
  'Northwind',
  'Lumen',
  'Vertex',
  'Cascade',
  'Monarch',
  'Halo',
  'Nimbus',
  'Zenith',
]

export function SocialProof() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="font-display text-lg font-semibold tracking-tight text-foreground/90 sm:text-xl">
            Built for ambitious businesses.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Join early businesses getting access before launch.
          </p>
        </Reveal>

        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-14">
            {[...companies, ...companies].map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="font-display text-xl font-semibold tracking-tight text-muted-foreground/60 transition-colors hover:text-foreground/80"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
