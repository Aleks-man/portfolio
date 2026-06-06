import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react'
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
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="eyebrow">
          <Sparkles size={16} aria-hidden="true" />
          {hero.eyebrow}
        </p>
        <h1>{hero.title}</h1>
        <p className="hero__lead">{hero.lead}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            {hero.primaryAction}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="button button--secondary" href="#contact">
            {hero.secondaryAction}
            <MessageCircle size={18} aria-hidden="true" />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero__panel"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
      >
        {hero.stats.map(([value, label]) => (
          <div className="stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
