/**
 * Servicio de Configuración Centralizada - Maderas Melgar (TypeScript)
 * Principio SOLID: Inversión de Dependencias (DIP).
 */

import { AppConfig } from '../types';

export const APP_CONFIG: AppConfig = {
  // Dominio Oficial de la Marca
  domain: 'melgarmaderas.com.ec',
  brandName: 'Maderas Melgar',
  slogan: 'Muebles que traspasan épocas',

  // Configuración de WhatsApp (Actualizable por el usuario)
  whatsappNumber: '',

  // Ubicación Configurable (Quito, Ecuador)
  location: {
    city: 'Quito',
    province: 'Pichincha',
    country: 'Ecuador',
    addressLine: 'Showroom & Taller Principal (Quito, Ecuador)',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Quito,Ecuador&z=13&output=embed'
  },

  socialLinks: {
    instagram: 'https://instagram.com/melgarmaderas.ec',
    facebook: 'https://facebook.com/melgarmaderas.ec',
    tiktok: 'https://tiktok.com/@melgarmaderas.ec'
  },

  security: {
    enableContextMenuBlock: true,
    enableDevToolsShortcutBlock: true,
    watermarkText: 'melgarmaderas.com.ec'
  }
};
