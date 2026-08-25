/**
 * Definiciones de Tipos TypeScript - Maderas Melgar
 * Sigue el principio de Segregación de Interfaces (ISP) de SOLID.
 */

export interface Product {
  id: string;
  name: string;
  category: 'sala' | 'comedor' | 'habitaciones' | 'cocina' | 'estudio';
  categoryLabel: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  material: string;
  dimensions: string;
  features: string[];
}

export interface Category {
  id: string;
  label: string;
}

export interface AppConfig {
  domain: string;
  brandName: string;
  slogan: string;
  whatsappNumber: string;
  location: {
    city: string;
    province: string;
    country: string;
    addressLine: string;
    googleMapsEmbedUrl: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
  security: {
    enableContextMenuBlock: boolean;
    enableDevToolsShortcutBlock: boolean;
    watermarkText: string;
  };
}
