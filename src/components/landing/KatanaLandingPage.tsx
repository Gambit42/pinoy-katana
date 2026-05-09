import { CollectionSection } from './CollectionSection'
import { CommissionSection } from './CommissionSection'
import { HeroSection } from './HeroSection'
import { ProtocolsSection } from './ProtocolsSection'
import { SiteShell } from './SiteShell'

export function KatanaLandingPage() {
  return (
    <SiteShell>
      <HeroSection />
      <CollectionSection />
      <ProtocolsSection />
      <CommissionSection />
    </SiteShell>
  )
}
