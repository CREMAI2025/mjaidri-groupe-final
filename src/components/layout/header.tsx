'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Logo } from '@/components/ui/logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Accueil', href: '/' },
  { 
    name: 'Projets', 
    href: '/projets',
    submenu: [
      { name: 'SOLUNA', href: '/projets/soluna', theme: 'soluna' },
      { name: 'EL BARAKAH', href: '/projets/el-barakah', theme: 'barakah' },
      { name: 'CITTÀ VERDE', href: '/projets/citta-verde', theme: 'verde' },
    ]
  },
  { name: 'À Propos', href: '/a-propos' },
  { name: 'Actualités', href: '/actualites' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-luxury border-b border-mjaidri-accent' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center">
              <Logo 
                variant="groupe" 
                size="lg" 
                theme={isScrolled ? 'light' : 'light'}
                priority
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200 hover:text-mjaidri-secondary',
                    isActive(item.href)
                      ? 'text-mjaidri-secondary'
                      : isScrolled
                      ? 'text-mjaidri-dark'
                      : 'text-mjaidri-dark'
                  )}
                >
                  {item.name}
                </Link>

                {/* Submenu */}
                <AnimatePresence>
                  {item.submenu && activeSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-luxury border border-mjaidri-accent overflow-hidden"
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={cn(
                            'block px-6 py-4 text-sm font-medium transition-colors duration-200',
                            'hover:bg-mjaidri-accent border-b border-mjaidri-accent/50 last:border-b-0',
                            isActive(subItem.href)
                              ? 'text-mjaidri-secondary bg-mjaidri-accent/30'
                              : 'text-mjaidri-dark hover:text-mjaidri-secondary'
                          )}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={cn(
                              'w-3 h-3 rounded-full',
                              subItem.theme === 'soluna' && 'bg-gradient-soluna',
                              subItem.theme === 'barakah' && 'bg-gradient-barakah',
                              subItem.theme === 'verde' && 'bg-gradient-verde'
                            )} />
                            <span>{subItem.name}</span>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-mjaidri-dark">
              <Phone className="w-4 h-4" />
              <span>+212 522 XXX XXX</span>
            </div>
            <Button variant="luxury" size="lg">
              Nous Contacter
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-mjaidri-dark hover:text-mjaidri-secondary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-mjaidri-accent"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'block py-2 text-base font-medium transition-colors',
                        isActive(item.href)
                          ? 'text-mjaidri-secondary'
                          : 'text-mjaidri-dark hover:text-mjaidri-secondary'
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              'block py-1 text-sm transition-colors',
                              isActive(subItem.href)
                                ? 'text-mjaidri-secondary'
                                : 'text-mjaidri-dark/70 hover:text-mjaidri-secondary'
                            )}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              
              <div className="mt-6 pt-6 border-t border-mjaidri-accent">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-mjaidri-dark">
                    <Phone className="w-4 h-4" />
                    <span>+212 522 XXX XXX</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-mjaidri-dark">
                    <Mail className="w-4 h-4" />
                    <span>contact@groupemajaidri.ma</span>
                  </div>
                  <Button variant="luxury" size="lg" className="w-full">
                    Nous Contacter
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}