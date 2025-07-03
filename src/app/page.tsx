import { HeroSection } from '@/components/sections/hero-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { StatsSection } from '@/components/sections/stats-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { NewsSection } from '@/components/sections/news-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <StatsSection />
      <TestimonialsSection />
      <NewsSection />
      <ContactSection />
    </>
  )
}