'use client'

import { motion } from 'framer-motion'
import { Building, Users, Leaf, TrendingUp } from 'lucide-react'
import { ElBarakahContent } from '@/lib/markdown'

interface BarakahImpactSectionProps {
  content: ElBarakahContent;
}

export function BarakahImpactSection({ content }: BarakahImpactSectionProps) {
  // Map icons to aspects
  const getAspectIcon = (index: number) => {
    const icons = [Building, Users, Leaf, TrendingUp];
    return icons[index % icons.length];
  };

  return (
    <section className="section-padding bg-gradient-to-br from-barakah-primary/5 to-barakah-secondary/5">
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
              Impact Régional
            </span>
            <div className="w-16 h-0.5 bg-gradient-barakah" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6 text-mjaidri-dark">
            Moteur du
            <br />
            <span className="text-gradient-barakah">Développement du Sud</span>
          </h2>
          
          <p className="text-xl text-mjaidri-dark/80 max-w-3xl mx-auto leading-relaxed">
            {content.regional_impact.description}
          </p>
        </motion.div>

        {/* Impact Aspects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.regional_impact.aspects.map((aspect, index) => {
            const AspectIcon = getAspectIcon(index);
            return (
              <motion.div
                key={aspect.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-luxury hover-lift overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <motion.div
                      className="w-16 h-16 bg-gradient-barakah rounded-2xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <AspectIcon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-mjaidri-dark mb-3">
                        {aspect.title}
                      </h3>
                      <p className="text-mjaidri-dark/80 leading-relaxed">
                        {aspect.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { value: '200+', label: 'Emplois Locaux Créés' },
            { value: '80%', label: 'Matériaux Locaux' },
            { value: '15%', label: 'Croissance Économique Locale' },
            { value: '100%', label: 'Intégration Communautaire' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gradient-barakah mb-2">
                {stat.value}
              </div>
              <div className="text-mjaidri-dark/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-barakah-primary/10 to-barakah-secondary/10 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                  alt="Gouverneur de Guelmim" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-mjaidri-dark/80 italic mb-4">
                  "Le projet EL BARAKAH représente une contribution significative au développement 
                  urbain et économique de notre région. Il répond aux besoins de logements de qualité 
                  tout en créant des emplois et en valorisant les savoir-faire locaux."
                </p>
                <div className="font-semibold text-mjaidri-dark">Autorité Locale</div>
                <div className="text-sm text-mjaidri-dark/60">Région de Guelmim</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}