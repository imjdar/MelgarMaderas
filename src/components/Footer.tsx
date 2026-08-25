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
        backgroundColor: '#08090A', 
        color: '#D1D5DB',
        paddingTop: '80px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(255,255,255,0.08)'
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
                style={{ height: '48px', width: 'auto', objectFit: 'contain', filter: 'brightness(1.1)' }}
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src = '/assets/branding/logo-symbol.png';
                }}
              />
            </a>

            <p style={{ fontSize: '1rem', color: '#F59E0B', marginBottom: '1rem', fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>
              “{APP_CONFIG.slogan}”
            </p>

            <p style={{ fontSize: '0.9rem', color: '#9CA3AF', lineHeight: '1.6' }}>
              Muestrario técnico e informativo de muebles personalizados en madera maciza de alta gama (Seike, Roble, Laurel) en Quito, Ecuador.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
              Navegación del Muestrario
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><a href="#inicio" style={{ color: '#D1D5DB', transition: 'color 0.2s' }}>Inicio Arquitectónico</a></li>
              <li><a href="#catalogo" style={{ color: '#D1D5DB', transition: 'color 0.2s' }}>Catálogo Bento</a></li>
              <li><a href="#calidad" style={{ color: '#D1D5DB', transition: 'color 0.2s' }}>Ficha Técnica & Humedad (8-10%)</a></li>
              <li><a href="#nosotros" style={{ color: '#D1D5DB', transition: 'color 0.2s' }}>Taller & Planta Quito</a></li>
              <li><a href="#contacto" style={{ color: '#D1D5DB', transition: 'color 0.2s' }}>Showroom & Cotizaciones</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
              Protección de Modelos
            </h4>
            <div 
              style={{
                backgroundColor: '#14181D',
                padding: '1.25rem',
                borderRadius: '12px',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                fontSize: '0.85rem',
                color: '#9CA3AF',
                lineHeight: '1.5'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F59E0B', fontWeight: '800', marginBottom: '0.5rem' }}>
                <ShieldCheck size={18} />
                <span>Imágenes con Sello Digital</span>
              </div>
              Los catálogos, fotografías y especificaciones expuestas en <strong>melgarmaderas.com.ec</strong> pertenecen exclusivamente a Maderas Melgar. Prohibida la copia por competidores.
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
            color: '#6B7280'
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong style={{ color: '#FFFFFF' }}>Maderas Melgar</strong> ({APP_CONFIG.domain}). Todos los derechos reservados.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#F59E0B', fontWeight: 600 }}>Estudio Arquitectónico • Quito, Ecuador</span>
            
            <button
              onClick={scrollToTop}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#14181D',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s',
                cursor: 'pointer'
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
