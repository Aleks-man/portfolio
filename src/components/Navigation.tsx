import { useEffect, useId, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import type { Language, PortfolioContent } from '../content/portfolio'

type NavigationProps = {
  currentLanguage: Language
  nav: PortfolioContent['nav']
  onLanguageChange: (language: Language) => void
}

type LanguageToggleProps = Pick<NavigationProps, 'currentLanguage' | 'onLanguageChange'> & {
  label: string
}

const languages: Language[] = ['ru', 'en']

function LanguageToggle({ currentLanguage, label, onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="language-toggle" aria-label={label} role="group">
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
  )
}

export function Navigation({ currentLanguage, nav, onLanguageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()
  const menuLabel = isMenuOpen
    ? currentLanguage === 'ru' ? 'Закрыть меню' : 'Close menu'
    : currentLanguage === 'ru' ? 'Открыть меню' : 'Open menu'

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const renderLinks = (closeMenu = false) =>
    nav.links.map((link) => (
      <NavLink
        className={({ isActive }) => (isActive ? 'is-active' : undefined)}
        end={link.href === '/'}
        key={link.href}
        to={link.href}
        onClick={closeMenu ? () => setIsMenuOpen(false) : undefined}
      >
        {link.label}
      </NavLink>
    ))

  return (
    <nav className="nav" aria-label={nav.aria}>
      <Link className="nav__brand" to="/" aria-label="Manuylov Studio">
        <img
          className="nav__logo"
          src="/alex_manuylov_header_logo.svg"
          alt=""
          width="340"
          height="96"
        />
      </Link>

      <div className="nav__desktop">
        <div className="nav__links">{renderLinks()}</div>
        <LanguageToggle
          currentLanguage={currentLanguage}
          label={nav.languageLabel}
          onLanguageChange={onLanguageChange}
        />
      </div>

      <button
        className="nav__menu-button"
        type="button"
        aria-controls={menuId}
        aria-expanded={isMenuOpen}
        aria-label={menuLabel}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {isMenuOpen && (
        <>
          <div className="nav__mobile" id={menuId}>
            <div className="nav__mobile-links">{renderLinks(true)}</div>
            <LanguageToggle
              currentLanguage={currentLanguage}
              label={nav.languageLabel}
              onLanguageChange={onLanguageChange}
            />
          </div>
          <button
            className="nav__backdrop"
            type="button"
            aria-label={menuLabel}
            onClick={() => setIsMenuOpen(false)}
          />
        </>
      )}
    </nav>
  )
}
