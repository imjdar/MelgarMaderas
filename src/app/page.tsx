'use client';

import React, { useState } from 'react';
import { APP_CONFIG } from '@/services/configService';
import { Product } from '@/types';
import { Header } from '@/components/Header';
import { EditorialHero } from '@/components/EditorialHero';
import { ValueProps } from '@/components/ValueProps';
import { CraftsmanshipSection } from '@/components/CraftsmanshipSection';
import { InformationalCatalog } from '@/components/InformationalCatalog';
import { CopyrightNotice } from '@/components/CopyrightNotice';
import { AboutBrand } from '@/components/AboutBrand';
import { Testimonials } from '@/components/Testimonials';
import { ContactSection } from '@/components/ContactSection';
import { ProductModal } from '@/components/ProductModal';
import { SecurityGuard } from '@/components/SecurityGuard';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';
import { Award } from 'lucide-react';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleContactWhatsApp = () => {
    const text = `Hola Maderas Melgar (melgarmaderas.com.ec). Deseo solicitar asesoría y cotización personalizada para mobiliario a medida en Quito.`;
    window.open(`https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="app-main-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FAF8F5' }}>
      
      {/* Header Corporativo Informativo */}
      <Header 
        whatsappNumber={APP_CONFIG.whatsappNumber}
        bannerText={
          <>
            <Award size={14} color="#C59B27" />
            <span>PROPUESTA 1: <strong>Atelier Herencia & Elegancia Clásica</strong> • melgarmaderas.com.ec</span>
          </>
        }
      />

      {/* Contenido Editorial Informativo */}
      <main style={{ flexGrow: 1 }}>
        
        {/* 1. Hero Editorial de Lujo */}
        <EditorialHero 
          onExploreCatalog={() => {
            const catalogEl = document.getElementById('catalogo');
            if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
          }}
          onContactWhatsApp={handleContactWhatsApp}
        />

        {/* 2. Propuestas de Valor de Ebanistería */}
        <ValueProps />

        {/* 3. Proceso Artesanal & Secado al Horno (8-10%) */}
        <CraftsmanshipSection />

        {/* 4. Catálogo Informativo Protegido con Marca de Agua */}
        <InformationalCatalog 
          whatsappNumber={APP_CONFIG.whatsappNumber}
          onSelectProduct={(product: Product) => setSelectedProduct(product)}
        />

        {/* 5. Protección Legal de Propiedad Intelectual */}
        <CopyrightNotice />

        {/* 6. Acerca de Maderas Melgar */}
        <AboutBrand />

        {/* 7. Opiniones de Clientes */}
        <Testimonials />

        {/* 8. Contacto & Ubicación Showroom en Quito */}
        <ContactSection 
          whatsappNumber={APP_CONFIG.whatsappNumber}
          locationAddress={APP_CONFIG.location.addressLine}
        />

      </main>

      {/* Footer Corporativo con Enlaces SEO */}
      <Footer 
        companyName={APP_CONFIG.companyName}
        whatsappNumber={APP_CONFIG.whatsappNumber}
      />

      {/* Modal Informativo de Ficha Técnica */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          whatsappNumber={APP_CONFIG.whatsappNumber}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Protección de Seguridad & Clic Derecho */}
      <SecurityGuard />

      {/* Botón Flotante WhatsApp */}
      <FloatingWhatsApp whatsappNumber={APP_CONFIG.whatsappNumber} />

    </div>
  );
}
