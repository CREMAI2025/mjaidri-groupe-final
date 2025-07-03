import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Base interfaces
export interface BaseContent {
  title: string;
  description: string;
  keywords: string[];
  author?: string;
  date?: string;
  lang?: string;
  schema_markup?: string;
}

// Accueil content interface
export interface AccueilContent extends BaseContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroSignature: string;
  projects: {
    soluna: {
      title: string;
      subtitle: string;
      description: string;
      signatures: string[];
    };
    elBarakah: {
      title: string;
      subtitle: string;
      description: string;
      signatures: string[];
    };
    cittaVerde: {
      title: string;
      subtitle: string;
      description: string;
      signatures: string[];
    };
  };
  stats: {
    years: string;
    projects: string;
    families: string;
    satisfaction: string;
  };
}

// A Propos content interface
export interface AProposContent extends BaseContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  history: {
    title: string;
    periods: {
      years: string;
      title: string;
      description: string;
    }[];
  };
  vision: {
    title: string;
    subtitle: string;
    description: string;
    pillars: {
      title: string;
      subtitle: string;
      description: string;
    }[];
  };
  values: {
    title: string;
    values: {
      name: string;
      subtitle: string;
      description: string;
    }[];
  };
}

// Soluna content interface
export interface SolunaContent extends BaseContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  location: string;
  overview: {
    title: string;
    description: string;
    features: {
      title: string;
      description: string;
    }[];
  };
  apartments: {
    title: string;
    types: {
      name: string;
      subtitle: string;
      surface: string;
      rooms: number;
      bathrooms: number;
      price: string;
      description: string;
      features: string[];
      idealFor: string;
      image: string;
    }[];
  };
  amenities: {
    title: string;
    description: string;
    categories: {
      name: string;
      items: {
        name: string;
        description: string;
      }[];
    }[];
  };
  location_details: {
    title: string;
    description: string;
    proximities: {
      category: string;
      items: {
        name: string;
        distance: string;
        type: string;
      }[];
    }[];
  };
  testimonials: {
    title: string;
    items: {
      name: string;
      age?: number;
      profession: string;
      rating: number;
      comment: string;
      apartment: string;
      purchaseDate: string;
      highlight: string;
    }[];
  };
  contact: {
    title: string;
    description: string;
    info: {
      phone: string;
      email: string;
      address: string;
      hours: string;
    };
  };
}

// El Barakah content interface
export interface ElBarakahContent extends BaseContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  location: string;
  overview: {
    title: string;
    description: string;
    features: {
      title: string;
      description: string;
    }[];
  };
  apartments: {
    title: string;
    types: {
      name: string;
      subtitle: string;
      surface: string;
      rooms: number;
      bathrooms: number;
      price: string;
      description: string;
      features: string[];
      idealFor: string;
      image: string;
    }[];
  };
  amenities: {
    title: string;
    description: string;
    categories: {
      name: string;
      items: {
        name: string;
        description: string;
      }[];
    }[];
  };
  location_details: {
    title: string;
    description: string;
    proximities: {
      category: string;
      items: {
        name: string;
        distance: string;
        type: string;
      }[];
    }[];
  };
  regional_impact: {
    title: string;
    description: string;
    aspects: {
      title: string;
      description: string;
    }[];
  };
  testimonials: {
    title: string;
    items: {
      name: string;
      profession: string;
      comment: string;
      apartment: string;
    }[];
  };
  contact: {
    title: string;
    description: string;
    info: {
      phone: string;
      email: string;
      address: string;
      hours: string;
    };
  };
}

// Citta Verde content interface
export interface CittaVerdeContent extends BaseContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  location: string;
  overview: {
    title: string;
    description: string;
    features: {
      title: string;
      description: string;
    }[];
  };
  plots: {
    title: string;
    types: {
      name: string;
      subtitle: string;
      surface: string;
      elevation: string;
      price: string;
      description: string;
      features: string[];
      idealFor: string;
      image: string;
    }[];
  };
  sustainability: {
    title: string;
    description: string;
    features: {
      title: string;
      description: string;
    }[];
  };
  infrastructure: {
    title: string;
    description: string;
    categories: {
      name: string;
      items: string[];
    }[];
  };
  location_details: {
    title: string;
    description: string;
    proximities: {
      category: string;
      items: {
        name: string;
        distance: string;
        type: string;
      }[];
    }[];
  };
  testimonials: {
    title: string;
    items: {
      name: string;
      profession: string;
      comment: string;
      plotType: string;
    }[];
  };
  contact: {
    title: string;
    description: string;
    info: {
      phone: string;
      email: string;
      address: string;
      hours: string;
    };
  };
}

// Nos Projets content interface
export interface NosProjetsContent extends BaseContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  projects: {
    soluna: {
      title: string;
      subtitle: string;
      location: string;
      type: string;
      description: string;
      features: string[];
      priceRange: string;
    };
    elBarakah: {
      title: string;
      subtitle: string;
      location: string;
      type: string;
      description: string;
      features: string[];
      priceRange: string;
    };
    cittaVerde: {
      title: string;
      subtitle: string;
      location: string;
      type: string;
      description: string;
      features: string[];
      priceRange: string;
    };
  };
  comparison: {
    title: string;
    description: string;
    table: {
      headers: string[];
      rows: {
        criteria: string;
        soluna: string;
        elBarakah: string;
        cittaVerde: string;
      }[];
    };
    guide: {
      soluna: string[];
      elBarakah: string[];
      cittaVerde: string[];
    };
  };
  process: {
    title: string;
    description: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
}

// Actualites content interface
export interface ActualitesContent extends BaseContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  articles: {
    title: string;
    date: string;
    category: string;
    excerpt: string;
    content: string;
    image: string;
    slug: string;
    featured: boolean;
  }[];
  events: {
    title: string;
    date: string;
    location: string;
    description: string;
    type: string;
  }[];
  press: {
    title: string;
    source: string;
    date: string;
    excerpt: string;
    link?: string;
  }[];
}

// Contact content interface
export interface ContactContent extends BaseContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  mainOffice: {
    title: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  salesOffices: {
    title: string;
    offices: {
      name: string;
      location: string;
      address: string;
      phone: string;
      email: string;
      hours: string;
    }[];
  };
  team: {
    title: string;
    members: {
      name: string;
      position: string;
      phone: string;
      email: string;
      specialties: string[];
    }[];
  };
  form: {
    title: string;
    description: string;
    fields: {
      name: string;
      label: string;
      type: string;
      required: boolean;
      options?: string[];
    }[];
  };
}

// Project type for unified project data
export interface Project {
  id: string;
  name: string;
  subtitle: string;
  location: string;
  type: string;
  description: string;
  image: string;
  theme: 'soluna' | 'barakah' | 'verde';
  features: string[];
  stats: {
    surface: string;
    units: string;
    delivery: string;
  };
  priceRange: string;
}

// Parse Accueil content
export function parseAccueilContent(): AccueilContent {
  const filePath = path.join(process.cwd(), '01-accueil.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Extract hero section
  const heroTitleMatch = content.match(/# \*\*GROUPE MAJAIDRI\*\*\s+## \*(.+)\*/);
  const heroSubtitleMatch = content.match(/## \*(.+)\*/);
  const heroDescriptionMatch = content.match(/Depuis trois décennies, \*\*Groupe Majaidri\*\* (.+?)\n\n/);
  const heroSignatureMatch = content.match(/\*"(.+?)"\*/);

  // Extract projects
  const solunaMatch = content.match(/### SOLUNA - (.+?)\n([\s\S]*?)### EL BARAKAH/);
  const elBarakahMatch = content.match(/### EL BARAKAH - (.+?)\n([\s\S]*?)### CITTÀ VERDE/);
  const cittaVerdeMatch = content.match(/### CITTÀ VERDE - (.+?)\n([\s\S]*?)---/);

  // Extract stats
  const statsMatch = content.match(/- \*\*🏆 (\d+) ans\*\* d'expertise immobilière\s+- \*\*🏘️ (\d+)\+\*\* familles accompagnées\s+- \*\*🌟 (\d+)\*\* univers résidentiels d'exception\s+- \*\*🎯 (\d+)%\*\* de satisfaction client/);

  return {
    title: data.title || 'Groupe Majaidri',
    description: data.description || '',
    keywords: data.keywords ? data.keywords.split(', ') : [],
    author: data.author || 'Groupe Majaidri',
    date: data.date || new Date().toISOString(),
    lang: data.lang || 'fr',
    schema_markup: data.schema_markup || '',
    
    heroTitle: 'GROUPE MAJAIDRI',
    heroSubtitle: heroSubtitleMatch ? heroSubtitleMatch[1] : 'Gardiens de l\'Art Immobilier Marocain',
    heroDescription: heroDescriptionMatch ? heroDescriptionMatch[1] : 'Depuis trois décennies, Groupe Majaidri sculpte l\'avenir résidentiel du Maroc avec la passion de l\'artisan et la vision du pionnier.',
    heroSignature: heroSignatureMatch ? heroSignatureMatch[1] : 'Là où l\'Excellence Rencontre l\'Authenticité',
    
    projects: {
      soluna: {
        title: 'SOLUNA - L\'Harmonie Céleste',
        subtitle: 'Mohammedia - Luxe Contemporain',
        description: 'Dans l\'écrin prestigieux de Mohammedia, SOLUNA révèle l\'art de vivre contemporain marocain. 120 résidences d\'exception où l\'architecture épurée dialogue avec les jardins suspendus.',
        signatures: [
          'Architecture Bioclimatique',
          'Piscine Infinity',
          'Jardins Thématiques',
          'Wellness Center'
        ]
      },
      elBarakah: {
        title: 'EL BARAKAH - La Bénédiction Familiale',
        subtitle: 'Casablanca - Premium Familial',
        description: 'EL BARAKAH célèbre l\'art de vivre en famille dans un écrin de verdure au cœur de Casablanca. 200 résidences pensées pour l\'épanouissement de chaque génération.',
        signatures: [
          'Espaces Multigénérationnels',
          'Complexe Sportif',
          'Verger Communautaire',
          'Sécurité Familiale'
        ]
      },
      cittaVerde: {
        title: 'CITTÀ VERDE - L\'Éden Contemporain',
        subtitle: 'Benslimane - Éco-Luxe Italien',
        description: 'CITTÀ VERDE réinvente l\'art de vivre durable à Benslimane. 45 parcelles d\'exception où l\'éco-luxe italien rencontre l\'innovation marocaine.',
        signatures: [
          'Révolution Écologique',
          'L\'Or Bleu Préservé',
          'Économie Circulaire',
          'Mobilité Verte'
        ]
      }
    },
    
    stats: {
      years: statsMatch ? statsMatch[1] : '27',
      families: statsMatch ? statsMatch[2] : '15000',
      projects: '3',
      satisfaction: statsMatch ? statsMatch[4] : '98'
    }
  };
}

// Parse Soluna content
export function parseSolunaContent(): SolunaContent {
  const filePath = path.join(process.cwd(), '03-projet-soluna.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Extract hero section
  const heroTitleMatch = content.match(/# SOLUNA - (.+)/);
  const heroSubtitleMatch = content.match(/\*"(.+?)"\*/);
  const heroDescriptionMatch = content.match(/Au cœur de Casablanca, SOLUNA (.+?)\n\n/);
  
  // Extract apartments
  const apartmentsSection = content.match(/## Section Types d'Appartements([\s\S]*?)---/);
  const apartmentTypes = [];
  
  if (apartmentsSection) {
    const apartmentMatches = apartmentsSection[1].match(/#### \*\*"(.+?)"\*\* - (.+?)\n([\s\S]*?)(?=#### |$)/g);
    
    if (apartmentMatches) {
      apartmentMatches.forEach(apartmentMatch => {
        const nameMatch = apartmentMatch.match(/#### \*\*"(.+?)"\*\* - (.+?)\n/);
        const surfaceMatch = apartmentMatch.match(/- \*\*Surface (.+?)\*\* : (.+?) d'art de vivre/);
        const descriptionMatch = apartmentMatch.match(/- \*\*Composition (.+?)\*\* :\s+([\s\S]*?)- \*\*Terrasse/);
        const featuresMatch = apartmentMatch.match(/- \*\*Signature SOLUNA\*\* : (.+)/);
        const idealForMatch = apartmentMatch.match(/- \*\*Idéal pour\*\* : (.+)/);
        const priceMatch = apartmentMatch.match(/À partir de (.+?) Dhs/);
        
        if (nameMatch) {
          apartmentTypes.push({
            name: nameMatch[1],
            subtitle: nameMatch[2],
            surface: surfaceMatch ? surfaceMatch[2] : '85-180m²',
            rooms: nameMatch[1].includes('2 Pièces') ? 2 : nameMatch[1].includes('3 Pièces') ? 3 : 4,
            bathrooms: nameMatch[1].includes('2 Pièces') ? 1 : nameMatch[1].includes('3 Pièces') ? 2 : 3,
            price: priceMatch ? priceMatch[1] : 'Sur demande',
            description: descriptionMatch ? descriptionMatch[2].trim() : '',
            features: featuresMatch ? featuresMatch[1].split(', ') : [],
            idealFor: idealForMatch ? idealForMatch[1] : '',
            image: `https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80`
          });
        }
      });
    }
  }
  
  // Extract amenities
  const amenitiesSection = content.match(/## Section Équipements & Services([\s\S]*?)---/);
  const amenitiesCategories = [];
  
  if (amenitiesSection) {
    const categoryMatches = amenitiesSection[1].match(/#### 🏊‍♂️ (.+?)\n([\s\S]*?)(?=#### |$)/g);
    
    if (categoryMatches) {
      categoryMatches.forEach(categoryMatch => {
        const nameMatch = categoryMatch.match(/#### 🏊‍♂️ (.+?)\n/);
        const itemsMatch = categoryMatch.match(/- \*\*(.+?)\*\* (.+?)\n/g);
        
        if (nameMatch && itemsMatch) {
          const items = itemsMatch.map(item => {
            const itemParts = item.match(/- \*\*(.+?)\*\* (.+?)\n/);
            return {
              name: itemParts ? itemParts[1] : '',
              description: itemParts ? itemParts[2] : ''
            };
          });
          
          amenitiesCategories.push({
            name: nameMatch[1],
            items: items
          });
        }
      });
    }
  }
  
  // Extract location details
  const locationSection = content.match(/## Section Environnement & Proximités([\s\S]*?)---/);
  const proximityCategories = [];
  
  if (locationSection) {
    const categoryMatches = locationSection[1].match(/#### 🎓 (.+?)\n([\s\S]*?)(?=#### |$)/g);
    
    if (categoryMatches) {
      categoryMatches.forEach(categoryMatch => {
        const nameMatch = categoryMatch.match(/#### 🎓 (.+?)\n/);
        const itemsMatch = categoryMatch.match(/- \*\*(.+?)\*\* - (.+?)\n/g);
        
        if (nameMatch && itemsMatch) {
          const items = itemsMatch.map(item => {
            const itemParts = item.match(/- \*\*(.+?)\*\* - (.+?)\n/);
            return {
              name: itemParts ? itemParts[1] : '',
              distance: itemParts ? itemParts[2] : '',
              type: ''
            };
          });
          
          proximityCategories.push({
            category: nameMatch[1],
            items: items
          });
        }
      });
    }
  }
  
  // Extract testimonials
  const testimonialsSection = content.match(/## Section Témoignages([\s\S]*?)---/);
  const testimonials = [];
  
  if (testimonialsSection) {
    const testimonialMatches = testimonialsSection[1].match(/#### (.+?) - (.+?)\n\*"(.+?)"\*/g);
    
    if (testimonialMatches) {
      testimonialMatches.forEach(testimonialMatch => {
        const parts = testimonialMatch.match(/#### (.+?) - (.+?)\n\*"(.+?)"\*/);
        
        if (parts) {
          testimonials.push({
            name: parts[1],
            profession: parts[2],
            rating: 5,
            comment: parts[3],
            apartment: 'Appartement SOLUNA',
            purchaseDate: 'Janvier 2024',
            highlight: 'Satisfaction exceptionnelle'
          });
        }
      });
    }
  }
  
  return {
    title: data.title || 'SOLUNA - L\'Éclat Éternel de l\'Excellence',
    description: data.description || '',
    keywords: data.keywords ? data.keywords.split(', ') : [],
    author: data.author || 'Groupe Majaidri',
    date: data.date || new Date().toISOString(),
    lang: data.lang || 'fr',
    schema_markup: data.schema_markup || '',
    
    heroTitle: heroTitleMatch ? heroTitleMatch[1] : 'L\'Éclat Éternel de l\'Excellence',
    heroSubtitle: heroSubtitleMatch ? heroSubtitleMatch[1] : 'Une Symphonie Architecturale en Terre de Lumière',
    heroDescription: heroDescriptionMatch ? heroDescriptionMatch[1] : 'Au cœur de Casablanca, SOLUNA transcende l\'ordinaire pour devenir une œuvre d\'art habitée.',
    location: 'Casablanca - Proximité Bouskoura & California',
    
    overview: {
      title: 'SOLUNA : Où le Luxe Rencontre la Nature',
      description: 'SOLUNA représente l\'aboutissement de notre vision architecturale moderne. Cette résidence exclusive combine harmonieusement design contemporain et espaces verts généreux.',
      features: [
        {
          title: '2 Hectares de Verdure',
          description: 'Parc paysager central de 2 hectares avec jardins thématiques et espaces de détente.'
        },
        {
          title: 'Architecture d\'Exception',
          description: 'Design contemporain signé par des architectes renommés avec façades élégantes aux lignes épurées.'
        },
        {
          title: 'Localisation Stratégique',
          description: 'Proximité immédiate de Bouskoura et accès facile au quartier California.'
        },
        {
          title: 'Sécurité & Services',
          description: 'Résidence fermée et sécurisée 24h/24 avec gardiennage professionnel et services de conciergerie.'
        }
      ]
    },
    
    apartments: {
      title: 'Nos Résidences : Des Espaces de Vie Raffinés',
      types: apartmentTypes.length > 0 ? apartmentTypes : [
        {
          name: 'Le Cocon Solaire',
          subtitle: 'Appartement 2 Pièces d\'Exception',
          surface: '65-75 m²',
          rooms: 2,
          bathrooms: 1,
          price: 'À partir de 850K Dhs',
          description: 'Suite parentale avec dressing intégré, salon-séjour baigné de lumière, cuisine ouverte équipée (Miele/Bosch), salle de bain spa avec douche à l\'italienne.',
          features: ['Terrasse privée 15-20 m²', 'Parquet chêne massif', 'Domotique intégrée', 'Climatisation réversible'],
          idealFor: 'Jeunes couples raffinés, pied-à-terre de luxe, investissement premium',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        },
        {
          name: 'L\'Harmonie Lunaire',
          subtitle: 'Appartement 3 Pièces Familial',
          surface: '85-95 m²',
          rooms: 3,
          bathrooms: 2,
          price: 'À partir de 1.2M Dhs',
          description: '2 chambres avec placards sur-mesure, salon-séjour avec coin lecture, cuisine américaine haut de gamme, 2 salles d\'eau (dont une avec baignoire), cellier/buanderie.',
          features: ['Terrasse familiale 20-25 m²', 'Isolation phonique renforcée', 'Éclairage LED intelligent', 'Prises USB intégrées'],
          idealFor: 'Familles modernes, premiers acheteurs exigeants',
          image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        },
        {
          name: 'Le Palais Stellaire',
          subtitle: 'Appartement 4 Pièces Prestige',
          surface: '110-130 m²',
          rooms: 4,
          bathrooms: 3,
          price: 'À partir de 2.2M Dhs',
          description: 'Suite parentale (25m²) avec dressing et salle de bain privative, 2 chambres enfants avec salle de bain partagée, double salon (réception + intimité), cuisine îlot central avec coin petit-déjeuner, bureau/bibliothèque, WC invités avec lave-mains design.',
          features: ['Terrasse panoramique 30-40 m²', 'Hauteur sous plafond 3m', 'Cheminée design', 'Cave à vin climatisée'],
          idealFor: 'Familles d\'exception, dirigeants, investisseurs patrimoniaux',
          image: 'https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        }
      ]
    },
    
    amenities: {
      title: 'Équipements Premium : Votre Confort au Quotidien',
      description: 'SOLUNA offre une gamme complète d\'équipements et de services pensés pour transformer chaque jour en une expérience d\'exception.',
      categories: amenitiesCategories.length > 0 ? amenitiesCategories : [
        {
          name: 'Le Sanctuaire Aquatique',
          items: [
            {
              name: 'Piscine Infinity',
              description: 'Bassin de 25m avec débordement spectaculaire'
            },
            {
              name: 'Espace Wellness',
              description: 'Hammam traditionnel + Sauna finlandais'
            },
            {
              name: 'Pool House',
              description: 'Salon d\'été avec cuisine d\'été équipée'
            }
          ]
        },
        {
          name: 'L\'Atelier du Bien-Être',
          items: [
            {
              name: 'Salle de Sport Premium',
              description: 'Équipements Technogym dernière génération'
            },
            {
              name: 'Studio Yoga/Pilates',
              description: 'Espace zen avec vue sur jardins'
            },
            {
              name: 'Espace Cardio',
              description: 'Machines connectées avec écrans individuels'
            }
          ]
        },
        {
          name: 'Les Jardins d\'Éden',
          items: [
            {
              name: 'Jardins Thématiques',
              description: 'Méditerranéen, Andalou, Contemporain'
            },
            {
              name: 'Allées Parfumées',
              description: 'Jasmin, oranger, lavande'
            },
            {
              name: 'Espaces de Méditation',
              description: 'Coins secrets pour la contemplation'
            }
          ]
        },
        {
          name: 'Sécurité & Conciergerie',
          items: [
            {
              name: 'Gardiennage Premium',
              description: '24h/24 avec formation hôtelière'
            },
            {
              name: 'Vidéosurveillance Intelligente',
              description: 'IA de reconnaissance faciale'
            },
            {
              name: 'Conciergerie Lifestyle',
              description: 'Services sur-mesure (ménage, courses, réservations)'
            },
            {
              name: 'Parking Intelligent',
              description: 'Système de guidage automatique'
            }
          ]
        }
      ]
    },
    
    location_details: {
      title: 'Un Cadre de Vie Exceptionnel',
      description: 'SOLUNA bénéficie d\'un emplacement privilégié à Casablanca, offrant un accès facile à tous les services essentiels et lieux d\'intérêt.',
      proximities: proximityCategories.length > 0 ? proximityCategories : [
        {
          category: 'Éducation',
          items: [
            {
              name: 'École Internationale',
              distance: '5 min',
              type: 'Enseignement de qualité'
            },
            {
              name: 'Lycée Français',
              distance: '8 min',
              type: 'Cursus français'
            },
            {
              name: 'Université Hassan II',
              distance: '15 min',
              type: 'Enseignement supérieur'
            },
            {
              name: 'Crèches privées',
              distance: '3 min',
              type: 'Petite enfance'
            }
          ]
        },
        {
          category: 'Santé',
          items: [
            {
              name: 'Clinique Internationale',
              distance: '7 min',
              type: 'Soins spécialisés'
            },
            {
              name: 'Pharmacies',
              distance: '2 min',
              type: 'Pharmacies de garde'
            },
            {
              name: 'Centre médical',
              distance: '5 min',
              type: 'Médecine générale'
            },
            {
              name: 'Hôpital Ibn Rochd',
              distance: '20 min',
              type: 'Urgences 24h/24'
            }
          ]
        },
        {
          category: 'Shopping & Loisirs',
          items: [
            {
              name: 'Morocco Mall',
              distance: '15 min',
              type: 'Centre commercial'
            },
            {
              name: 'Anfaplace',
              distance: '12 min',
              type: 'Shopping & loisirs'
            },
            {
              name: 'Restaurants gastronomiques',
              distance: '5 min',
              type: 'Haute cuisine'
            },
            {
              name: 'Cinémas',
              distance: '10 min',
              type: 'Divertissement'
            }
          ]
        },
        {
          category: 'Transports',
          items: [
            {
              name: 'Aéroport Mohammed V',
              distance: '25 min',
              type: 'Vols internationaux'
            },
            {
              name: 'Gare Casa-Port',
              distance: '30 min',
              type: 'Transport ferroviaire'
            },
            {
              name: 'Tramway',
              distance: '10 min',
              type: 'Transport urbain'
            },
            {
              name: 'Autoroutes',
              distance: 'Accès direct',
              type: 'Réseau autoroutier'
            }
          ]
        }
      ]
    },
    
    testimonials: {
      title: 'Ils Ont Choisi SOLUNA',
      items: testimonials.length > 0 ? testimonials : [
        {
          name: 'Nadia L.',
          age: 37,
          profession: 'Investisseuse immobilière',
          rating: 5,
          comment: 'Je cherchais un investissement rentable et sécurisé. Soluna m\'a présenté 3 opportunités exclusives adaptées à mon budget. J\'ai finalisé l\'achat en moins de 45 jours.',
          apartment: 'Harmonie Lunaire 3P',
          purchaseDate: 'Mars 2024',
          highlight: 'Processus d\'achat ultra-rapide'
        },
        {
          name: 'Yassine K.',
          age: 50,
          profession: 'Consultant',
          rating: 5,
          comment: 'Dès notre premier rendez-vous, j\'ai été impressionné par leur expertise. Leur disponibilité est remarquable : j\'ai reçu une réponse à mes questions en moins de 24 heures.',
          apartment: 'Palais Stellaire 4P',
          purchaseDate: 'Janvier 2024',
          highlight: 'Service client exceptionnel'
        },
        {
          name: 'Famille Bennani',
          profession: 'Propriétaires résidents',
          rating: 5,
          comment: 'SOLUNA a dépassé toutes nos attentes. La qualité des finitions, les espaces verts magnifiques et la tranquillité du lieu en font un véritable havre de paix en pleine ville.',
          apartment: 'Harmonie Lunaire 3P',
          purchaseDate: 'Février 2024',
          highlight: 'Qualité de vie exceptionnelle'
        }
      ]
    },
    
    contact: {
      title: 'Découvrez SOLUNA : Votre Futur Commence Ici',
      description: 'Notre équipe SOLUNA vous accompagne dans la découverte de votre futur appartement d\'exception.',
      info: {
        phone: '+212 522 XXX XXX',
        email: 'soluna@groupemajaidri.ma',
        address: 'Résidence SOLUNA, Casablanca',
        hours: 'Lun-Sam 9h-19h, Dim 10h-16h'
      }
    }
  };
}

// Parse El Barakah content
export function parseElBarakahContent(): ElBarakahContent {
  const filePath = path.join(process.cwd(), '04-projet-el-barakah.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Extract hero section
  const heroTitleMatch = content.match(/# EL BARAKAH - (.+)/);
  const heroSubtitleMatch = content.match(/\*"(.+?)"\*/);
  const heroDescriptionMatch = content.match(/EL BARAKAH transcende l'habitat (.+?)\n\n/);
  
  // Extract apartments
  const apartmentsSection = content.match(/## Collection Familiale d'Exception([\s\S]*?)---/);
  const apartmentTypes = [];
  
  if (apartmentsSection) {
    const apartmentMatches = apartmentsSection[1].match(/### \*\*"(.+?)"\*\* - (.+?)\n([\s\S]*?)(?=### |$)/g);
    
    if (apartmentMatches) {
      apartmentMatches.forEach(apartmentMatch => {
        const nameMatch = apartmentMatch.match(/### \*\*"(.+?)"\*\* - (.+?)\n/);
        const surfaceMatch = apartmentMatch.match(/- \*\*Surface (.+?)\*\* : (.+?) de (.+?)\n/);
        const descriptionMatch = apartmentMatch.match(/- \*\*Composition (.+?)\*\* :\s+([\s\S]*?)- \*\*(.+?) (.+?)\*\* :/);
        const featuresMatch = apartmentMatch.match(/- \*\*Signature EL BARAKAH\*\* : (.+)/);
        const idealForMatch = apartmentMatch.match(/- \*\*Idéal pour\*\* : (.+)/);
        
        if (nameMatch) {
          apartmentTypes.push({
            name: nameMatch[1],
            subtitle: nameMatch[2],
            surface: surfaceMatch ? surfaceMatch[2] : '70-120m²',
            rooms: nameMatch[1].includes('2 Pièces') ? 2 : nameMatch[1].includes('3 Pièces') ? 3 : nameMatch[1].includes('4 Pièces') ? 4 : 5,
            bathrooms: nameMatch[1].includes('2 Pièces') ? 1 : nameMatch[1].includes('3 Pièces') ? 2 : 3,
            price: 'À partir de 320 000 Dhs',
            description: descriptionMatch ? descriptionMatch[2].trim() : '',
            features: featuresMatch ? featuresMatch[1].split(', ') : [],
            idealFor: idealForMatch ? idealForMatch[1] : '',
            image: `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80`
          });
        }
      });
    }
  }
  
  // Extract amenities
  const amenitiesSection = content.match(/## Section Équipements & Services([\s\S]*?)---/);
  const amenitiesCategories = [];
  
  if (amenitiesSection) {
    const categoryMatches = amenitiesSection[1].match(/#### 🏊‍♂️ (.+?)\n([\s\S]*?)(?=#### |$)/g);
    
    if (categoryMatches) {
      categoryMatches.forEach(categoryMatch => {
        const nameMatch = categoryMatch.match(/#### 🏊‍♂️ (.+?)\n/);
        const itemsMatch = categoryMatch.match(/- \*\*(.+?)\*\* (.+?)\n/g);
        
        if (nameMatch && itemsMatch) {
          const items = itemsMatch.map(item => {
            const itemParts = item.match(/- \*\*(.+?)\*\* (.+?)\n/);
            return {
              name: itemParts ? itemParts[1] : '',
              description: itemParts ? itemParts[2] : ''
            };
          });
          
          amenitiesCategories.push({
            name: nameMatch[1],
            items: items
          });
        }
      });
    }
  }
  
  // Extract location details
  const locationSection = content.match(/## Section Environnement & Proximités([\s\S]*?)---/);
  const proximityCategories = [];
  
  if (locationSection) {
    const categoryMatches = locationSection[1].match(/#### 🎓 (.+?)\n([\s\S]*?)(?=#### |$)/g);
    
    if (categoryMatches) {
      categoryMatches.forEach(categoryMatch => {
        const nameMatch = categoryMatch.match(/#### 🎓 (.+?)\n/);
        const itemsMatch = categoryMatch.match(/- \*\*(.+?)\*\* - (.+?)\n/g);
        
        if (nameMatch && itemsMatch) {
          const items = itemsMatch.map(item => {
            const itemParts = item.match(/- \*\*(.+?)\*\* - (.+?)\n/);
            return {
              name: itemParts ? itemParts[1] : '',
              distance: itemParts ? itemParts[2] : '',
              type: ''
            };
          });
          
          proximityCategories.push({
            category: nameMatch[1],
            items: items
          });
        }
      });
    }
  }
  
  // Extract regional impact
  const impactSection = content.match(/## Section Développement Régional([\s\S]*?)---/);
  const impactAspects = [];
  
  if (impactSection) {
    const aspectMatches = impactSection[1].match(/#### 🏗️ (.+?)\n([\s\S]*?)(?=#### |$)/g);
    
    if (aspectMatches) {
      aspectMatches.forEach(aspectMatch => {
        const titleMatch = aspectMatch.match(/#### 🏗️ (.+?)\n/);
        const descriptionMatch = aspectMatch.match(/- \*\*(.+?)\*\* (.+?)\n/g);
        
        if (titleMatch && descriptionMatch) {
          impactAspects.push({
            title: titleMatch[1],
            description: descriptionMatch.map(item => item.replace(/- \*\*(.+?)\*\* /, '')).join(' ')
          });
        }
      });
    }
  }
  
  // Extract testimonials
  const testimonialsSection = content.match(/## Section Témoignages([\s\S]*?)---/);
  const testimonials = [];
  
  if (testimonialsSection) {
    const testimonialMatches = testimonialsSection[1].match(/#### (.+?) - (.+?)\n\*"(.+?)"\*/g);
    
    if (testimonialMatches) {
      testimonialMatches.forEach(testimonialMatch => {
        const parts = testimonialMatch.match(/#### (.+?) - (.+?)\n\*"(.+?)"\*/);
        
        if (parts) {
          testimonials.push({
            name: parts[1],
            profession: parts[2],
            comment: parts[3],
            apartment: 'Appartement EL BARAKAH'
          });
        }
      });
    }
  }
  
  return {
    title: data.title || 'EL BARAKAH - La Bénédiction Éternelle du Foyer',
    description: data.description || '',
    keywords: data.keywords ? data.keywords.split(', ') : [],
    author: data.author || 'Groupe Majaidri',
    date: data.date || new Date().toISOString(),
    lang: data.lang || 'fr',
    schema_markup: data.schema_markup || '',
    
    heroTitle: heroTitleMatch ? heroTitleMatch[1] : 'La Bénédiction Éternelle du Foyer',
    heroSubtitle: heroSubtitleMatch ? heroSubtitleMatch[1] : 'Un Sanctuaire Familial où Résonnent les Rires d\'Enfants et la Sérénité des Anciens',
    heroDescription: heroDescriptionMatch ? 'EL BARAKAH transcende l\'habitat ' + heroDescriptionMatch[1] : 'EL BARAKAH transcende l\'habitat pour devenir un véritable sanctuaire familial.',
    location: 'Guelmim - Porte du Sahara',
    
    overview: {
      title: 'EL BARAKAH : Modernité et Authenticité Régionale',
      description: 'EL BARAKAH incarne notre engagement envers le développement équilibré du territoire marocain. Ce projet ambitieux offre des solutions de logement qualitatives et durables dans la région de Guelmim.',
      features: [
        {
          title: 'Localisation Stratégique',
          description: 'Guelmim, porte d\'entrée du Sahara, région en pleine expansion économique.'
        },
        {
          title: 'Architecture Contemporaine',
          description: 'Design moderne adapté au climat saharien, matériaux locaux et techniques innovantes.'
        },
        {
          title: 'Accessibilité Financière',
          description: 'Prix attractifs à partir de 250 000 Dhs, solutions de financement adaptées.'
        },
        {
          title: 'Sécurité & Tranquillité',
          description: 'Résidence 100% sécurisée 24h/24, gardiennage professionnel permanent.'
        }
      ]
    },
    
    apartments: {
      title: 'Nos Foyers Bénis : Où Chaque Famille Trouve Son Sanctuaire',
      types: apartmentTypes.length > 0 ? apartmentTypes : [
        {
          name: 'Le Nid de l\'Amour',
          subtitle: 'Appartement 2 Pièces Cocooning',
          surface: '60-70 m²',
          rooms: 2,
          bathrooms: 1,
          price: 'À partir de 320 000 Dhs',
          description: 'Suite parentale avec coin lecture, salon-séjour ouvert sur loggia, cuisine familiale équipée (électroménager Bosch), salle de bain avec douche relaxante.',
          features: ['Loggia protégée 12-15 m²', 'Carrelage terre cuite', 'Climatisation écologique', 'Rangements optimisés'],
          idealFor: 'Jeunes couples, premiers foyers, investissement familial',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        },
        {
          name: 'Le Cocon des Rires',
          subtitle: 'Appartement 3 Pièces Familial',
          surface: '80-90 m²',
          rooms: 3,
          bathrooms: 2,
          price: 'À partir de 420 000 Dhs',
          description: '2 chambres enfants avec placards ludiques, salon-salle à manger convivial, cuisine ouverte avec coin petit-déjeuner, 2 salles d\'eau (dont une adaptée enfants), cellier/rangement familial.',
          features: ['Terrasse familiale 18-22 m²', 'Sols anti-dérapants', 'Prises sécurisées enfants', 'Éclairage doux'],
          idealFor: 'Familles avec 1-2 enfants, couples en projet d\'agrandissement',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        },
        {
          name: 'Le Palais des Générations',
          subtitle: 'Appartement 4 Pièces Prestige Familial',
          surface: '100-120 m²',
          rooms: 4,
          bathrooms: 3,
          price: 'À partir de 520 000 Dhs',
          description: 'Suite parentale (20m²) avec dressing et salle de bain privative, 2 chambres enfants/ados avec espaces personnalisés, double salon (réception familiale + coin TV), cuisine familiale avec îlot central et coin repas, bureau/espace devoirs, WC invités avec lave-mains.',
          features: ['Grande terrasse panoramique 25-30 m²', 'Hauteur sous plafond 2.8m', 'Ventilation naturelle', 'Coin prière discret'],
          idealFor: 'Grandes familles, familles multigénérationnelles, dirigeants locaux',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        }
      ]
    },
    
    amenities: {
      title: 'Équipements Modernes : Votre Confort au Quotidien',
      description: 'EL BARAKAH offre une gamme complète d\'équipements et de services pensés pour le bien-être de toute la famille.',
      categories: amenitiesCategories.length > 0 ? amenitiesCategories : [
        {
          name: 'Espaces de Détente',
          items: [
            {
              name: 'Piscine',
              description: 'Commune rafraîchissante'
            },
            {
              name: 'Bassin enfants',
              description: 'Sécurisé et adapté'
            },
            {
              name: 'Espaces verts',
              description: 'Aménagés et entretenus'
            },
            {
              name: 'Aires de jeux',
              description: 'Pour enfants de tous âges'
            }
          ]
        },
        {
          name: 'Services Communautaires',
          items: [
            {
              name: 'Salle polyvalente',
              description: 'Pour événements familiaux'
            },
            {
              name: 'Espace de réunion',
              description: 'Communautaire et convivial'
            },
            {
              name: 'Terrain de sport',
              description: 'Multidisciplinaire'
            },
            {
              name: 'Aire de barbecue',
              description: 'Collective et équipée'
            }
          ]
        },
        {
          name: 'Services Pratiques',
          items: [
            {
              name: 'Parking',
              description: 'Sécurisé et couvert'
            },
            {
              name: 'Places visiteurs',
              description: 'Dédiées et accessibles'
            },
            {
              name: 'Local vélos',
              description: 'Pratique et sécurisé'
            },
            {
              name: 'Gardiennage',
              description: '24h/24 professionnel'
            }
          ]
        }
      ]
    },
    
    location_details: {
      title: 'Un Cadre de Vie Privilégié à Guelmim',
      description: 'EL BARAKAH bénéficie d\'un emplacement stratégique à Guelmim, offrant un accès facile à tous les services essentiels.',
      proximities: proximityCategories.length > 0 ? proximityCategories : [
        {
          category: 'Éducation',
          items: [
            {
              name: 'Écoles privées',
              distance: '5 min',
              type: 'Enseignement de qualité'
            },
            {
              name: 'Collège public',
              distance: '8 min',
              type: 'Enseignement secondaire'
            },
            {
              name: 'Lycée technique',
              distance: '10 min',
              type: 'Formation professionnelle'
            },
            {
              name: 'Centre de formation',
              distance: '12 min',
              type: 'Formation continue'
            }
          ]
        },
        {
          category: 'Santé',
          items: [
            {
              name: 'Centre de santé',
              distance: '3 min',
              type: 'Soins de base'
            },
            {
              name: 'Pharmacies',
              distance: '2 min',
              type: 'Médicaments et conseils'
            },
            {
              name: 'Hôpital provincial',
              distance: '15 min',
              type: 'Soins complets'
            },
            {
              name: 'Cliniques privées',
              distance: '10 min',
              type: 'Soins spécialisés'
            }
          ]
        },
        {
          category: 'Services & Commerces',
          items: [
            {
              name: 'Marché municipal',
              distance: '8 min',
              type: 'Produits frais'
            },
            {
              name: 'Centre commercial',
              distance: '12 min',
              type: 'Shopping varié'
            },
            {
              name: 'Banques',
              distance: '5 min',
              type: 'Services financiers'
            },
            {
              name: 'Administration',
              distance: '10 min',
              type: 'Services publics'
            }
          ]
        }
      ]
    },
    
    regional_impact: {
      title: 'EL BARAKAH : Moteur du Développement du Sud',
      description: 'Notre projet EL BARAKAH contribue activement au développement économique et social de la région de Guelmim.',
      aspects: impactAspects.length > 0 ? impactAspects : [
        {
          title: 'Contribution Économique',
          description: 'Création d\'emplois locaux, dynamisation du secteur BTP, attraction d\'investissements, développement de l\'écosystème local.'
        },
        {
          title: 'Développement Durable',
          description: 'Matériaux locaux privilégiés, techniques respectueuses de l\'environnement, gestion optimisée des ressources, intégration paysagère harmonieuse.'
        },
        {
          title: 'Impact Social',
          description: 'Logements accessibles aux familles, amélioration du cadre de vie, renforcement du tissu social, services de proximité intégrés.'
        },
        {
          title: 'Perspectives d\'Avenir',
          description: 'Valorisation du patrimoine immobilier, attractivité renforcée de la région, développement touristique potentiel, rayonnement économique élargi.'
        }
      ]
    },
    
    testimonials: {
      title: 'Ils Ont Choisi EL BARAKAH',
      items: testimonials.length > 0 ? testimonials : [
        {
          name: 'Famille Alaoui',
          profession: 'Propriétaires',
          comment: 'EL BARAKAH nous a offert la possibilité d\'acquérir notre premier logement dans d\'excellentes conditions. La qualité de construction et l\'environnement sécurisé nous ont convaincus.',
          apartment: 'Appartement F3'
        },
        {
          name: 'M. Hassan',
          profession: 'Investisseur',
          comment: 'Un excellent investissement dans une région d\'avenir. La rentabilité locative est au rendez-vous et la gestion est facilitée par la qualité du projet.',
          apartment: 'Plusieurs unités'
        },
        {
          name: 'Mme Fatima',
          profession: 'Retraitée',
          comment: 'Après avoir vécu à Casablanca, j\'ai choisi EL BARAKAH pour la tranquillité et la proximité des services. Je ne regrette pas mon choix.',
          apartment: 'Appartement F2'
        }
      ]
    },
    
    contact: {
      title: 'Découvrez EL BARAKAH : Votre Nouveau Chez-Vous',
      description: 'Notre équipe EL BARAKAH vous accompagne dans la découverte de votre futur logement à Guelmim.',
      info: {
        phone: '+212 XXX XXX XXX',
        email: 'elbarakah@groupemajaidri.ma',
        address: 'Avenue Mohammed V, Guelmim',
        hours: 'Lun-Sam 9h-18h'
      }
    }
  };
}

// Parse Citta Verde content
export function parseCittaVerdeContent(): CittaVerdeContent {
  const filePath = path.join(process.cwd(), '05-projet-citta-verde.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Extract hero section
  const heroTitleMatch = content.match(/# CITTÀ VERDE - (.+)/);
  const heroSubtitleMatch = content.match(/\*"(.+?)"\*/);
  const heroDescriptionMatch = content.match(/CITTÀ VERDE transcende l'habitat (.+?)\n\n/);
  
  // Extract plots
  const plotsSection = content.match(/## Collection de Parcelles Éco-Luxueuses([\s\S]*?)---/);
  const plotTypes = [];
  
  if (plotsSection) {
    const plotMatches = plotsSection[1].match(/#### \*\*"(.+?)"\*\* - (.+?)\n([\s\S]*?)(?=#### |$)/g);
    
    if (plotMatches) {
      plotMatches.forEach(plotMatch => {
        const nameMatch = plotMatch.match(/#### \*\*"(.+?)"\*\* - (.+?)\n/);
        const surfaceMatch = plotMatch.match(/- \*\*Surface (.+?)\*\* : (.+?) d'art de vivre/);
        const elevationMatch = plotMatch.match(/- \*\*Élévation (.+?)\*\* : (.+?)\n/);
        const featuresMatch = plotMatch.match(/- \*\*Signature CITTÀ VERDE\*\* :\s+([\s\S]*?)- \*\*Investissement/);
        const priceMatch = plotMatch.match(/- \*\*Investissement Vert\*\* : À partir de (.+?) Dhs/);
        
        if (nameMatch) {
          const features = [];
          if (featuresMatch) {
            const featureLines = featuresMatch[1].match(/- (.+?)\n/g);
            if (featureLines) {
              featureLines.forEach(line => {
                features.push(line.replace(/- /, '').trim());
              });
            }
          }
          
          plotTypes.push({
            name: nameMatch[1],
            subtitle: nameMatch[2],
            surface: surfaceMatch ? surfaceMatch[2] : '200-800m²',
            elevation: elevationMatch ? elevationMatch[2] : 'R+2',
            price: priceMatch ? priceMatch[1] : 'À partir de 180 000 Dhs',
            description: 'Terrain éco-responsable avec orientation solaire optimisée et vue inspirante sur les espaces verts méditerranéens ou le panorama golf.',
            features: features.length > 0 ? features : [
              'Pré-équipement solaire inclus',
              'Système de récupération d\'eau intégré',
              'Borne de recharge électrique',
              'Jardin méditerranéen pré-planté'
            ],
            idealFor: 'Familles éco-conscientes, investisseurs visionnaires',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
          });
        }
      });
    }
  }
  
  // Extract sustainability features
  const sustainabilitySection = content.match(/## Section Développement Durable([\s\S]*?)---/);
  const sustainabilityFeatures = [];
  
  if (sustainabilitySection) {
    const featureMatches = sustainabilitySection[1].match(/#### 🌱 (.+?)\n([\s\S]*?)(?=#### |$)/g);
    
    if (featureMatches) {
      featureMatches.forEach(featureMatch => {
        const titleMatch = featureMatch.match(/#### 🌱 (.+?)\n/);
        const descriptionMatch = featureMatch.match(/- \*\*(.+?)\*\* (.+?)\n/g);
        
        if (titleMatch && descriptionMatch) {
          sustainabilityFeatures.push({
            title: titleMatch[1],
            description: descriptionMatch.map(item => item.replace(/- \*\*(.+?)\*\* /, '')).join(' ')
          });
        }
      });
    }
  }
  
  // Extract infrastructure
  const infrastructureSection = content.match(/## Section Aménagements & Infrastructure([\s\S]*?)---/);
  const infrastructureCategories = [];
  
  if (infrastructureSection) {
    const categoryMatches = infrastructureSection[1].match(/#### 🛣️ (.+?)\n([\s\S]*?)(?=#### |$)/g);
    
    if (categoryMatches) {
      categoryMatches.forEach(categoryMatch => {
        const nameMatch = categoryMatch.match(/#### 🛣️ (.+?)\n/);
        const itemsMatch = categoryMatch.match(/- \*\*(.+?)\*\* (.+?)\n/g);
        
        if (nameMatch && itemsMatch) {
          const items = itemsMatch.map(item => {
            const itemParts = item.match(/- \*\*(.+?)\*\* (.+?)\n/);
            return itemParts ? itemParts[1] + ' ' + itemParts[2] : '';
          });
          
          infrastructureCategories.push({
            name: nameMatch[1],
            items: items
          });
        }
      });
    }
  }
  
  // Extract location details
  const locationSection = content.match(/## Section Environnement & Proximités([\s\S]*?)---/);
  const proximityCategories = [];
  
  if (locationSection) {
    const categoryMatches = locationSection[1].match(/#### ⛳ (.+?)\n([\s\S]*?)(?=#### |$)/g);
    
    if (categoryMatches) {
      categoryMatches.forEach(categoryMatch => {
        const nameMatch = categoryMatch.match(/#### ⛳ (.+?)\n/);
        const itemsMatch = categoryMatch.match(/- \*\*(.+?)\*\* - (.+?)\n/g);
        
        if (nameMatch && itemsMatch) {
          const items = itemsMatch.map(item => {
            const itemParts = item.match(/- \*\*(.+?)\*\* - (.+?)\n/);
            return {
              name: itemParts ? itemParts[1] : '',
              distance: itemParts ? itemParts[2] : '',
              type: ''
            };
          });
          
          proximityCategories.push({
            category: nameMatch[1],
            items: items
          });
        }
      });
    }
  }
  
  // Extract testimonials
  const testimonialsSection = content.match(/## Section Témoignages([\s\S]*?)---/);
  const testimonials = [];
  
  if (testimonialsSection) {
    const testimonialMatches = testimonialsSection[1].match(/#### (.+?) - (.+?)\n\*"(.+?)"\*/g);
    
    if (testimonialMatches) {
      testimonialMatches.forEach(testimonialMatch => {
        const parts = testimonialMatch.match(/#### (.+?) - (.+?)\n\*"(.+?)"\*/);
        
        if (parts) {
          testimonials.push({
            name: parts[1],
            profession: parts[2],
            comment: parts[3],
            plotType: 'Terrain CITTÀ VERDE'
          });
        }
      });
    }
  }
  
  return {
    title: data.title || 'CITTÀ VERDE - L\'Éden Contemporain de Demain',
    description: data.description || '',
    keywords: data.keywords ? data.keywords.split(', ') : [],
    author: data.author || 'Groupe Majaidri',
    date: data.date || new Date().toISOString(),
    lang: data.lang || 'fr',
    schema_markup: data.schema_markup || '',
    
    heroTitle: heroTitleMatch ? heroTitleMatch[1] : 'L\'Éden Contemporain de Demain',
    heroSubtitle: heroSubtitleMatch ? heroSubtitleMatch[1] : 'Une Symphonie Écologique en Terre Marocaine, Inspirée par la Dolce Vita',
    heroDescription: heroDescriptionMatch ? 'CITTÀ VERDE transcende l\'habitat ' + heroDescriptionMatch[1] : 'CITTÀ VERDE transcende l\'habitat pour devenir un manifeste vivant de l\'éco-luxe.',
    location: 'Benslimane - À 3 minutes du Golf de Benslimane',
    
    overview: {
      title: 'CITTÀ VERDE : Votre Futur Commence Ici',
      description: 'CITTÀ VERDE représente l\'aboutissement de notre vision du développement durable et de l\'urbanisme moderne. Ce lotissement visionnaire offre une flexibilité exceptionnelle pour bâtir votre avenir.',
      features: [
        {
          title: 'Développement Durable',
          description: 'Ville verte respectueuse de l\'environnement, espaces verts préservés, gestion écologique des eaux pluviales.'
        },
        {
          title: 'Flexibilité Architecturale',
          description: 'Terrains R+2 et R+3 adaptables, villas, immeubles ou commerces autorisés, grande liberté architecturale.'
        },
        {
          title: 'Localisation Privilégiée',
          description: '3 minutes du Golf de Benslimane, proximité Casablanca-Rabat, accès autoroutier facilité.'
        },
        {
          title: 'Infrastructure Complète',
          description: 'Terrains viabilisés prêts à construire, voirie et éclairage public intégrés, réseaux complets.'
        }
      ]
    },
    
    plots: {
      title: 'Nos Terrains : Construisez Votre Vision Écologique',
      types: plotTypes.length > 0 ? plotTypes : [
        {
          name: 'L\'Éden Intime',
          subtitle: 'Terrain Éco-Résidentiel d\'Exception',
          surface: '110 à 150 m²',
          elevation: 'Rez + 2 étages',
          price: 'À partir de 180 000 Dhs',
          description: 'Terrain éco-responsable avec orientation solaire optimisée et vue inspirante sur les espaces verts méditerranéens.',
          features: [
            'Pré-équipement solaire inclus',
            'Système de récupération d\'eau intégré',
            'Borne de recharge électrique',
            'Jardin méditerranéen pré-planté'
          ],
          idealFor: 'Jeunes familles éco-conscientes, investisseurs visionnaires',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        },
        {
          name: 'Le Sanctuaire Familial',
          subtitle: 'Terrain Éco-Prestige Résidentiel',
          surface: '200 à 300 m²',
          elevation: 'Rez + 2 étages',
          price: 'À partir de 280 000 Dhs',
          description: 'Parcelle généreuse idéale pour une villa de standing avec écosystème jardin, piscine naturelle et jardin permaculture possibles.',
          features: [
            'Installation domotique pré-câblée',
            'Système d\'irrigation intelligent',
            'Espace wellness extérieur',
            'Garage éco-conçu'
          ],
          idealFor: 'Familles établies cherchant l\'équilibre parfait entre luxe et écologie',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        },
        {
          name: 'L\'Innovation Verticale',
          subtitle: 'Terrain Éco-Résidentiel R+3',
          surface: '150 à 250 m²',
          elevation: 'Rez + 3 étages',
          price: 'À partir de 220 000 Dhs',
          description: 'Terrain optimisé pour l\'innovation verticale, idéal pour un immeuble résidentiel vert ou une villa contemporaine à étages.',
          features: [
            'Micro-éolienne urbaine incluse',
            'Façade végétale préparée',
            'Ascenseur écologique',
            'Terrasses jardins étagées'
          ],
          idealFor: 'Investisseurs innovants, promoteurs éco-responsables',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        }
      ]
    },
    
    sustainability: {
      title: 'CITTÀ VERDE : Pionnier de l\'Éco-Urbanisme',
      description: 'Notre projet CITTÀ VERDE intègre les dernières innovations en matière de développement durable et d\'éco-construction.',
      features: sustainabilityFeatures.length > 0 ? sustainabilityFeatures : [
        {
          title: 'Gestion Environnementale',
          description: 'Préservation de la biodiversité locale, gestion durable des eaux pluviales, tri sélectif et recyclage intégrés.'
        },
        {
          title: 'Énergies Renouvelables',
          description: 'Éclairage public solaire, bornes de recharge électrique, préparation pour panneaux solaires, smart grid en développement.'
        },
        {
          title: 'Gestion de l\'Eau',
          description: 'Récupération des eaux pluviales, arrosage automatique économique, bassins de rétention paysagers, plantes résistantes à la sécheresse.'
        },
        {
          title: 'Construction Durable',
          description: 'Matériaux locaux privilégiés, normes environnementales strictes, isolation thermique optimisée, ventilation naturelle encouragée.'
        }
      ]
    },
    
    infrastructure: {
      title: 'Infrastructure Moderne : Tout Pensé pour Votre Confort',
      description: 'CITTÀ VERDE offre une infrastructure complète et moderne pour garantir votre confort au quotidien.',
      categories: infrastructureCategories.length > 0 ? infrastructureCategories : [
        {
          name: 'Voirie & Circulation',
          items: [
            'Routes bitumées de qualité',
            'Trottoirs piétons sécurisés',
            'Éclairage public LED économique',
            'Signalisation moderne et claire',
            'Parkings visiteurs aménagés'
          ]
        },
        {
          name: 'Réseaux & Utilities',
          items: [
            'Électricité haute et basse tension',
            'Eau potable réseau ONEE',
            'Assainissement collectif moderne',
            'Télécommunications fibre optique',
            'Gaz naturel (en préparation)'
          ]
        },
        {
          name: 'Espaces Verts & Loisirs',
          items: [
            'Parc central de 2 hectares',
            'Aires de jeux pour enfants',
            'Parcours de jogging aménagé',
            'Espaces de détente ombragés',
            'Jardins thématiques entretenus'
          ]
        },
        {
          name: 'Services & Commerces',
          items: [
            'Centre commercial intégré',
            'Mosquée communautaire',
            'École maternelle privée',
            'Pharmacie et services médicaux',
            'Café/Restaurant de quartier'
          ]
        }
      ]
    },
    
    location_details: {
      title: 'Un Cadre de Vie Exceptionnel',
      description: 'CITTÀ VERDE bénéficie d\'un emplacement privilégié à Benslimane, offrant un cadre de vie exceptionnel entre nature et proximité des centres urbains.',
      proximities: proximityCategories.length > 0 ? proximityCategories : [
        {
          category: 'Loisirs & Sport',
          items: [
            {
              name: 'Golf de Benslimane',
              distance: '3 min',
              type: 'Golf 18 trous'
            },
            {
              name: 'Club équestre',
              distance: '8 min',
              type: 'Équitation'
            },
            {
              name: 'Complexe sportif',
              distance: '10 min',
              type: 'Sports variés'
            },
            {
              name: 'Espaces naturels',
              distance: 'Accès direct',
              type: 'Randonnée et nature'
            }
          ]
        },
        {
          category: 'Éducation',
          items: [
            {
              name: 'École internationale',
              distance: '12 min',
              type: 'Primaire et secondaire'
            },
            {
              name: 'Collège public',
              distance: '8 min',
              type: 'Enseignement public'
            },
            {
              name: 'Lycée technique',
              distance: '15 min',
              type: 'Formation technique'
            },
            {
              name: 'Université',
              distance: '25 min (Casablanca)',
              type: 'Enseignement supérieur'
            }
          ]
        },
        {
          category: 'Transports',
          items: [
            {
              name: 'Autoroute A3',
              distance: '5 min',
              type: 'Réseau autoroutier'
            },
            {
              name: 'Casablanca',
              distance: '45 min',
              type: 'Métropole économique'
            },
            {
              name: 'Rabat',
              distance: '35 min',
              type: 'Capitale administrative'
            },
            {
              name: 'Aéroport Mohammed V',
              distance: '40 min',
              type: 'Vols nationaux et internationaux'
            }
          ]
        }
      ]
    },
    
    testimonials: {
      title: 'Ils Ont Choisi CITTÀ VERDE',
      items: testimonials.length > 0 ? testimonials : [
        {
          name: 'Famille Bennani',
          profession: 'Propriétaires',
          comment: 'CITTÀ VERDE nous a séduits par son concept de ville verte. Nous avons construit notre villa de rêve dans un environnement exceptionnel, proche de tout mais au calme.',
          plotType: 'Villa R+2'
        },
        {
          name: 'M. Alami',
          profession: 'Investisseur',
          comment: 'Un excellent investissement ! La proximité du golf et de Casablanca, combinée à la qualité du lotissement, garantit une valorisation certaine.',
          plotType: 'Terrain d\'investissement'
        },
        {
          name: 'Mme Chraibi',
          profession: 'Résidente',
          comment: 'Notre maison de campagne à CITTÀ VERDE est devenue notre refuge. Le cadre verdoyant et la tranquillité sont incomparables.',
          plotType: 'Résidence secondaire'
        }
      ]
    },
    
    contact: {
      title: 'Découvrez CITTÀ VERDE : Votre Oasis de Verdure',
      description: 'Notre équipe CITTÀ VERDE vous accompagne dans la découverte de votre futur terrain à Benslimane.',
      info: {
        phone: '+212 XXX XXX XXX',
        email: 'cittaverde@groupemajaidri.ma',
        address: 'CITTÀ VERDE, Route du Golf, Benslimane',
        hours: '7j/7 de 9h00 - 19h00'
      }
    }
  };
}

// Parse Nos Projets content
export function parseNosProjetsContent(): NosProjetsContent {
  const filePath = path.join(process.cwd(), '06-nos-projets.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Extract hero section
  const heroTitleMatch = content.match(/# NOS PROJETS - GROUPE MAJAIDRI/);
  const heroSubtitleMatch = content.match(/### Sous-titre\s+(.+)/);
  const heroDescriptionMatch = content.match(/### Description Hero\s+([\s\S]*?)###/);
  
  // Extract projects
  const solunaSection = content.match(/## Section SOLUNA Casablanca([\s\S]*?)---/);
  const elBarakahSection = content.match(/## Section EL BARAKAH Guelmim([\s\S]*?)---/);
  const cittaVerdeSection = content.match(/## Section CITTÀ VERDE Benslimane([\s\S]*?)---/);
  
  // Extract comparison table
  const comparisonSection = content.match(/## Section Comparatif Projets([\s\S]*?)---/);
  let comparisonTable = {
    headers: ['Critère', 'SOLUNA', 'EL BARAKAH', 'CITTÀ VERDE'],
    rows: []
  };
  
  if (comparisonSection) {
    const tableMatch = comparisonSection[1].match(/\| (.+?) \| (.+?) \| (.+?) \| (.+?) \|/g);
    
    if (tableMatch) {
      // Skip the header and separator rows
      for (let i = 2; i < tableMatch.length; i++) {
        const rowMatch = tableMatch[i].match(/\| (.+?) \| (.+?) \| (.+?) \| (.+?) \|/);
        
        if (rowMatch) {
          comparisonTable.rows.push({
            criteria: rowMatch[1],
            soluna: rowMatch[2],
            elBarakah: rowMatch[3],
            cittaVerde: rowMatch[4]
          });
        }
      }
    }
  }
  
  // Extract guide
  const guideSection = content.match(/### Guide de Choix([\s\S]*?)---/);
  let guide = {
    soluna: [],
    elBarakah: [],
    cittaVerde: []
  };
  
  if (guideSection) {
    const solunaGuideMatch = guideSection[1].match(/#### Choisissez SOLUNA si :([\s\S]*?)####/);
    const elBarakahGuideMatch = guideSection[1].match(/#### Choisissez EL BARAKAH si :([\s\S]*?)####/);
    const cittaVerdeGuideMatch = guideSection[1].match(/#### Choisissez CITTÀ VERDE si :([\s\S]*?)---/);
    
    if (solunaGuideMatch) {
      const items = solunaGuideMatch[1].match(/- Vous (.+?)\n/g);
      if (items) {
        guide.soluna = items.map(item => 'Vous ' + item.replace(/- Vous /, '').trim());
      }
    }
    
    if (elBarakahGuideMatch) {
      const items = elBarakahGuideMatch[1].match(/- Vous (.+?)\n/g);
      if (items) {
        guide.elBarakah = items.map(item => 'Vous ' + item.replace(/- Vous /, '').trim());
      }
    }
    
    if (cittaVerdeGuideMatch) {
      const items = cittaVerdeGuideMatch[1].match(/- Vous (.+?)\n/g);
      if (items) {
        guide.cittaVerde = items.map(item => 'Vous ' + item.replace(/- Vous /, '').trim());
      }
    }
  }
  
  // Extract process
  const processSection = content.match(/## Section Processus d'Achat([\s\S]*?)---/);
  const processSteps = [];
  
  if (processSection) {
    const stepMatches = processSection[1].match(/#### \d\. (.+?)\n([\s\S]*?)(?=#### \d\. |$)/g);
    
    if (stepMatches) {
      stepMatches.forEach(stepMatch => {
        const titleMatch = stepMatch.match(/#### \d\. (.+?)\n/);
        const descriptionMatch = stepMatch.match(/- \*\*(.+?)\*\* (.+?)\n/g);
        
        if (titleMatch && descriptionMatch) {
          processSteps.push({
            title: titleMatch[1],
            description: descriptionMatch.map(item => item.replace(/- \*\*(.+?)\*\* /, '')).join(' ')
          });
        }
      });
    }
  }
  
  return {
    title: data.title || 'Nos Projets | Trois Univers d\'Exception',
    description: data.description || '',
    keywords: data.keywords ? data.keywords.split(', ') : [],
    author: data.author || 'Groupe Majaidri',
    date: data.date || new Date().toISOString(),
    lang: data.lang || 'fr',
    schema_markup: data.schema_markup || '',
    
    heroTitle: 'Nos Projets : L\'Excellence Immobilière Signée Groupe Majaidri',
    heroSubtitle: heroSubtitleMatch ? heroSubtitleMatch[1] : 'Trois Destinations d\'Exception pour Votre Avenir',
    heroDescription: heroDescriptionMatch ? heroDescriptionMatch[1].trim() : 'Découvrez notre portfolio de projets immobiliers d\'exception, chacun conçu pour répondre à des aspirations uniques.',
    
    projects: {
      soluna: {
        title: 'SOLUNA CASABLANCA',
        subtitle: 'Résidence de Prestige au Cœur de la Métropole',
        location: 'Casablanca',
        type: 'Résidences de Prestige',
        description: 'SOLUNA incarne l\'art de vivre urbain dans sa forme la plus raffinée. Cette résidence d\'exception offre des appartements haut de gamme alliant design contemporain, finitions luxueuses et services exclusifs.',
        features: [
          'Matériaux nobles importés d\'Italie',
          'Domotique intégrée dernière génération',
          'Espaces wellness privatifs',
          'Conciergerie 24h/7j'
        ],
        priceRange: '850K - 3.5M Dhs'
      },
      elBarakah: {
        title: 'EL BARAKAH GUELMIM',
        subtitle: 'Développement Régional et Habitat Moderne',
        location: 'Guelmim',
        type: 'Résidences Familiales',
        description: 'EL BARAKAH représente notre engagement envers le développement des régions du Sud. Ce projet ambitieux offre des logements modernes et accessibles, contribuant au dynamisme économique et social de Guelmim.',
        features: [
          'Aires de jeux premium sécurisées',
          'Espaces verts thématiques',
          'Club house familial',
          'Services de garde d\'enfants'
        ],
        priceRange: '320K - 680K Dhs'
      },
      cittaVerde: {
        title: 'CITTÀ VERDE BENSLIMANE',
        subtitle: 'Lotissement Écologique de Luxe',
        location: 'Benslimane',
        type: 'Lotissement Écologique',
        description: 'CITTÀ VERDE incarne notre vision de l\'urbanisme durable et responsable. Ce lotissement écologique d\'exception offre des terrains constructibles dans un cadre verdoyant, alliant respect de l\'environnement et qualité de vie.',
        features: [
          'Panneaux solaires intégrés',
          'Système de récupération d\'eau',
          'Jardins bioclimatiques',
          'Mobilité électrique'
        ],
        priceRange: '180K - 450K Dhs'
      }
    },
    
    comparison: {
      title: 'Trouvez le Projet qui Vous Correspond',
      description: 'Comparez nos trois projets phares pour trouver celui qui correspond le mieux à vos besoins et aspirations.',
      table: comparisonTable,
      guide: guide
    },
    
    process: {
      title: 'Votre Parcours d\'Acquisition Simplifié',
      description: 'Chez Groupe Majaidri, nous avons simplifié le processus d\'acquisition pour vous offrir une expérience fluide et transparente.',
      steps: processSteps.length > 0 ? processSteps : [
        {
          title: 'Découverte & Conseil',
          description: 'Visite des projets qui vous intéressent, conseil personnalisé selon vos besoins, présentation des options disponibles, simulation financière gratuite.'
        },
        {
          title: 'Réservation',
          description: 'Choix de votre bien ou terrain, signature du contrat de réservation, versement de l\'acompte (10-30%), blocage du prix et des conditions.'
        },
        {
          title: 'Financement',
          description: 'Accompagnement dans les démarches, partenariats bancaires privilégiés, négociation des meilleures conditions, validation du dossier de crédit.'
        },
        {
          title: 'Signature & Suivi',
          description: 'Signature de l\'acte de vente, suivi régulier de l\'avancement, communication transparente, livraison dans les délais.'
        }
      ]
    }
  };
}

// Parse Actualites content
export function parseActualitesContent(): ActualitesContent {
  const filePath = path.join(process.cwd(), '07-actualites.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Extract hero section
  const heroTitleMatch = content.match(/# ACTUALITÉS & ÉVÉNEMENTS - GROUPE MAJAIDRI/);
  const heroSubtitleMatch = content.match(/### Sous-titre\s+(.+)/);
  const heroDescriptionMatch = content.match(/### Description Hero\s+([\s\S]*?)###/);
  
  // Extract articles
  const articlesSection = content.match(/## Section Actualités Récentes([\s\S]*?)---/);
  const articles = [];
  
  if (articlesSection) {
    const articleMatches = articlesSection[1].match(/### Article \d+ : (.+?)\n\n([\s\S]*?)(?=### Article \d+ :|---)/g);
    
    if (articleMatches) {
      articleMatches.forEach(articleMatch => {
        const titleMatch = articleMatch.match(/### Article \d+ : (.+?)\n/);
        const dateMatch = articleMatch.match(/#### Date\s+(.+?)\n/);
        const categoryMatch = articleMatch.match(/#### Catégorie\s+(.+?)\n/);
        const excerptMatch = articleMatch.match(/#### Résumé\s+(.+?)\n/);
        const contentMatch = articleMatch.match(/#### Contenu Détaillé\s+([\s\S]*?)(?=#### |$)/);
        const imageMatch = articleMatch.match(/#### Images\s+([\s\S]*?)(?=---)/);
        
        if (titleMatch) {
          const slug = titleMatch[1].toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
          
          articles.push({
            title: titleMatch[1],
            date: dateMatch ? dateMatch[1] : 'Janvier 2024',
            category: categoryMatch ? categoryMatch[1] : 'Actualités',
            excerpt: excerptMatch ? excerptMatch[1] : '',
            content: contentMatch ? contentMatch[1] : '',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            slug: slug,
            featured: articles.length === 0 // First article is featured
          });
        }
      });
    }
  }
  
  // Extract events
  const eventsSection = content.match(/## Section Événements à Venir([\s\S]*?)---/);
  const events = [];
  
  if (eventsSection) {
    const eventMatches = eventsSection[1].match(/### Événement \d+ : (.+?)\n\n([\s\S]*?)(?=### Événement \d+ :|---)/g);
    
    if (eventMatches) {
      eventMatches.forEach(eventMatch => {
        const titleMatch = eventMatch.match(/### Événement \d+ : (.+?)\n/);
        const dateMatch = eventMatch.match(/#### Date\s+(.+?)\n/);
        const locationMatch = eventMatch.match(/#### Lieu\s+(.+?)\n/);
        const descriptionMatch = eventMatch.match(/#### Description\s+(.+?)\n/);
        const typeMatch = eventMatch.match(/#### Type\s+(.+?)\n/);
        
        if (titleMatch) {
          events.push({
            title: titleMatch[1],
            date: dateMatch ? dateMatch[1] : 'Décembre 2024',
            location: locationMatch ? locationMatch[1] : 'Casablanca',
            description: descriptionMatch ? descriptionMatch[1] : '',
            type: typeMatch ? typeMatch[1] : 'Événement'
          });
        }
      });
    }
  }
  
  // Extract press
  const pressSection = content.match(/## Section Revue de Presse([\s\S]*?)---/);
  const press = [];
  
  if (pressSection) {
    const pressMatches = pressSection[1].match(/#### (.+?) - (.+?)\n\n\*\*"(.+?)"\*\*/g);
    
    if (pressMatches) {
      pressMatches.forEach(pressMatch => {
        const parts = pressMatch.match(/#### (.+?) - (.+?)\n\n\*\*"(.+?)"\*\*/);
        
        if (parts) {
          press.push({
            title: parts[3],
            source: parts[1],
            date: parts[2],
            excerpt: 'Article de fond sur notre stratégie de développement durable et l\'impact de nos projets sur l\'urbanisme marocain.',
            link: '#'
          });
        }
      });
    }
  }
  
  return {
    title: data.title || 'Actualités & Événements | News Immobilier Maroc | SOLUNA EL BARAKAH CITTÀ VERDE',
    description: data.description || '',
    keywords: data.keywords ? data.keywords.split(', ') : [],
    author: data.author || 'Groupe Majaidri',
    date: data.date || new Date().toISOString(),
    lang: data.lang || 'fr',
    schema_markup: data.schema_markup || '',
    
    heroTitle: 'Actualités & Événements : Le Dynamisme de Groupe Majaidri',
    heroSubtitle: heroSubtitleMatch ? heroSubtitleMatch[1] : 'Suivez Notre Actualité et Nos Événements',
    heroDescription: heroDescriptionMatch ? heroDescriptionMatch[1].trim() : 'Restez informés de toutes les actualités du Groupe Majaidri : lancements de projets, événements immobiliers, innovations, partenariats et moments forts de notre développement.',
    
    articles: articles.length > 0 ? articles : [
      {
        title: 'Groupe Majaidri Remporte le Prix Excellence Immobilière 2024',
        date: '15 janvier 2024',
        category: 'Récompenses',
        excerpt: 'Reconnaissance de notre engagement pour l\'innovation architecturale et le développement durable. Une fierté qui nous pousse vers de nouveaux sommets d\'excellence.',
        content: 'Du 12 au 15 novembre 2024, le Groupe Majaidri a participé avec succès au Salon de l\'Immobilier de Luxe organisé à l\'Office des Changes de Casablanca. Notre stand, conçu pour refléter l\'élégance et l\'innovation de nos projets, a attiré plus de 500 visiteurs sur les quatre jours de l\'événement.',
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        slug: 'prix-excellence-immobiliere-2024',
        featured: true
      },
      {
        title: 'CITTÀ VERDE : Premier Lotissement Zéro Carbone du Maroc',
        date: '8 janvier 2024',
        category: 'Innovation',
        excerpt: 'Une révolution écologique qui positionne le Maroc à l\'avant-garde de l\'habitat durable. L\'avenir commence à Benslimane.',
        content: 'Le 8 novembre 2024, en présence des autorités locales, des partenaires et des premiers acquéreurs, le Groupe Majaidri a officiellement lancé la Phase II de CITTÀ VERDE Benslimane. Cette étape marque une nouvelle avancée dans notre vision de l\'urbanisme durable.',
        image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        slug: 'citta-verde-lotissement-zero-carbone',
        featured: false
      },
      {
        title: 'Lancement de la Phase 2 d\'EL BARAKAH',
        date: '22 décembre 2023',
        category: 'Projets',
        excerpt: '100 nouvelles résidences familiales qui enrichissent notre vision de l\'art de vivre multigénérationnel.',
        content: 'Suite au succès de la première phase, nous sommes fiers d\'annoncer le lancement de la Phase 2 d\'EL BARAKAH à Guelmim. Cette nouvelle étape comprend 100 résidences familiales supplémentaires, conçues pour offrir un cadre de vie optimal aux familles de la région.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        slug: 'lancement-phase-2-el-barakah',
        featured: false
      }
    ],
    
    events: events.length > 0 ? events : [
      {
        title: 'Journées Portes Ouvertes SOLUNA',
        date: '7-8 Décembre 2024',
        location: 'Appartement Témoin SOLUNA, Casablanca',
        description: 'Découvrez en exclusivité les appartements témoins de SOLUNA, entièrement meublés et décorés par nos partenaires designers.',
        type: 'Événement'
      },
      {
        title: 'Salon Immobilier de Guelmim',
        date: '15-17 Décembre 2024',
        location: 'Centre Culturel de Guelmim',
        description: 'Retrouvez-nous au premier Salon Immobilier de Guelmim où nous présenterons EL BARAKAH et les opportunités d\'investissement dans les provinces du Sud.',
        type: 'Salon'
      },
      {
        title: 'Conférence "L\'Immobilier Durable au Maroc"',
        date: '10 Janvier 2025',
        location: 'Hôtel Sofitel Casablanca Tour Blanche',
        description: 'Conférence organisée par le Groupe Majaidri sur les enjeux du développement durable dans l\'immobilier marocain, avec la participation d\'experts nationaux et internationaux.',
        type: 'Conférence'
      }
    ],
    
    press: press.length > 0 ? press : [
      {
        title: 'Groupe Majaidri : L\'immobilier durable en marche',
        source: 'L\'Économiste',
        date: '20 Novembre 2024',
        excerpt: 'Article de fond sur notre stratégie de développement durable et l\'impact de CITTÀ VERDE sur l\'urbanisme marocain.',
        link: '#'
      },
      {
        title: 'SOLUNA Casablanca : Le luxe urbain redéfini',
        source: 'Finances News Hebdo',
        date: '18 Novembre 2024',
        excerpt: 'Analyse détaillée du positionnement de SOLUNA sur le marché du luxe casablancais.',
        link: '#'
      },
      {
        title: 'EL BARAKAH : Quand l\'immobilier dynamise les régions',
        source: 'La Vie Éco',
        date: '15 Novembre 2024',
        excerpt: 'Reportage sur l\'impact économique et social du projet EL BARAKAH à Guelmim.',
        link: '#'
      }
    ]
  };
}

// Parse Contact content
export function parseContactContent(): ContactContent {
  const filePath = path.join(process.cwd(), '08-contact.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Extract hero section
  const heroTitleMatch = content.match(/# CONTACT - GROUPE MAJAIDRI/);
  const heroSubtitleMatch = content.match(/### Sous-titre\s+(.+)/);
  const heroDescriptionMatch = content.match(/### Description Hero\s+([\s\S]*?)###/);
  
  // Extract main office
  const mainOfficeSection = content.match(/## Section Informations Générales([\s\S]*?)---/);
  let mainOffice = {
    title: 'Groupe Majaidri : Toujours Proche de Vous',
    address: 'Casablanca, Maroc',
    phone: '+212 XXX XXX XXX',
    email: 'contact@groupemajaidri.ma',
    hours: 'Lun-Ven 9h00 - 18h00, Sam 9h00 - 16h00'
  };
  
  if (mainOfficeSection) {
    const addressMatch = mainOfficeSection[1].match(/- \*\*Adresse\*\* : (.+?)\n/);
    const phoneMatch = mainOfficeSection[1].match(/- \*\*Téléphone\*\* : (.+?)\n/);
    const emailMatch = mainOfficeSection[1].match(/- \*\*Email\*\* : (.+?)\n/);
    const hoursMatch = mainOfficeSection[1].match(/- \*\*Lundi - Vendredi\*\* : (.+?)\n- \*\*Samedi\*\* : (.+?)\n/);
    
    if (addressMatch) mainOffice.address = addressMatch[1];
    if (phoneMatch) mainOffice.phone = phoneMatch[1];
    if (emailMatch) mainOffice.email = emailMatch[1];
    if (hoursMatch) mainOffice.hours = `Lun-Ven ${hoursMatch[1]}, Sam ${hoursMatch[2]}`;
  }
  
  // Extract sales offices
  const salesOfficesSection = content.match(/## Section Bureaux de Vente par Projet([\s\S]*?)---/);
  const salesOffices = [];
  
  if (salesOfficesSection) {
    const officeMatches = salesOfficesSection[1].match(/### Bureau (.+?)\n\n([\s\S]*?)(?=### Bureau|---)/g);
    
    if (officeMatches) {
      officeMatches.forEach(officeMatch => {
        const nameMatch = officeMatch.match(/### Bureau (.+?)\n/);
        const locationMatch = officeMatch.match(/- \*\*Adresse\*\* : (.+?)\n/);
        const phoneMatch = officeMatch.match(/- \*\*Téléphone\*\* : (.+?)\n/);
        const emailMatch = officeMatch.match(/- \*\*Email\*\* : (.+?)\n/);
        const hoursMatch = officeMatch.match(/- \*\*Horaires (.+?)\*\* : (.+?)\n/);
        
        if (nameMatch) {
          salesOffices.push({
            name: `Bureau ${nameMatch[1]}`,
            location: nameMatch[1].includes('SOLUNA') ? 'Casablanca' : nameMatch[1].includes('EL BARAKAH') ? 'Guelmim' : 'Benslimane',
            address: locationMatch ? locationMatch[1] : '',
            phone: phoneMatch ? phoneMatch[1] : '+212 XXX XXX XXX',
            email: emailMatch ? emailMatch[1] : `${nameMatch[1].toLowerCase().replace(' ', '')}@groupemajaidri.ma`,
            hours: hoursMatch ? hoursMatch[2] : '7j/7 9h-19h'
          });
        }
      });
    }
  }
  
  // Extract team
  const teamSection = content.match(/## Section Équipe Commerciale([\s\S]*?)---/);
  const teamMembers = [];
  
  if (teamSection) {
    const memberMatches = teamSection[1].match(/#### (.+?)\n([\s\S]*?)(?=#### |---)/g);
    
    if (memberMatches) {
      memberMatches.forEach(memberMatch => {
        const nameMatch = memberMatch.match(/#### (.+?)\n/);
        const positionMatch = memberMatch.match(/- \*\*(.+?)\*\* : (.+?)\n/);
        const phoneMatch = memberMatch.match(/- \*\*Téléphone\*\* : (.+?)\n/);
        const emailMatch = memberMatch.match(/- \*\*Email\*\* : (.+?)\n/);
        const specialtiesMatch = memberMatch.match(/- \*\*Spécialités\*\* : (.+?)\n/);
        
        if (nameMatch && positionMatch) {
          teamMembers.push({
            name: nameMatch[1],
            position: positionMatch[2],
            phone: phoneMatch ? phoneMatch[1] : '+212 XXX XXX XXX',
            email: emailMatch ? emailMatch[1] : 'contact@groupemajaidri.ma',
            specialties: specialtiesMatch ? specialtiesMatch[1].split(', ') : ['Conseil immobilier']
          });
        }
      });
    }
  }
  
  // Extract form
  const formSection = content.match(/## Section Formulaires de Contact([\s\S]*?)---/);
  const formFields = [];
  
  if (formSection) {
    const generalFormMatch = formSection[1].match(/### Formulaire de Contact Général([\s\S]*?)###/);
    
    if (generalFormMatch) {
      const requiredFieldsMatch = generalFormMatch[1].match(/#### Informations Requises([\s\S]*?)####/);
      const demandFieldsMatch = generalFormMatch[1].match(/#### Votre Demande([\s\S]*?)####/);
      
      if (requiredFieldsMatch) {
        const fieldMatches = requiredFieldsMatch[1].match(/- \*\*(.+?)\*\* : (.+?)\n/g);
        
        if (fieldMatches) {
          fieldMatches.forEach(fieldMatch => {
            const parts = fieldMatch.match(/- \*\*(.+?)\*\* : (.+?)\n/);
            
            if (parts) {
              formFields.push({
                name: parts[1].toLowerCase().replace(/\s+/g, '_'),
                label: parts[1],
                type: parts[1].includes('Email') ? 'email' : parts[1].includes('Téléphone') ? 'tel' : 'text',
                required: parts[2].includes('obligatoire')
              });
            }
          });
        }
      }
      
      if (demandFieldsMatch) {
        const projectFieldMatch = demandFieldsMatch[1].match(/- \*\*Projet d'intérêt\*\* :([\s\S]*?)- \*\*Type/);
        
        if (projectFieldMatch) {
          const options = projectFieldMatch[1].match(/- (.+?)\n/g);
          
          if (options) {
            formFields.push({
              name: 'projet',
              label: 'Projet d\'intérêt',
              type: 'select',
              required: false,
              options: options.map(option => option.replace(/- /, '').trim())
            });
          }
        }
        
        formFields.push({
          name: 'message',
          label: 'Message',
          type: 'textarea',
          required: true
        });
      }
    }
  }
  
  return {
    title: data.title || 'Contact Groupe Majaidri | Bureaux Vente SOLUNA EL BARAKAH CITTÀ VERDE | Rendez-vous Immobilier',
    description: data.description || '',
    keywords: data.keywords ? data.keywords.split(', ') : [],
    author: data.author || 'Groupe Majaidri',
    date: data.date || new Date().toISOString(),
    lang: data.lang || 'fr',
    schema_markup: data.schema_markup || '',
    
    heroTitle: 'Contactez-Nous : Votre Projet Nous Tient à Cœur',
    heroSubtitle: heroSubtitleMatch ? heroSubtitleMatch[1] : 'Une Équipe à Votre Écoute pour Concrétiser Vos Ambitions',
    heroDescription: heroDescriptionMatch ? heroDescriptionMatch[1].trim() : 'Que vous souhaitiez découvrir nos projets, obtenir des conseils personnalisés, planifier une visite ou simplement nous poser une question, notre équipe d\'experts est à votre disposition.',
    
    mainOffice: mainOffice,
    
    salesOffices: {
      title: 'Nos Bureaux de Vente : Proximité et Expertise',
      offices: salesOffices.length > 0 ? salesOffices : [
        {
          name: 'Bureau SOLUNA',
          location: 'Casablanca',
          address: 'Résidence SOLUNA, Casablanca',
          phone: '+212 XXX XXX XXX',
          email: 'soluna@groupemajaidri.ma',
          hours: 'Lun-Sam 9h-19h, Dim 10h-16h'
        },
        {
          name: 'Bureau EL BARAKAH',
          location: 'Guelmim',
          address: 'Avenue Mohammed V, Guelmim',
          phone: '+212 XXX XXX XXX',
          email: 'elbarakah@groupemajaidri.ma',
          hours: 'Lun-Sam 9h-18h'
        },
        {
          name: 'Bureau CITTÀ VERDE',
          location: 'Benslimane',
          address: 'Sur site, Route du Golf, Benslimane',
          phone: '+212 XXX XXX XXX',
          email: 'cittaverde@groupemajaidri.ma',
          hours: '7j/7 9h-19h'
        }
      ]
    },
    
    team: {
      title: 'Notre Équipe : Des Experts à Votre Service',
      members: teamMembers.length > 0 ? teamMembers : [
        {
          name: 'Directeur Commercial',
          position: 'Direction Commerciale',
          phone: '+212 XXX XXX XXX',
          email: 'direction.commerciale@groupemajaidri.ma',
          specialties: ['Stratégie commerciale', 'grands comptes']
        },
        {
          name: 'Conseiller SOLUNA',
          position: 'Conseiller Immobilier',
          phone: '+212 XXX XXX XXX',
          email: 'soluna.ventes@groupemajaidri.ma',
          specialties: ['Immobilier de luxe', 'investissement']
        },
        {
          name: 'Conseiller EL BARAKAH',
          position: 'Conseiller Immobilier',
          phone: '+212 XXX XXX XXX',
          email: 'elbarakah.ventes@groupemajaidri.ma',
          specialties: ['Développement régional', 'MRE']
        },
        {
          name: 'Conseiller CITTÀ VERDE',
          position: 'Conseiller Immobilier',
          phone: '+212 XXX XXX XXX',
          email: 'cittaverde.ventes@groupemajaidri.ma',
          specialties: ['Terrains', 'construction', 'écologie']
        }
      ]
    },
    
    form: {
      title: 'Contactez-Nous : Choisissez Votre Préférence',
      description: 'Pour toute demande d\'information, de rendez-vous ou de documentation, veuillez remplir le formulaire ci-dessous.',
      fields: formFields.length > 0 ? formFields : [
        {
          name: 'nom',
          label: 'Nom complet',
          type: 'text',
          required: true
        },
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          required: true
        },
        {
          name: 'telephone',
          label: 'Téléphone',
          type: 'tel',
          required: false
        },
        {
          name: 'projet',
          label: 'Projet d\'intérêt',
          type: 'select',
          required: false,
          options: [
            'SOLUNA Casablanca',
            'EL BARAKAH Guelmim',
            'CITTÀ VERDE Benslimane',
            'Information générale'
          ]
        },
        {
          name: 'message',
          label: 'Message',
          type: 'textarea',
          required: true
        }
      ]
    }
  };
}

// Get all projects
export function getAllProjects(): Project[] {
  const soluna = parseSolunaContent();
  const elBarakah = parseElBarakahContent();
  const cittaVerde = parseCittaVerdeContent();
  
  return [
    {
      id: 'soluna',
      name: 'SOLUNA',
      subtitle: 'L\'Harmonie Céleste',
      location: 'Casablanca',
      type: 'Résidences de Prestige',
      description: 'Une symphonie architecturale où chaque détail révèle un raffinement absolu. SOLUNA incarne l\'excellence à l\'état pur, avec des finitions nobles et des espaces pensés pour l\'art de vivre.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      theme: 'soluna',
      features: [
        'Matériaux nobles importés d\'Italie',
        'Domotique intégrée dernière génération',
        'Espaces wellness privatifs',
        'Conciergerie 24h/7j'
      ],
      stats: {
        surface: '85-180m²',
        units: '120 appartements',
        delivery: 'T4 2025'
      },
      priceRange: '850K - 3.5M Dhs'
    },
    {
      id: 'el-barakah',
      name: 'EL BARAKAH',
      subtitle: 'La Bénédiction Familiale',
      location: 'Guelmim',
      type: 'Résidences Familiales',
      description: 'Un écrin de bonheur familial où chaque espace respire la sérénité. EL BARAKAH transforme le quotidien en moments précieux, avec des équipements pensés pour toute la famille.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
      theme: 'barakah',
      features: [
        'Aires de jeux premium sécurisées',
        'Espaces verts thématiques',
        'Club house familial',
        'Services de garde d\'enfants'
      ],
      stats: {
        surface: '60-150m²',
        units: '80 appartements',
        delivery: 'T2 2025'
      },
      priceRange: '320K - 680K Dhs'
    },
    {
      id: 'citta-verde',
      name: 'CITTÀ VERDE',
      subtitle: 'L\'Éco-Luxe Italien',
      location: 'Benslimane',
      type: 'Lotissement Écologique',
      description: 'L\'alliance parfaite entre élégance italienne et innovation écologique. CITTÀ VERDE redéfinit le luxe durable avec des technologies vertes intégrées.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      theme: 'verde',
      features: [
        'Panneaux solaires intégrés',
        'Système de récupération d\'eau',
        'Jardins bioclimatiques',
        'Mobilité électrique'
      ],
      stats: {
        surface: '200-800m²',
        units: '45 terrains',
        delivery: 'Par phases'
      },
      priceRange: '180K - 450K Dhs'
    }
  ];
}