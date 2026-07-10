import type { Language, PortfolioContent } from '../content/portfolio'
import { NavLink } from 'react-router-dom'

type NavigationProps = {
  currentLanguage: Language
  nav: PortfolioContent['nav']
  onLanguageChange: (language: Language) => void
}

const languages: Language[] = ['en', 'ru']

export function Navigation({
  currentLanguage,
  nav,
  onLanguageChange,
}: NavigationProps) {
  return (
    <nav className="nav" aria-label={nav.aria}>
      <div className="nav__controls">
        <div className="nav__links">
          {nav.links.map((link) => (
            <NavLink
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              end={link.href === '/'}
              to={link.href}
              key={link.href}
            >
              {link.label}
            </NavLink>
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
