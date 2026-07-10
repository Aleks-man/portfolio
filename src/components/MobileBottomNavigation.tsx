import { NavLink } from 'react-router-dom'
import type { PortfolioContent } from '../content/portfolio'

type MobileBottomNavigationProps = {
  nav: PortfolioContent['nav']
}
export function MobileBottomNavigation({ nav }: MobileBottomNavigationProps) {
  return (
    <nav className="mobile-bottom-nav is-visible" aria-label={nav.aria}>
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
    </nav>
  )
}
