import { Mail, Phone } from 'lucide-react'
import { SiTelegram, SiViber, SiWhatsapp } from 'react-icons/si'
import type { PortfolioContent } from '../content/portfolio'

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
      </div>

      <div className="contact__panel">
        <div className="contact__group">
          <p>{contact.phonesLabel}</p>
          <div className="contact__phones">
            <a href={contact.phoneHref}><Phone aria-hidden="true" />{contact.phone}</a>
            <a href={contact.messengerPhoneHref}><Phone aria-hidden="true" />{contact.messengerPhone}</a>
          </div>
        </div>
        <div className="contact__group">
          <p>{contact.messengersLabel}</p>
          <div className="contact__messengers">
            <a href={contact.telegramHref} target="_blank" rel="noreferrer" aria-label={contact.telegram}><SiTelegram aria-hidden="true" /></a>
            <a href={contact.whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp"><SiWhatsapp aria-hidden="true" /></a>
            <a href={contact.viberHref} aria-label="Viber"><SiViber aria-hidden="true" /></a>
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
