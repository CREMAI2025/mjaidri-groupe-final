'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Building, Users, Award, TrendingUp } from 'lucide-react'

const stats = [
  {
    icon: Building,
    number: 27,
    suffix: '+',
    label: 'Années d\'Excellence',
    description: 'Depuis 1997, nous façonnons l\'avenir immobilier du Maroc',
    color: 'text-mjaidri-secondary'
  },
  {
    icon: Users,
    number: 1000,
    suffix: '+',
    label: 'Familles Satisfaites',
    description: 'Des milliers de foyers heureux dans nos résidences',
    color: 'text-barakah-primary'
  },
  {
    icon: Award,
    number: 98,
    suffix: '%',
    label: 'Satisfaction Client',
    description: 'Un taux de satisfaction qui témoigne de notre excellence',
    color: 'text-soluna-primary'
  },
  {
    icon: TrendingUp,
    number: 15,
    suffix: '%',
    label: 'Croissance Annuelle',
    description: 'Une croissance soutenue qui reflète notre dynamisme',
    color: 'text-verde-primary'
  }
]

function AnimatedNumber({ 
  number, 
  suffix = '', 
  duration = 2000 
}: { 
  number: number
  suffix?: string
  duration?: number 
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * number))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, number, duration])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export function StatsSection() {
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
              Notre Impact
            </span>
            <div className="w-16 h-0.5 bg-gradient-luxury" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6">
            L'Excellence
            <br />
            <span className="text-gradient-luxury">en Chiffres</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Des décennies d'expertise, des milliers de familles satisfaites, 
            et une croissance continue qui témoigne de notre engagement 
            envers l'excellence immobilière.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${stat.color} bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300`}
              >
                <stat.icon className="w-8 h-8" />
              </motion.div>

              {/* Number */}
              <div className={`mb-3 ${stat.color}`}>
                <AnimatedNumber 
                  number={stat.number} 
                  suffix={stat.suffix}
                  duration={2000 + index * 200}
                />
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-sm leading-relaxed">
                {stat.description}
              </p>

              {/* Decorative Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
                className={`h-0.5 mx-auto mt-6 ${
                  stat.color === 'text-mjaidri-secondary' ? 'bg-gradient-luxury' :
                  stat.color === 'text-barakah-primary' ? 'bg-gradient-barakah' :
                  stat.color === 'text-soluna-primary' ? 'bg-gradient-soluna' :
                  'bg-gradient-verde'
                }`}
                style={{ maxWidth: '60px' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Rejoignez Notre Histoire de Succès
            </h3>
            <p className="text-white/80 mb-8">
              Découvrez pourquoi plus de 1000 familles nous font confiance 
              pour leurs projets immobiliers les plus précieux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-luxury text-white font-semibold rounded-lg shadow-glow-gold hover:shadow-lg transition-all duration-300"
              >
                Découvrir Nos Projets
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Nous Contacter
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-luxury rounded-full opacity-10 animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-barakah rounded-full opacity-10 animate-float animation-delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-verde rounded-full opacity-10 animate-float animation-delay-2000" />
    </section>
  )
}