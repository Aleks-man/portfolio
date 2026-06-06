import type { PortfolioContent } from '../content/portfolio'

type PageFooterProps = {
  footer: PortfolioContent['footer']
}

export function PageFooter({ footer }: PageFooterProps) {
  return (
    <footer className="footer">
      <span>{footer.title}</span>
      <a href="#top">{footer.top}</a>
    </footer>
  )
}
