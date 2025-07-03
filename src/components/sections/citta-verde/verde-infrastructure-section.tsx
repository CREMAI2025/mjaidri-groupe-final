'use client'

import { motion } from 'framer-motion'
import { Road, Wifi, Tree, ShoppingBag } from 'lucide-react'
import { CittaVerdeContent } from '@/lib/markdown'

interface VerdeInfrastructureSectionProps {
  content: CittaVerdeContent;
}

export function VerdeInfrastructureSection({ content }: VerdeInfrastructureSectionProps) {
  // Map icons to categories
  const getCategoryIcon = (index: number) => {
    const icons = [Road, Wifi, Tree, ShoppingBag];
    return icons[index % icons.length];
  };

  return (
    <section className="section-padding bg-gradient-to-br from-verde-accent/20 to-white">
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
              Infrastructure
            </span>
            <div className="w-16 h-0.5 bg-gradient-verde" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6 text-mjaidri-dark">
            Tout Pensé pour
            <br />
            <span className="text-gradient-verde">Votre Confort</span>
          </h2>
          
          <p className="text-xl text-mjaidri-dark/80 max-w-3xl mx-auto leading-relaxed">
            {content.infrastructure.description}
          </p>
        </motion.div>

        {/* Infrastructure Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.infrastructure.categories.map((category, categoryIndex) => {
            const CategoryIcon = getCategoryIcon(categoryIndex);
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="card-luxury hover-lift"
              >
                {/* Category Header */}
                <div className="p-6 border-b border-mjaidri-accent/30">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-verde-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CategoryIcon className="w-6 h-6 text-verde-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-mjaidri-dark">
                        {category.name}
                      </h3>
                      <div className="w-12 h-0.5 bg-gradient-verde mt-1" />
                    </div>
                  </div>
                </div>

                {/* Category Items */}
                <div className="p-6">
                  <ul className="grid grid-cols-1 gap-3">
                    {category.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (itemIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 group hover:bg-verde-primary/5 rounded-lg p-2 -mx-2 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-verde" />
                        <span className="text-mjaidri-dark/80 group-hover:text-verde-primary transition-colors">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Infrastructure Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-verde-primary/10 to-verde-secondary/10 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-mjaidri-dark mb-4">
                Points Forts de l'Infrastructure
              </h3>
              <p className="text-mjaidri-dark/80 max-w-3xl mx-auto">
                CITTÀ VERDE se distingue par la qualité et la durabilité de ses infrastructures, 
                conçues pour offrir un cadre de vie optimal tout en respectant l'environnement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Voirie Écologique',
                  description: 'Matériaux perméables et durables, réduisant l\'impact environnemental et favorisant l\'infiltration des eaux pluviales',
                  icon: Road
                },
                {
                  title: 'Smart City',
                  description: 'Infrastructure numérique de pointe avec fibre optique et préparation pour les technologies smart home',
                  icon: Wifi
                },
                {
                  title: 'Biodiversité Intégrée',
                  description: 'Corridors écologiques et espaces verts conçus pour préserver et encourager la biodiversité locale',
                  icon: Tree
                }
              ].map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-verde rounded-full flex items-center justify-center mb-4">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-mjaidri-dark mb-2">{highlight.title}</h4>
                    <p className="text-mjaidri-dark/70 text-sm">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}