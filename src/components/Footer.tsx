'use client';

import React from 'react';
import { ShieldCheck, ArrowUp } from 'lucide-react';
import { APP_CONFIG } from '@/services/configService';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{ 
        backgroundColor: 'var(--color-dark-bg)', 
        color: '#DCD2C3',
        paddingTop: '80px',
        paddingBottom: '40px',
        borderTop: '1px solid var(--color-dark-surface)'
      }}
    >
      <div className="container">
        
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          <div>
            <a href="#inicio" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
              <img 
                src="/assets/branding/logo-full.png" 
                alt="Maderas Melgar Logo"
                style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src = '/assets/branding/logo-symbol.png';
                }}
              />
            </a>

            <p className="font-script" style={{ fontSize: '1.4rem', color: 'var(--color-gold-accent)', marginBottom: '1rem', fontStyle: 'italic' }}>
              “{APP_CONFIG.slogan}”
            </p>

            <p style={{ fontSize: '0.9rem', color: '#9E9488', lineHeight: '1.6' }}>
              Fabricación de muebles informativos y personalizados en madera maciza 100% de la más alta calidad en Ecuador.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Navegación del Portal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><a href="#inicio" style={{ color: '#DCD2C3', transition: 'color 0.2s' }}>Inicio</a></li>
              <li><a href="#catalogo" style={{ color: '#DCD2C3', transition: 'color 0.2s' }}>Catálogo de Productos</a></li>
              <li><a href="#calidad" style={{ color: '#DCD2C3', transition: 'color 0.2s' }}>Madera Maciza & Acabados</a></li>
              <li><a href="#nosotros" style={{ color: '#DCD2C3', transition: 'color 0.2s' }}>Historia & Trayectoria</a></li>
              <li><a href="#contacto" style={{ color: '#DCD2C3', transition: 'color 0.2s' }}>Contacto & Cotización</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Propiedad Intelectual
            </h4>
            <div 
              style={{
                backgroundColor: 'var(--color-dark-surface)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(197, 160, 89, 0.2)',
                fontSize: '0.85rem',
                color: '#B0A598',
                lineHeight: '1.5'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold-accent)', fontWeight: '700', marginBottom: '0.5rem' }}>
                <ShieldCheck size={18} />
                <span>Imágenes Protegidas</span>
              </div>
              Las fotografías, catálogos y marcas visuales expuestas en este sitio corresponden a la propiedad exclusiva de <strong>melgarmaderas.com.ec</strong>. Prohibida la reproducción parcial o total no autorizada.
            </div>
          </div>

        </div>

        <div 
          style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#82786D'
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>Maderas Melgar</strong> ({APP_CONFIG.domain}). Todos los derechos reservados.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>Portal Informativo • Ecuador</span>
            
            <button
              onClick={scrollToTop}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-dark-surface)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s'
              }}
              title="Volver arriba"
              aria-label="Volver arriba"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
