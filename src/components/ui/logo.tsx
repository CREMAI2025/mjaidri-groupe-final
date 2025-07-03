'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant: 'groupe' | 'soluna' | 'barakah' | 'verde'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  theme?: 'light' | 'dark'
  className?: string
  priority?: boolean
}

const logoConfig = {
  groupe: {
    src: '/assets/logos/groupe/majaidri-logo',
    alt: 'Groupe Majaidri - Immobilier de Luxe au Maroc',
    sizes: { sm: 100, md: 150, lg: 200, xl: 300 }
  },
  soluna: {
    src: '/assets/logos/projets/soluna/logo-soluna',
    alt: 'SOLUNA - L\'Éclat Éternel de l\'Excellence',
    sizes: { sm: 80, md: 120, lg: 160, xl: 240 }
  },
  barakah: {
    src: '/assets/logos/projets/el-barakah/logo-barakah',
    alt: 'EL BARAKAH - La Bénédiction Éternelle du Foyer',
    sizes: { sm: 80, md: 120, lg: 160, xl: 240 }
  },
  verde: {
    src: '/assets/logos/projets/citta-verde/logo-verde',
    alt: 'CITTÀ VERDE - L\'Éden Contemporain de Demain',
    sizes: { sm: 80, md: 120, lg: 160, xl: 240 }
  }
}

export function Logo({ 
  variant, 
  size = 'md', 
  theme = 'light', 
  className, 
  priority = false 
}: LogoProps) {
  const config = logoConfig[variant]
  const width = config.sizes[size]
  const height = Math.round(width * 0.4)
  const themeSuffix = theme === 'dark' ? '-blanc' : ''
  
  return (
    <div className={cn('logo-container', className)}>
      <picture>
        <source srcSet={`${config.src}${themeSuffix}.webp`} type="image/webp" />
        <Image
          src={`${config.src}${themeSuffix}.png`}
          alt={config.alt}
          width={width}
          height={height}
          priority={priority}
          className="logo-image transition-all duration-300 hover:scale-105 object-contain"
        />
      </picture>
    </div>
  )
}