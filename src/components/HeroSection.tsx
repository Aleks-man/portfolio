import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HeroVisual } from './HeroVisual'
import type { PortfolioContent } from '../content/portfolio'

type HeroSectionProps = {
  hero: PortfolioContent['hero']
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <div className="hero__content">
      <motion.div
        className="hero__copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <p className="hero__eyebrow">
          <span aria-hidden="true" />
          {hero.eyebrow}
        </p>
        <h1>{hero.title}</h1>
        <p className="hero__lead">{hero.lead}</p>
        <div className="hero__actions">
          <Link className="button button--primary" to="/projects">
            {hero.primaryAction}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <Link className="button button--secondary" to="/about#contact">
            {hero.secondaryAction}
            <MessageCircle size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="hero__highlights" aria-label={hero.highlightsLabel}>
          {hero.highlights.map((highlight) => (
            <div className="hero__highlight" key={highlight.label}>
              <strong>{highlight.value}</strong>
              <span>{highlight.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="hero__visual-wrap"
        initial={{ opacity: 0, y: 24, rotate: 1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
      >
        <HeroVisual visual={hero.visual} />
      </motion.div>
    </div>
  )
}
