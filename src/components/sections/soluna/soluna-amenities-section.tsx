'use client'

import { motion } from 'framer-motion'
import { Waves, Dumbbell, Leaf, Shield, Car, Wifi, Coffee, Sparkles } from 'lucide-react'

const amenities = [
  {
    category: 'Le Sanctuaire Aquatique',
    icon: Waves,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    items: [
      {
        name: 'Piscine Infinity',
        description: 'Bassin de 25m avec débordement spectaculaire',
        icon: '🏊‍♀️'
      },
      {
        name: 'Espace Wellness',
        description: 'Hammam traditionnel + Sauna finlandais',
        icon: '🧘‍♀️'
      },
      {
        name: 'Pool House',
        description: 'Salon d\'été avec cuisine d\'été équipée',
        icon: '🏖️'
      }
    ]
  },
  {
    category: 'L\'Atelier du Bien-Être',
    icon: Dumbbell,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    items: [
      {
        name: 'Salle de Sport Premium',
        description: 'Équipements Technogym dernière génération',
        icon: '💪'
      },
      {
        name: 'Studio Yoga/Pilates',
        description: 'Espace zen avec vue sur jardins',
        icon: '🧘'
      },
      {
        name: 'Espace Cardio',
        description: 'Machines connectées avec écrans individuels',
        icon: '🏃‍♂️'
      }
    ]
  },
  {
    category: 'Les Jardins d\'Éden',
    icon: Leaf,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    items: [
      {
        name: 'Jardins Thématiques',
        description: 'Méditerranéen, Andalou, Contemporain',
        icon: '🌺'
      },
      {
        name: 'Allées Parfumées',
        description: 'Jasmin, oranger, lavande',
        icon: '🌸'
      },
      {
        name: 'Espaces de Méditation',
        description: 'Coins secrets pour la contemplation',
        icon: '🌿'
      }
    ]
  },
  {
    category: 'Sécurité & Conciergerie',
    icon: Shield,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    items: [
      {
        name: 'Gardiennage Premium',
        description: '24h/24 avec formation hôtelière',
        icon: '🛡️'
      },
      {
        name: 'Vidéosurveillance IA',
        description: 'Reconnaissance faciale intelligente',
        icon: '📹'
      },
      {
        name: 'Conciergerie Lifestyle',
        description: 'Services sur-mesure (ménage, courses, réservations)',
        icon: '🎩'
      }
    ]
  }
]

const additionalServices = [
  {
    icon: Car,
    title: 'Parking Intelligent',
    description: 'Système de guidage automatique, 150 places sécurisées'
  },
  {
    icon: Wifi,
    title: 'Connectivité Premium',
    description: 'Fibre optique très haut débit, Wi-Fi dans espaces communs'
  },
  {
    icon: Coffee,
    title: 'Espaces de Convivialité',
    description: 'Salon de réception, espaces de co-working'
  },
  {
    icon: Sparkles,
    title: 'Services Exclusifs',
    description: 'Nettoyage à sec, livraison de courses, maintenance'
  }
]

export function SolunaAmenitiesSection() {
  return (
    <section className="section-padding bg-mjaidri-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10">
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
              Équipements Premium
            </span>
            <div className="w-16 h-0.5 bg-gradient-soluna" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6">
            Votre Confort
            <br />
            <span className="text-gradient-soluna">au Quotidien</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            SOLUNA offre une gamme complète d'équipements et de services pensés 
            pour transformer chaque jour en une expérience d'exception.
          </p>
        </motion.div>

        {/* Main Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {amenities.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="card-luxury bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-500"
            >
              {/* Category Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center space-x-4">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {category.category}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-soluna" />
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
                    className="flex items-start space-x-4 group/item hover:bg-white/5 rounded-lg p-3 -m-3 transition-colors duration-300"
                  >
                    <motion.div
                      className="text-2xl flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-white group-hover/item:text-soluna-primary transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-accent font-bold mb-8 text-white">
            Services <span className="text-gradient-soluna">Complémentaires</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-soluna rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="font-semibold text-white mb-2 group-hover:text-soluna-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-soluna rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Découvrez l'Art de Vivre SOLUNA
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Réservez votre visite privée et découvrez tous nos équipements 
              d'exception dans un cadre luxueux et raffiné.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-soluna-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                Réserver une Visite
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Télécharger la Brochure
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}