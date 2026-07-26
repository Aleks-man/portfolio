import type { PortfolioContent } from '../content/portfolio'
import { ContactSection } from './ContactSection'

type PageFooterProps = {
  footer: PortfolioContent['footer']
  contact: PortfolioContent['contact']
}

export function PageFooter({ footer, contact }: PageFooterProps) {
  return (
    <footer className="site-footer">
      <ContactSection contact={contact} />
      <div className="footer">
        <img
          className="footer__logo-mark"
          src="/alex_manuylov_logo_mark.svg"
          alt=""
          width="80"
          height="80"
        />
        <div className="footer__copy">
          <span>{footer.title}</span>
          <small>{footer.tagline}</small>
        </div>
      </div>
    </footer>
  )
}
