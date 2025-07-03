import { Metadata } from 'next'
import { parseActualitesContent } from '@/lib/markdown'
import { ActualitesHeroSection } from '@/components/sections/actualites/actualites-hero-section'
import { ActualitesArticlesSection } from '@/components/sections/actualites/actualites-articles-section'
import { ActualitesEventsSection } from '@/components/sections/actualites/actualites-events-section'
import { ActualitesPressSection } from '@/components/sections/actualites/actualites-press-section'
import { ActualitesNewsletterSection } from '@/components/sections/actualites/actualites-newsletter-section'

export const metadata: Metadata = {
  title: 'Actualités & Événements | News Immobilier Maroc | SOLUNA EL BARAKAH CITTÀ VERDE',
  description: 'Suivez toute l\'actualité du Groupe Majaidri : lancements de projets, événements immobiliers, innovations durables. News SOLUNA, EL BARAKAH, CITTÀ VERDE.',
  keywords: ['actualités groupe majaidri', 'news immobilier maroc', 'événements immobiliers', 'salon immobilier luxe', 'développement durable', 'soluna casablanca news', 'città verde benslimane'],
}

export default function ActualitesPage() {
  const content = parseActualitesContent();
  
  return (
    <>
      <ActualitesHeroSection content={content} />
      <ActualitesArticlesSection content={content} />
      <ActualitesEventsSection content={content} />
      <ActualitesPressSection content={content} />
      <ActualitesNewsletterSection />
    </>
  )
}