'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Calendar, Users, Star } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Particles } from '@/components/ui/particles'
import { RevealText, TypingText } from '@/components/ui/reveal-text'

export function SolunaHeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-soluna-secondary via-soluna-secondary/90 to-soluna-primary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-soluna-secondary/95 via-soluna-secondary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Golden Particles */}
      <Particles 
        count={40}
        colors={['#D4AF37', '#FFD700', '#C0C0C0']}
        className="opacity-40"
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="container">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Retour à l'accueil</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Project Badge */}
              <RevealText delay={0.2}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-20 h-0.5 bg-gradient-soluna" />
                  <span className="text-sm font-medium tracking-wider uppercase opacity-90">
                    Projet Signature
                  </span>
                </div>
              </RevealText>

              {/* Main Title */}
              <RevealText delay={0.4}>
                <h1 className="text-6xl md:text-8xl font-accent font-bold mb-6 leading-tight">
                  <TypingText 
                    text="SOLUNA"
                    delay={0.6}
                    speed={0.15}
                    className="block text-gradient-soluna"
                  />
                </h1>
              </RevealText>

              {/* Subtitle */}
              <RevealText delay={0.8}>
                <h2 className="text-3xl md:text-4xl font-light mb-6 opacity-90">
                  L'Harmonie Céleste
                </h2>
              </RevealText>

              {/* Poetic Description */}
              <RevealText delay={1.0}>
                <p className="text-xl md:text-2xl mb-6 leading-relaxed opacity-90 italic">
                  "Quand le Soleil Épouse la Lune, Naît l'Harmonie Parfaite"
                </p>
              </RevealText>

              {/* Long Description */}
              <RevealText delay={1.2}>
                <p className="text-lg mb-8 leading-relaxed opacity-80 max-w-2xl">
                  Dans l'écrin prestigieux de Mohammedia, SOLUNA révèle l'art de vivre 
                  contemporain marocain. 120 résidences d'exception où l'architecture épurée 
                  dialogue avec les jardins suspendus, où chaque appartement devient un 
                  sanctuaire de sérénité.
                </p>
              </RevealText>

              {/* Key Stats */}
              <RevealText delay={1.4}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient-soluna mb-1">120</div>
                    <div className="text-sm opacity-80">Résidences</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient-soluna mb-1">2ha</div>
                    <div className="text-sm opacity-80">Jardins</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient-soluna mb-1">T4</div>
                    <div className="text-sm opacity-80">2025</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient-soluna mb-1">24/7</div>
                    <div className="text-sm opacity-80">Conciergerie</div>
                  </div>
                </div>
              </RevealText>

              {/* CTA Buttons */}
              <RevealText delay={1.6}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="soluna" size="xl" className="group">
                    Découvrir les Appartements
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="xl"
                    className="border-white/50 text-white hover:bg-white/10"
                  >
                    Visite Virtuelle 360°
                  </Button>
                </div>
              </RevealText>
            </div>

            {/* Right Content - Project Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                {/* Location */}
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-5 h-5 text-soluna-primary" />
                  <div>
                    <div className="font-semibold text-white">Casablanca</div>
                    <div className="text-sm text-white/70">Proximité Bouskoura & California</div>
                  </div>
                </div>

                {/* Delivery */}
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="w-5 h-5 text-soluna-primary" />
                  <div>
                    <div className="font-semibold text-white">Livraison T4 2025</div>
                    <div className="text-sm text-white/70">Clés en main</div>
                  </div>
                </div>

                {/* Units */}
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="w-5 h-5 text-soluna-primary" />
                  <div>
                    <div className="font-semibold text-white">120 Appartements</div>
                    <div className="text-sm text-white/70">Du 2P au Penthouse</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-3 mb-8">
                  <Star className="w-5 h-5 text-soluna-primary" />
                  <div>
                    <div className="font-semibold text-white">Excellence Garantie</div>
                    <div className="text-sm text-white/70">Finitions haut de gamme</div>
                  </div>
                </div>

                {/* Price Range */}
                <div className="bg-gradient-soluna rounded-2xl p-6 text-center">
                  <div className="text-sm text-white/90 mb-2">À partir de</div>
                  <div className="text-3xl font-bold text-white mb-2">850K Dhs</div>
                  <div className="text-sm text-white/90">Facilités de paiement disponibles</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Découvrir</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}