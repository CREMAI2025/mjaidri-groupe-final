'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const projects = [
  {
    id: 'soluna',
    name: 'SOLUNA',
    type: 'Appartements',
    location: 'Casablanca',
    priceRange: '850K - 3.5M Dhs',
    lifestyle: 'Urbain Premium',
    delivery: 'T4 2025',
    specificity: 'Luxe & Services',
    theme: 'soluna'
  },
  {
    id: 'el-barakah',
    name: 'EL BARAKAH',
    type: 'Appartements',
    location: 'Guelmim',
    priceRange: '320K - 680K Dhs',
    lifestyle: 'Familial Accessible',
    delivery: 'T2 2025',
    specificity: 'Développement Régional',
    theme: 'barakah'
  },
  {
    id: 'citta-verde',
    name: 'CITTÀ VERDE',
    type: 'Terrains',
    location: 'Benslimane',
    priceRange: '180K - 450K Dhs',
    lifestyle: 'Nature & Golf',
    delivery: 'Par phases',
    specificity: 'Écologique',
    theme: 'verde'
  }
]

export function ProjectsComparisonSection() {
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
              Comparatif
            </span>
            <div className="w-16 h-0.5 bg-gradient-luxury" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6 text-mjaidri-dark">
            Trouvez le Projet
            <br />
            <span className="text-gradient-luxury">qui Vous Correspond</span>
          </h2>
          
          <p className="text-xl text-mjaidri-dark/80 max-w-3xl mx-auto leading-relaxed">
            Comparez nos différents projets pour trouver celui qui répond le mieux à vos attentes 
            et à votre style de vie.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="overflow-x-auto mb-16"
        >
          <div className="min-w-[768px]">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left text-mjaidri-dark font-semibold border-b border-mjaidri-accent/30">Critère</th>
                  {projects.map((project, index) => (
                    <th 
                      key={project.id}
                      className={`p-4 text-center font-semibold border-b border-mjaidri-accent/30 ${
                        project.theme === 'soluna' ? 'text-soluna-primary' :
                        project.theme === 'barakah' ? 'text-barakah-primary' :
                        'text-verde-primary'
                      }`}
                    >
                      {project.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Type', key: 'type' },
                  { label: 'Localisation', key: 'location' },
                  { label: 'Gamme Prix', key: 'priceRange' },
                  { label: 'Style de Vie', key: 'lifestyle' },
                  { label: 'Livraison', key: 'delivery' },
                  { label: 'Spécificité', key: 'specificity' }
                ].map((row, rowIndex) => (
                  <tr key={row.key} className={rowIndex % 2 === 0 ? 'bg-mjaidri-accent/10' : ''}>
                    <td className="p-4 text-left font-medium text-mjaidri-dark border-b border-mjaidri-accent/20">
                      {row.label}
                    </td>
                    {projects.map((project) => (
                      <td 
                        key={`${project.id}-${row.key}`}
                        className="p-4 text-center text-mjaidri-dark/80 border-b border-mjaidri-accent/20"
                      >
                        {project[row.key as keyof typeof project]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Project Selection Guide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
              viewport={{ once: true }}
              className={`card-luxury p-6 border-t-4 ${
                project.theme === 'soluna' ? 'border-t-soluna-primary' :
                project.theme === 'barakah' ? 'border-t-barakah-primary' :
                'border-t-verde-primary'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${
                project.theme === 'soluna' ? 'text-soluna-primary' :
                project.theme === 'barakah' ? 'text-barakah-primary' :
                'text-verde-primary'
              }`}>
                Choisissez {project.name} si :
              </h3>
              
              <ul className="space-y-3 mb-6">
                {[
                  project.id === 'soluna' ? 'Vous recherchez le luxe urbain' : 
                  project.id === 'el-barakah' ? 'Vous cherchez un excellent rapport qualité-prix' :
                  'Vous rêvez de construire votre maison',
                  
                  project.id === 'soluna' ? 'Vous privilégiez les services exclusifs' : 
                  project.id === 'el-barakah' ? 'Vous souhaitez investir dans le Sud' :
                  'Vous aimez la nature et le golf',
                  
                  project.id === 'soluna' ? 'Vous travaillez à Casablanca' : 
                  project.id === 'el-barakah' ? 'Vous privilégiez l\'accessibilité financière' :
                  'Vous cherchez un investissement durable',
                  
                  project.id === 'soluna' ? 'Vous appréciez l\'architecture contemporaine' : 
                  project.id === 'el-barakah' ? 'Vous croyez au potentiel régional' :
                  'Vous voulez la flexibilité architecturale'
                ].map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      project.theme === 'soluna' ? 'text-soluna-primary' :
                      project.theme === 'barakah' ? 'text-barakah-primary' :
                      'text-verde-primary'
                    }`} />
                    <span className="text-mjaidri-dark/80">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={project.theme as any} 
                size="lg" 
                className="w-full"
                asChild
              >
                <Link href={`/projets/${project.id}`}>
                  Découvrir {project.name}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="card-luxury p-8"
        >
          <h3 className="text-2xl font-semibold text-mjaidri-dark mb-6 text-center">
            Votre Parcours d'Acquisition Simplifié
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: 'Découverte & Conseil',
                description: 'Visite des projets, conseil personnalisé, présentation des options, simulation financière gratuite',
                delay: 0.7
              },
              {
                step: 2,
                title: 'Réservation',
                description: 'Choix de votre bien ou terrain, signature du contrat de réservation, versement de l\'acompte',
                delay: 0.8
              },
              {
                step: 3,
                title: 'Financement',
                description: 'Accompagnement dans les démarches, partenariats bancaires privilégiés, validation du dossier de crédit',
                delay: 0.9
              },
              {
                step: 4,
                title: 'Signature & Suivi',
                description: 'Signature de l\'acte de vente, suivi régulier de l\'avancement, livraison dans les délais',
                delay: 1.0
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: step.delay }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-semibold text-mjaidri-dark mb-2">{step.title}</h4>
                <p className="text-sm text-mjaidri-dark/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}