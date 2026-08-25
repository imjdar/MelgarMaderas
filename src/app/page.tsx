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
import { Footer } from '@/components/Footer';
import { Award } from 'lucide-react';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="app-main-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header Corporativo con Banner Integrado para Propuesta 1 */}
      <Header 
        whatsappNumber={APP_CONFIG.whatsappNumber}
        bannerText={
          <>
            <Award size={14} color="#C59B27" />
            <span>PROPUESTA 1: <strong>Atelier Clásico & Cálida Nobleza</strong> • Maderas Melgar</span>
          </>
        }
      />

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

        {/* 3. Comparador Interactivo de Maderas Nobles */}
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
