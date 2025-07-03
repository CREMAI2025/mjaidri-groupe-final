import { Metadata } from 'next'
import { ProjectsOverviewSection } from '@/components/sections/projects-overview-section'
import { ProjectsComparisonSection } from '@/components/sections/projects-comparison-section'
import { ProjectsProcessSection } from '@/components/sections/projects-process-section'

export const metadata: Metadata = {
  title: 'Nos Projets | Trois Univers d\'Exception',
  description: 'Découvrez SOLUNA (luxe contemporain), EL BARAKAH (harmonie familiale), CITTÀ VERDE (éco-luxe italien). Trois projets signature du Groupe Majaidri.',
  keywords: ['projets groupe majaidri', 'soluna casablanca', 'el barakah guelmim', 'città verde benslimane', 'immobilier luxe maroc'],
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsOverviewSection />
      <ProjectsComparisonSection />
      <ProjectsProcessSection />
    </>
  )
}