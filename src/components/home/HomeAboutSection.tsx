import { ArrowUpRight, CircleDot } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { PortfolioContent } from '../../content/portfolio'
import { localizePath } from '../../routing/localizedRoutes'
import { useCurrentLanguage } from '../../routing/useCurrentLanguage'

type HomeAboutSectionProps = {
  about: PortfolioContent['homeAbout']
}

export function HomeAboutSection({ about }: HomeAboutSectionProps) {
  const language = useCurrentLanguage()

  return (
    <section className="section home-about" aria-labelledby="home-about-title">
      <div className="home-about__content">
        <div className="home-about__availability">
          <CircleDot size={16} aria-hidden="true" />
          <span>{about.availability}</span>
        </div>
        <p className="section__kicker">{about.kicker}</p>
        <h2 id="home-about-title">{about.title}</h2>
        <p className="home-about__lead">{about.lead}</p>
        <p className="home-about__text">{about.text}</p>
        <Link className="text-link" to={localizePath('/about', language)}>
          {about.action}
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
