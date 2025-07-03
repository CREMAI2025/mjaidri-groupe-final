'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Calendar, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'

const contactInfo = [
  {
    icon: Phone,
    title: 'Téléphone Direct',
    content: '+212 522 XXX XXX',
    description: 'Ligne dédiée SOLUNA'
  },
  {
    icon: Mail,
    title: 'Email SOLUNA',
    content: 'soluna@groupemajaidri.ma',
    description: 'Réponse sous 2h'
  },
  {
    icon: MapPin,
    title: 'Bureau de Vente',
    content: 'Résidence SOLUNA, Casablanca',
    description: 'Appartement témoin'
  },
  {
    icon: Clock,
    title: 'Horaires',
    content: 'Lun-Sam 9h-19h, Dim 10h-16h',
    description: 'Visites sur RDV'
  }
]

const services = [
  {
    icon: Calendar,
    title: 'Visite Personnalisée',
    description: 'Découvrez les appartements témoins avec un conseiller dédié'
  },
  {
    icon: Calculator,
    title: 'Simulation Financière',
    description: 'Calculez votre capacité d\'emprunt et vos mensualités'
  },
  {
    icon: Send,
    title: 'Dossier Complet',
    description: 'Recevez la documentation complète du projet'
  }
]

export function SolunaContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    apartment: '',
    budget: '',
    message: '',
    visitDate: '',
    visitTime: ''
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
        apartment: '',
        budget: '',
        message: '',
        visitDate: '',
        visitTime: ''
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
    <section className="section-padding bg-gradient-to-br from-soluna-secondary via-soluna-secondary/90 to-soluna-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent" />
            <span className="text-sm font-medium tracking-wider uppercase text-white/90">
              Contact SOLUNA
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6">
            Votre Nouvelle Vie
            <br />
            <span className="text-soluna-primary">Commence Ici</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Notre équipe SOLUNA vous accompagne dans la découverte de votre futur 
            appartement d'exception. Contactez-nous pour une expérience personnalisée.
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
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold mb-6">
                Réservez Votre Visite Privée
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-soluna-primary text-white placeholder-white/60"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-soluna-primary text-white placeholder-white/60"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Apartment */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-soluna-primary text-white placeholder-white/60"
                        placeholder="+212 XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="apartment" className="block text-sm font-medium mb-2">
                        Appartement d'intérêt
                      </label>
                      <select
                        id="apartment"
                        name="apartment"
                        value={formData.apartment}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-soluna-primary text-white"
                      >
                        <option value="">Sélectionner</option>
                        <option value="cocon-solaire">Le Cocon Solaire (2P)</option>
                        <option value="harmonie-lunaire">L'Harmonie Lunaire (3P)</option>
                        <option value="palais-stellaire">Le Palais Stellaire (4P)</option>
                        <option value="penthouse">Penthouse</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget & Visit Date */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-2">
                        Budget envisagé
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-soluna-primary text-white"
                      >
                        <option value="">Sélectionner</option>
                        <option value="800k-1.2m">800K - 1.2M Dhs</option>
                        <option value="1.2m-2m">1.2M - 2M Dhs</option>
                        <option value="2m-3m">2M - 3M Dhs</option>
                        <option value="3m+">3M+ Dhs</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="visitDate" className="block text-sm font-medium mb-2">
                        Date de visite souhaitée
                      </label>
                      <input
                        type="date"
                        id="visitDate"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-soluna-primary text-white"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-soluna-primary text-white placeholder-white/60 resize-none"
                      placeholder="Vos questions ou demandes spécifiques..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="soluna"
                    size="lg"
                    className="w-full bg-white text-soluna-primary hover:bg-white/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-soluna-primary/30 border-t-soluna-primary rounded-full animate-spin" />
                        <span>Envoi en cours...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-4 h-4" />
                        <span>Réserver ma Visite</span>
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
                  <h4 className="text-xl font-semibold mb-2">Demande envoyée !</h4>
                  <p className="text-white/80">
                    Notre équipe SOLUNA vous contactera dans les 2 heures pour confirmer votre visite.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Information & Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Bureau de Vente SOLUNA
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
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-soluna-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-soluna-primary font-medium">{info.content}</p>
                      <p className="text-white/60 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Nos Services Exclusifs
              </h3>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-soluna-primary to-soluna-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="font-semibold text-white mb-4">Actions Rapides</h4>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-left p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  📞 Appel immédiat avec un conseiller
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-left p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  📱 Chat WhatsApp en direct
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-left p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  📧 Recevoir la brochure complète
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}