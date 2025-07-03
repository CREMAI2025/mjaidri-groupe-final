'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ActualitesContent } from '@/lib/markdown'

interface ActualitesArticlesSectionProps {
  content: ActualitesContent;
}

export function ActualitesArticlesSection({ content }: ActualitesArticlesSectionProps) {
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
              Actualités
            </span>
            <div className="w-16 h-0.5 bg-gradient-luxury" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6 text-mjaidri-dark">
            Nos Dernières
            <br />
            <span className="text-gradient-luxury">Actualités</span>
          </h2>
          
          <p className="text-xl text-mjaidri-dark/80 max-w-3xl mx-auto leading-relaxed">
            Restez informés des dernières nouvelles du Groupe Majaidri, de nos projets 
            et des événements à venir dans le secteur immobilier.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-luxury hover-lift overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${article.image})` }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-mjaidri-secondary text-white text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>

                {/* Date */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white/90 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-mjaidri-dark mb-3 group-hover:text-mjaidri-secondary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-mjaidri-dark/80 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <Link
                  href={`/actualites/${article.slug}`}
                  className="inline-flex items-center space-x-2 text-mjaidri-secondary hover:text-mjaidri-primary transition-colors font-medium"
                >
                  <span>Lire la suite</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="flex space-x-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  page === 1
                    ? 'bg-mjaidri-secondary text-white'
                    : 'bg-mjaidri-accent/50 text-mjaidri-dark hover:bg-mjaidri-accent'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}