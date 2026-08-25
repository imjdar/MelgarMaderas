export interface SchemaConfig {
  siteUrl: string;
  brandName: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
}

export const DEFAULT_SCHEMA_CONFIG: SchemaConfig = {
  siteUrl: 'https://melgarmaderas.com.ec',
  brandName: 'Maderas Melgar',
  telephone: '+593984120938',
  address: {
    streetAddress: 'Av. Granados N39-120 y 6 de Diciembre',
    addressLocality: 'Quito',
    addressRegion: 'Pichincha',
    postalCode: '170505',
    addressCountry: 'EC'
  },
  geo: {
    latitude: -0.1652,
    longitude: -78.4721
  }
};

/**
 * Genera esquemas JSON-LD (Schema.org) optimizados para SEO Senior y rastreadores de Inteligencia Artificial (Gemini, ChatGPT, Perplexity).
 */
export function generateLocalBusinessSchema(config: SchemaConfig = DEFAULT_SCHEMA_CONFIG) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    '@id': `${config.siteUrl}/#organization`,
    'name': config.brandName,
    'legalName': 'Melgar Maderas Cía. Ltda.',
    'url': config.siteUrl,
    'logo': `${config.siteUrl}/assets/logo-melgar.png`,
    'image': `${config.siteUrl}/assets/hero-maderas-melgar.jpg`,
    'description': 'Firma ecuatoriana líder en el diseño y fabricación artesanal de muebles de madera maciza de alta gama (Seike, Roble, Laurel). Muebles que traspasan épocas.',
    'telephone': config.telephone,
    'priceRange': '$$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': config.address.streetAddress,
      'addressLocality': config.address.addressLocality,
      'addressRegion': config.address.addressRegion,
      'postalCode': config.address.postalCode,
      'addressCountry': config.address.addressCountry
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': config.geo.latitude,
      'longitude': config.geo.longitude
    },
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Quito' },
      { '@type': 'AdministrativeArea', 'name': 'Guayaquil' },
      { '@type': 'AdministrativeArea', 'name': 'Cuenca' },
      { '@type': 'Country', 'name': 'Ecuador' }
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Colecciones de Muebles de Madera Maciza',
      'itemListElement': [
        { '@type': 'OfferCatalog', 'name': 'Juegos de Sala en Madera Noble' },
        { '@type': 'OfferCatalog', 'name': 'Mesas y Comedores Ejecutivos' },
        { '@type': 'OfferCatalog', 'name': 'Camas y Mobiliario de Dormitorio' },
        { '@type': 'OfferCatalog', 'name': 'Estudios y Bibliotecas a Medida' }
      ]
    },
    'sameAs': [
      'https://www.instagram.com/melgarmaderas.ec',
      'https://www.facebook.com/melgarmaderas.ec'
    ]
  };
}

export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': '¿Qué maderas utiliza Maderas Melgar en la fabricación de sus muebles?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'En Maderas Melgar utilizamos exclusivamente maderas macizas nobles seleccionadas como Seike, Roble, Laurel y Teca, sometidas a un riguroso tratamiento de secado en horno (humedad garantizada del 8-10%) para evitar deformaciones con el tiempo.'
        }
      },
      {
        '@type': 'Question',
        'name': '¿Realizan envíos de muebles a todo el Ecuador?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Sí, realizamos envíos especializados con embalaje de alta protección a Quito, Guayaquil, Cuenca, Ambato, Manta y a todas las provincias del Ecuador.'
        }
      },
      {
        '@type': 'Question',
        'name': '¿Cómo puedo solicitar una cotización de un mueble a medida?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Puede solicitar una cotización personalizada de forma inmediata a través del botón de WhatsApp oficial en nuestro sitio web melgarmaderas.com.ec o visitando nuestro showroom en Quito.'
        }
      }
    ]
  };
}
