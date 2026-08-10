import { useEffect, useState, type ReactNode } from 'react'
import { Navigation } from '../Navigation'
import { PageFooter } from '../PageFooter'
import type { Language, PortfolioContent } from '../../content/portfolio'
import { BackToTopButton } from '../routing/BackToTopButton'

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
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false)

  useEffect(() => {
    const updateHeader = () => setIsHeaderScrolled(window.scrollY > 12)

    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  return (
    <div className="site-shell" lang={currentLanguage}>
      <header className={`site-header${isHeaderScrolled ? ' is-scrolled' : ''}`}>
        <Navigation
          currentLanguage={currentLanguage}
          nav={portfolio.nav}
          projects={portfolio.projects.items}
          onLanguageChange={onLanguageChange}
        />
      </header>
      <main>{children}</main>
      <PageFooter footer={portfolio.footer} contact={portfolio.contact} />
      <BackToTopButton label={portfolio.footer.top} />
    </div>
  )
}
