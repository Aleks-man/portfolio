import type { PortfolioContent } from '../content/portfolio'
import { Link } from 'react-router-dom'

type PageFooterProps = {
  footer: PortfolioContent['footer']
}

export function PageFooter({ footer }: PageFooterProps) {
  return (
    <footer className="footer">
      <span>{footer.title}</span>
      <Link to="/#top">{footer.top}</Link>
    </footer>
  )
}
