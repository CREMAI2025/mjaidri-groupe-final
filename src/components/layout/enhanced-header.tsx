'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, Sparkles } from 'lucide-react'
import { HoverMorphLogo } from '@/components/ui/morphing-logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Accueil', href: '/' },
  { 
    name: 'Projets', 
    href: '/projets',
    submenu: [
      { 
        name: 'SOLUNA', 
        href: '/projets/soluna', 
        theme: 'soluna',
        description: 'L\'Harmonie Céleste - Luxe Contemporain'
      },
      { 
        name: 'EL BARAKAH', 
        href: '/projets/el-barakah', 
        theme: 'barakah',
        description: 'La Bénédiction Familiale - Premium Familial'
      },
      { 
        name: 'CITTÀ VERDE', 
        href: '/projets/citta-verde', 
        theme: 'verde',
        description: 'L\'Éden Contemporain - Éco-Luxe Italien'
      },
    ]
  },
  { name: 'À Propos', href: '/a-propos' },
  { name: 'Actualités', href: '/actualites' },
  { name: 'Contact', href: '/contact' },
]

export function EnhancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <motion.header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-luxury border-b border-mjaidri-accent/30' 
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Floating particles in header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-2 h-2 bg-mjaidri-secondary/20 rounded-full"
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          style={{ left: '10%', top: '20%' }}
        />
        <motion.div
          className="absolute w-1 h-1 bg-soluna-primary/30 rounded-full"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 15 }}
          style={{ right: '15%', top: '60%' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo with Morphing Effect */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="flex items-center group">
              <HoverMorphLogo
                defaultVariant="groupe"
                hoverVariant="groupe"
                size="lg"
                className="transition-all duration-300"
              />
              <motion.div
                className="ml-3 hidden lg:block"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="text-sm font-medium text-mjaidri-dark group-hover:text-mjaidri-secondary transition-colors">
                  Groupe Majaidri
                </div>
                <div className="text-xs text-mjaidri-dark/60 group-hover:text-mjaidri-secondary/80 transition-colors">
                  Excellence depuis 1997
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-all duration-300 hover:text-mjaidri-secondary relative group',
                    isActive(item.href)
                      ? 'text-mjaidri-secondary'
                      : isScrolled
                      ? 'text-mjaidri-dark'
                      : 'text-mjaidri-dark'
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-luxury"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Sparkle effect on hover */}
                  <motion.div
                    className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, rotate: 0 }}
                    whileHover={{ scale: 1, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sparkles className="w-3 h-3 text-mjaidri-secondary" />
                  </motion.div>
                </Link>

                {/* Enhanced Submenu */}
                <AnimatePresence>
                  {item.submenu && activeSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-4 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-luxury border border-mjaidri-accent/30 overflow-hidden"
                    >
                      <div className="p-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <motion.div
                            key={subItem.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.1, duration: 0.3 }}
                          >
                            <Link
                              href={subItem.href}
                              className={cn(
                                'block p-4 rounded-xl transition-all duration-300 group',
                                'hover:bg-mjaidri-accent/50 border border-transparent hover:border-mjaidri-accent',
                                isActive(subItem.href)
                                  ? 'bg-mjaidri-accent/30 border-mjaidri-secondary/30'
                                  : ''
                              )}
                            >
                              <div className="flex items-center space-x-4">
                                <motion.div 
                                  className={cn(
                                    'w-4 h-4 rounded-full flex-shrink-0',
                                    subItem.theme === 'soluna' && 'bg-gradient-soluna',
                                    subItem.theme === 'barakah' && 'bg-gradient-barakah',
                                    subItem.theme === 'verde' && 'bg-gradient-verde'
                                  )}
                                  whileHover={{ scale: 1.2, rotate: 180 }}
                                  transition={{ duration: 0.3 }}
                                />
                                <div className="flex-1">
                                  <div className="font-semibold text-mjaidri-dark group-hover:text-mjaidri-secondary transition-colors">
                                    {subItem.name}
                                  </div>
                                  <div className="text-xs text-mjaidri-dark/60 group-hover:text-mjaidri-dark/80 transition-colors mt-1">
                                    {subItem.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Submenu footer */}
                      <div className="bg-mjaidri-accent/20 p-4 border-t border-mjaidri-accent/30">
                        <Link
                          href="/projets"
                          className="text-sm text-mjaidri-secondary hover:text-mjaidri-primary transition-colors font-medium"
                        >
                          Voir tous nos projets →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </nav>

          {/* Enhanced Contact Info & CTA */}
          <motion.div 
            className="hidden lg:flex items-center space-x-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-4 text-sm text-mjaidri-dark">
              <motion.div 
                className="flex items-center space-x-2 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-4 h-4 group-hover:text-mjaidri-secondary transition-colors" />
                <span className="group-hover:text-mjaidri-secondary transition-colors">
                  +212 522 XXX XXX
                </span>
              </motion.div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="luxury" 
                size="lg"
                className="relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Nous Contacter</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl text-mjaidri-dark hover:text-mjaidri-secondary hover:bg-mjaidri-accent/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-mjaidri-accent/30"
          >
            <div className="container mx-auto px-4 py-8">
              <nav className="space-y-6">
                {navigation.map((item, index) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'block py-3 text-lg font-medium transition-colors',
                        isActive(item.href)
                          ? 'text-mjaidri-secondary'
                          : 'text-mjaidri-dark hover:text-mjaidri-secondary'
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-6 mt-3 space-y-3">
                        {item.submenu.map((subItem, subIndex) => (
                          <motion.div
                            key={subItem.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + (subIndex * 0.05), duration: 0.3 }}
                          >
                            <Link
                              href={subItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={cn(
                                'flex items-center space-x-3 py-2 text-base transition-colors',
                                isActive(subItem.href)
                                  ? 'text-mjaidri-secondary'
                                  : 'text-mjaidri-dark/70 hover:text-mjaidri-secondary'
                              )}
                            >
                              <div className={cn(
                                'w-2 h-2 rounded-full',
                                subItem.theme === 'soluna' && 'bg-gradient-soluna',
                                subItem.theme === 'barakah' && 'bg-gradient-barakah',
                                subItem.theme === 'verde' && 'bg-gradient-verde'
                              )} />
                              <span>{subItem.name}</span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>
              
              <motion.div 
                className="mt-8 pt-8 border-t border-mjaidri-accent/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-3 text-sm text-mjaidri-dark">
                    <Phone className="w-4 h-4" />
                    <span>+212 522 XXX XXX</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-mjaidri-dark">
                    <Mail className="w-4 h-4" />
                    <span>contact@groupemajaidri.ma</span>
                  </div>
                  <Button variant="luxury" size="lg" className="w-full mt-4">
                    Nous Contacter
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}