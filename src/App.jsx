import React, { useState } from 'react';
import { APP_CONFIG } from './services/configService';
import { SecurityGuard } from './components/SecurityGuard';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { ProductCatalog } from './components/ProductCatalog';
import { AboutBrand } from './components/AboutBrand';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { ProductModal } from './components/ProductModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

/**
 * Aplicación Principal - Maderas Melgar (melgarmaderas.com.ec)
 * Cumple con principios SOLID (Sistemas Desacoplados) y Arquitectura Modular.
 */
export function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="app-main-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. Módulo de Ciberseguridad & Anti-Robo de Código/Imágenes */}
      <SecurityGuard />

      {/* 2. Encabezado de Navegación con Glassmorphism */}
      <Header 
        whatsappNumber={APP_CONFIG.whatsappNumber} 
      />

      {/* 3. Sección Principal Hero con Slogan Corporativo */}
      <main style={{ flexGrow: 1 }}>
        <Hero 
          onExploreCatalog={() => {
            const catalogEl = document.getElementById('catalogo');
            if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. Pilares de Calidad en Madera Maciza */}
        <ValueProps />

        {/* 5. Catálogo Informativo de Productos por Ambientes */}
        <ProductCatalog 
          whatsappNumber={APP_CONFIG.whatsappNumber}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* 6. Historia y Trayectoria de la Marca */}
        <AboutBrand />

        {/* 7. Reseñas y Testimonios Sociales */}
        <Testimonials />

        {/* 8. Sección de Contacto Directo */}
        <ContactSection 
          whatsappNumber={APP_CONFIG.whatsappNumber}
          locationAddress={APP_CONFIG.location.addressLine}
        />
      </main>

      {/* 9. Modal de Vista Detallada de Producto (Si se selecciona alguno) */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          whatsappNumber={APP_CONFIG.whatsappNumber}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* 10. Botón Flotante Pulsante de WhatsApp */}
      <FloatingWhatsApp whatsappNumber={APP_CONFIG.whatsappNumber} />

      {/* 11. Pie de Página Corporativo con Derechos Reservados */}
      <Footer />

    </div>
  );
}

export default App;
