'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Play, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const heroSlides = [
  {
    id: 1,
    title: "L'Excellence Immobilière",
    subtitle: "Redéfinie",
    description: "Où Chaque Résidence Raconte une Histoire d'Exception",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cta: "Découvrir Nos Univers",
    theme: "luxury"
  },
  {
    id: 2,
    title: "SOLUNA",
    subtitle: "L'Art du Prestige",
    description: "Une symphonie architecturale où chaque détail révèle un raffinement absolu",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cta: "Explorer SOLUNA",
    theme: "soluna"
  },
  {
    id: 3,
    title: "EL BARAKAH",
    subtitle: "L'Harmonie Familiale",
    description: "Un écrin de bonheur familial où chaque espace respire la sérénité",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
    cta: "Découvrir EL BARAKAH",
    theme: "barakah"
  },
  {
    id: 4,
    title: "CITTÀ VERDE",
    subtitle: "L'Éco-Luxe Italien",
    description: "L'alliance parfaite entre élégance italienne et innovation écologique",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cta: "Vivre CITTÀ VERDE",
    theme: "verde"
  }
]

const stats = [
  { number: "27+", label: "Années d'Excellence", suffix: "" },
  { number: "3", label: "Univers d'Exception", suffix: "" },
  { number: "1000+", label: "Familles Satisfaites", suffix: "" },
  { number: "98%", label: "Satisfaction Client", suffix: "" }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const currentHero = heroSlides[currentSlide]

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative hero-height overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentHero.id}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${currentHero.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHero.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white"
              >
                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex items-center space-x-4 mb-6"
                >
                  <div className={`w-16 h-0.5 ${
                    currentHero.theme === 'soluna' ? 'bg-gradient-soluna' :
                    currentHero.theme === 'barakah' ? 'bg-gradient-barakah' :
                    currentHero.theme === 'verde' ? 'bg-gradient-verde' :
                    'bg-gradient-luxury'
                  }`} />
                  <span className="text-sm font-medium tracking-wider uppercase opacity-90">
                    Groupe Majaidri
                  </span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-accent font-bold mb-4 leading-tight"
                >
                  {currentHero.title}
                  <br />
                  <span className={`${
                    currentHero.theme === 'soluna' ? 'text-gradient-soluna' :
                    currentHero.theme === 'barakah' ? 'text-gradient-barakah' :
                    currentHero.theme === 'verde' ? 'text-gradient-verde' :
                    'text-gradient-luxury'
                  }`}>
                    {currentHero.subtitle}
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed opacity-90"
                >
                  {currentHero.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                >
                  <Button
                    variant={currentHero.theme as any}
                    size="xl"
                    className="group"
                  >
                    {currentHero.cta}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-white text-white hover:bg-white hover:text-mjaidri-dark"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Visite Virtuelle
                  </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                      className="text-center"
                    >
                      <div className="text-3xl md:text-4xl font-bold mb-2 text-gradient-luxury">
                        {stat.number}
                      </div>
                      <div className="text-sm opacity-80 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index)
                setIsPlaying(false)
                setTimeout(() => setIsPlaying(true), 3000)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={scrollToProjects}
        className="absolute bottom-8 right-8 z-20 text-white hover:text-mjaidri-secondary transition-colors group"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium opacity-80">Découvrir</span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:animate-none group-hover:translate-y-1 transition-transform" />
        </div>
      </motion.button>

      {/* Play/Pause Control */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-1/2 right-8 z-20 text-white/70 hover:text-white transition-colors"
      >
        {isPlaying ? (
          <div className="w-6 h-6 flex space-x-1">
            <div className="w-1 h-6 bg-current" />
            <div className="w-1 h-6 bg-current" />
          </div>
        ) : (
          <Play className="w-6 h-6" />
        )}
      </button>
    </section>
  )
}