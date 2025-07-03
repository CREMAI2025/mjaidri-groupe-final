'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Mail, Bell, Rss } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ActualitesNewsletterSection() {
  const [email, setEmail] = useState('')
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
      setEmail('')
    }, 3000)
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
              Newsletter
            </span>
            <div className="w-16 h-0.5 bg-gradient-luxury" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6">
            Restez
            <br />
            <span className="text-gradient-luxury">Connectés</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Abonnez-vous à notre newsletter pour recevoir en exclusivité nos dernières actualités, 
            événements à venir et offres spéciales.
          </p>
        </motion.div>

        {/* Newsletter Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Votre adresse email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mjaidri-secondary text-white placeholder-white/60"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <input
                    type="checkbox"
                    id="consent"
                    className="w-4 h-4 rounded border-white/30 bg-white/10 text-mjaidri-secondary focus:ring-mjaidri-secondary"
                  />
                  <label htmlFor="consent" className="text-sm text-white/80">
                    J'accepte de recevoir la newsletter mensuelle de Groupe Majaidri
                  </label>
                </div>
                
                <p className="text-xs text-white/60">
                  Vous pouvez vous désinscrire à tout moment. Vos données sont traitées conformément à notre politique de confidentialité.
                </p>
              </div>
              
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
                    <span>Inscription en cours...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>S'abonner à la Newsletter</span>
                  </div>
                )}
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Merci pour votre inscription !</h4>
              <p className="text-white/80">
                Vous recevrez désormais nos actualités et offres exclusives directement dans votre boîte mail.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Other Ways to Stay Connected */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Autres Façons de Rester Connecté
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Rss,
                title: 'Flux RSS',
                description: 'Abonnez-vous à notre flux RSS pour recevoir nos actualités dans votre lecteur favori',
                cta: 'S\'abonner au flux RSS'
              },
              {
                icon: Bell,
                title: 'Notifications',
                description: 'Activez les notifications sur notre site pour être alerté des nouvelles publications',
                cta: 'Activer les notifications'
              },
              {
                icon: Mail,
                title: 'Alertes Email',
                description: 'Configurez des alertes email personnalisées selon vos centres d\'intérêt',
                cta: 'Configurer les alertes'
              }
            ].map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center mb-4">
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{option.title}</h4>
                  <p className="text-white/70 text-sm mb-4">{option.description}</p>
                  <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                    {option.cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}