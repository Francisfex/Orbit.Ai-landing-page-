import { AuroraBackground } from '@/components/site/aurora-background'
import { Nav } from '@/components/site/nav'
import { Hero } from '@/components/site/hero'
import { Trust } from '@/components/site/trust'
import { Features } from '@/components/site/features'
import { DashboardPreview } from '@/components/site/dashboard-preview'
import { DemoSection } from '@/components/site/demo-section'
import { Comparison } from '@/components/site/comparison'
import { Testimonials } from '@/components/site/testimonials'
import { FinalCta } from '@/components/site/final-cta'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <>
      <AuroraBackground />
      <Nav />
      <main className="relative">
        <Hero />
        <Trust />
        <Features />
        <DashboardPreview />
        <DemoSection />
        <Comparison />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
