'use client'

import { motion } from 'framer-motion'
import { Waves, Dumbbell, Leaf, Shield, Car, Wifi, Coffee, Sparkles } from 'lucide-react'
import { ElBarakahContent } from '@/lib/markdown'

interface BarakahAmenitiesSectionProps {
  content: ElBarakahContent;
}

export function BarakahAmenitiesSection({ content }: BarakahAmenitiesSectionProps) {
  // Map icons to categories
  const getCategoryIcon = (index: number) => {
    const icons = [Waves, Dumbbell, Leaf, Shield];
    return icons[index % icons.length];
  };

  return (
    <section className="section-padding bg-mjaidri-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2350C878' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            <div className="w-16 h-0.5 bg-gradient-barakah" />
            <span className="text-sm font-medium tracking-wider uppercase text-barakah-primary">
              Équipements
            </span>
            <div className="w-16 h-0.5 bg-gradient-barakah" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6">
            Votre Confort
            <br />
            <span className="text-gradient-barakah">Familial</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            EL BARAKAH offre une gamme complète d'équipements et de services pensés 
            pour le bien-être et l'épanouissement de toute la famille.
          </p>
        </motion.div>

        {/* Main Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {content.amenities.categories.map((category, categoryIndex) => {
            const CategoryIcon = getCategoryIcon(categoryIndex);
            return (
              <motion.div
                key={category.name}
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
                      className="w-16 h-16 rounded-2xl bg-barakah-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <CategoryIcon className="w-8 h-8 text-barakah-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {category.name}
                      </h3>
                      <div className="w-12 h-0.5 bg-gradient-barakah" />
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
                        {['🏊‍♂️', '🎯', '🚗', '🛍️'][itemIndex % 4]}
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-white group-hover/item:text-barakah-primary transition-colors">
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
            );
          })}
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
            Services <span className="text-gradient-barakah">Familiaux</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Car,
                title: 'Parking Sécurisé',
                description: 'Places couvertes et sécurisées pour tous les résidents'
              },
              {
                icon: Wifi,
                title: 'Connectivité',
                description: 'Fibre optique disponible dans toute la résidence'
              },
              {
                icon: Coffee,
                title: 'Espaces Communs',
                description: 'Salon communautaire pour les événements familiaux'
              },
              {
                icon: Sparkles,
                title: 'Services Pratiques',
                description: 'Maintenance, nettoyage et garderie sur demande'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-barakah rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="font-semibold text-white mb-2 group-hover:text-barakah-primary transition-colors">
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
          <div className="bg-gradient-barakah rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Découvrez l'Art de Vivre Familial EL BARAKAH
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Réservez votre visite privée et découvrez tous nos équipements 
              familiaux dans un cadre authentique et chaleureux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-barakah-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
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