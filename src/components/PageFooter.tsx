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
        <span>{footer.title}</span>
      </div>
    </footer>
  )
}
