'use client';

import React, { useState } from 'react';
import { APP_CONFIG } from '@/services/configService';
import { Product } from '@/types';
import { Header } from '@/components/Header';
import { ModernHero } from '@/components/ModernHero';
import { ValueProps } from '@/components/ValueProps';
import { RoomSimulator } from '@/components/RoomSimulator';
import { ModernProductCatalog } from '@/components/ModernProductCatalog';
import { MultiQuoteCart } from '@/components/MultiQuoteCart';
import { AboutBrand } from '@/components/AboutBrand';
import { Testimonials } from '@/components/Testimonials';
import { ContactSection } from '@/components/ContactSection';
import { ProductModal } from '@/components/ProductModal';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';
import { Sparkles } from 'lucide-react';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    if (!cart.some(p => p.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart(cart.filter(p => p.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="app-main-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0F1215' }}>
      
      {/* Header Corporativo con Banner Integrado */}
      <Header 
        whatsappNumber={APP_CONFIG.whatsappNumber}
        bannerText={
          <>
            <Sparkles size={14} color="#10B981" />
            <span>PROPUESTA 2: <strong>Vanguardia Moderna & Glassmorphism Élite</strong> • Maderas Melgar</span>
          </>
        }
      />

      {/* Secciones Principales de Propuesta 2 */}
      <main style={{ flexGrow: 1 }}>
        
        {/* 1. Hero Moderno Cinematográfico */}
        <ModernHero 
          onExploreCatalog={() => {
            const catalogEl = document.getElementById('catalogo');
            if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreSimulator={() => {
            const simEl = document.getElementById('simulador');
            if (simEl) simEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Propuestas de Valor */}
        <ValueProps />

        {/* 3. Simulador de Espacios & Ambientes en Vivo */}
        <RoomSimulator whatsappNumber={APP_CONFIG.whatsappNumber} />

        {/* 4. Catálogo Moderno con Buscador Instantáneo y Cotizador */}
        <ModernProductCatalog 
          whatsappNumber={APP_CONFIG.whatsappNumber}
          onSelectProduct={(product: Product) => setSelectedProduct(product)}
          cart={cart}
          onAddToCart={handleAddToCart}
        />

        {/* 5. Acerca de Maderas Melgar */}
        <AboutBrand />

        {/* 6. Testimonios de Clientes */}
        <Testimonials />

        {/* 7. Contacto & Ubicación Showroom */}
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

      {/* Cotizador Multiproducto (Drawer Flotante) */}
      <MultiQuoteCart 
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
        whatsappNumber={APP_CONFIG.whatsappNumber}
      />

      {/* Botón Flotante WhatsApp */}
      <FloatingWhatsApp whatsappNumber={APP_CONFIG.whatsappNumber} />

      {/* Pie de Página */}
      <Footer />

    </div>
  );
}
