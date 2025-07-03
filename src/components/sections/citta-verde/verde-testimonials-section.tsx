'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { CittaVerdeContent } from '@/lib/markdown'

interface VerdeTestimonialsSectionProps {
  content: CittaVerdeContent;
}

export function VerdeTestimonialsSection({ content }: VerdeTestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === content.testimonials.items.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? content.testimonials.items.length - 1 : prevIndex - 1;
      }
    });
  }

  const currentTestimonial = content.testimonials.items[currentIndex];

  return (
    <section className="section-padding bg-gradient-to-br from-verde-primary/5 to-verde-secondary/5">
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
            <div className="w-16 h-0.5 bg-gradient-verde" />
            <span className="text-sm font-medium tracking-wider uppercase text-verde-primary">
              Témoignages
            </span>
            <div className="w-16 h-0.5 bg-gradient-verde" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-accent font-bold mb-6 text-mjaidri-dark">
            Ils Ont Choisi
            <br />
            <span className="text-gradient-verde">CITTÀ VERDE</span>
          </h2>
          
          <p className="text-xl text-mjaidri-dark/80 max-w-3xl mx-auto leading-relaxed">
            Découvrez les témoignages authentiques de nos propriétaires qui ont fait 
            de CITTÀ VERDE leur lieu de vie ou d'investissement.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <div className="h-full bg-white rounded-3xl shadow-luxury overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    {/* Content Side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      {/* Quote Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="w-16 h-16 rounded-full bg-gradient-verde flex items-center justify-center mb-8"
                      >
                        <Quote className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Rating */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex items-center space-x-1 mb-6"
                      >
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </motion.div>

                      {/* Comment */}
                      <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg md:text-xl text-mjaidri-dark leading-relaxed mb-8 font-medium italic"
                      >
                        "{currentTestimonial.comment}"
                      </motion.blockquote>

                      {/* Client Info */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img
                              src={`https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80`}
                              alt={currentTestimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-mjaidri-dark">
                              {currentTestimonial.name}
                            </h4>
                            <p className="text-mjaidri-dark/80 text-sm">
                              {currentTestimonial.profession}
                            </p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-2 text-sm">
                          <div>
                            <span className="text-mjaidri-dark/60">Type de terrain :</span>
                            <div className="font-semibold text-verde-primary">
                              {currentTestimonial.plotType}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Visual Side */}
                    <div className="relative overflow-hidden bg-gradient-verde">
                      {/* Highlight Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="absolute top-8 left-8 z-10"
                      >
                        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold text-sm">
                          Témoignage Authentique
                        </div>
                      </motion.div>

                      {/* Decorative Elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0, rotate: 0 }}
                          animate={{ scale: 1, rotate: 360 }}
                          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                          className="w-64 h-64 border-2 border-white/20 rounded-full"
                        />
                        <motion.div
                          initial={{ scale: 0, rotate: 0 }}
                          animate={{ scale: 1, rotate: -360 }}
                          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                          className="absolute w-48 h-48 border border-white/30 rounded-full"
                        />
                      </div>

                      {/* CITTÀ VERDE Branding */}
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="absolute bottom-8 left-8 right-8 text-center"
                      >
                        <h3 className="text-4xl md:text-5xl font-accent font-bold text-white mb-2">
                          CITTÀ VERDE
                        </h3>
                        <p className="text-white/80 text-lg">
                          L'Éden Contemporain
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-mjaidri-dark hover:bg-white transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-mjaidri-dark hover:bg-white transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {content.testimonials.items.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-verde scale-125'
                    : 'bg-mjaidri-dark/20 hover:bg-mjaidri-dark/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-verde mb-2">100%</div>
            <div className="text-mjaidri-dark/70">Satisfaction Client</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-verde mb-2">+15%</div>
            <div className="text-mjaidri-dark/70">Valorisation Moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-verde mb-2">80%</div>
            <div className="text-mjaidri-dark/70">Phase 1 Vendue</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}