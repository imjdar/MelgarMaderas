'use client';

import React from 'react';
import { APP_CONFIG } from '@/services/configService';

export function MainFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      backgroundColor: 'var(--color-wood-deep)', 
      color: '#E5DCCB', 
      padding: '4rem 0 2rem 0' 
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          
          {/* Marca */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              color: 'var(--color-text-white)',
              marginBottom: '1rem',
              fontWeight: 700
            }}>
              MADERAS MELGAR
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#8E847A', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Diseño exclusivo y fabricación artesanal de muebles de madera maciza de alta gama. Tradición que traspasa épocas.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 style={{ color: 'var(--color-gold-accent)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Navegación</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="#quienes-somos" style={{ color: '#8E847A', textDecoration: 'none' }}>Quiénes Somos</a></li>
              <li><a href="#propuesta-valor" style={{ color: '#8E847A', textDecoration: 'none' }}>Propuesta de Valor</a></li>
              <li><a href="#productos" style={{ color: '#8E847A', textDecoration: 'none' }}>Catálogo</a></li>
              <li><a href="#testimonios" style={{ color: '#8E847A', textDecoration: 'none' }}>Testimonios</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{ color: 'var(--color-gold-accent)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Contacto</h4>
            <p style={{ fontSize: '0.95rem', color: '#8E847A', marginBottom: '0.5rem' }}>
              <strong>WhatsApp:</strong> <br/> {APP_CONFIG.whatsappNumber}
            </p>
            <p style={{ fontSize: '0.95rem', color: '#8E847A', marginBottom: '0.5rem' }}>
              <strong>Email:</strong> <br/> ventas@melgarmaderas.com.ec
            </p>
            <p style={{ fontSize: '0.95rem', color: '#8E847A' }}>
              <strong>Ubicación:</strong> <br/> {APP_CONFIG.location.addressLine}
            </p>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ fontSize: '0.85rem', color: '#5C544C' }}>
            &copy; {currentYear} Maderas Melgar. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href={APP_CONFIG.socialLinks?.instagram || '#'} target="_blank" rel="noreferrer" style={{ color: '#8E847A' }}>Instagram</a>
            <a href={APP_CONFIG.socialLinks?.facebook || '#'} target="_blank" rel="noreferrer" style={{ color: '#8E847A' }}>Facebook</a>
            <a href={APP_CONFIG.socialLinks?.tiktok || '#'} target="_blank" rel="noreferrer" style={{ color: '#8E847A' }}>TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
