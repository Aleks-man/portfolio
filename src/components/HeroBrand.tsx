import { Sparkles } from 'lucide-react'

export function HeroBrand() {
  return (
    <div className="hero-brand">
      <div className="hero-brand__lockup">
        <img className="hero-brand__logo" src="/alex_manuylov_full_logo.svg" alt="Alex Manuylov" />
        <span className="hero-brand__role">
          <Sparkles size={16} aria-hidden="true" />
          Fullstack Developer
        </span>
      </div>
    </div>
  )
}
