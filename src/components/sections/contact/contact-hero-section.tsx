'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RevealText } from '@/components/ui/reveal-text'
import { ContactContent } from '@/lib/markdown'

interface ContactHeroSectionProps {
  content: ContactContent;
}

export function ContactHeroSection({ content }: ContactHeroSectionProps) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-mjaidri-dark">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mjaidri-dark/95 via-mjaidri-dark/80 to-mjaidri-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-mjaidri-dark via-mjaidri-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[70vh] flex items-center pt-20">
        <div className="container">
          <div className="max-w-3xl">
            {/* Section Label */}
            <RevealText delay={0.2}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-0.5 bg-gradient-luxury" />
                <span className="text-sm font-medium tracking-wider uppercase text-white opacity-90">
                  Contact
                </span>
              </div>
            </RevealText>

            {/* Main Title */}
            <RevealText delay={0.4}>
              <h1 className="text-5xl md:text-7xl font-accent font-bold mb-6 leading-tight text-white">
                {content.heroTitle}
              </h1>
            </RevealText>

            {/* Subtitle */}
            <RevealText delay={0.6}>
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-white opacity-90">
                {content.heroSubtitle}
              </h2>
            </RevealText>

            {/* Description */}
            <RevealText delay={0.8}>
              <p className="text-lg mb-8 leading-relaxed text-white/80 max-w-2xl">
                {content.heroDescription}
              </p>
            </RevealText>

            {/* CTA Buttons */}
            <RevealText delay={1.0}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="luxury" size="xl" className="group">
                  Prendre Rendez-vous
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  className="border-white/50 text-white hover:bg-white/10"
                >
                  Appeler Maintenant
                </Button>
              </div>
            </RevealText>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}