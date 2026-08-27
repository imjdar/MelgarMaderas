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
      backgroundImage: 'linear-gradient(to right, rgba(37, 17, 8, 0.95), rgba(37, 17, 8, 0.8)), url(/assets/products/comedor-elegance.jpg)',
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
          {/* WhatsApp Button */}
          <button 
            onClick={handleContactWhatsApp}
            className="btn-primary"
            style={{
              backgroundColor: '#25D366', // WhatsApp Official Green
              color: '#fff',
              fontSize: '1.1rem',
              padding: '1rem 2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              border: 'none',
              boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
            }}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            Cotizar por WhatsApp
          </button>
          
          {/* Instagram Button */}
          <button 
            onClick={() => {
              const url = APP_CONFIG.socialLinks?.instagram || '#';
              window.open(url, '_blank');
            }}
            className="btn-primary"
            style={{
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', // Instagram Official
              color: '#fff',
              fontSize: '1.1rem',
              padding: '1rem 2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              border: 'none',
              boxShadow: '0 4px 15px rgba(220, 39, 67, 0.3)'
            }}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            Instagram
          </button>

          {/* Facebook Button */}
          <button 
            onClick={() => {
              const url = APP_CONFIG.socialLinks?.facebook || '#';
              window.open(url, '_blank');
            }}
            className="btn-primary"
            style={{
              backgroundColor: '#1877F2', // Facebook Official
              color: '#fff',
              fontSize: '1.1rem',
              padding: '1rem 2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              border: 'none',
              boxShadow: '0 4px 15px rgba(24, 119, 242, 0.3)'
            }}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            Facebook
          </button>

          {/* TikTok Button */}
          <button 
            onClick={() => {
              const url = APP_CONFIG.socialLinks?.tiktok || '#';
              window.open(url, '_blank');
            }}
            className="btn-primary"
            style={{
              backgroundColor: '#000000', // TikTok Official Black
              color: '#fff',
              fontSize: '1.1rem',
              padding: '1rem 2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Custom SVG for TikTok to give the glitch effect implicitly via colors or just a simple stroke icon */}
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            TikTok
          </button>
        </div>
      </div>
    </section>
  );
}
