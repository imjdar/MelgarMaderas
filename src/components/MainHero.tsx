'use client';

import React from 'react';
import { APP_CONFIG } from '@/services/configService';

export function MainHero() {
  const handleContactWhatsApp = () => {
    const text = `Hola Maderas Melgar. Quisiera más información sobre sus muebles de madera maciza a medida.`;
    window.open(`https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        overflow: 'hidden',
        backgroundColor: 'var(--color-wood-dark)'
      }}
    >
      {/* Imagen de Fondo (Reemplazar con imagen real) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/assets/products/sala-linea-premium.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        {/* Overlay Oscuro para Legibilidad */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(22, 19, 18, 0.4) 0%, rgba(37, 17, 8, 0.8) 100%)',
        }} />
      </div>

      {/* Contenido */}
      <div 
        className="container" 
        style={{ 
          position: 'relative', 
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '900px',
          color: 'var(--color-text-white)'
        }}
      >
        <h1 
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            color: 'var(--color-text-white)',
            textShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}
        >
          Muebles de Madera Maciza que <span style={{ fontFamily: 'var(--font-script)', fontStyle: 'italic', color: 'var(--color-gold-accent)' }}>traspasan épocas</span>
        </h1>
        
        <p style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
          fontWeight: 300,
          maxWidth: '700px',
          margin: '0 auto 3rem auto',
          opacity: 0.9,
          lineHeight: 1.6,
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          Diseño exclusivo y fabricación artesanal de alta gama en Ecuador. 
          Transformamos la madera en obras de arte para tu hogar.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={handleContactWhatsApp}
            className="btn-primary"
            style={{
              fontSize: '1.1rem',
              padding: '1rem 2.5rem',
              backgroundColor: 'var(--color-gold-accent)',
              color: 'var(--color-wood-dark)',
            }}
          >
            Cotizar por WhatsApp
          </button>
          <button 
            onClick={() => {
              document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-outline"
            style={{
              fontSize: '1.1rem',
              padding: '1rem 2.5rem',
              borderColor: 'var(--color-text-white)',
              color: 'var(--color-text-white)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-text-white)';
              e.currentTarget.style.color = 'var(--color-wood-dark)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-text-white)';
            }}
          >
            Ver Colecciones
          </button>
        </div>
      </div>
    </section>
  );
}
