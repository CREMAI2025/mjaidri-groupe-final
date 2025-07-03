'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactMapSection() {
  return (
    <section className="section-padding bg-mjaidri-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            <div className="w-16 h-0.5 bg-gradient-luxury" />
            <span className="text-sm font-medium tracking-wider uppercase text-mjaidri-secondary">
              Localisation
            </span>
            <div className="w-16 h-0.5 bg-gradient-luxury" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6">
            Nos Emplacements
            <br />
            <span className="text-gradient-luxury">Stratégiques</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Groupe Majaidri est présent dans plusieurs villes du Maroc pour être au plus proche 
            de ses clients et de ses projets.
          </p>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden mb-16"
        >
          <div className="relative h-[500px] bg-mjaidri-dark/50">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-20 h-20 text-mjaidri-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Carte Interactive
                </h3>
                <p className="text-white/80 mb-6 max-w-md mx-auto">
                  Visualisez l'emplacement de nos bureaux et de nos projets sur la carte 
                  pour planifier votre visite.
                </p>
                <Button variant="luxury" size="lg">
                  Charger la Carte
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location Markers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              city: 'Casablanca',
              address: 'Siège Social, Casablanca',
              description: 'Notre siège social et showroom principal, où vous pouvez découvrir tous nos projets.',
              icon: MapPin
            },
            {
              city: 'Guelmim',
              address: 'Bureau EL BARAKAH, Guelmim',
              description: 'Notre bureau dédié au projet EL BARAKAH, au cœur de la région de Guelmim.',
              icon: MapPin
            },
            {
              city: 'Benslimane',
              address: 'Bureau CITTÀ VERDE, Benslimane',
              description: 'Notre bureau sur site pour le projet CITTÀ VERDE, à proximité du Golf de Benslimane.',
              icon: MapPin
            }
          ].map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-luxury rounded-xl flex items-center justify-center flex-shrink-0">
                  <location.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">{location.city}</h4>
                  <p className="text-mjaidri-secondary font-medium mb-2">{location.address}</p>
                  <p className="text-white/70 text-sm">{location.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Prêt à Concrétiser Votre Projet ?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Chez Groupe Majaidri, chaque contact est le début d'une relation de confiance. 
            Nous nous engageons à vous accompagner avec professionnalisme, transparence et 
            bienveillance dans la réalisation de votre projet immobilier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="xl">
              Prendre Rendez-vous Maintenant
            </Button>
            <Button variant="outline" size="xl" className="border-white/50 text-white hover:bg-white/10">
              Appeler un Conseiller
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}