'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from './logo'

interface MorphingLogoProps {
  logos: Array<{
    variant: 'groupe' | 'soluna' | 'barakah' | 'verde'
    duration?: number
  }>
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function MorphingLogo({ 
  logos, 
  size = 'md', 
  className = '' 
}: MorphingLogoProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length)
    }, logos[currentIndex]?.duration || 3000)

    return () => clearInterval(interval)
  }, [logos, currentIndex])

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ 
            opacity: 0, 
            scale: 0.8,
            rotateY: -90
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotateY: 0
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.8,
            rotateY: 90
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="transform-gpu"
        >
          <Logo 
            variant={logos[currentIndex].variant}
            size={size}
            className="hover:scale-110 transition-transform duration-300"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// Hover Morphing Effect
interface HoverMorphLogoProps {
  defaultVariant: 'groupe' | 'soluna' | 'barakah' | 'verde'
  hoverVariant: 'groupe' | 'soluna' | 'barakah' | 'verde'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function HoverMorphLogo({
  defaultVariant,
  hoverVariant,
  size = 'md',
  className = ''
}: HoverMorphLogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`relative cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isHovered ? 'hover' : 'default'}
          initial={{ 
            opacity: 0, 
            scale: 0.9,
            rotateX: -15
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotateX: 0
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.9,
            rotateX: 15
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
          className="transform-gpu"
        >
          <Logo 
            variant={isHovered ? hoverVariant : defaultVariant}
            size={size}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}