import { useEffect, useState } from 'react'
import type { PortfolioContent } from '../content/portfolio'

type MobileBottomNavigationProps = {
  nav: PortfolioContent['nav']
}

const VISIBLE_SCROLL_OFFSET = 24

export function MobileBottomNavigation({ nav }: MobileBottomNavigationProps) {
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
        <a href={link.href} key={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  )
}
