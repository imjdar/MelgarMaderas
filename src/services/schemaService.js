/**
 * Servicio de Generación de Esquemas Estructurados (JSON-LD)
 * Principio SOLID: Responsabilidad Única (SRP).
 * Genera esquemas de Schema.org para Google Search Console y Motores de IA (Gemini, ChatGPT).
 */

import { APP_CONFIG } from './configService';

/**
 * Genera el esquema de la Organización y Negocio Local (FurnitureStore)
 */
export const getFurnitureStoreSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    'name': APP_CONFIG.brandName,
    'slogan': APP_CONFIG.slogan,
    'url': `https://${APP_CONFIG.domain}/`,
    'logo': `https://${APP_CONFIG.domain}/assets/branding/logo-full.png`,
    'image': `https://${APP_CONFIG.domain}/assets/products/sala-linea-premium.jpg`,
    'description': 'Fabricación de muebles de madera maciza de alta gama en Ecuador. Piezas de carpintería artesanal a medida.',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': APP_CONFIG.location.city,
      'addressRegion': APP_CONFIG.location.province,
      'addressCountry': APP_CONFIG.location.country
    },
    'priceRange': '$$$'
  };
};

/**
 * Genera el esquema de Lista de Productos para el Catálogo Informativo
 * @param {Array} productsList - Lista de productos de la tienda.
 */
export const getCatalogItemListSchema = (productsList = []) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Catálogo Informativo de Muebles de Madera Melgar',
    'itemListElement': productsList.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Product',
        'name': item.name,
        'description': item.shortDesc,
        'image': `https://${APP_CONFIG.domain}${item.image}`,
        'brand': {
          '@type': 'Brand',
          'name': APP_CONFIG.brandName
        },
        'material': item.material,
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'USD',
          'availability': 'https://schema.org/InStock',
          'seller': {
            '@type': 'Organization',
            'name': APP_CONFIG.brandName
          }
        }
      }
    }))
  };
};
