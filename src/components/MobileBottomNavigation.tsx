import { useEffect, useState } from 'react'
import type { PortfolioContent } from '../content/portfolio'

type MobileBottomNavigationProps = {
  activeSection: string
  nav: PortfolioContent['nav']
}

const VISIBLE_SCROLL_OFFSET = 24

export function MobileBottomNavigation({ activeSection, nav }: MobileBottomNavigationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      setIsVisible(scrollTop > VISIBLE_SCROLL_OFFSET)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`mobile-bottom-nav${isVisible ? ' is-visible' : ''}`}
      aria-label={nav.aria}
    >
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
    </nav>
  )
}
