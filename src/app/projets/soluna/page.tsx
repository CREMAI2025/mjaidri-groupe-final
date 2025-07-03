import { Metadata } from 'next'
import { SolunaHeroSection } from '@/components/sections/soluna/soluna-hero-section'
import { SolunaApartmentsSection } from '@/components/sections/soluna/soluna-apartments-section'
import { SolunaAmenitiesSection } from '@/components/sections/soluna/soluna-amenities-section'
import { SolunaLocationSection } from '@/components/sections/soluna/soluna-location-section'
import { SolunaTestimonialsSection } from '@/components/sections/soluna/soluna-testimonials-section'
import { SolunaContactSection } from '@/components/sections/soluna/soluna-contact-section'

export const metadata: Metadata = {
  title: 'SOLUNA Casablanca | L\'Harmonie Céleste - Luxe Contemporain | Groupe Majaidri',
  description: 'SOLUNA, symphonie architecturale en terre de lumière à Casablanca. 120 appartements d\'exception (Cocon Solaire, Harmonie Lunaire, Palais Stellaire), palette or/argent, jardins d\'Éden, wellness premium.',
  keywords: ['soluna casablanca harmonie céleste', 'luxe contemporain casablanca', 'cocon solaire appartement', 'harmonie lunaire familial', 'palais stellaire prestige', 'jardins éden casablanca', 'wellness premium maroc'],
}

export default function SolunaPage() {
  return (
    <>
      <SolunaHeroSection />
      <SolunaApartmentsSection />
      <SolunaAmenitiesSection />
      <SolunaLocationSection />
      <SolunaTestimonialsSection />
      <SolunaContactSection />
    </>
  )
}