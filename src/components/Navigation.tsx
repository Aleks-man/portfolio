import { useEffect, useId, useState, type AnimationEvent } from 'react'
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
  const [isMenuRendered, setIsMenuRendered] = useState(false)
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

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      return
    }

    setIsMenuRendered(true)
    setIsMenuOpen(true)
  }

  const handleMenuAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (!isMenuOpen && event.animationName === 'nav-menu-exit') {
      setIsMenuRendered(false)
    }
  }

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
        <Link className="nav__contact" to="/#contact">{nav.contact}</Link>
      </div>

      <button
        className="nav__menu-button"
        type="button"
        aria-controls={menuId}
        aria-expanded={isMenuOpen}
        aria-label={menuLabel}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {isMenuRendered && (
        <>
          <div
            className={`nav__mobile ${isMenuOpen ? 'is-open' : 'is-closing'}`}
            id={menuId}
            aria-hidden={!isMenuOpen}
            inert={!isMenuOpen}
            onAnimationEnd={handleMenuAnimationEnd}
          >
            <div className="nav__mobile-links">{renderLinks(true)}</div>
            <LanguageToggle
              currentLanguage={currentLanguage}
              label={nav.languageLabel}
              onLanguageChange={onLanguageChange}
            />
            <Link className="nav__contact" to="/#contact" onClick={() => setIsMenuOpen(false)}>{nav.contact}</Link>
          </div>
          <button
            className={`nav__backdrop ${isMenuOpen ? 'is-open' : 'is-closing'}`}
            type="button"
            aria-label={menuLabel}
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={() => setIsMenuOpen(false)}
          />
        </>
      )}
    </nav>
  )
}
