/**
 * Servicio de Generación de Esquemas JSON-LD (TypeScript)
 * Principio SOLID: Responsabilidad Única (SRP).
 */

import { APP_CONFIG } from './configService';
import { Product } from '../types';

export const getFurnitureStoreSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    'name': APP_CONFIG.brandName,
    'slogan': APP_CONFIG.slogan,
    'url': `https://${APP_CONFIG.domain}/`,
    'logo': `https://${APP_CONFIG.domain}/assets/branding/logo-full.png`,
    'image': `https://${APP_CONFIG.domain}/assets/products/sala-linea-premium.jpg`,
    'description': 'Fabricación artesanal de muebles de madera maciza 100% de alta gama en Ecuador.',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': APP_CONFIG.location.city,
      'addressRegion': APP_CONFIG.location.province,
      'addressCountry': APP_CONFIG.location.country
    },
    'priceRange': '$$$'
  };
};

export const getCatalogItemListSchema = (productsList: Product[] = []) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Catálogo Informativo de Muebles Maderas Melgar',
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
        'material': item.material
      }
    }))
  };
};
