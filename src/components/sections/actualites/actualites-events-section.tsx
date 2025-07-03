'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ActualitesContent } from '@/lib/markdown'

interface ActualitesEventsSectionProps {
  content: ActualitesContent;
}

export function ActualitesEventsSection({ content }: ActualitesEventsSectionProps) {
  return (
    <section className="section-padding bg-mjaidri-accent/30">
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
              Événements
            </span>
            <div className="w-16 h-0.5 bg-gradient-luxury" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6 text-mjaidri-dark">
            Nos Prochains
            <br />
            <span className="text-gradient-luxury">Événements</span>
          </h2>
          
          <p className="text-xl text-mjaidri-dark/80 max-w-3xl mx-auto leading-relaxed">
            Participez à nos événements exclusifs et rencontrez nos équipes pour 
            découvrir nos projets et bénéficier d'offres spéciales.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-luxury hover-lift overflow-hidden"
            >
              <div className="p-6">
                {/* Event Type Badge */}
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-mjaidri-secondary/10 text-mjaidri-secondary text-xs font-medium rounded-full">
                    {event.type}
                  </span>
                  <span className="text-sm text-mjaidri-dark/60">
                    {event.date}
                  </span>
                </div>
                
                {/* Event Title */}
                <h3 className="text-xl font-semibold text-mjaidri-dark mb-4">
                  {event.title}
                </h3>
                
                {/* Event Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3 text-sm text-mjaidri-dark/70">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-mjaidri-secondary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-start space-x-3 text-sm text-mjaidri-dark/70">
                    <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-mjaidri-secondary" />
                    <span>Horaires à confirmer</span>
                  </div>
                </div>
                
                {/* Event Description */}
                <p className="text-mjaidri-dark/80 mb-6">
                  {event.description}
                </p>
                
                {/* CTA */}
                <Button variant="outline" size="sm" className="w-full group">
                  <span>S'inscrire à l'événement</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Calendar CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-mjaidri-secondary/10 to-mjaidri-primary/10 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-mjaidri-dark mb-4">
              Ne Manquez Aucun Événement
            </h3>
            <p className="text-mjaidri-dark/80 mb-6">
              Abonnez-vous à notre calendrier d'événements pour être informé de toutes nos activités 
              et recevoir des rappels automatiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="lg">
                Ajouter à Mon Calendrier
              </Button>
              <Button variant="outline" size="lg">
                Voir Tous les Événements
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}