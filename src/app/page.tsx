'use client';

import React from 'react';
import { MainHeader } from '@/components/MainHeader';
import { MainHero } from '@/components/MainHero';
import { MainAboutUs } from '@/components/MainAboutUs';
import { MainValueProps } from '@/components/MainValueProps';
import { MainTestimonials } from '@/components/MainTestimonials';
import { MainCTA } from '@/components/MainCTA';
import { MainProducts } from '@/components/MainProducts';
import { MainFooter } from '@/components/MainFooter';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { SecurityGuard } from '@/components/SecurityGuard';
import { APP_CONFIG } from '@/services/configService';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-cream-bg)' }}>
      
      {/* 1. Header & Navigation */}
      <MainHeader />

      <main style={{ flexGrow: 1 }}>
        
        {/* 2. Hero (Portada) */}
        <MainHero />

        {/* 3. Quiénes Somos */}
        <MainAboutUs />

        {/* 4. Propuesta de Valor */}
        <MainValueProps />

        {/* 5. Testimonios */}
        <MainTestimonials />

        {/* 6. Llamado a la Acción (CTA) */}
        <MainCTA />

        {/* 7. Nuestros Productos (Categorías Informativas) */}
        <MainProducts />

      </main>

      {/* 8. Footer */}
      <MainFooter />

      {/* Seguridad & Flotantes */}
      <SecurityGuard />
      <FloatingWhatsApp whatsappNumber={APP_CONFIG.whatsappNumber} />

    </div>
  );
}
