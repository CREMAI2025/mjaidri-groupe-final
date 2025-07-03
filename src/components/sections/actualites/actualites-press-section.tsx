'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { ActualitesContent } from '@/lib/markdown'

interface ActualitesPressProps {
  content: ActualitesContent;
}

export function ActualitesPressSection({ content }: ActualitesPressProps) {
  return (
    <section className="section-padding bg-white">
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
            <div className="w-16 h-0.5 bg-gradient-luxury" />
            <span className="text-sm font-medium tracking-wider uppercase text-mjaidri-secondary">
              Presse
            </span>
            <div className="w-16 h-0.5 bg-gradient-luxury" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6 text-mjaidri-dark">
            Groupe Majaidri
            <br />
            <span className="text-gradient-luxury">dans les Médias</span>
          </h2>
          
          <p className="text-xl text-mjaidri-dark/80 max-w-3xl mx-auto leading-relaxed">
            Découvrez les articles et reportages consacrés à nos projets et à notre vision 
            de l'immobilier au Maroc.
          </p>
        </motion.div>

        {/* Press Articles */}
        <div className="space-y-8">
          {content.press.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-luxury p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="bg-mjaidri-accent/30 rounded-xl p-4 text-center">
                    <div className="text-lg font-semibold text-mjaidri-dark mb-1">
                      {article.source}
                    </div>
                    <div className="text-sm text-mjaidri-dark/60">
                      {article.date}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-mjaidri-dark mb-3">
                    {article.title}
                  </h3>
                  <p className="text-mjaidri-dark/80 mb-4">
                    {article.excerpt}
                  </p>
                  
                  <a 
                    href={article.link || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-mjaidri-secondary hover:text-mjaidri-primary transition-colors font-medium"
                  >
                    <span>Lire l'article complet</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press Kit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-mjaidri-secondary/10 to-mjaidri-primary/10 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-mjaidri-dark mb-4">
              Kit Presse Groupe Majaidri
            </h3>
            <p className="text-mjaidri-dark/80 mb-6">
              Téléchargez notre kit presse complet contenant logos, photos, biographies des dirigeants 
              et informations sur nos projets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-luxury text-white font-semibold rounded-lg shadow-glow-gold hover:shadow-lg transition-all duration-300"
              >
                Télécharger le Kit Presse
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border border-mjaidri-secondary/30 text-mjaidri-dark font-semibold rounded-lg hover:bg-mjaidri-accent/30 transition-all duration-300"
              >
                Contact Presse
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}