'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RevealText } from '@/components/ui/reveal-text'
import { ActualitesContent } from '@/lib/markdown'

interface ActualitesHeroSectionProps {
  content: ActualitesContent;
}

export function ActualitesHeroSection({ content }: ActualitesHeroSectionProps) {
  // Get featured article
  const featuredArticle = content.articles.find(article => article.featured) || content.articles[0];

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-mjaidri-dark">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${featuredArticle.image})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mjaidri-dark/95 via-mjaidri-dark/80 to-mjaidri-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-mjaidri-dark via-mjaidri-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[80vh] flex items-center pt-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Section Label */}
              <RevealText delay={0.2}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-20 h-0.5 bg-gradient-luxury" />
                  <span className="text-sm font-medium tracking-wider uppercase opacity-90">
                    Actualités & Événements
                  </span>
                </div>
              </RevealText>

              {/* Main Title */}
              <RevealText delay={0.4}>
                <h1 className="text-5xl md:text-7xl font-accent font-bold mb-6 leading-tight">
                  {content.heroTitle}
                </h1>
              </RevealText>

              {/* Subtitle */}
              <RevealText delay={0.6}>
                <h2 className="text-2xl md:text-3xl font-light mb-6 opacity-90">
                  {content.heroSubtitle}
                </h2>
              </RevealText>

              {/* Description */}
              <RevealText delay={0.8}>
                <p className="text-lg mb-8 leading-relaxed opacity-80 max-w-2xl">
                  {content.heroDescription}
                </p>
              </RevealText>

              {/* CTA Buttons */}
              <RevealText delay={1.0}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="luxury" size="xl" className="group">
                    Dernières Actualités
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="xl"
                    className="border-white/50 text-white hover:bg-white/10"
                  >
                    Événements à Venir
                  </Button>
                </div>
              </RevealText>
            </div>

            {/* Right Content - Featured Article */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-mjaidri-secondary text-white text-xs font-medium rounded-full">
                    À la Une
                  </span>
                  <div className="flex items-center space-x-2 text-white/70 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/70 text-sm">
                    <Tag className="w-4 h-4" />
                    <span>{featuredArticle.category}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {featuredArticle.title}
                </h3>

                <p className="text-white/80 mb-6 line-clamp-3">
                  {featuredArticle.excerpt}
                </p>

                <Button variant="luxury" size="lg" asChild>
                  <a href={`/actualites/${featuredArticle.slug}`}>
                    Lire l'article complet
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}