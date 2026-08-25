'use client';

import React, { useState } from 'react';
import { APP_CONFIG } from '@/services/configService';
import { Product } from '@/types';
import { Header } from '@/components/Header';
import { ModernHero } from '@/components/ModernHero';
import { WoodSpecSheet } from '@/components/WoodSpecSheet';
import { ModernProductCatalog } from '@/components/ModernProductCatalog';
import { ModernCopyrightNotice } from '@/components/ModernCopyrightNotice';
import { ModernAboutBrand } from '@/components/ModernAboutBrand';
import { ModernTestimonials } from '@/components/ModernTestimonials';
import { ModernContactSection } from '@/components/ModernContactSection';
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
    <div className="app-main-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0B0D0E' }}>
      
      {/* Header Corporativo para Propuesta 2 */}
      <Header 
        whatsappNumber={APP_CONFIG.whatsappNumber}
        bannerText={
          <>
            <Sparkles size={14} color="#F59E0B" />
            <span>PROPUESTA 2: <strong>Arquitectura Contemporánea & Maderería de Vanguardia</strong> • melgarmaderas.com.ec</span>
          </>
        }
      />

      {/* Secciones 100% Obsidian Oscuro de Propuesta 2 */}
      <main style={{ flexGrow: 1 }}>
        
        {/* 1. Hero Moderno Arquitectónico */}
        <ModernHero 
          onExploreCatalog={() => {
            const catalogEl = document.getElementById('catalogo');
            if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
          }}
          onContactWhatsApp={handleContactWhatsApp}
        />

        {/* 2. Inspector Técnico Interactivo de Maderas Nobles (EXCLUSIVO PROPUESTA 2) */}
        <WoodSpecSheet />

        {/* 3. Muestrario Bento Grid Arquitectónico Protegido con Marca de Agua */}
        <ModernProductCatalog 
          whatsappNumber={APP_CONFIG.whatsappNumber}
          onSelectProduct={(product: Product) => setSelectedProduct(product)}
        />

        {/* 4. Protección Legal de Propiedad Intelectual en Modo Oscuro */}
        <ModernCopyrightNotice />

        {/* 5. Taller Ebanista & Historia en Modo Oscuro */}
        <ModernAboutBrand />

        {/* 6. Testimonios en Modo Oscuro */}
        <ModernTestimonials />

        {/* 7. Contacto & Ubicación Showroom Quito en Modo Oscuro */}
        <ModernContactSection 
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
