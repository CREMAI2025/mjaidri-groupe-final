import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from '@/components/ui/logo'
import { Button } from '@/components/ui/button'

const footerLinks = {
  projets: [
    { name: 'SOLUNA Casablanca', href: '/projets/soluna' },
    { name: 'EL BARAKAH Guelmim', href: '/projets/el-barakah' },
    { name: 'CITTÀ VERDE Benslimane', href: '/projets/citta-verde' },
  ],
  entreprise: [
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Notre Histoire', href: '/a-propos#histoire' },
    { name: 'Notre Vision', href: '/a-propos#vision' },
    { name: 'Actualités', href: '/actualites' },
  ],
  services: [
    { name: 'Conseil Immobilier', href: '/services/conseil' },
    { name: 'Financement', href: '/services/financement' },
    { name: 'Gestion Locative', href: '/services/gestion' },
    { name: 'Support Client', href: '/contact' },
  ],
  legal: [
    { name: 'Mentions Légales', href: '/mentions-legales' },
    { name: 'Politique de Confidentialité', href: '/confidentialite' },
    { name: 'Conditions Générales', href: '/conditions' },
    { name: 'Plan du Site', href: '/sitemap' },
  ]
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
]

const contactInfo = [
  {
    icon: MapPin,
    title: 'Siège Social',
    content: 'Casablanca, Maroc',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    content: '+212 522 XXX XXX',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@groupemajaidri.ma',
  },
]

export function Footer() {
  return (
    <footer className="bg-mjaidri-dark text-mjaidri-light">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo variant="groupe" size="lg" theme="dark" className="mb-6" />
            <p className="text-mjaidri-light/80 mb-6 leading-relaxed">
              Depuis 1997, Groupe Majaidri façonne l'avenir de l'immobilier marocain 
              avec excellence, innovation et engagement envers le développement durable.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <item.icon className="w-5 h-5 text-mjaidri-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-mjaidri-light/80 text-sm">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projets */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-mjaidri-secondary">
              Nos Projets
            </h3>
            <ul className="space-y-3">
              {footerLinks.projets.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-mjaidri-light/80 hover:text-mjaidri-secondary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-mjaidri-secondary">
              Entreprise
            </h3>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-mjaidri-light/80 hover:text-mjaidri-secondary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-mjaidri-secondary">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-mjaidri-light/80 hover:text-mjaidri-secondary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-mjaidri-light/20">
          <div className="max-w-md">
            <h3 className="font-semibold text-lg mb-4 text-mjaidri-secondary">
              Restez Informé
            </h3>
            <p className="text-mjaidri-light/80 mb-4 text-sm">
              Recevez nos dernières actualités et opportunités immobilières.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 bg-mjaidri-light/10 border border-mjaidri-light/20 rounded-md text-mjaidri-light placeholder-mjaidri-light/60 focus:outline-none focus:ring-2 focus:ring-mjaidri-secondary"
              />
              <Button variant="luxury" size="default">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-mjaidri-light/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-mjaidri-light/60">
              © 2024 Groupe Majaidri. Tous droits réservés.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-mjaidri-light/60 hover:text-mjaidri-secondary transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm">
              {footerLinks.legal.map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <Link
                    href={link.href}
                    className="text-mjaidri-light/60 hover:text-mjaidri-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="ml-4 text-mjaidri-light/40">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}