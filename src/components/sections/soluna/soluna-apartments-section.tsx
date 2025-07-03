'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bed, Bath, Maximize, Eye, Heart, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const apartments = [
  {
    id: 'cocon-solaire',
    name: 'Le Cocon Solaire',
    subtitle: 'Appartement 2 Pièces d\'Exception',
    surface: '65-75 m²',
    rooms: 2,
    bathrooms: 1,
    price: 'À partir de 850K Dhs',
    description: 'Suite parentale avec dressing intégré, salon-séjour baigné de lumière, cuisine ouverte équipée (Miele/Bosch), salle de bain spa avec douche à l\'italienne.',
    features: [
      'Terrasse privée 15-20 m²',
      'Parquet chêne massif',
      'Domotique intégrée',
      'Climatisation réversible'
    ],
    idealFor: 'Jeunes couples raffinés, pied-à-terre de luxe',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'harmonie-lunaire',
    name: 'L\'Harmonie Lunaire',
    subtitle: 'Appartement 3 Pièces Familial',
    surface: '85-95 m²',
    rooms: 3,
    bathrooms: 2,
    price: 'À partir de 1.2M Dhs',
    description: '2 chambres avec placards sur-mesure, salon-séjour avec coin lecture, cuisine américaine haut de gamme, 2 salles d\'eau (dont une avec baignoire), cellier/buanderie.',
    features: [
      'Terrasse familiale 20-25 m²',
      'Isolation phonique renforcée',
      'Éclairage LED intelligent',
      'Prises USB intégrées'
    ],
    idealFor: 'Familles modernes, premiers acheteurs exigeants',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'palais-stellaire',
    name: 'Le Palais Stellaire',
    subtitle: 'Appartement 4 Pièces Prestige',
    surface: '110-130 m²',
    rooms: 4,
    bathrooms: 3,
    price: 'À partir de 2.2M Dhs',
    description: 'Suite parentale (25m²) avec dressing et salle de bain privative, 2 chambres enfants, double salon (réception + intimité), cuisine îlot central, bureau/bibliothèque.',
    features: [
      'Terrasse panoramique 30-40 m²',
      'Hauteur sous plafond 3m',
      'Cheminée design',
      'Cave à vin climatisée'
    ],
    idealFor: 'Familles d\'exception, dirigeants, investisseurs patrimoniaux',
    image: 'https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  }
]

export function SolunaApartmentsSection() {
  const [selectedApartment, setSelectedApartment] = useState(apartments[0])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (apartmentId: string) => {
    setFavorites(prev => 
      prev.includes(apartmentId) 
        ? prev.filter(id => id !== apartmentId)
        : [...prev, apartmentId]
    )
  }

  return (
    <section className="section-padding bg-gradient-to-br from-soluna-accent to-white">
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
            <div className="w-16 h-0.5 bg-gradient-soluna" />
            <span className="text-sm font-medium tracking-wider uppercase text-soluna-primary">
              Nos Résidences
            </span>
            <div className="w-16 h-0.5 bg-gradient-soluna" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6 text-mjaidri-dark">
            Des Espaces de Vie
            <br />
            <span className="text-gradient-soluna">Raffinés</span>
          </h2>
          
          <p className="text-xl text-mjaidri-dark/80 max-w-3xl mx-auto leading-relaxed">
            Chaque appartement SOLUNA raconte une histoire unique, portée par des finitions 
            d'exception et des espaces pensés pour l'art de vivre contemporain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Apartment Cards */}
          <div className="lg:col-span-1 space-y-6">
            {apartments.map((apartment, index) => (
              <motion.div
                key={apartment.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => {
                  setSelectedApartment(apartment)
                  setCurrentImageIndex(0)
                }}
                className={`card-luxury cursor-pointer transition-all duration-300 ${
                  selectedApartment.id === apartment.id 
                    ? 'ring-2 ring-soluna-primary shadow-glow-gold' 
                    : 'hover:shadow-lg'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${apartment.image})` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(apartment.id)
                    }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <Heart 
                      className={`w-5 h-5 ${
                        favorites.includes(apartment.id) 
                          ? 'fill-red-500 text-red-500' 
                          : ''
                      }`} 
                    />
                  </button>

                  {/* Price Badge */}
                  <div className="absolute bottom-4 left-4 bg-gradient-soluna px-3 py-1 rounded-full text-white text-sm font-semibold">
                    {apartment.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-mjaidri-dark mb-2">
                    {apartment.name}
                  </h3>
                  <p className="text-soluna-primary font-medium mb-4">
                    {apartment.subtitle}
                  </p>

                  {/* Specs */}
                  <div className="flex items-center space-x-4 text-sm text-mjaidri-dark/70 mb-4">
                    <div className="flex items-center space-x-1">
                      <Maximize className="w-4 h-4" />
                      <span>{apartment.surface}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bed className="w-4 h-4" />
                      <span>{apartment.rooms} pièces</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bath className="w-4 h-4" />
                      <span>{apartment.bathrooms} SDB</span>
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  {selectedApartment.id === apartment.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center space-x-2 text-soluna-primary font-medium"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Sélectionné</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected Apartment Details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedApartment.id}
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
                    style={{ backgroundImage: `url(${selectedApartment.gallery[currentImageIndex]})` }}
                    key={currentImageIndex}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gallery Navigation */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedApartment.gallery.map((_, index) => (
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
                        {selectedApartment.name}
                      </h3>
                      <p className="text-xl text-soluna-primary font-medium mb-6">
                        {selectedApartment.subtitle}
                      </p>

                      <p className="text-mjaidri-dark/80 mb-6 leading-relaxed">
                        {selectedApartment.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-mjaidri-dark">Signatures SOLUNA :</h4>
                        {selectedApartment.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 rounded-full bg-gradient-soluna" />
                            <span className="text-sm text-mjaidri-dark/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      {/* Specs Card */}
                      <div className="bg-soluna-accent/20 rounded-2xl p-6 mb-6">
                        <h4 className="font-semibold text-mjaidri-dark mb-4">Caractéristiques</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-soluna-primary mb-1">
                              {selectedApartment.surface}
                            </div>
                            <div className="text-sm text-mjaidri-dark/70">Surface</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-soluna-primary mb-1">
                              {selectedApartment.rooms}
                            </div>
                            <div className="text-sm text-mjaidri-dark/70">Pièces</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-soluna-primary mb-1">
                              {selectedApartment.bathrooms}
                            </div>
                            <div className="text-sm text-mjaidri-dark/70">Salles de bain</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-soluna-primary mb-1">
                              T4
                            </div>
                            <div className="text-sm text-mjaidri-dark/70">2025</div>
                          </div>
                        </div>
                      </div>

                      {/* Ideal For */}
                      <div className="bg-gradient-soluna rounded-2xl p-6 text-white mb-6">
                        <h4 className="font-semibold mb-2">Idéal pour :</h4>
                        <p className="text-sm opacity-90">{selectedApartment.idealFor}</p>
                      </div>

                      {/* Price */}
                      <div className="text-center">
                        <div className="text-3xl font-bold text-soluna-primary mb-2">
                          {selectedApartment.price}
                        </div>
                        <p className="text-sm text-mjaidri-dark/70 mb-4">
                          Facilités de paiement disponibles
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button variant="soluna" size="lg" className="flex-1 group">
                      Demander un Devis Personnalisé
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1">
                      Visite Virtuelle
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