'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Maximize, Eye, Heart, ArrowRight, Home, Building } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CittaVerdeContent } from '@/lib/markdown'

interface VerdePlotsSectionProps {
  content: CittaVerdeContent;
}

export function VerdePlotsSection({ content }: VerdePlotsSectionProps) {
  const [selectedPlot, setSelectedPlot] = useState(content.plots.types[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (plotId: string) => {
    setFavorites(prev => 
      prev.includes(plotId) 
        ? prev.filter(id => id !== plotId)
        : [...prev, plotId]
    )
  }

  return (
    <section className="section-padding bg-gradient-to-br from-verde-accent to-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-0.5 bg-gradient-verde" />
            <span className="text-sm font-medium tracking-wider uppercase text-verde-primary">
              Nos Terrains
            </span>
            <div className="w-16 h-0.5 bg-gradient-verde" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6 text-mjaidri-dark">
            Construisez Votre
            <br />
            <span className="text-gradient-verde">Vision Écologique</span>
          </h2>
          
          <p className="text-xl text-mjaidri-dark/80 max-w-3xl mx-auto leading-relaxed">
            Chaque parcelle CITTÀ VERDE est conçue pour vous permettre de réaliser 
            votre projet immobilier dans un cadre écologique et durable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Plot Cards */}
          <div className="lg:col-span-1 space-y-6">
            {content.plots.types.map((plot, index) => (
              <motion.div
                key={plot.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => {
                  setSelectedPlot(plot)
                  setCurrentImageIndex(0)
                }}
                className={`card-luxury cursor-pointer transition-all duration-300 ${
                  selectedPlot.name === plot.name 
                    ? 'ring-2 ring-verde-primary shadow-glow-sage' 
                    : 'hover:shadow-lg'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${plot.image})` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(plot.name)
                    }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <Heart 
                      className={`w-5 h-5 ${
                        favorites.includes(plot.name) 
                          ? 'fill-red-500 text-red-500' 
                          : ''
                      }`} 
                    />
                  </button>

                  {/* Price Badge */}
                  <div className="absolute bottom-4 left-4 bg-gradient-verde px-3 py-1 rounded-full text-white text-sm font-semibold">
                    {plot.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-mjaidri-dark mb-2">
                    {plot.name}
                  </h3>
                  <p className="text-verde-primary font-medium mb-4">
                    {plot.subtitle}
                  </p>

                  {/* Specs */}
                  <div className="flex items-center space-x-4 text-sm text-mjaidri-dark/70 mb-4">
                    <div className="flex items-center space-x-1">
                      <Maximize className="w-4 h-4" />
                      <span>{plot.surface}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {plot.elevation.includes('R+3') ? (
                        <Building className="w-4 h-4" />
                      ) : (
                        <Home className="w-4 h-4" />
                      )}
                      <span>{plot.elevation}</span>
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  {selectedPlot.name === plot.name && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center space-x-2 text-verde-primary font-medium"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Sélectionné</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected Plot Details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPlot.name}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
                className="card-luxury overflow-hidden"
              >
                {/* Image Gallery */}
                <div className="relative h-96 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${selectedPlot.image})` }}
                    key={currentImageIndex}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gallery Navigation */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {[0, 1, 2].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? 'bg-white scale-125' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <h3 className="text-3xl font-accent font-bold text-mjaidri-dark mb-2">
                        {selectedPlot.name}
                      </h3>
                      <p className="text-xl text-verde-primary font-medium mb-6">
                        {selectedPlot.subtitle}
                      </p>

                      <p className="text-mjaidri-dark/80 mb-6 leading-relaxed">
                        {selectedPlot.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-mjaidri-dark">Signatures CITTÀ VERDE :</h4>
                        {selectedPlot.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 rounded-full bg-gradient-verde" />
                            <span className="text-sm text-mjaidri-dark/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      {/* Specs Card */}
                      <div className="bg-verde-accent/20 rounded-2xl p-6 mb-6">
                        <h4 className="font-semibold text-mjaidri-dark mb-4">Caractéristiques</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-verde-primary mb-1">
                              {selectedPlot.surface}
                            </div>
                            <div className="text-sm text-mjaidri-dark/70">Surface</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-verde-primary mb-1">
                              {selectedPlot.elevation}
                            </div>
                            <div className="text-sm text-mjaidri-dark/70">Élévation</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-verde-primary mb-1">
                              100%
                            </div>
                            <div className="text-sm text-mjaidri-dark/70">Viabilisé</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-verde-primary mb-1">
                              2025
                            </div>
                            <div className="text-sm text-mjaidri-dark/70">Disponibilité</div>
                          </div>
                        </div>
                      </div>

                      {/* Ideal For */}
                      <div className="bg-gradient-verde rounded-2xl p-6 text-white mb-6">
                        <h4 className="font-semibold mb-2">Idéal pour :</h4>
                        <p className="text-sm opacity-90">{selectedPlot.idealFor}</p>
                      </div>

                      {/* Price */}
                      <div className="text-center">
                        <div className="text-3xl font-bold text-verde-primary mb-2">
                          {selectedPlot.price}
                        </div>
                        <p className="text-sm text-mjaidri-dark/70 mb-4">
                          Facilités de paiement disponibles
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button variant="verde" size="lg" className="flex-1 group">
                      Demander un Devis Personnalisé
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1">
                      Visite du Terrain
                    </Button>
                    <Button variant="outline" size="lg">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}