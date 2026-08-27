'use client';

import React from 'react';
import { APP_CONFIG } from '@/services/configService';

export function MainCTA() {
  const handleContactWhatsApp = () => {
    const text = `Hola Maderas Melgar. Quisiera cotizar un mueble a medida.`;
    window.open(`https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section style={{ 
      padding: '6rem 0', 
      backgroundColor: 'var(--color-wood-dark)', 
      color: 'var(--color-text-white)',
      textAlign: 'center',
      backgroundImage: 'linear-gradient(to right, rgba(37, 17, 8, 0.95), rgba(37, 17, 8, 0.8)), url(/assets/products/seike-table.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          marginBottom: '1.5rem',
          color: 'var(--color-text-white)'
        }}>
          ¿Listo para transformar tu hogar?
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#E5DCCB',
          marginBottom: '3rem',
          lineHeight: 1.6
        }}>
          Contáctanos hoy mismo para recibir asesoría personalizada. Fabricamos el mueble de tus sueños a medida y con la madera más fina del Ecuador.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={handleContactWhatsApp}
            className="btn-primary"
            style={{
              backgroundColor: '#25D366', // WhatsApp Official Green
              color: '#fff',
              fontSize: '1.1rem',
              padding: '1rem 2.5rem'
            }}
          >
            Cotizar por WhatsApp
          </button>
          
          <button 
            onClick={() => {
              const url = APP_CONFIG.socialLinks?.instagram || '#';
              window.open(url, '_blank');
            }}
            className="btn-outline"
            style={{
              borderColor: 'var(--color-gold-accent)',
              color: 'var(--color-gold-accent)',
              fontSize: '1.1rem',
              padding: '1rem 2.5rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-gold-accent)';
              e.currentTarget.style.color = 'var(--color-wood-dark)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-gold-accent)';
            }}
          >
            Ver en Instagram
          </button>
        </div>
      </div>
    </section>
  );
}
