import type { Metadata } from 'next';
import './globals.css';
import { getFurnitureStoreSchema } from '@/services/schemaService';
import { SecurityGuard } from '@/components/SecurityGuard';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://melgarmaderas.com.ec'),
  title: 'Maderas Melgar | Muebles que traspasan épocas - Catálogo Oficial Ecuador',
  description: 'Maderas Melgar: Muebles de madera maciza de alta gama en Ecuador. Fabricación artesanal a medida para salas, comedores, habitaciones y cocinas. Muebles que traspasan épocas.',
  keywords: ['Maderas Melgar', 'muebles de madera Ecuador', 'muebles de lujo Quito', 'catálogo muebles macizos', 'juegos de sala madera', 'melgarmaderas.com.ec'],
  authors: [{ name: 'Maderas Melgar' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large'
    }
  },
  alternates: {
    canonical: 'https://melgarmaderas.com.ec/'
  },
  openGraph: {
    type: 'website',
    url: 'https://melgarmaderas.com.ec/',
    title: 'Maderas Melgar | Muebles que traspasan épocas',
    description: 'Descubra nuestro catálogo exclusivo de muebles de madera maciza trabajados artesanalmente en Ecuador.',
    images: [
      {
        url: 'https://melgarmaderas.com.ec/assets/products/sala-linea-premium.jpg',
        width: 1200,
        height: 630,
        alt: 'Maderas Melgar Muebles de Madera Maciza'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maderas Melgar | Muebles que traspasan épocas',
    description: 'Diseño y fabricación de muebles de madera de alta gama en Ecuador.',
    images: ['https://melgarmaderas.com.ec/assets/products/sala-linea-premium.jpg']
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = getFurnitureStoreSchema();

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SecurityGuard />
        {children}
      </body>
    </html>
  );
}
