import { AuroraBackground } from '@/components/site/aurora-background'
import { Nav } from '@/components/site/nav'
import { Hero } from '@/components/site/hero'
import { SocialProof } from '@/components/site/social-proof'
import { Problem } from '@/components/site/problem'
import { Solution } from '@/components/site/solution'
import { HowItWorks } from '@/components/site/how-it-works'
import { Marketplace } from '@/components/site/marketplace'
import { DashboardPreview } from '@/components/site/dashboard-preview'
import { Pricing } from '@/components/site/pricing'
import { Faq } from '@/components/site/faq'
import { FinalCta } from '@/components/site/final-cta'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <>
      <AuroraBackground />
      <Nav />
      <main className="relative">
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <HowItWorks />
        <Marketplace />
        <DashboardPreview />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
