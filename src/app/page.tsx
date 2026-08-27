'use client';
import React, { useState } from 'react';
import { APP_CONFIG } from '@/services/configService';
import { Product } from '@/types';

import { LuxuryNavbar } from '@/components/LuxuryNavbar';
import { EditorialHeroSlider } from '@/components/EditorialHeroSlider';
import { CategoryShowcase } from '@/components/CategoryShowcase';
import { CleanProductGrid } from '@/components/CleanProductGrid';
import { BrandPhilosophy } from '@/components/BrandPhilosophy';
import { MinimalFooter } from '@/components/MinimalFooter';
import { MultiQuoteCart } from '@/components/MultiQuoteCart';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { SecurityGuard } from '@/components/SecurityGuard';
import { SocialContactSection } from '@/components/SocialContactSection';

/**
 * Propuesta 2: REDISEÑO TOTAL EDITORIAL LUXURY
 * Inspirado en Colineal, Adriana Hoyos y diseño asimétrico minimalista.
 * Base Cream Ivory #FDFBF7 y tipografías Cormorant Garamond / Inter.
 */
export default function HomePage() {
  const [multiCart, setMultiCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setMultiCart((prev) => {
      if (prev.some((p) => p.id === product.id)) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId: string) => {
    setMultiCart((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleClearCart = () => {
    setMultiCart([]);
  };

  return (
    <div
      className="app-main-wrapper"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FDFBF7',
        color: '#3A1A0E',
      }}
    >
      {/* 1. Header Minimalista Espacioso */}
      <LuxuryNavbar 
        whatsappNumber={APP_CONFIG.whatsappNumber} 
        cartCount={multiCart.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main style={{ flexGrow: 1 }}>
        
        {/* 2. Hero Editorial (Slider a Pantalla Completa) */}
        <EditorialHeroSlider />

        {/* 3. Muestrario de Categorías Asimétrico */}
        <CategoryShowcase />

        {/* 4. Grilla de Productos Limpia y Espaciosa */}
        <CleanProductGrid 
          onAddToCart={handleAddToCart}
          cartProductIds={multiCart.map(p => p.id)}
        />

        {/* 5. Filosofía de Marca y Ebanistería */}
        <BrandPhilosophy />

      </main>

      {/* 5.5 Sección de Contacto y Redes Oficiales */}
      <SocialContactSection />

      {/* 6. Footer Minimalista Clásico */}
      <MinimalFooter />

      {/* COMPONENTES FLOTANTES Y SEGURIDAD */}

      {/* Cajón Lateral Flotante para Cotización Agrupada (Multi-Quote Cart) */}
      <MultiQuoteCart
        cart={multiCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
        whatsappNumber={APP_CONFIG.whatsappNumber}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      {/* Protección de Clic Derecho & Atajos de Inspección */}
      <SecurityGuard />

      {/* Botón Flotante Directo de WhatsApp */}
      <FloatingWhatsApp whatsappNumber={APP_CONFIG.whatsappNumber} />
    </div>
  );
}
