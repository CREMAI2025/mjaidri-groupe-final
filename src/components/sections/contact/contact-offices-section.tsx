'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ContactContent } from '@/lib/markdown'

interface ContactOfficesSectionProps {
  content: ContactContent;
}

export function ContactOfficesSection({ content }: ContactOfficesSectionProps) {
  // Map theme to project
  const getOfficeTheme = (officeName: string) => {
    if (officeName.includes('SOLUNA')) return 'soluna';
    if (officeName.includes('EL BARAKAH')) return 'barakah';
    if (officeName.includes('CITTÀ VERDE')) return 'verde';
    return 'luxury';
  };

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
              Bureaux de Vente
            </span>
            <div className="w-16 h-0.5 bg-gradient-luxury" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6 text-mjaidri-dark">
            Nos Bureaux
            <br />
            <span className="text-gradient-luxury">Spécialisés</span>
          </h2>
          
          <p className="text-xl text-mjaidri-dark/80 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos bureaux de vente dédiés à chacun de nos projets, où nos équipes 
            spécialisées vous accueillent pour des visites et conseils personnalisés.
          </p>
        </motion.div>

        {/* Sales Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.salesOffices.offices.map((office, index) => {
            const theme = getOfficeTheme(office.name);
            return (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-luxury hover-lift overflow-hidden"
              >
                {/* Office Header */}
                <div className={`p-6 border-b border-mjaidri-accent/30 ${
                  theme === 'soluna' ? 'bg-gradient-soluna' :
                  theme === 'barakah' ? 'bg-gradient-barakah' :
                  theme === 'verde' ? 'bg-gradient-verde' :
                  'bg-gradient-luxury'
                } text-white`}>
                  <h3 className="text-xl font-semibold mb-1">
                    {office.name}
                  </h3>
                  <p className="text-white/80">
                    {office.location}
                  </p>
                </div>

                {/* Office Details */}
                <div className="p-6 space-y-4">
                  {[
                    {
                      icon: MapPin,
                      title: 'Adresse',
                      content: office.address
                    },
                    {
                      icon: Phone,
                      title: 'Téléphone',
                      content: office.phone
                    },
                    {
                      icon: Mail,
                      title: 'Email',
                      content: office.email
                    },
                    {
                      icon: Clock,
                      title: 'Horaires',
                      content: office.hours
                    }
                  ].map((detail, detailIndex) => (
                    <motion.div
                      key={detail.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (index * 0.2) + (detailIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <detail.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        theme === 'soluna' ? 'text-soluna-primary' :
                        theme === 'barakah' ? 'text-barakah-primary' :
                        theme === 'verde' ? 'text-verde-primary' :
                        'text-mjaidri-secondary'
                      }`} />
                      <div>
                        <div className="text-sm font-medium text-mjaidri-dark">
                          {detail.title}
                        </div>
                        <div className="text-mjaidri-dark/80">
                          {detail.content}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <Button 
                    variant={theme as any} 
                    size="lg" 
                    className="w-full"
                  >
                    Prendre Rendez-vous
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-mjaidri-dark">
              Notre Équipe Commerciale
            </h3>
            <p className="text-mjaidri-dark/80">
              Des experts dédiés à votre service pour vous accompagner dans votre projet immobilier
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.team.members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                viewport={{ once: true }}
                className="card-luxury p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-mjaidri-accent mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-luxury flex items-center justify-center text-white text-2xl font-semibold">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h4 className="font-semibold text-mjaidri-dark mb-1">
                  {member.name}
                </h4>
                <p className="text-mjaidri-secondary text-sm mb-3">
                  {member.position}
                </p>
                <div className="text-sm text-mjaidri-dark/70 mb-4">
                  <p>{member.phone}</p>
                  <p className="truncate">{member.email}</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.specialties.map((specialty, specIndex) => (
                    <span 
                      key={specIndex}
                      className="px-2 py-1 bg-mjaidri-accent/50 rounded-full text-xs text-mjaidri-dark/80"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}