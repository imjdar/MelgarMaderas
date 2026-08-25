'use client';

import React, { useState } from 'react';
import { APP_CONFIG } from '@/services/configService';
import { Product } from '@/types';
import { Header } from '@/components/Header';
import { ModernHero } from '@/components/ModernHero';
import { ValueProps } from '@/components/ValueProps';
import { CraftsmanshipSection } from '@/components/CraftsmanshipSection';
import { ModernProductCatalog } from '@/components/ModernProductCatalog';
import { CopyrightNotice } from '@/components/CopyrightNotice';
import { AboutBrand } from '@/components/AboutBrand';
import { Testimonials } from '@/components/Testimonials';
import { ContactSection } from '@/components/ContactSection';
import { ProductModal } from '@/components/ProductModal';
import { SecurityGuard } from '@/components/SecurityGuard';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';
import { Sparkles } from 'lucide-react';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleContactWhatsApp = () => {
    const text = `Hola Maderas Melgar (melgarmaderas.com.ec). Me gustaría consultar sobre cotizaciones a medida para proyectos arquitectónicos en Quito.`;
    window.open(`https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="app-main-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#101316' }}>
      
      {/* Header Corporativo para Propuesta 2 */}
      <Header 
        whatsappNumber={APP_CONFIG.whatsappNumber}
        bannerText={
          <>
            <Sparkles size={14} color="#D4AF37" />
            <span>PROPUESTA 2: <strong>Arquitectura Contemporánea & Maderería de Vanguardia</strong> • melgarmaderas.com.ec</span>
          </>
        }
      />

      {/* Secciones Informativas de Propuesta 2 */}
      <main style={{ flexGrow: 1 }}>
        
        {/* 1. Hero Moderno Arquitectónico */}
        <ModernHero 
          onExploreCatalog={() => {
            const catalogEl = document.getElementById('catalogo');
            if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
          }}
          onContactWhatsApp={handleContactWhatsApp}
        />

        {/* 2. Propuestas de Valor */}
        <ValueProps />

        {/* 3. Técnica Artesanal & Secado al Horno (8-10%) */}
        <CraftsmanshipSection />

        {/* 4. Catálogo Moderno Protegido con Marca de Agua */}
        <ModernProductCatalog 
          whatsappNumber={APP_CONFIG.whatsappNumber}
          onSelectProduct={(product: Product) => setSelectedProduct(product)}
        />

        {/* 5. Protección Legal de Propiedad Intelectual */}
        <CopyrightNotice />

        {/* 6. Acerca de Maderas Melgar */}
        <AboutBrand />

        {/* 7. Testimonios */}
        <Testimonials />

        {/* 8. Contacto & Ubicación Showroom en Quito */}
        <ContactSection 
          whatsappNumber={APP_CONFIG.whatsappNumber}
          locationAddress={APP_CONFIG.location.addressLine}
        />

      </main>

      {/* Footer Corporativo */}
      <Footer />

      {/* Modal Informativo de Ficha Técnica */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          whatsappNumber={APP_CONFIG.whatsappNumber}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Protección de Clic Derecho & Marca de Agua */}
      <SecurityGuard />

      {/* Botón Flotante WhatsApp */}
      <FloatingWhatsApp whatsappNumber={APP_CONFIG.whatsappNumber} />

    </div>
  );
}
