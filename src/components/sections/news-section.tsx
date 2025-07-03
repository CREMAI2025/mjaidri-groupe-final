'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const newsArticles = [
  {
    id: 1,
    title: 'Groupe Majaidri Remporte le Prix Excellence Immobilière 2024',
    excerpt: 'Reconnaissance de notre engagement pour l\'innovation architecturale et le développement durable. Une fierté qui nous pousse vers de nouveaux sommets d\'excellence.',
    date: '15 janvier 2024',
    category: 'Récompenses',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    slug: 'prix-excellence-immobiliere-2024',
    featured: true
  },
  {
    id: 2,
    title: 'CITTÀ VERDE : Premier Lotissement Zéro Carbone du Maroc',
    excerpt: 'Une révolution écologique qui positionne le Maroc à l\'avant-garde de l\'habitat durable. L\'avenir commence à Benslimane.',
    date: '8 janvier 2024',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    slug: 'citta-verde-lotissement-zero-carbone',
    featured: false
  },
  {
    id: 3,
    title: 'Lancement de la Phase 2 d\'EL BARAKAH',
    excerpt: '100 nouvelles résidences familiales qui enrichissent notre vision de l\'art de vivre multigénérationnel.',
    date: '22 décembre 2023',
    category: 'Projets',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    slug: 'lancement-phase-2-el-barakah',
    featured: false
  }
]

const upcomingEvents = [
  {
    id: 1,
    title: 'Journées Portes Ouvertes SOLUNA',
    date: '7-8 Décembre 2024',
    location: 'Appartement Témoin SOLUNA, Casablanca',
    description: 'Découvrez en exclusivité les appartements témoins de SOLUNA, entièrement meublés et décorés.',
    type: 'Événement'
  },
  {
    id: 2,
    title: 'Salon Immobilier de Guelmim',
    date: '15-17 Décembre 2024',
    location: 'Centre Culturel de Guelmim',
    description: 'Retrouvez-nous au premier Salon Immobilier de Guelmim pour découvrir EL BARAKAH.',
    type: 'Salon'
  },
  {
    id: 3,
    title: 'Conférence "L\'Immobilier Durable au Maroc"',
    date: '10 Janvier 2025',
    location: 'Hôtel Sofitel Casablanca',
    description: 'Conférence sur les enjeux du développement durable dans l\'immobilier marocain.',
    type: 'Conférence'
  }
]

export function NewsSection() {
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
            Actualités &
            <br />
            <span className="text-gradient-luxury">Événements</span>
          </h2>
          
          <p className="text-xl text-mjaidri-dark/80 max-w-3xl mx-auto leading-relaxed">
            Restez informés de toutes les actualités du Groupe Majaidri : 
            lancements de projets, événements immobiliers, innovations et moments forts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main News */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold mb-8 text-mjaidri-dark">
                Dernières Actualités
              </h3>
              
              <div className="space-y-8">
                {newsArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`group cursor-pointer ${
                      article.featured ? 'mb-12' : ''
                    }`}
                  >
                    <div className={`card-luxury hover-lift overflow-hidden ${
                      article.featured ? 'lg:flex lg:items-center' : ''
                    }`}>
                      {/* Image */}
                      <div className={`relative overflow-hidden ${
                        article.featured 
                          ? 'lg:w-1/2 h-64 lg:h-80' 
                          : 'h-48'
                      }`}>
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

                        {/* Featured Badge */}
                        {article.featured && (
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-gradient-luxury text-white text-xs font-medium rounded-full">
                              À la Une
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className={`p-6 ${
                        article.featured ? 'lg:w-1/2 lg:p-8' : ''
                      }`}>
                        {/* Date */}
                        <div className="flex items-center space-x-2 text-sm text-mjaidri-dark/60 mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>

                        {/* Title */}
                        <h4 className={`font-semibold text-mjaidri-dark mb-3 group-hover:text-mjaidri-secondary transition-colors ${
                          article.featured ? 'text-xl lg:text-2xl' : 'text-lg'
                        }`}>
                          {article.title}
                        </h4>

                        {/* Excerpt */}
                        <p className="text-mjaidri-dark/80 mb-4 leading-relaxed">
                          {article.excerpt}
                        </p>

                        {/* Read More */}
                        <Link
                          href={`/actualites/${article.slug}`}
                          className="inline-flex items-center space-x-2 text-mjaidri-secondary hover:text-mjaidri-primary transition-colors font-medium"
                        >
                          <span>Lire la suite</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-luxury p-6 mb-8"
            >
              <h3 className="text-xl font-semibold mb-6 text-mjaidri-dark">
                Événements à Venir
              </h3>
              
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-mjaidri-accent/50 pb-4 last:border-b-0 last:pb-0"
                  >
                    {/* Event Type */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-mjaidri-secondary bg-mjaidri-secondary/10 px-2 py-1 rounded">
                        {event.type}
                      </span>
                      <span className="text-xs text-mjaidri-dark/60">
                        {event.date}
                      </span>
                    </div>

                    {/* Event Title */}
                    <h4 className="font-semibold text-mjaidri-dark mb-2">
                      {event.title}
                    </h4>

                    {/* Location */}
                    <p className="text-sm text-mjaidri-dark/60 mb-2">
                      📍 {event.location}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-mjaidri-dark/80">
                      {event.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-luxury p-6 bg-gradient-to-br from-mjaidri-secondary/5 to-mjaidri-primary/5"
            >
              <h3 className="text-xl font-semibold mb-4 text-mjaidri-dark">
                Restez Informé
              </h3>
              
              <p className="text-mjaidri-dark/80 mb-6 text-sm">
                Recevez nos dernières actualités et opportunités immobilières 
                directement dans votre boîte mail.
              </p>

              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 border border-mjaidri-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-mjaidri-secondary text-sm"
                />
                <Button variant="luxury" size="lg" className="w-full">
                  S'abonner
                </Button>
              </div>

              <p className="text-xs text-mjaidri-dark/60 mt-3">
                En vous abonnant, vous acceptez de recevoir nos communications. 
                Vous pouvez vous désabonner à tout moment.
              </p>
            </motion.div>
          </div>
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button variant="luxury" size="xl" asChild>
            <Link href="/actualites">
              Voir Toutes les Actualités
              <ExternalLink className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}