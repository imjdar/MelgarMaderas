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
import { SecurityGuard } from '@/components/SecurityGuard';
import { Footer } from '@/components/Footer';
import { Sparkles, Eye } from 'lucide-react';

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
      
      {/* Módulo de Ciberseguridad Anti-Robo de Imágenes */}
      <SecurityGuard />

      {/* Banner Identificador de Propuesta 2 */}
      <div style={{
        backgroundColor: '#121619',
        color: '#ffffff',
        fontSize: '0.85rem',
        fontWeight: 600,
        padding: '0.5.rem 1rem',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        letterSpacing: '0.04em',
        borderBottom: '1px solid #10B981'
      }}>
        <Sparkles size={14} color="#10B981" />
        <span>PROPUESTA 2: <strong>Vanguardia Moderna & Glassmorphism Élite</strong> • Maderas Melgar</span>
      </div>

      {/* Header Corporativo */}
      <Header whatsappNumber={APP_CONFIG.whatsappNumber} />

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

        {/* 3. Simulador de Espacios & Ambientes en Vivo (NUEVO) */}
        <RoomSimulator whatsappNumber={APP_CONFIG.whatsappNumber} />

        {/* 4. Catálogo Moderno con Buscador Instantáneo y Cotizador (NUEVO) */}
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
