import type { ReactNode } from 'react'
import { FaqSection } from './FaqSection'
import { Footer } from './Footer'
import { Header } from './Header'
import { RequestFormProvider } from './RequestFormDialog'
import { Toaster } from '#/components/ui/sonner'

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <RequestFormProvider>
      <main>
        <Header />
        {children}
        <FaqSection />
        <Footer />
      </main>
      <Toaster />
    </RequestFormProvider>
  )
}
