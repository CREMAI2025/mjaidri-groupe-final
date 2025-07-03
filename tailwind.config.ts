import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Groupe Majaidri - Couleurs Corporate
        mjaidri: {
          primary: '#1B2951',      // Bleu Nuit Profond
          secondary: '#D4AF37',    // Or Prestigieux
          accent: '#F8F6F0',       // Blanc Nacré
          dark: '#0F1419',         // Noir Élégant
          light: '#FFFFFF',        // Blanc Pur
        },
        // SOLUNA - Prestige Doré
        soluna: {
          primary: '#D4AF37',      // Or Royal
          secondary: '#1B2951',    // Bleu Nuit
          accent: '#F8F6F0',       // Blanc Nacré
          silver: '#C0C0C0',       // Argent Lunaire
          night: '#191970',        // Bleu Nuit Mystique
        },
        // EL BARAKAH - Harmonie Verte
        barakah: {
          primary: '#50C878',      // Vert Émeraude
          secondary: '#A0522D',    // Terre de Sienne
          accent: '#F5F5DC',       // Blanc Perle
          gold: '#B8860B',         // Or Antique
        },
        // CITTÀ VERDE - Éco-Luxe
        verde: {
          primary: '#9CAF88',      // Vert Sauge
          secondary: '#E2725B',    // Terracotta
          accent: '#FAF0E6',       // Blanc Cassé
          emerald: '#00A86B',      // Vert Émeraude
          ivory: '#FFFFF0',        // Blanc Ivoire
          tuscany: '#8B4513',      // Terre de Toscane
          mediterranean: '#006994', // Bleu Méditerranée
        },
      },
      fontFamily: {
        primary: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        secondary: ['Poppins', 'Helvetica Neue', 'sans-serif'],
        accent: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'xs': '0.75rem',    // 12px
        'sm': '0.875rem',   // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
        '6xl': '3.75rem',   // 60px
        '7xl': '4.5rem',    // 72px
        '8xl': '6rem',      // 96px
        '9xl': '8rem',      // 128px
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'logo-entrance': 'logoEntrance 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        logoEntrance: {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0A1628 0%, #1E3A8A 50%, #3B82F6 100%)',
        'gradient-luxury': 'linear-gradient(45deg, #D4AF37 0%, #FFD700 50%, #FFA500 100%)',
        'gradient-tech': 'linear-gradient(90deg, #00D4FF 0%, #0099CC 100%)',
        'gradient-soluna': 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
        'gradient-barakah': 'linear-gradient(135deg, #50C878 0%, #3A9B5C 100%)',
        'gradient-verde': 'linear-gradient(135deg, #9CAF88 0%, #7A8F6F 100%)',
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glow-gold': '0 0 30px rgba(212, 175, 55, 0.3)',
        'glow-emerald': '0 0 30px rgba(80, 200, 120, 0.3)',
        'glow-sage': '0 0 30px rgba(156, 175, 136, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config