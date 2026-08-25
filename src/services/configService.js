/**
 * Servicio de Configuración Centralizada - Maderas Melgar
 * Sigue el principio de Inversión de Dependencias (DIP) de SOLID.
 * Permite cambiar el número de WhatsApp, dirección, dominio y metadatos desde un único punto.
 */

export const APP_CONFIG = {
  // Dominio Oficial de la Marca
  domain: 'melgarmaderas.com.ec',
  brandName: 'Maderas Melgar',
  slogan: 'Muebles que traspasan épocas',

  // Configuración de WhatsApp (Dejar en blanco para solicitar configuración o poner número internacional ej: "+593991234567")
  whatsappNumber: '', 

  // Configuración de Ubicación (Actualizable por el usuario cuando tenga la dirección exacta)
  location: {
    city: 'Quito',
    province: 'Pichincha',
    country: 'Ecuador',
    addressLine: 'Showroom & Taller Principal (Quito, Ecuador)',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Quito,Ecuador&z=13&output=embed'
  },

  // Redes Sociales Oficiales
  socialLinks: {
    instagram: 'https://instagram.com/melgarmaderas.ec',
    facebook: 'https://facebook.com/melgarmaderas.ec',
    tiktok: 'https://tiktok.com/@melgarmaderas.ec'
  },

  // Parámetros de Seguridad y Marcas de Agua
  security: {
    enableContextMenuBlock: true,
    enableDevToolsShortcutBlock: true,
    watermarkText: 'melgarmaderas.com.ec'
  }
};
