'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Play, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Particles, FloatingElements } from '@/components/ui/particles'
import { RevealText, TypingText } from '@/components/ui/reveal-text'

const heroSlides = [
  {
    id: 1,
    title: "L'Excellence Immobilière",
    subtitle: "Redéfinie",
    description: "Où Chaque Résidence Raconte une Histoire d'Exception",
    longDescription: "Depuis 1997, Groupe Majaidri sculpte l'avenir résidentiel du Maroc avec la passion de l'artisan et la vision du pionnier. Héritiers d'un savoir-faire ancestral, nous créons des univers d'exception où l'âme marocaine épouse l'innovation contemporaine.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cta: "Découvrir Nos Univers d'Exception",
    theme: "luxury",
    signature: "Gardiens de l'Art Immobilier Marocain"
  },
  {
    id: 2,
    title: "SOLUNA",
    subtitle: "L'Harmonie Céleste",
    description: "Quand le Soleil Épouse la Lune, Naît l'Harmonie Parfaite",
    longDescription: "Dans l'écrin prestigieux de Mohammedia, SOLUNA révèle l'art de vivre contemporain marocain. 120 résidences d'exception où l'architecture épurée dialogue avec les jardins suspendus, où chaque appartement devient un sanctuaire de sérénité.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cta: "Explorer l'Univers SOLUNA",
    theme: "soluna",
    signature: "Où l'Excellence Rencontre l'Authenticité"
  },
  {
    id: 3,
    title: "EL BARAKAH",
    subtitle: "La Bénédiction Familiale",
    description: "Là où les Générations se Rencontrent, Où l'Amour Grandit",
    longDescription: "EL BARAKAH célèbre l'art de vivre en famille dans un écrin de verdure au cœur de Casablanca. 200 résidences pensées pour l'épanouissement de chaque génération, où tradition et modernité s'entremêlent dans une harmonie parfaite.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
    cta: "Découvrir EL BARAKAH",
    theme: "barakah",
    signature: "L'Art de Vivre Familial Saharien"
  },
  {
    id: 4,
    title: "CITTÀ VERDE",
    subtitle: "L'Éden Contemporain",
    description: "Où l'Innovation Verte Épouse l'Élégance Italienne",
    longDescription: "CITTÀ VERDE réinvente l'art de vivre durable à Benslimane. 45 parcelles d'exception où l'éco-luxe italien rencontre l'innovation marocaine, créant un manifeste vivant de l'habitat de demain.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cta: "Vivre CITTÀ VERDE",
    theme: "verde",
    signature: "L'Art de Vivre de Demain, Aujourd'hui"
  }
]

const stats = [
  { number: "27+", label: "Années d'Excellence", suffix: "", icon: "🏆" },
  { number: "3", label: "Univers d'Exception", suffix: "", icon: "🌟" },
  { number: "15000+", label: "Familles Accompagnées", suffix: "", icon: "👨‍👩‍👧‍👦" },
  { number: "98%", label: "Satisfaction Client", suffix: "", icon: "💎" }
]

export function EnhancedHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 8000) // Increased duration for better reading

    return () => clearInterval(interval)
  }, [isPlaying])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const currentHero = heroSlides[currentSlide]

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative hero-height overflow-hidden">
      {/* Enhanced Background with Parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentHero.id}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Background Image with Parallax */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${currentHero.image})`,
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) scale(1.1)`
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
          
          {/* Enhanced Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          
          {/* Theme-specific overlay */}
          <div className={`absolute inset-0 ${
            currentHero.theme === 'soluna' ? 'bg-gradient-to-br from-soluna-primary/20 to-transparent' :
            currentHero.theme === 'barakah' ? 'bg-gradient-to-br from-barakah-primary/20 to-transparent' :
            currentHero.theme === 'verde' ? 'bg-gradient-to-br from-verde-primary/20 to-transparent' :
            'bg-gradient-to-br from-mjaidri-secondary/20 to-transparent'
          }`} />
        </motion.div>
      </AnimatePresence>

      {/* Floating Particles */}
      <Particles 
        count={30}
        colors={
          currentHero.theme === 'soluna' ? ['#D4AF37', '#FFD700', '#C0C0C0'] :
          currentHero.theme === 'barakah' ? ['#50C878', '#B8860B', '#F5F5DC'] :
          currentHero.theme === 'verde' ? ['#9CAF88', '#E2725B', '#FAF0E6'] :
          ['#D4AF37', '#FFD700', '#FFA500']
        }
        className="opacity-30"
      />

      {/* Floating Geometric Elements */}
      <FloatingElements />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container">
          <div className="max-w-5xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHero.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="text-white"
              >
                {/* Signature Line */}
                <RevealText delay={0.2} direction="left">
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div 
                      className={`w-20 h-0.5 ${
                        currentHero.theme === 'soluna' ? 'bg-gradient-soluna' :
                        currentHero.theme === 'barakah' ? 'bg-gradient-barakah' :
                        currentHero.theme === 'verde' ? 'bg-gradient-verde' :
                        'bg-gradient-luxury'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: 80 }}
                      transition={{ delay: 0.5, duration: 1 }}
                    />
                    <motion.span 
                      className="text-sm font-medium tracking-wider uppercase opacity-90"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 0.9, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                    >
                      <Sparkles className="inline w-4 h-4 mr-2" />
                      {currentHero.signature}
                    </motion.span>
                  </div>
                </RevealText>

                {/* Main Title with Enhanced Typography */}
                <RevealText delay={0.4}>
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-accent font-bold mb-6 leading-tight">
                    <TypingText 
                      text={currentHero.title}
                      delay={0.6}
                      speed={0.08}
                      className="block"
                    />
                    <br />
                    <motion.span 
                      className={`block ${
                        currentHero.theme === 'soluna' ? 'text-gradient-soluna' :
                        currentHero.theme === 'barakah' ? 'text-gradient-barakah' :
                        currentHero.theme === 'verde' ? 'text-gradient-verde' :
                        'text-gradient-luxury'
                      }`}
                      initial={{ opacity: 0, y: 50, rotateX: -15 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                    >
                      {currentHero.subtitle}
                    </motion.span>
                  </h1>
                </RevealText>

                {/* Poetic Description */}
                <RevealText delay={0.8}>
                  <motion.p
                    className="text-2xl md:text-3xl mb-4 max-w-3xl leading-relaxed opacity-90 font-light italic"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 0.9, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                  >
                    "{currentHero.description}"
                  </motion.p>
                </RevealText>

                {/* Long Description */}
                <RevealText delay={1.0}>
                  <motion.p
                    className="text-lg md:text-xl mb-10 max-w-4xl leading-relaxed opacity-80"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                  >
                    {currentHero.longDescription}
                  </motion.p>
                </RevealText>

                {/* Enhanced CTA Buttons */}
                <RevealText delay={1.2}>
                  <div className="flex flex-col sm:flex-row gap-6 mb-16">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Button
                        variant={currentHero.theme as any}
                        size="xl"
                        className="group relative overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10 flex items-center">
                          {currentHero.cta}
                          <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                      </Button>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Button
                        variant="outline"
                        size="xl"
                        className="border-white/50 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm group"
                      >
                        <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                        Visite Virtuelle 360°
                      </Button>
                    </motion.div>
                  </div>
                </RevealText>

                {/* Enhanced Stats with Icons */}
                <RevealText delay={1.4}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ 
                          delay: 1.8 + index * 0.15, 
                          duration: 0.8,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                        className="text-center group cursor-pointer"
                      >
                        <motion.div 
                          className="text-4xl mb-2"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: index * 0.5 
                          }}
                        >
                          {stat.icon}
                        </motion.div>
                        <div className="text-4xl md:text-5xl font-bold mb-2 text-gradient-luxury group-hover:scale-110 transition-transform">
                          {stat.number}
                        </div>
                        <div className="text-sm opacity-80 font-medium group-hover:opacity-100 transition-opacity">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </RevealText>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="flex space-x-4">
          {heroSlides.map((slide, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentSlide(index)
                setIsPlaying(false)
                setTimeout(() => setIsPlaying(true), 5000)
              }}
              className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? 'w-12 h-4 bg-white'
                  : 'w-4 h-4 bg-white/40 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentSlide && (
                <motion.div
                  className={`absolute inset-0 ${
                    currentHero.theme === 'soluna' ? 'bg-gradient-soluna' :
                    currentHero.theme === 'barakah' ? 'bg-gradient-barakah' :
                    currentHero.theme === 'verde' ? 'bg-gradient-verde' :
                    'bg-gradient-luxury'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 8, ease: "linear" }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        onClick={scrollToProjects}
        className="absolute bottom-12 right-12 z-20 text-white hover:text-mjaidri-secondary transition-colors group"
        whileHover={{ y: -5 }}
      >
        <div className="flex flex-col items-center space-y-3">
          <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            Découvrir
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
          <motion.div
            className="w-0.5 h-16 bg-gradient-to-b from-white to-transparent"
            initial={{ height: 0 }}
            animate={{ height: 64 }}
            transition={{ delay: 2.5, duration: 1 }}
          />
        </div>
      </motion.button>

      {/* Play/Pause Control with Enhanced Design */}
      <motion.button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-1/2 right-8 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.4, duration: 0.8 }}
      >
        {isPlaying ? (
          <div className="flex space-x-1">
            <div className="w-1.5 h-4 bg-current rounded-full" />
            <div className="w-1.5 h-4 bg-current rounded-full" />
          </div>
        ) : (
          <Play className="w-5 h-5 ml-0.5" />
        )}
      </motion.button>
    </section>
  )
}