'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { ContactContent } from '@/lib/markdown'

interface ContactInfoSectionProps {
  content: ContactContent;
}

export function ContactInfoSection({ content }: ContactInfoSectionProps) {
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
              Informations
            </span>
            <div className="w-16 h-0.5 bg-gradient-luxury" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6 text-mjaidri-dark">
            Siège Social
            <br />
            <span className="text-gradient-luxury">Groupe Majaidri</span>
          </h2>
          
          <p className="text-xl text-mjaidri-dark/80 max-w-3xl mx-auto leading-relaxed">
            Notre siège social est situé à Casablanca, où notre équipe est à votre disposition 
            pour répondre à toutes vos questions et vous accompagner dans vos projets.
          </p>
        </motion.div>

        {/* Main Office Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card-luxury p-8">
              <h3 className="text-2xl font-semibold text-mjaidri-dark mb-6">
                Coordonnées Principales
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: 'Adresse',
                    content: content.mainOffice.address,
                    color: 'text-red-500',
                    bgColor: 'bg-red-500/10'
                  },
                  {
                    icon: Phone,
                    title: 'Téléphone',
                    content: content.mainOffice.phone,
                    color: 'text-blue-500',
                    bgColor: 'bg-blue-500/10'
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    content: content.mainOffice.email,
                    color: 'text-green-500',
                    bgColor: 'bg-green-500/10'
                  },
                  {
                    icon: Clock,
                    title: 'Horaires d\'Ouverture',
                    content: content.mainOffice.hours,
                    color: 'text-purple-500',
                    bgColor: 'bg-purple-500/10'
                  }
                ].map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-mjaidri-dark mb-1">{info.title}</h4>
                      <p className="text-mjaidri-dark/80">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Social Media */}
            <div className="card-luxury p-8">
              <h3 className="text-xl font-semibold text-mjaidri-dark mb-4">
                Suivez-nous sur les Réseaux Sociaux
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Facebook, name: 'Facebook', color: 'bg-blue-600' },
                  { icon: Instagram, name: 'Instagram', color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500' },
                  { icon: Linkedin, name: 'LinkedIn', color: 'bg-blue-700' },
                  { icon: Youtube, name: 'YouTube', color: 'bg-red-600' }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-luxury overflow-hidden"
          >
            <div className="relative h-full min-h-[400px] bg-mjaidri-accent/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-mjaidri-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-mjaidri-dark mb-2">
                    Carte Interactive
                  </h3>
                  <p className="text-mjaidri-dark/70 mb-4 max-w-xs mx-auto">
                    Visualisez l'emplacement de notre siège social et planifiez votre itinéraire
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-2 bg-gradient-luxury text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Ouvrir dans Google Maps
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Transportation Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="card-luxury p-8"
        >
          <h3 className="text-xl font-semibold text-mjaidri-dark mb-6">
            Comment Nous Trouver
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Depuis l\'Aéroport Mohammed V',
                details: [
                  'Durée : 45 minutes',
                  'Itinéraire : Autoroute A3 → Sortie Casablanca Centre',
                  'Transport : Taxi, location de voiture, navette'
                ]
              },
              {
                title: 'Depuis la Gare Casa-Port',
                details: [
                  'Durée : 20 minutes',
                  'Itinéraire : Boulevard Mohammed V',
                  'Transport : Taxi, tramway + marche'
                ]
              },
              {
                title: 'Parking et Accès',
                details: [
                  'Parking visiteurs gratuit (50 places)',
                  'Accès PMR complet',
                  'Sécurité 24h/24',
                  'Réception multilingue'
                ]
              }
            ].map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                className="bg-mjaidri-accent/10 rounded-xl p-4"
              >
                <h4 className="font-semibold text-mjaidri-dark mb-3">
                  {info.title}
                </h4>
                <ul className="space-y-2 text-sm text-mjaidri-dark/80">
                  {info.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <span className="text-mjaidri-secondary">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}