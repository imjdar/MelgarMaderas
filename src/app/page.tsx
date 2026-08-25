'use client';

import React, { useState } from 'react';
import { APP_CONFIG } from '@/services/configService';
import { Product } from '@/types';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ValueProps } from '@/components/ValueProps';
import { WoodComparator } from '@/components/WoodComparator';
import { CraftTimeline } from '@/components/CraftTimeline';
import { ProductCatalog } from '@/components/ProductCatalog';
import { AboutBrand } from '@/components/AboutBrand';
import { Testimonials } from '@/components/Testimonials';
import { ContactSection } from '@/components/ContactSection';
import { ProductModal } from '@/components/ProductModal';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { SecurityGuard } from '@/components/SecurityGuard';
import { Footer } from '@/components/Footer';
import { Award, Compass } from 'lucide-react';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="app-main-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Módulo de Ciberseguridad Anti-Robo de Imágenes */}
      <SecurityGuard />

      {/* Banner Identificador de Propuesta 1 */}
      <div style={{
        backgroundColor: '#3A1A0E',
        color: '#FDFBF7',
        fontSize: '0.85rem',
        fontWeight: 600,
        padding: '0.5rem 1rem',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        letterSpacing: '0.04em',
        borderBottom: '1px solid #C59B27'
      }}>
        <Award size={14} color="#C59B27" />
        <span>PROPUESTA 1: <strong>Atelier Clásico & Cálida Nobleza</strong> • Maderas Melgar</span>
      </div>

      {/* Header con Glassmorphism */}
      <Header whatsappNumber={APP_CONFIG.whatsappNumber} />

      {/* Secciones Principales de Propuesta 1 */}
      <main style={{ flexGrow: 1 }}>
        
        {/* 1. Hero Editorial */}
        <Hero 
          onExploreCatalog={() => {
            const catalogEl = document.getElementById('catalogo');
            if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Propuestas de Valor */}
        <ValueProps />

        {/* 3. Comparador Interactivo de Maderas Nobles (SEIKE, ROBLE, LAUREL) */}
        <div id="calidad">
          <WoodComparator whatsappNumber={APP_CONFIG.whatsappNumber} />
        </div>

        {/* 4. Línea del Tiempo del Proceso Artesanal */}
        <CraftTimeline />

        {/* 5. Catálogo Completo de Muebles Protegido */}
        <ProductCatalog 
          whatsappNumber={APP_CONFIG.whatsappNumber}
          onSelectProduct={(product: Product) => setSelectedProduct(product)}
        />

        {/* 6. Acerca de Maderas Melgar */}
        <AboutBrand />

        {/* 7. Testimonios */}
        <Testimonials />

        {/* 8. Contacto & Ubicación Showroom */}
        <ContactSection 
          whatsappNumber={APP_CONFIG.whatsappNumber}
          locationAddress={APP_CONFIG.location.addressLine}
        />
      </main>

      {/* Modal de Producto Protegido */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          whatsappNumber={APP_CONFIG.whatsappNumber}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Botón Flotante WhatsApp */}
      <FloatingWhatsApp whatsappNumber={APP_CONFIG.whatsappNumber} />

      {/* Pie de Página */}
      <Footer />

    </div>
  );
}
