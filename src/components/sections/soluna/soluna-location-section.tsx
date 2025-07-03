'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, GraduationCap, ShoppingBag, Stethoscope, Car } from 'lucide-react'

const proximities = [
  {
    category: 'Éducation',
    icon: GraduationCap,
    color: 'text-blue-500',
    items: [
      { name: 'École Internationale', distance: '5 min', type: 'Enseignement de qualité' },
      { name: 'Lycée Français', distance: '8 min', type: 'Cursus français' },
      { name: 'Université Hassan II', distance: '15 min', type: 'Enseignement supérieur' },
      { name: 'Crèches privées', distance: '3 min', type: 'Petite enfance' }
    ]
  },
  {
    category: 'Santé',
    icon: Stethoscope,
    color: 'text-red-500',
    items: [
      { name: 'Clinique Internationale', distance: '7 min', type: 'Soins spécialisés' },
      { name: 'Pharmacies', distance: '2 min', type: 'Pharmacies de garde' },
      { name: 'Centre médical', distance: '5 min', type: 'Médecine générale' },
      { name: 'Hôpital Ibn Rochd', distance: '20 min', type: 'Urgences 24h/24' }
    ]
  },
  {
    category: 'Shopping & Loisirs',
    icon: ShoppingBag,
    color: 'text-purple-500',
    items: [
      { name: 'Morocco Mall', distance: '15 min', type: 'Centre commercial' },
      { name: 'Anfaplace', distance: '12 min', type: 'Shopping & loisirs' },
      { name: 'Restaurants gastronomiques', distance: '5 min', type: 'Haute cuisine' },
      { name: 'Cinémas', distance: '10 min', type: 'Divertissement' }
    ]
  },
  {
    category: 'Transports',
    icon: Car,
    color: 'text-green-500',
    items: [
      { name: 'Aéroport Mohammed V', distance: '25 min', type: 'Vols internationaux' },
      { name: 'Gare Casa-Port', distance: '30 min', type: 'Transport ferroviaire' },
      { name: 'Tramway', distance: '10 min', type: 'Transport urbain' },
      { name: 'Autoroutes', distance: 'Accès direct', type: 'Réseau autoroutier' }
    ]
  }
]

const locationHighlights = [
  {
    title: 'Proximité Bouskoura',
    description: 'Accès privilégié au quartier résidentiel de Bouskoura, réputé pour sa tranquillité et ses espaces verts.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Quartier California',
    description: 'À quelques minutes du prestigieux quartier California, symbole du luxe et de l\'élégance casablancaise.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Centre-ville Accessible',
    description: 'Connexion rapide vers le centre-ville de Casablanca et ses centres d\'affaires.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
]

export function SolunaLocationSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-soluna-accent/20 to-white">
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
              Localisation
            </span>
            <div className="w-16 h-0.5 bg-gradient-soluna" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6 text-mjaidri-dark">
            Un Cadre de Vie
            <br />
            <span className="text-gradient-soluna">Exceptionnel</span>
          </h2>
          
          <p className="text-xl text-mjaidri-dark/80 max-w-3xl mx-auto leading-relaxed">
            SOLUNA bénéficie d'un emplacement privilégié à Casablanca, 
            offrant un accès facile à tous les services essentiels et lieux d'intérêt.
          </p>
        </motion.div>

        {/* Location Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {locationHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-luxury overflow-hidden group hover-lift"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${highlight.image})` }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <MapPin className="w-6 h-6 text-soluna-primary" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-mjaidri-dark mb-3 group-hover:text-soluna-primary transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-mjaidri-dark/80 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proximities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proximities.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="card-luxury"
            >
              {/* Category Header */}
              <div className="p-6 border-b border-mjaidri-accent/30">
                <div className="flex items-center space-x-4">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-mjaidri-accent flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-mjaidri-dark">
                      {category.category}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-soluna mt-1" />
                  </div>
                </div>
              </div>

              {/* Category Items */}
              <div className="p-6 space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (itemIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between group hover:bg-mjaidri-accent/20 rounded-lg p-3 -m-3 transition-colors duration-300"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-mjaidri-dark group-hover:text-soluna-primary transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-sm text-mjaidri-dark/60">
                        {item.type}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 text-soluna-primary">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold text-sm">{item.distance}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card-luxury overflow-hidden">
            <div className="relative h-96 bg-gradient-to-br from-soluna-accent/20 to-soluna-primary/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-soluna-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-mjaidri-dark mb-2">
                  Carte Interactive
                </h3>
                <p className="text-mjaidri-dark/70 mb-6">
                  Explorez l'emplacement de SOLUNA et ses environs
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-gradient-soluna text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Voir sur Google Maps
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}