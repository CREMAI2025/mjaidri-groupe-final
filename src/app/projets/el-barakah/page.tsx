import { Metadata } from 'next'
import { parseElBarakahContent } from '@/lib/markdown'
import { BarakahHeroSection } from '@/components/sections/el-barakah/barakah-hero-section'
import { BarakahApartmentsSection } from '@/components/sections/el-barakah/barakah-apartments-section'
import { BarakahAmenitiesSection } from '@/components/sections/el-barakah/barakah-amenities-section'
import { BarakahLocationSection } from '@/components/sections/el-barakah/barakah-location-section'
import { BarakahImpactSection } from '@/components/sections/el-barakah/barakah-impact-section'
import { BarakahTestimonialsSection } from '@/components/sections/el-barakah/barakah-testimonials-section'
import { BarakahContactSection } from '@/components/sections/el-barakah/barakah-contact-section'

export const metadata: Metadata = {
  title: 'EL BARAKAH Guelmim | La Bénédiction Familiale - Premium Familial | Groupe Majaidri',
  description: 'EL BARAKAH, sanctuaire familial béni à Guelmim. Résidence d\'exception Groupe Majaidri : 80 foyers familiaux (Nid de l\'Amour, Cocon des Rires, Palais des Générations), palette vert émeraude/terre de sienne, jardins familiaux thématiques.',
  keywords: ['el barakah bénédiction éternelle', 'sanctuaire familial guelmim', 'résidence famille groupe majaidri', 'moderne saharien authentique', 'nid amour appartement', 'cocon rires familial', 'palais générations prestige'],
}

export default function ElBarakahPage() {
  const content = parseElBarakahContent();
  
  return (
    <>
      <BarakahHeroSection content={content} />
      <BarakahApartmentsSection content={content} />
      <BarakahAmenitiesSection content={content} />
      <BarakahLocationSection content={content} />
      <BarakahImpactSection content={content} />
      <BarakahTestimonialsSection content={content} />
      <BarakahContactSection content={content} />
    </>
  )
}