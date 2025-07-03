'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, GraduationCap, ShoppingBag, Stethoscope, Car } from 'lucide-react'
import { ElBarakahContent } from '@/lib/markdown'

interface BarakahLocationSectionProps {
  content: ElBarakahContent;
}

export function BarakahLocationSection({ content }: BarakahLocationSectionProps) {
  // Map icons to categories
  const getCategoryIcon = (category: string) => {
    if (category.includes('Éducation')) return GraduationCap;
    if (category.includes('Santé')) return Stethoscope;
    if (category.includes('Services') || category.includes('Shopping')) return ShoppingBag;
    if (category.includes('Transports')) return Car;
    return MapPin;
  };

  return (
    <section className="section-padding bg-gradient-to-br from-barakah-accent/20 to-white">
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
            <div className="w-16 h-0.5 bg-gradient-barakah" />
            <span className="text-sm font-medium tracking-wider uppercase text-barakah-primary">
              Localisation
            </span>
            <div className="w-16 h-0.5 bg-gradient-barakah" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6 text-mjaidri-dark">
            Un Cadre de Vie
            <br />
            <span className="text-gradient-barakah">Privilégié</span>
          </h2>
          
          <p className="text-xl text-mjaidri-dark/80 max-w-3xl mx-auto leading-relaxed">
            {content.location_details.description}
          </p>
        </motion.div>

        {/* Location Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Porte du Sahara',
              description: 'Guelmim, connue comme la porte du Sahara, offre un cadre de vie authentique et un climat agréable toute l\'année.',
              image: 'https://images.unsplash.com/photo-1528277342758-f1d7613953a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
            },
            {
              title: 'Développement Régional',
              description: 'La région connaît un développement économique important, avec de nombreux investissements publics et privés.',
              image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
            },
            {
              title: 'Accessibilité',
              description: 'Bien connectée aux principales villes du sud marocain, Guelmim bénéficie d\'infrastructures modernes et d\'un aéroport.',
              image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
            }
          ].map((highlight, index) => (
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
                  <MapPin className="w-6 h-6 text-barakah-primary" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-mjaidri-dark mb-3 group-hover:text-barakah-primary transition-colors">
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
          {content.location_details.proximities.map((category, categoryIndex) => {
            const CategoryIcon = getCategoryIcon(category.category);
            return (
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
                      className="w-12 h-12 rounded-xl bg-mjaidri-accent flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CategoryIcon className="w-6 h-6 text-barakah-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-mjaidri-dark">
                        {category.category}
                      </h3>
                      <div className="w-12 h-0.5 bg-gradient-barakah mt-1" />
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
                        <h4 className="font-semibold text-mjaidri-dark group-hover:text-barakah-primary transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-sm text-mjaidri-dark/60">
                          {item.type || 'Service de proximité'}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 text-barakah-primary">
                        <Clock className="w-4 h-4" />
                        <span className="font-semibold text-sm">{item.distance}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
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
            <div className="relative h-96 bg-gradient-to-br from-barakah-accent/20 to-barakah-primary/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-barakah-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-mjaidri-dark mb-2">
                  Carte Interactive
                </h3>
                <p className="text-mjaidri-dark/70 mb-6">
                  Explorez l'emplacement d'EL BARAKAH et ses environs
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-gradient-barakah text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
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