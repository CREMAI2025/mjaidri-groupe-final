import { Metadata } from 'next'
import { parseContactContent } from '@/lib/markdown'
import { ContactHeroSection } from '@/components/sections/contact/contact-hero-section'
import { ContactInfoSection } from '@/components/sections/contact/contact-info-section'
import { ContactOfficesSection } from '@/components/sections/contact/contact-offices-section'
import { ContactFormSection } from '@/components/sections/contact/contact-form-section'
import { ContactMapSection } from '@/components/sections/contact/contact-map-section'

export const metadata: Metadata = {
  title: 'Contact Groupe Majaidri | Bureaux Vente SOLUNA EL BARAKAH CITTÀ VERDE | Rendez-vous Immobilier',
  description: 'Contactez Groupe Majaidri : bureaux de vente SOLUNA Casablanca, EL BARAKAH Guelmim, CITTÀ VERDE Benslimane. Prise de rendez-vous, conseil personnalisé, accompagnement complet.',
  keywords: ['contact groupe majaidri', 'bureau vente soluna', 'bureau vente el barakah', 'bureau vente citta verde', 'rendez-vous immobilier maroc', 'conseil immobilier casablanca'],
}

export default function ContactPage() {
  const content = parseContactContent();
  
  return (
    <>
      <ContactHeroSection content={content} />
      <ContactInfoSection content={content} />
      <ContactOfficesSection content={content} />
      <ContactFormSection content={content} />
      <ContactMapSection content={content} />
    </>
  )
}