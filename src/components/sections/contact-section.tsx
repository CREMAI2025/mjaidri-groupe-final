'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const contactInfo = [
  {
    icon: Phone,
    title: 'Téléphone',
    content: '+212 522 XXX XXX',
    description: 'Lun-Ven 9h-18h, Sam 9h-16h'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@groupemajaidri.ma',
    description: 'Réponse sous 24h'
  },
  {
    icon: MapPin,
    title: 'Siège Social',
    content: 'Casablanca, Maroc',
    description: 'Rendez-vous sur RDV'
  },
  {
    icon: Clock,
    title: 'Horaires',
    content: 'Lun-Sam 9h-18h',
    description: 'Dimanche sur RDV'
  }
]

const projectOffices = [
  {
    name: 'Bureau SOLUNA',
    location: 'Casablanca',
    address: 'Résidence SOLUNA, Casablanca',
    phone: '+212 XXX XXX XXX',
    email: 'soluna@groupemajaidri.ma',
    hours: 'Lun-Sam 9h-19h, Dim 10h-16h',
    theme: 'soluna'
  },
  {
    name: 'Bureau EL BARAKAH',
    location: 'Guelmim',
    address: 'Avenue Mohammed V, Guelmim',
    phone: '+212 XXX XXX XXX',
    email: 'elbarakah@groupemajaidri.ma',
    hours: 'Lun-Sam 9h-18h',
    theme: 'barakah'
  },
  {
    name: 'Bureau CITTÀ VERDE',
    location: 'Benslimane',
    address: 'Sur site, Route du Golf, Benslimane',
    phone: '+212 XXX XXX XXX',
    email: 'cittaverde@groupemajaidri.ma',
    hours: '7j/7 9h-19h',
    theme: 'verde'
  }
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: ''
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
              Contact
            </span>
            <div className="w-16 h-0.5 bg-gradient-luxury" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6">
            Votre Projet
            <br />
            <span className="text-gradient-luxury">Commence Ici</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Que vous souhaitiez découvrir nos projets, obtenir des conseils personnalisés 
            ou planifier une visite, notre équipe d'experts est à votre disposition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card-luxury bg-white/5 backdrop-blur-sm border-white/10 p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Demande d'Information
              </h3>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mjaidri-secondary text-white placeholder-white/60"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mjaidri-secondary text-white placeholder-white/60"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Project */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mjaidri-secondary text-white placeholder-white/60"
                        placeholder="+212 XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="project" className="block text-sm font-medium mb-2">
                        Projet d'intérêt
                      </label>
                      <select
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mjaidri-secondary text-white"
                      >
                        <option value="">Sélectionner un projet</option>
                        <option value="soluna">SOLUNA Casablanca</option>
                        <option value="el-barakah">EL BARAKAH Guelmim</option>
                        <option value="citta-verde">CITTÀ VERDE Benslimane</option>
                        <option value="general">Information générale</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mjaidri-secondary text-white placeholder-white/60 resize-none"
                      placeholder="Décrivez votre projet ou vos questions..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="luxury"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Envoi en cours...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-4 h-4" />
                        <span>Envoyer ma demande</span>
                      </div>
                    )}
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Message envoyé !</h4>
                  <p className="text-white/80">
                    Merci pour votre demande. Notre équipe vous contactera dans les plus brefs délais.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* General Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Informations de Contact
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-luxury rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-mjaidri-secondary font-medium">{info.content}</p>
                      <p className="text-white/60 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Project Offices */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Nos Bureaux de Vente
              </h3>
              
              <div className="space-y-4">
                {projectOffices.map((office, index) => (
                  <motion.div
                    key={office.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card-luxury bg-white/5 backdrop-blur-sm border-white/10 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-lg">{office.name}</h4>
                        <p className="text-mjaidri-secondary">{office.location}</p>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${
                        office.theme === 'soluna' ? 'bg-gradient-soluna' :
                        office.theme === 'barakah' ? 'bg-gradient-barakah' :
                        'bg-gradient-verde'
                      }`} />
                    </div>
                    
                    <div className="space-y-2 text-sm text-white/80">
                      <p>📍 {office.address}</p>
                      <p>📞 {office.phone}</p>
                      <p>✉️ {office.email}</p>
                      <p>🕒 {office.hours}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}