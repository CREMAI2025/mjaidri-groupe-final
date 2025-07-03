import { Metadata } from 'next'
import { parseCittaVerdeContent } from '@/lib/markdown'
import { VerdeHeroSection } from '@/components/sections/citta-verde/verde-hero-section'
import { VerdePlotsSection } from '@/components/sections/citta-verde/verde-plots-section'
import { VerdeSustainabilitySection } from '@/components/sections/citta-verde/verde-sustainability-section'
import { VerdeInfrastructureSection } from '@/components/sections/citta-verde/verde-infrastructure-section'
import { VerdeLocationSection } from '@/components/sections/citta-verde/verde-location-section'
import { VerdeTestimonialsSection } from '@/components/sections/citta-verde/verde-testimonials-section'
import { VerdeContactSection } from '@/components/sections/citta-verde/verde-contact-section'

export const metadata: Metadata = {
  title: 'CITTÀ VERDE Benslimane | L\'Éden Contemporain - Éco-Luxe Italien | Groupe Majaidri',
  description: 'Découvrez CITTÀ VERDE, manifeste vivant de l\'éco-luxe à Benslimane. Résidence d\'avant-garde Groupe Majaidri : 45 parcelles d\'exception (Éden Intime, Sanctuaire Vert, Palais Écologique), palette vert émeraude/terre toscane.',
  keywords: ['città verde éden contemporain', 'manifeste vivant éco-luxe', 'innovation verte benslimane', 'résidence avant-garde groupe majaidri', 'éden intime terrain', 'sanctuaire vert panoramique', 'palais écologique excellence'],
}

export default function CittaVerdePage() {
  const content = parseCittaVerdeContent();
  
  return (
    <>
      <VerdeHeroSection content={content} />
      <VerdePlotsSection content={content} />
      <VerdeSustainabilitySection content={content} />
      <VerdeInfrastructureSection content={content} />
      <VerdeLocationSection content={content} />
      <VerdeTestimonialsSection content={content} />
      <VerdeContactSection content={content} />
    </>
  )
}