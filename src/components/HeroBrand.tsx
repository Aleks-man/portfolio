import { Sparkles } from 'lucide-react'
import type { PortfolioContent } from '../content/portfolio'

type HeroBrandProps = {
  brand: PortfolioContent['brand']
}

export function HeroBrand({ brand }: HeroBrandProps) {
  return (
    <div className="hero-brand">
      <div className="hero-brand__lockup">
        <img className="hero-brand__logo" src="/alex_manuylov_full_logo.svg" alt={brand.logoAlt} />
        <span className="hero-brand__role">
          <Sparkles size={16} aria-hidden="true" />
          {brand.role}
        </span>
      </div>
    </div>
  )
}
