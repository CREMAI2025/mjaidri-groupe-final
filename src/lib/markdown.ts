// This file contains types and functions for parsing markdown content

export interface ElBarakahContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  apartments: {
    title: string;
    description: string;
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
    categories: {
      name: string;
      items: {
        name: string;
        description: string;
      }[];
    }[];
  };
  location_details: {
    description: string;
    proximities: {
      category: string;
      items: {
        name: string;
        distance: string;
        type?: string;
      }[];
    }[];
  };
  regional_impact: {
    description: string;
    aspects: {
      title: string;
      description: string;
    }[];
  };
  testimonials: {
    items: {
      name: string;
      profession: string;
      comment: string;
      apartment: string;
    }[];
  };
  contact: {
    description: string;
    info: {
      phone: string;
      email: string;
      address: string;
      hours: string;
    };
  };
}

export interface CittaVerdeContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  plots: {
    title: string;
    description: string;
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
    description: string;
    features: {
      title: string;
      description: string;
    }[];
  };
  infrastructure: {
    description: string;
    categories: {
      name: string;
      items: string[];
    }[];
  };
  location_details: {
    description: string;
    proximities: {
      category: string;
      items: {
        name: string;
        distance: string;
        type?: string;
      }[];
    }[];
  };
  testimonials: {
    items: {
      name: string;
      profession: string;
      comment: string;
      plotType: string;
    }[];
  };
  contact: {
    description: string;
    info: {
      phone: string;
      email: string;
      address: string;
      hours: string;
    };
  };
}

export interface ActualitesContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  articles: {
    title: string;
    date: string;
    category: string;
    excerpt: string;
    slug: string;
    image: string;
    featured?: boolean;
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

export interface ContactContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  mainOffice: {
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  salesOffices: {
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
    members: {
      name: string;
      position: string;
      phone: string;
      email: string;
      specialties: string[];
    }[];
  };
  form: {
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

// Parse functions for each content type
export function parseElBarakahContent(): ElBarakahContent {
  // This would normally parse markdown files, but for now we'll return mock data
  return {
    heroTitle: "EL BARAKAH",
    heroSubtitle: "La Bénédiction Familiale",
    heroDescription: "Là où les Générations se Rencontrent, Où l'Amour Grandit",
    apartments: {
      title: "Nos Foyers Bénis : Où Chaque Famille Trouve Son Sanctuaire",
      description: "Chaque appartement est conçu pour offrir un cadre de vie familial idéal",
      types: [
        {
          name: "Le Nid de l'Amour",
          subtitle: "Appartement 2 Pièces d'Exception",
          surface: "60-70 m²",
          rooms: 2,
          bathrooms: 1,
          price: "À partir de 320K Dhs",
          description: "Suite parentale avec coin lecture, salon-séjour ouvert sur loggia, cuisine familiale équipée (électroménager Bosch), salle de bain avec douche relaxante.",
          features: [
            "Terrasse privée 12-15 m²",
            "Carrelage terre cuite",
            "Climatisation écologique",
            "Rangements optimisés"
          ],
          idealFor: "Jeunes couples, premiers foyers, investissement familial",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
          name: "Le Cocon des Rires",
          subtitle: "Appartement 3 Pièces Familial",
          surface: "80-90 m²",
          rooms: 3,
          bathrooms: 2,
          price: "À partir de 420K Dhs",
          description: "2 chambres avec placards ludiques, salon-salle à manger convivial, cuisine ouverte avec coin petit-déjeuner, 2 salles d'eau (dont une adaptée enfants), cellier/rangement familial.",
          features: [
            "Terrasse familiale 18-22 m²",
            "Sols anti-dérapants",
            "Prises sécurisées enfants",
            "Éclairage doux"
          ],
          idealFor: "Familles avec 1-2 enfants, couples en projet d'agrandissement",
          image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
          name: "Le Palais des Générations",
          subtitle: "Appartement 4 Pièces Prestige Familial",
          surface: "100-120 m²",
          rooms: 4,
          bathrooms: 2,
          price: "À partir de 520K Dhs",
          description: "Suite parentale (20m²) avec dressing et salle de bain privative, 2 chambres enfants/ados avec espaces personnalisés, double salon (réception familiale + coin TV), cuisine familiale avec îlot central et coin repas, bureau/espace devoirs.",
          features: [
            "Grande terrasse panoramique 25-30 m²",
            "Hauteur sous plafond 2.8m",
            "Ventilation naturelle",
            "Coin prière discret"
          ],
          idealFor: "Grandes familles, familles multigénérationnelles, dirigeants locaux",
          image: "https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        }
      ]
    },
    amenities: {
      categories: [
        {
          name: "Le Royaume des Enfants",
          items: [
            {
              name: "Aire de Jeux Premium",
              description: "Équipements ludiques sécurisés (3-12 ans)"
            },
            {
              name: "Mini-Terrain de Football",
              description: "Espace sport adapté aux jeunes"
            },
            {
              name: "Coin Lecture Extérieur",
              description: "Bibliothèque de quartier sous pergola"
            }
          ]
        },
        {
          name: "L'Espace Bien-Être Familial",
          items: [
            {
              name: "Terrain Multi-Sports",
              description: "Basketball, volleyball, badminton"
            },
            {
              name: "Piste de Jogging",
              description: "Circuit de 800m dans les jardins"
            },
            {
              name: "Espace Fitness Extérieur",
              description: "Agrès pour adultes et seniors"
            }
          ]
        },
        {
          name: "Les Jardins Familiaux Thématiques",
          items: [
            {
              name: "Jardin des Aromates",
              description: "Menthe, coriandre, persil pour les familles"
            },
            {
              name: "Verger Communautaire",
              description: "Orangers, citronniers, grenadiers"
            },
            {
              name: "Espaces Pique-nique",
              description: "Tables familiales sous les palmiers"
            }
          ]
        },
        {
          name: "Services de Vie & Sécurité Familiale",
          items: [
            {
              name: "Gardiennage Familial",
              description: "24h/24 avec formation petite enfance"
            },
            {
              name: "Contrôle d'Accès Intelligent",
              description: "Badges familiaux personnalisés"
            },
            {
              name: "Commerce de Proximité",
              description: "Épicerie fine + Café familial"
            }
          ]
        }
      ]
    },
    location_details: {
      description: "EL BARAKAH bénéficie d'un emplacement privilégié à Guelmim, offrant un accès facile à tous les services essentiels.",
      proximities: [
        {
          category: "Éducation",
          items: [
            { name: "Écoles privées", distance: "5 min", type: "Enseignement privé" },
            { name: "Collège public", distance: "8 min", type: "Enseignement public" },
            { name: "Lycée technique", distance: "10 min", type: "Formation technique" },
            { name: "Centre de formation", distance: "12 min", type: "Formation professionnelle" }
          ]
        },
        {
          category: "Santé",
          items: [
            { name: "Centre de santé", distance: "3 min", type: "Soins de base" },
            { name: "Pharmacies", distance: "2 min", type: "Médicaments" },
            { name: "Hôpital provincial", distance: "15 min", type: "Soins complets" },
            { name: "Cliniques privées", distance: "10 min", type: "Soins spécialisés" }
          ]
        },
        {
          category: "Services & Commerces",
          items: [
            { name: "Marché municipal", distance: "8 min", type: "Produits frais" },
            { name: "Centre commercial", distance: "12 min", type: "Shopping" },
            { name: "Banques", distance: "5 min", type: "Services financiers" },
            { name: "Administration", distance: "10 min", type: "Services publics" }
          ]
        },
        {
          category: "Transports",
          items: [
            { name: "Gare routière", distance: "15 min", type: "Transport interurbain" },
            { name: "Aéroport Guelmim", distance: "20 min", type: "Transport aérien" },
            { name: "Axes principaux", distance: "Accès direct", type: "Routes nationales" },
            { name: "Transport public", distance: "Arrêts à proximité", type: "Bus urbains" }
          ]
        }
      ]
    },
    regional_impact: {
      description: "EL BARAKAH représente notre engagement envers le développement équilibré du territoire marocain.",
      aspects: [
        {
          title: "Contribution Économique",
          description: "Création d'emplois locaux, dynamisation du secteur BTP, attraction d'investissements, développement de l'écosystème local."
        },
        {
          title: "Développement Durable",
          description: "Matériaux locaux privilégiés, techniques respectueuses de l'environnement, gestion optimisée des ressources, intégration paysagère harmonieuse."
        },
        {
          title: "Impact Social",
          description: "Logements accessibles aux familles, amélioration du cadre de vie, renforcement du tissu social, services de proximité intégrés."
        },
        {
          title: "Perspectives d'Avenir",
          description: "Valorisation du patrimoine immobilier, attractivité renforcée de la région, développement touristique potentiel, rayonnement économique élargi."
        }
      ]
    },
    testimonials: {
      items: [
        {
          name: "Famille Benali",
          profession: "Propriétaires",
          comment: "Groupe Majaidri a transformé notre rêve en réalité. Notre appartement à EL BARAKAH est un véritable havre de paix où modernité et authenticité marocaine se marient parfaitement. L'équipe nous a accompagnés avec un professionnalisme exemplaire.",
          apartment: "Appartement familial 4 pièces"
        },
        {
          name: "M. Rachid Alami",
          profession: "Investisseur",
          comment: "En tant qu'investisseur, j'ai été séduit par la vision long terme de Majaidri. EL BARAKAH représente l'avenir de l'immobilier familial au Maroc. ROI exceptionnel et qualité irréprochable.",
          apartment: "Investissement locatif"
        },
        {
          name: "Mme Fatima",
          profession: "Retraitée",
          comment: "Après avoir vécu à Casablanca, j'ai choisi EL BARAKAH pour la tranquillité et la proximité des services. Je ne regrette pas mon choix, l'ambiance est familiale et chaleureuse.",
          apartment: "Appartement 2 pièces"
        }
      ]
    },
    contact: {
      description: "Notre équipe EL BARAKAH vous accompagne dans la découverte de votre futur appartement familial. Contactez-nous pour une expérience personnalisée.",
      info: {
        phone: "+212 XXX XXX XXX",
        email: "elbarakah@groupemajaidri.ma",
        address: "Avenue Mohammed V, Guelmim",
        hours: "Lun-Sam 9h-18h"
      }
    }
  };
}

export function parseCittaVerdeContent(): CittaVerdeContent {
  // This would normally parse markdown files, but for now we'll return mock data
  return {
    heroTitle: "CITTÀ VERDE",
    heroSubtitle: "L'Éden Contemporain",
    heroDescription: "Où l'Innovation Verte Épouse l'Élégance Italienne",
    plots: {
      title: "Nos Terrains : Construisez Votre Vision Écologique",
      description: "Chaque parcelle est conçue pour vous permettre de réaliser votre projet immobilier dans un cadre écologique",
      types: [
        {
          name: "L'Éden Intime",
          subtitle: "Terrain Éco-Résidentiel d'Exception",
          surface: "110-150 m²",
          elevation: "R+2",
          price: "À partir de 180K Dhs",
          description: "Parcelle idéale pour une villa familiale éco-responsable ou un petit immeuble vert, avec orientation solaire optimisée pour une efficacité énergétique maximale.",
          features: [
            "Pré-équipement solaire inclus",
            "Système de récupération d'eau intégré",
            "Borne de recharge électrique",
            "Jardin méditerranéen pré-planté"
          ],
          idealFor: "Familles éco-conscientes, investisseurs en habitat durable",
          image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
          name: "Le Sanctuaire Familial",
          subtitle: "Terrain Éco-Prestige Résidentiel",
          surface: "200-300 m²",
          elevation: "R+2",
          price: "À partir de 280K Dhs",
          description: "Parcelle généreuse pour une villa de standing avec écosystème jardin, permettant l'aménagement d'une piscine naturelle ou d'un jardin en permaculture.",
          features: [
            "Installation domotique pré-câblée",
            "Système d'irrigation intelligent",
            "Espace wellness extérieur",
            "Garage éco-conçu"
          ],
          idealFor: "Familles nombreuses cherchant l'harmonie avec la nature",
          image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
          name: "L'Innovation Verticale",
          subtitle: "Terrain Éco-Résidentiel R+3",
          surface: "150-250 m²",
          elevation: "R+3",
          price: "À partir de 220K Dhs",
          description: "Parcelle optimisée pour un immeuble résidentiel vert ou une villa contemporaine, avec une rentabilité optimisée pour un investissement éco-responsable.",
          features: [
            "Micro-éolienne urbaine incluse",
            "Façade végétale préparée",
            "Ascenseur écologique",
            "Terrasses jardins étagées"
          ],
          idealFor: "Investisseurs et promoteurs orientés développement durable",
          image: "https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        }
      ]
    },
    sustainability: {
      description: "CITTÀ VERDE incarne notre vision de l'urbanisme durable et responsable, avec des innovations écologiques intégrées.",
      features: [
        {
          title: "L'Énergie de Demain",
          description: "Panneaux solaires signature, micro-éoliennes urbaines, stockage intelligent avec batteries Tesla Powerwall, réseau Smart Grid pour une distribution énergétique optimisée."
        },
        {
          title: "L'Or Bleu Préservé",
          description: "Récupération d'eau de pluie avec citernes enterrées, phytoépuration pour le traitement naturel des eaux grises, irrigation intelligente automatisée, puits artésiens pour l'accès à l'eau pure."
        },
        {
          title: "L'Économie Circulaire Intégrée",
          description: "Tri sélectif premium avec 7 catégories de déchets, compostage communautaire, centre de valorisation intégré, objectif zéro déchet d'ici 2026."
        },
        {
          title: "Mobilité Verte & Services Premium",
          description: "Pistes cyclables sécurisées, bornes électriques pour recharge rapide, car-sharing électrique entre résidents, maintenance écologique 100% bio et durable."
        }
      ]
    },
    infrastructure: {
      description: "CITTÀ VERDE bénéficie d'infrastructures modernes et durables, conçues pour offrir un cadre de vie optimal.",
      categories: [
        {
          name: "Voirie & Circulation",
          items: [
            "Routes bitumées de qualité",
            "Trottoirs piétons sécurisés",
            "Éclairage public LED économique",
            "Signalisation moderne et claire",
            "Parkings visiteurs aménagés"
          ]
        },
        {
          name: "Réseaux & Utilities",
          items: [
            "Électricité haute et basse tension",
            "Eau potable réseau ONEE",
            "Assainissement collectif moderne",
            "Télécommunications fibre optique",
            "Gaz naturel (en préparation)"
          ]
        },
        {
          name: "Espaces Verts & Loisirs",
          items: [
            "Parc central de 2 hectares",
            "Aires de jeux pour enfants",
            "Parcours de jogging aménagé",
            "Espaces de détente ombragés",
            "Jardins thématiques entretenus"
          ]
        },
        {
          name: "Services & Commerces",
          items: [
            "Centre commercial intégré",
            "Mosquée communautaire",
            "École maternelle privée",
            "Pharmacie et services médicaux",
            "Café/Restaurant de quartier"
          ]
        }
      ]
    },
    location_details: {
      description: "CITTÀ VERDE bénéficie d'un emplacement exceptionnel à Benslimane, alliant proximité de la nature et accessibilité urbaine.",
      proximities: [
        {
          category: "Loisirs & Sport",
          items: [
            { name: "Golf de Benslimane", distance: "3 min", type: "Golf 18 trous" },
            { name: "Club équestre", distance: "8 min", type: "Équitation" },
            { name: "Complexe sportif", distance: "10 min", type: "Sports divers" },
            { name: "Espaces naturels", distance: "Accès direct", type: "Randonnée" }
          ]
        },
        {
          category: "Éducation",
          items: [
            { name: "École internationale", distance: "12 min", type: "Primaire et secondaire" },
            { name: "Collège public", distance: "8 min", type: "Enseignement public" },
            { name: "Lycée technique", distance: "15 min", type: "Formation technique" },
            { name: "Université", distance: "25 min", type: "Enseignement supérieur" }
          ]
        },
        {
          category: "Santé",
          items: [
            { name: "Centre médical", distance: "5 min", type: "Soins généraux" },
            { name: "Pharmacies", distance: "3 min", type: "Médicaments" },
            { name: "Clinique privée", distance: "15 min", type: "Soins spécialisés" },
            { name: "Hôpital régional", distance: "20 min", type: "Urgences" }
          ]
        },
        {
          category: "Transports",
          items: [
            { name: "Autoroute A3", distance: "5 min", type: "Réseau autoroutier" },
            { name: "Casablanca", distance: "45 min", type: "Métropole" },
            { name: "Rabat", distance: "35 min", type: "Capitale" },
            { name: "Aéroport Mohammed V", distance: "40 min", type: "Transport aérien" }
          ]
        }
      ]
    },
    testimonials: {
      items: [
        {
          name: "Famille Moretti",
          profession: "Résidents",
          comment: "CITTÀ VERDE incarne notre vision d'un habitat durable et luxueux. L'innovation écologique sans compromis sur l'élégance. Nous vivons dans le futur, aujourd'hui.",
          plotType: "Villa écologique"
        },
        {
          name: "M. Hassan Bennani",
          profession: "Entrepreneur",
          comment: "Mon investissement dans un terrain CITTÀ VERDE s'avère très rentable. La vision écologique et la qualité d'aménagement font de ce projet une référence. Je recommande vivement.",
          plotType: "Terrain constructible"
        },
        {
          name: "Mme Chraibi",
          profession: "Résidence secondaire",
          comment: "Notre maison de campagne à CITTÀ VERDE est devenue notre refuge. Le cadre verdoyant et la tranquillité sont incomparables, tout en restant proche de Casablanca.",
          plotType: "Villa R+2"
        }
      ]
    },
    contact: {
      description: "Notre équipe CITTÀ VERDE vous accompagne dans la découverte de votre futur terrain écologique. Contactez-nous pour une expérience personnalisée.",
      info: {
        phone: "+212 XXX XXX XXX",
        email: "cittaverde@groupemajaidri.ma",
        address: "Sur site, Route du Golf, Benslimane",
        hours: "7j/7 9h-19h"
      }
    }
  };
}

export function parseActualitesContent(): ActualitesContent {
  // This would normally parse markdown files, but for now we'll return mock data
  return {
    heroTitle: "Actualités & Événements",
    heroSubtitle: "Le Dynamisme de Groupe Majaidri",
    heroDescription: "Restez informés de toutes les actualités du Groupe Majaidri : lancements de projets, événements immobiliers, innovations, partenariats et moments forts de notre développement.",
    articles: [
      {
        title: "Groupe Majaidri Brille au Salon de l'Immobilier de Luxe 2024",
        date: "15 Novembre 2024",
        category: "Événements",
        excerpt: "Le Groupe Majaidri a marqué sa présence au prestigieux Salon de l'Immobilier de Luxe 2024 à Casablanca, présentant ses trois projets phares et rencontrant de nombreux investisseurs et futurs acquéreurs.",
        slug: "salon-immobilier-luxe-2024",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        featured: true
      },
      {
        title: "CITTÀ VERDE : Premier Lotissement Zéro Carbone du Maroc",
        date: "8 Novembre 2024",
        category: "Innovation",
        excerpt: "Une révolution écologique qui positionne le Maroc à l'avant-garde de l'habitat durable. L'avenir commence à Benslimane.",
        slug: "citta-verde-lotissement-zero-carbone",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      },
      {
        title: "Lancement de la Phase 2 d'EL BARAKAH",
        date: "22 Décembre 2023",
        category: "Projets",
        excerpt: "100 nouvelles résidences familiales qui enrichissent notre vision de l'art de vivre multigénérationnel.",
        slug: "lancement-phase-2-el-barakah",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      },
      {
        title: "SOLUNA Casablanca : Le luxe urbain redéfini",
        date: "18 Novembre 2024",
        category: "Projets",
        excerpt: "Analyse détaillée du positionnement de SOLUNA sur le marché du luxe casablancais, avec focus sur les services exclusifs et l'architecture contemporaine.",
        slug: "soluna-luxe-urbain-redefini",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      },
      {
        title: "Groupe Majaidri Pionnier des Constructions Éco-Responsables",
        date: "25 Octobre 2024",
        category: "Développement Durable",
        excerpt: "Le Groupe Majaidri renforce son engagement environnemental en adoptant des standards de construction durable sur tous ses projets.",
        slug: "constructions-eco-responsables",
        image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      },
      {
        title: "EL BARAKAH : Quand l'immobilier dynamise les régions",
        date: "15 Novembre 2024",
        category: "Développement Régional",
        excerpt: "Reportage sur l'impact économique et social du projet EL BARAKAH à Guelmim, avec témoignages d'acquéreurs et d'acteurs locaux.",
        slug: "el-barakah-dynamise-regions",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      }
    ],
    events: [
      {
        title: "Journées Portes Ouvertes SOLUNA Casablanca",
        date: "7-8 Décembre 2024",
        location: "Appartement Témoin SOLUNA, Casablanca",
        description: "Découvrez en exclusivité les appartements témoins de SOLUNA, entièrement meublés et décorés par nos partenaires designers.",
        type: "Événement"
      },
      {
        title: "Participation au Salon Immobilier de Guelmim",
        date: "15-17 Décembre 2024",
        location: "Centre Culturel de Guelmim",
        description: "Retrouvez-nous au premier Salon Immobilier de Guelmim où nous présenterons EL BARAKAH et les opportunités d'investissement dans les provinces du Sud.",
        type: "Salon"
      },
      {
        title: "Conférence \"L'Immobilier Durable au Maroc\"",
        date: "10 Janvier 2025",
        location: "Hôtel Sofitel Casablanca Tour Blanche",
        description: "Conférence organisée par le Groupe Majaidri sur les enjeux du développement durable dans l'immobilier marocain, avec la participation d'experts nationaux et internationaux.",
        type: "Conférence"
      }
    ],
    press: [
      {
        title: "Groupe Majaidri : L'immobilier durable en marche",
        source: "L'Économiste",
        date: "20 Novembre 2024",
        excerpt: "Article de fond sur notre stratégie de développement durable et l'impact de CITTÀ VERDE sur l'urbanisme marocain. Interview exclusive du Directeur Général sur les enjeux environnementaux du secteur."
      },
      {
        title: "SOLUNA Casablanca : Le luxe urbain redéfini",
        source: "Finances News Hebdo",
        date: "18 Novembre 2024",
        excerpt: "Analyse détaillée du positionnement de SOLUNA sur le marché du luxe casablancais, avec focus sur les services exclusifs et l'architecture contemporaine."
      },
      {
        title: "EL BARAKAH : Quand l'immobilier dynamise les régions",
        source: "La Vie Éco",
        date: "15 Novembre 2024",
        excerpt: "Reportage sur l'impact économique et social du projet EL BARAKAH à Guelmim, avec témoignages d'acquéreurs et d'acteurs locaux."
      },
      {
        title: "Interview en direct du Directeur Commercial",
        source: "Radio Atlantic",
        date: "12 Novembre 2024",
        excerpt: "Émission spéciale \"Immobilier Matin\" avec présentation des trois projets et réponses aux questions des auditeurs en direct."
      }
    ]
  };
}

export function parseContactContent(): ContactContent {
  // This would normally parse markdown files, but for now we'll return mock data
  return {
    heroTitle: "Contactez-Nous",
    heroSubtitle: "Votre Projet Nous Tient à Cœur",
    heroDescription: "Que vous souhaitiez découvrir nos projets, obtenir des conseils personnalisés, planifier une visite ou simplement nous poser une question, notre équipe d'experts est à votre disposition.",
    mainOffice: {
      address: "Boulevard Zerktouni, Casablanca, Maroc",
      phone: "+212 522 XXX XXX",
      email: "contact@groupemajaidri.ma",
      hours: "Lun-Ven 9h-18h, Sam 9h-16h"
    },
    salesOffices: {
      offices: [
        {
          name: "Bureau SOLUNA",
          location: "Casablanca",
          address: "Résidence SOLUNA, Casablanca",
          phone: "+212 XXX XXX XXX",
          email: "soluna@groupemajaidri.ma",
          hours: "Lun-Sam 9h-19h, Dim 10h-16h"
        },
        {
          name: "Bureau EL BARAKAH",
          location: "Guelmim",
          address: "Avenue Mohammed V, Guelmim",
          phone: "+212 XXX XXX XXX",
          email: "elbarakah@groupemajaidri.ma",
          hours: "Lun-Sam 9h-18h"
        },
        {
          name: "Bureau CITTÀ VERDE",
          location: "Benslimane",
          address: "Sur site, Route du Golf, Benslimane",
          phone: "+212 XXX XXX XXX",
          email: "cittaverde@groupemajaidri.ma",
          hours: "7j/7 9h-19h"
        }
      ]
    },
    team: {
      members: [
        {
          name: "Ahmed Benali",
          position: "Directeur Commercial",
          phone: "+212 XXX XXX XXX",
          email: "ahmed.benali@groupemajaidri.ma",
          specialties: ["Stratégie commerciale", "Grands comptes"]
        },
        {
          name: "Samira Alaoui",
          position: "Conseillère SOLUNA",
          phone: "+212 XXX XXX XXX",
          email: "samira.alaoui@groupemajaidri.ma",
          specialties: ["Immobilier de luxe", "Investissement"]
        },
        {
          name: "Karim Tazi",
          position: "Conseiller EL BARAKAH",
          phone: "+212 XXX XXX XXX",
          email: "karim.tazi@groupemajaidri.ma",
          specialties: ["Développement régional", "MRE"]
        },
        {
          name: "Nadia Chraibi",
          position: "Conseillère CITTÀ VERDE",
          phone: "+212 XXX XXX XXX",
          email: "nadia.chraibi@groupemajaidri.ma",
          specialties: ["Terrains", "Construction écologique"]
        }
      ]
    },
    form: {
      description: "Utilisez le formulaire ci-dessous pour nous contacter. Notre équipe vous répondra dans les plus brefs délais.",
      fields: [
        {
          name: "name",
          label: "Nom complet",
          type: "text",
          required: true
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true
        },
        {
          name: "phone",
          label: "Téléphone",
          type: "tel",
          required: true
        },
        {
          name: "project",
          label: "Projet d'intérêt",
          type: "select",
          required: false,
          options: ["SOLUNA Casablanca", "EL BARAKAH Guelmim", "CITTÀ VERDE Benslimane", "Information générale"]
        },
        {
          name: "requestType",
          label: "Type de demande",
          type: "select",
          required: false,
          options: ["Demande d'information", "Prise de rendez-vous", "Visite de projet", "Simulation financière", "Réclamation/SAV"]
        },
        {
          name: "message",
          label: "Message",
          type: "textarea",
          required: true
        }
      ]
    }
  };
}