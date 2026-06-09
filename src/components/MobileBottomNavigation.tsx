import { useEffect, useState } from 'react'
import type { PortfolioContent } from '../content/portfolio'

type MobileBottomNavigationProps = {
  nav: PortfolioContent['nav']
}

export function MobileBottomNavigation({ nav }: MobileBottomNavigationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      setIsVisible(scrollTop > 24)
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
