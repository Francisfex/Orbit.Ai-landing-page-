import { Logo } from './logo'
import { GithubIcon, LinkedinIcon, XIcon } from './brand-icons'

const links = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Contact', href: 'mailto:orbitaisupport1@gmail.com' },
]

const socials = [
  { label: 'X (Twitter)', href: 'https://x.com/orbit_Ai0', icon: XIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/orbit-ai-948938423?utm_source=share_via&utm_content=profile&utm_medium=member_android', icon: LinkedinIcon },
  { label: 'GitHub', href: 'https://github.com/Francisfex', icon: GithubIcon },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Logo size={32} />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Orbit.Ai — Hire AI Employees.
          </p>
        </div>

        <nav className="flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex size-9 items-center justify-center rounded-full glass text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
            >
              <s.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
