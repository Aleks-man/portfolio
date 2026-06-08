import type { Language, PortfolioContent } from '../content/portfolio'

type NavigationProps = {
  currentLanguage: Language
  nav: PortfolioContent['nav']
  onLanguageChange: (language: Language) => void
}

const languages: Language[] = ['en', 'ru']

export function Navigation({ currentLanguage, nav, onLanguageChange }: NavigationProps) {
  return (
    <nav className="nav" aria-label={nav.aria}>
      <div className="nav__controls">
        <div className="nav__links">
          {nav.links.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </div>
        <div className="language-toggle" aria-label={nav.languageLabel}>
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
