export interface Project {
  id: string
  slug: string
  name: string
  subtitle: string
  location: string
  type: 'appartements' | 'lotissement' | 'villas'
  status: 'en-cours' | 'livre' | 'a-venir'
  theme: 'soluna' | 'barakah' | 'verde'
  hero: {
    title: string
    subtitle: string
    description: string
    backgroundImage: string
    backgroundVideo?: string
  }
  content: {
    presentation: string
    architecture: string
    lifestyle: string
    amenities: Amenity[]
    location: LocationDetails
    gallery: MediaItem[]
    floorPlans: FloorPlan[]
    pricing: PricingInfo
  }
  testimonials: Testimonial[]
  contact: ContactInfo
}

export interface Amenity {
  id: string
  name: string
  description: string
  icon: string
  category: 'wellness' | 'security' | 'lifestyle' | 'services'
}

export interface LocationDetails {
  address: string
  coordinates: {
    lat: number
    lng: number
  }
  proximities: Proximity[]
  transport: TransportInfo[]
}

export interface Proximity {
  name: string
  distance: string
  type: 'education' | 'health' | 'shopping' | 'leisure'
}

export interface TransportInfo {
  type: string
  name: string
  distance: string
}

export interface MediaItem {
  id: string
  type: 'image' | 'video'
  url: string
  alt: string
  caption?: string
  thumbnail?: string
}

export interface FloorPlan {
  id: string
  name: string
  type: string
  surface: number
  rooms: number
  bathrooms: number
  price: number
  imageUrl: string
  features: string[]
}

export interface PricingInfo {
  startingPrice: number
  priceRange: {
    min: number
    max: number
  }
  paymentOptions: PaymentOption[]
}

export interface PaymentOption {
  name: string
  description: string
  downPayment: number
  installments: number
}

export interface Testimonial {
  id: string
  name: string
  age?: number
  profession?: string
  comment: string
  rating: number
  avatar?: string
  project: string
}

export interface ContactInfo {
  phone: string
  email: string
  whatsapp: string
  address: string
  hours: string
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  image: string
  slug: string
}

export interface TeamMember {
  id: string
  name: string
  position: string
  bio: string
  image: string
  linkedin?: string
}