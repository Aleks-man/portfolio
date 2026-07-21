import { Mail, Phone, ShieldCheck } from 'lucide-react'
import type { PortfolioContent } from '../content/portfolio'
import { TelegramIcon, WhatsAppIcon } from './icons/MessengerIcons'

type ContactSectionProps = {
  contact: PortfolioContent['contact']
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section className="contact" id="contact">
      <div className="contact__intro">
        <p className="section__kicker">{contact.kicker}</p>
        <h2>{contact.title}</h2>
        <p>{contact.text}</p>
        <div className="contact__terms">
          <ShieldCheck aria-hidden="true" />
          <span>{contact.terms}</span>
        </div>
      </div>

      <div className="contact__panel">
        <div className="contact__group">
          <p>{contact.phonesLabel}</p>
          <div className="contact__phones">
            <a href={contact.phoneHref}><Phone aria-hidden="true" />{contact.phone}</a>
          </div>
        </div>
        <div className="contact__group">
          <p>{contact.messengersLabel}</p>
          <div className="contact__messengers">
            <a className="contact__messenger-labeled" href={contact.telegramHref} target="_blank" rel="noreferrer"><TelegramIcon /><span>{contact.telegram}</span></a>
            <a className="contact__messenger-labeled" href={contact.whatsappHref} target="_blank" rel="noreferrer"><WhatsAppIcon /><span>WhatsApp</span></a>
          </div>
        </div>
        <div className="contact__group">
          <p>{contact.email}</p>
          <a className="contact__email" href={contact.emailHref}><Mail aria-hidden="true" />{contact.emailAddress}</a>
        </div>
      </div>
    </section>
  )
}
