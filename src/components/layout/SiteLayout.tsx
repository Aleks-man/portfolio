import type { ReactNode } from 'react'
import { Navigation } from '../Navigation'
import { PageFooter } from '../PageFooter'
import type { Language, PortfolioContent } from '../../content/portfolio'

type SiteLayoutProps = {
  children: ReactNode
  currentLanguage: Language
  portfolio: PortfolioContent
  onLanguageChange: (language: Language) => void
}

export function SiteLayout({
  children,
  currentLanguage,
  portfolio,
  onLanguageChange,
}: SiteLayoutProps) {
  return (
    <div className="site-shell" lang={currentLanguage}>
      <header className="site-header">
        <Navigation
          currentLanguage={currentLanguage}
          nav={portfolio.nav}
          onLanguageChange={onLanguageChange}
        />
      </header>
      <main>{children}</main>
      <PageFooter footer={portfolio.footer} contact={portfolio.contact} />
    </div>
  )
}
