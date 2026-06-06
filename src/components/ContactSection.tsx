import { Code2, Mail, Send } from 'lucide-react'
import type { PortfolioContent } from '../content/portfolio'

type ContactSectionProps = {
  contact: PortfolioContent['contact']
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section className="contact" id="contact">
      <div>
        <p className="section__kicker">{contact.kicker}</p>
        <h2>{contact.title}</h2>
        <p>{contact.text}</p>
      </div>
      <div className="contact__actions">
        <a className="button button--primary" href="mailto:your.email@example.com">
          {contact.email}
          <Mail size={18} aria-hidden="true" />
        </a>
        <a className="button button--secondary" href="https://t.me/" target="_blank">
          {contact.telegram}
          <Send size={18} aria-hidden="true" />
        </a>
        <a className="button button--secondary" href="https://github.com/" target="_blank">
          {contact.github}
          <Code2 size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
