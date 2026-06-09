import type { Language, PortfolioContent } from '../content/portfolio'

type NavigationProps = {
  activeSection: string
  currentLanguage: Language
  nav: PortfolioContent['nav']
  onLanguageChange: (language: Language) => void
}

const languages: Language[] = ['en', 'ru']

export function Navigation({
  activeSection,
  currentLanguage,
  nav,
  onLanguageChange,
}: NavigationProps) {
  return (
    <nav className="nav" aria-label={nav.aria}>
      <div className="nav__controls">
        <div className="nav__links">
          {nav.links.map((link) => (
            <a
              className={link.href === activeSection ? 'is-active' : ''}
              href={link.href}
              key={link.href}
              aria-current={link.href === activeSection ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div
          className={`language-toggle language-toggle--${currentLanguage}`}
          aria-label={nav.languageLabel}
        >
          {languages.map((language) => (
            <button
              className={language === currentLanguage ? 'is-active' : ''}
              key={language}
              type="button"
              onClick={() => onLanguageChange(language)}
              aria-pressed={language === currentLanguage}
            >
              {language.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
