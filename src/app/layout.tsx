import type { Metadata } from 'next'
import { Inter, Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'
import { EnhancedHeader } from '@/components/layout/enhanced-header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Groupe Majaidri | Gardiens de l\'Art Immobilier Marocain | Luxe & Excellence depuis 1997',
    template: '%s | Groupe Majaidri'
  },
  description: 'Découvrez l\'art immobilier marocain avec Groupe Majaidri : SOLUNA (or & bleu nuit), EL BARAKAH (terre & oasis), CITTÀ VERDE (émeraude & nacré). Excellence architecturale, innovation éco-luxe, service conciergerie. Depuis 1997.',
  keywords: [
    'groupe majaidri gardiens art immobilier marocain',
    'soluna luxe contemporain',
    'el barakah familial premium', 
    'città verde éco-luxe',
    'excellence immobilière maroc',
    'tradition innovation',
    'casablanca benslimane mohammedia',
    'investissement immobilier luxe'
  ],
  authors: [{ name: 'Groupe Majaidri' }],
  creator: 'Groupe Majaidri',
  publisher: 'Groupe Majaidri',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://groupemajaidri.ma'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: 'https://groupemajaidri.ma',
    siteName: 'Groupe Majaidri',
    title: 'Groupe Majaidri | Gardiens de l\'Art Immobilier Marocain',
    description: 'Excellence immobilière depuis 1997. SOLUNA, EL BARAKAH, CITTÀ VERDE - Trois univers d\'exception.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Groupe Majaidri - Excellence Immobilière',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Groupe Majaidri | Excellence Immobilière Marocaine',
    description: 'SOLUNA, EL BARAKAH, CITTÀ VERDE - Découvrez nos projets d\'exception',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable} ${playfair.variable}`}>
      <body className="font-primary antialiased">
        <EnhancedHeader />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}