'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, MapPin, Home, Leaf, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const projects = [
  {
    id: 'soluna',
    name: 'SOLUNA',
    subtitle: 'L\'Art du Prestige',
    location: 'Casablanca',
    type: 'Résidences de Prestige',
    description: 'Une symphonie architecturale où chaque détail révèle un raffinement absolu. SOLUNA incarne l\'excellence à l\'état pur, avec des finitions nobles et des espaces pensés pour l\'art de vivre.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    theme: 'soluna',
    features: [
      'Matériaux nobles importés d\'Italie',
      'Domotique intégrée dernière génération',
      'Espaces wellness privatifs',
      'Conciergerie 24h/7j'
    ],
    stats: {
      surface: '85-180m²',
      units: '120 appartements',
      delivery: 'T4 2025'
    },
    priceRange: '850K - 3.5M Dhs'
  },
  {
    id: 'el-barakah',
    name: 'EL BARAKAH',
    subtitle: 'L\'Harmonie Familiale',
    location: 'Guelmim',
    type: 'Résidences Familiales',
    description: 'Un écrin de bonheur familial où chaque espace respire la sérénité. EL BARAKAH transforme le quotidien en moments précieux, avec des équipements pensés pour toute la famille.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
    theme: 'barakah',
    features: [
      'Aires de jeux premium sécurisées',
      'Espaces verts thématiques',
      'Club house familial',
      'Services de garde d\'enfants'
    ],
    stats: {
      surface: '60-150m²',
      units: '80 appartements',
      delivery: 'T2 2025'
    },
    priceRange: '320K - 680K Dhs'
  },
  {
    id: 'citta-verde',
    name: 'CITTÀ VERDE',
    subtitle: 'L\'Éco-Luxe Italien',
    location: 'Benslimane',
    type: 'Lotissement Écologique',
    description: 'L\'alliance parfaite entre élégance italienne et innovation écologique. CITTÀ VERDE redéfinit le luxe durable avec des technologies vertes intégrées.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    theme: 'verde',
    features: [
      'Panneaux solaires intégrés',
      'Système de récupération d\'eau',
      'Jardins bioclimatiques',
      'Mobilité électrique'
    ],
    stats: {
      surface: '200-800m²',
      units: '45 terrains',
      delivery: 'Par phases'
    },
    priceRange: '180K - 450K Dhs'
  }
]

export function ProjectsOverviewSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section id="projects" className="section-padding bg-mjaidri-accent/30">
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
              Nos Créations
            </span>
            <div className="w-16 h-0.5 bg-gradient-luxury" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6 text-mjaidri-dark">
            Trois Univers,
            <br />
            <span className="text-gradient-luxury">Une Signature</span>
          </h2>
          
          <p className="text-xl text-mjaidri-dark/80 max-w-3xl mx-auto leading-relaxed">
            Chaque projet Groupe Majaidri raconte une histoire unique, portée par une identité 
            visuelle distinctive et des codes couleurs exclusifs, à l'image des plus grandes 
            maisons de luxe.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group cursor-pointer"
            >
              <div className="card-luxury hover-lift overflow-hidden">
                {/* Project Image */}
                <div className="relative h-80 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${project.image})` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    project.theme === 'soluna' ? 'bg-gradient-to-t from-soluna-primary/80 to-transparent' :
                    project.theme === 'barakah' ? 'bg-gradient-to-t from-barakah-primary/80 to-transparent' :
                    'bg-gradient-to-t from-verde-primary/80 to-transparent'
                  }`} />
                  
                  {/* Project Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`px-4 py-2 rounded-full text-white text-sm font-medium ${
                      project.theme === 'soluna' ? 'bg-gradient-soluna' :
                      project.theme === 'barakah' ? 'bg-gradient-barakah' :
                      'bg-gradient-verde'
                    }`}>
                      {project.type}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-mjaidri-dark text-sm font-semibold">
                      {project.priceRange}
                    </div>
                  </div>

                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">{project.location}</span>
                    </div>
                    
                    <h3 className="text-2xl font-accent font-bold mb-2">
                      {project.name}
                    </h3>
                    
                    <p className="text-lg opacity-90 mb-4">
                      {project.subtitle}
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-sm font-semibold">{project.stats.surface}</div>
                        <div className="text-xs opacity-80">Surface</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{project.stats.units}</div>
                        <div className="text-xs opacity-80">Unités</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{project.stats.delivery}</div>
                        <div className="text-xs opacity-80">Livraison</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <p className="text-mjaidri-dark/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          project.theme === 'soluna' ? 'bg-gradient-soluna' :
                          project.theme === 'barakah' ? 'bg-gradient-barakah' :
                          'bg-gradient-verde'
                        }`} />
                        <span className="text-sm text-mjaidri-dark/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex space-x-3">
                    <Button
                      variant={project.theme as any}
                      size="lg"
                      className="flex-1 group"
                      asChild
                    >
                      <Link href={`/projets/${project.id}`}>
                        Découvrir
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setSelectedProject(project.id)}
                    >
                      <Star className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button variant="luxury" size="xl" asChild>
            <Link href="/projets">
              Voir Tous Nos Projets
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal content would go here */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  {projects.find(p => p.id === selectedProject)?.name}
                </h3>
                <p className="text-mjaidri-dark/80 mb-6">
                  Contenu détaillé du projet...
                </p>
                <Button onClick={() => setSelectedProject(null)}>
                  Fermer
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}