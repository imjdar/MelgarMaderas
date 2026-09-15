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
  whatsappNumber: '593995601096',

  // Ubicación Configurable (Quito, Ecuador)
  location: {
    city: 'Quito',
    province: 'Pichincha',
    country: 'Ecuador',
    addressLine: 'Showroom & Taller Principal (Quito, Ecuador)',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7997387258384!2d-78.5005331!3d-0.1336545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b221063e75f%3A0x9ec77b3b4c82a1b1!2sMaderas%20Melgar!5e0!3m2!1ses-ES!2sec!4v1700000000000!5m2!1ses-ES!2sec'
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
