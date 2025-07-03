import { EnhancedHeroSection } from '@/components/sections/enhanced-hero-section'
import { ProjectsOverviewSection } from '@/components/sections/projects-overview-section'
import { StatsSection } from '@/components/sections/stats-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { NewsSection } from '@/components/sections/news-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function HomePage() {
  return (
    <>
      <EnhancedHeroSection />
      <ProjectsOverviewSection />
      <StatsSection />
      <TestimonialsSection />
      <NewsSection />
      <ContactSection />
    </>
  )
}