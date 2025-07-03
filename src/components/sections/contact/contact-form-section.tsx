'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ContactContent } from '@/lib/markdown'

interface ContactFormSectionProps {
  content: ContactContent;
}

export function ContactFormSection({ content }: ContactFormSectionProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
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
      setFormData({})
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
              Formulaire
            </span>
            <div className="w-16 h-0.5 bg-gradient-luxury" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6 text-mjaidri-dark">
            Contactez-Nous
            <br />
            <span className="text-gradient-luxury">Directement</span>
          </h2>
          
          <p className="text-xl text-mjaidri-dark/80 max-w-3xl mx-auto leading-relaxed">
            {content.form.description}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="card-luxury p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.form.fields.filter(field => field.type !== 'textarea').map((field, index) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="block text-sm font-medium text-mjaidri-dark mb-2">
                        {field.label} {field.required && '*'}
                      </label>
                      
                      {field.type === 'select' ? (
                        <select
                          id={field.name}
                          name={field.name}
                          value={formData[field.name] || ''}
                          onChange={handleChange}
                          required={field.required}
                          className="w-full px-4 py-3 bg-mjaidri-accent/10 border border-mjaidri-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-mjaidri-secondary text-mjaidri-dark"
                        >
                          <option value="">Sélectionner</option>
                          {field.options?.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name] || ''}
                          onChange={handleChange}
                          required={field.required}
                          className="w-full px-4 py-3 bg-mjaidri-accent/10 border border-mjaidri-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-mjaidri-secondary text-mjaidri-dark placeholder-mjaidri-dark/50"
                          placeholder={`Votre ${field.label.toLowerCase()}`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Message Textarea */}
                {content.form.fields.find(field => field.type === 'textarea') && (
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-mjaidri-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message || ''}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-mjaidri-accent/10 border border-mjaidri-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-mjaidri-secondary text-mjaidri-dark placeholder-mjaidri-dark/50 resize-none"
                      placeholder="Décrivez votre projet ou vos questions..."
                    />
                  </div>
                )}
                
                {/* Consent Checkbox */}
                <div>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1 w-4 h-4 rounded border-mjaidri-accent/50 text-mjaidri-secondary focus:ring-mjaidri-secondary"
                    />
                    <label htmlFor="consent" className="text-sm text-mjaidri-dark/80">
                      J'accepte que mes données soient traitées par Groupe Majaidri pour traiter ma demande. 
                      Pour en savoir plus sur la gestion de vos données et vos droits, consultez notre politique de confidentialité. *
                    </label>
                  </div>
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
                className="text-center py-12"
              >
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-mjaidri-dark mb-3">
                  Message Envoyé avec Succès !
                </h3>
                <p className="text-mjaidri-dark/80 max-w-md mx-auto">
                  Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais, 
                  généralement sous 24 heures ouvrables.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Contact Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-12"
        >
          <div className="bg-mjaidri-accent/20 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-mjaidri-dark mb-4 text-center">
              Préférences de Contact
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: 'Téléphone',
                  description: 'Pour une réponse immédiate',
                  icon: Phone,
                  color: 'text-blue-500'
                },
                {
                  title: 'Email',
                  description: 'Pour des demandes détaillées',
                  icon: Mail,
                  color: 'text-green-500'
                },
                {
                  title: 'Visite',
                  description: 'Pour un conseil personnalisé',
                  icon: MapPin,
                  color: 'text-red-500'
                }
              ].map((preference, index) => (
                <motion.div
                  key={preference.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-4 text-center"
                >
                  <preference.icon className={`w-8 h-8 ${preference.color} mx-auto mb-2`} />
                  <h4 className="font-semibold text-mjaidri-dark mb-1">
                    {preference.title}
                  </h4>
                  <p className="text-sm text-mjaidri-dark/70">
                    {preference.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}