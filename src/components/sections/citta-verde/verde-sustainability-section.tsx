'use client'

import { motion } from 'framer-motion'
import { Sun, Droplet, Recycle, Building, Wind, Leaf, Zap, Car } from 'lucide-react'
import { CittaVerdeContent } from '@/lib/markdown'

interface VerdeSustainabilitySectionProps {
  content: CittaVerdeContent;
}

export function VerdeSustainabilitySection({ content }: VerdeSustainabilitySectionProps) {
  // Map icons to features
  const getFeatureIcon = (index: number) => {
    const icons = [Sun, Droplet, Recycle, Building, Wind, Leaf, Zap, Car];
    return icons[index % icons.length];
  };

  return (
    <section className="section-padding bg-mjaidri-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CAF88' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            <div className="w-16 h-0.5 bg-gradient-verde" />
            <span className="text-sm font-medium tracking-wider uppercase text-verde-primary">
              Éco-Urbanisme
            </span>
            <div className="w-16 h-0.5 bg-gradient-verde" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6">
            Pionnier du
            <br />
            <span className="text-gradient-verde">Développement Durable</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {content.sustainability.description}
          </p>
        </motion.div>

        {/* Sustainability Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {content.sustainability.features.map((feature, index) => {
            const FeatureIcon = getFeatureIcon(index);
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-luxury bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-500"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <motion.div
                      className="w-16 h-16 bg-gradient-verde rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <FeatureIcon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Eco-Innovation Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-accent font-bold mb-4 text-white">
              Nos Innovations <span className="text-gradient-verde">Écologiques</span>
            </h3>
            <p className="text-white/80 max-w-3xl mx-auto">
              CITTÀ VERDE intègre les technologies les plus avancées en matière de développement durable, 
              faisant de chaque parcelle un exemple d'innovation écologique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Sun,
                title: 'Énergie Solaire',
                description: 'Panneaux photovoltaïques intégrés et pré-équipement pour chaque parcelle',
                value: '100%',
                label: 'Autonomie possible'
              },
              {
                icon: Droplet,
                title: 'Gestion de l\'Eau',
                description: 'Système de récupération des eaux pluviales et traitement des eaux grises',
                value: '60%',
                label: 'Économie d\'eau'
              },
              {
                icon: Recycle,
                title: 'Économie Circulaire',
                description: 'Tri sélectif avancé et compostage communautaire pour un objectif zéro déchet',
                value: '90%',
                label: 'Déchets recyclés'
              }
            ].map((innovation, index) => (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="w-16 h-16 bg-gradient-verde rounded-full flex items-center justify-center mb-4"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <innovation.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-white mb-2">{innovation.title}</h4>
                  <p className="text-white/70 text-sm mb-4">{innovation.description}</p>
                  <div className="text-3xl font-bold text-gradient-verde mb-1">{innovation.value}</div>
                  <div className="text-xs text-white/60">{innovation.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification & Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Certifications & Partenaires Écologiques
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {['HQE', 'LEED', 'BREEAM', 'WWF Maroc'].map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                viewport={{ once: true }}
                className="bg-white/10 px-6 py-3 rounded-full text-white font-semibold"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}