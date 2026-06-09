import { Mail, Send } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
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
        <a className="button button--primary" href={contact.emailHref}>
          {contact.email}
          <Mail size={18} aria-hidden="true" />
        </a>
        <a
          className="button button--secondary"
          href={contact.telegramHref}
          target="_blank"
          rel="noreferrer"
        >
          {contact.telegram}
          <Send size={18} aria-hidden="true" />
        </a>
        <a
          className="button button--secondary"
          href={contact.githubHref}
          target="_blank"
          rel="noreferrer"
        >
          {contact.github}
          <SiGithub size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
