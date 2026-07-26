import { useEffect, useId, useRef, useState, type AnimationEvent } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import type { Language, PortfolioContent } from '../content/portfolio'
import { localizePath, stripLanguagePrefix } from '../routing/localizedRoutes'

type NavigationProps = {
  currentLanguage: Language
  nav: PortfolioContent['nav']
  projects: PortfolioContent['projects']['items']
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

export function Navigation({ currentLanguage, nav, projects, onLanguageChange }: NavigationProps) {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuRendered, setIsMenuRendered] = useState(false)
  const [visibleIndicatorPath, setVisibleIndicatorPath] = useState<string | null>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuId = useId()
  const menuLabel = isMenuOpen
    ? currentLanguage === 'ru' ? 'Закрыть меню' : 'Close menu'
    : currentLanguage === 'ru' ? 'Открыть меню' : 'Open menu'
  const currentPath = stripLanguagePrefix(location.pathname).replace(/\/+$/, '') || '/'
  const currentPage = nav.links.find((link) => (
    link.href === '/'
      ? currentPath === '/'
      : currentPath === link.href || currentPath.startsWith(`${link.href}/`)
  ))
  const currentProjectSlug = currentPath.startsWith('/projects/')
    ? currentPath.slice('/projects/'.length).split('/')[0]
    : undefined
  const currentProject = currentProjectSlug
    ? projects.find((project) => project.slug === currentProjectSlug)
    : undefined
  const currentPageLabel = currentProject && currentPage
    ? `${currentPage.label} / ${currentProject.title}`
    : currentPage?.label

  useEffect(() => {
    if (currentProject) return

    const pageHeading = document.querySelector<HTMLElement>('main h1')
    if (!pageHeading || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const hasMovedAboveHeader = entry.boundingClientRect.top < 82
        setVisibleIndicatorPath(
          !entry.isIntersecting && hasMovedAboveHeader ? location.pathname : null,
        )
      },
      {
        rootMargin: '-82px 0px 0px',
        threshold: 0,
      },
    )

    observer.observe(pageHeading)
    return () => observer.disconnect()
  }, [currentProject, location.pathname])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target
      if (!(target instanceof Node)) return
      if (mobileMenuRef.current?.contains(target)) return
      if (menuButtonRef.current?.contains(target)) return

      setIsMenuOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown, true)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown, true)
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
        to={localizePath(link.href, currentLanguage)}
        onClick={closeMenu ? () => setIsMenuOpen(false) : undefined}
      >
        {link.label}
      </NavLink>
    ))

  return (
    <nav className="nav" aria-label={nav.aria}>
      <Link className="nav__brand" to={localizePath('/', currentLanguage)} aria-label="Manuylov Studio">
        <img
          className="nav__logo"
          src="/alex_manuylov_header_logo.svg"
          alt=""
          width="340"
          height="96"
        />
      </Link>

      {currentPageLabel && (
        <div
          className={`nav__page-indicator ${
            currentProject || visibleIndicatorPath === location.pathname ? 'is-visible' : ''
          }`}
          key={`${currentLanguage}-${currentPath}`}
          aria-hidden="true"
        >
          <span>{currentPageLabel}</span>
        </div>
      )}

      <div className="nav__desktop">
        <div className="nav__links">{renderLinks()}</div>
        <LanguageToggle
          currentLanguage={currentLanguage}
          label={nav.languageLabel}
          onLanguageChange={onLanguageChange}
        />
        <Link className="nav__contact" to={`${localizePath('/', currentLanguage)}#contact`}>{nav.contact}</Link>
      </div>

      <Link className="nav__quick-contact" to={`${localizePath('/', currentLanguage)}#contact`} aria-label={nav.contact}>
        <MessageCircle aria-hidden="true" />
        <span>{nav.contact}</span>
      </Link>

      <button
        ref={menuButtonRef}
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
            ref={mobileMenuRef}
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
            <Link className="nav__contact" to={`${localizePath('/', currentLanguage)}#contact`} onClick={() => setIsMenuOpen(false)}>{nav.contact}</Link>
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
