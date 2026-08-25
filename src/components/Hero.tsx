'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Award, TreePine, Sparkles } from 'lucide-react';
import { WatermarkImage } from './WatermarkImage';

interface HeroProps {
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog }) => {
  return (
    <section 
      id="inicio" 
      style={{ 
        paddingTop: '130px', 
        paddingBottom: '80px',
        background: 'linear-gradient(180deg, #FDFBF7 0%, #F5F1E8 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: 'radial-gradient(#3A1A0E 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          <div>
            <div className="section-tag">
              <Sparkles size={14} />
              <span>Carpintería de Alta Gama en Ecuador</span>
            </div>

            <h1 
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                color: 'var(--color-wood-dark)',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.15
              }}
            >
              Maderas Melgar
            </h1>

            <p 
              className="font-script" 
              style={{ 
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', 
                color: 'var(--color-green-primary)',
                marginBottom: '1.5rem',
                fontWeight: '600'
              }}
            >
              “Muebles que traspasan épocas”
            </p>

            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Presentamos nuestro catálogo de mobiliario informativo elaborado en **madera maciza 100% seleccionada**. Diseños sobrios, sofisticados y estructurados para perdurar por generaciones.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href="#catalogo" className="btn-primary" onClick={(e) => { e.preventDefault(); onExploreCatalog(); }}>
                <span>Explorar Catálogo</span>
                <ArrowRight size={18} />
              </a>

              <a href="#calidad" className="btn-outline">
                <span>Garantía de Madera</span>
              </a>
            </div>

            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(110, 59, 32, 0.15)'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-green-primary)', fontWeight: '700' }}>
                  <TreePine size={18} />
                  <span>100% Maciza</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Maderas tratadas al horno</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-green-primary)', fontWeight: '700' }}>
                  <Award size={18} />
                  <span>A Medida</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Dimensiones personalizadas</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-green-primary)', fontWeight: '700' }}>
                  <ShieldCheck size={18} />
                  <span>Garantía</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Protección de marca</span>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div 
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '4px solid #FFFFFF'
              }}
            >
              <WatermarkImage
                src="/assets/products/sala-linea-premium.jpg"
                alt="Juego de Sala Línea Premium Maderas Melgar"
                aspectRatio="4/3"
                watermarkText="melgarmaderas.com.ec"
              />
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '20px',
                background: 'var(--color-wood-dark)',
                color: '#FFFFFF',
                padding: '1rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <img 
                src="/assets/branding/logo-symbol.png" 
                alt="Melgar Icon" 
                style={{ width: '36px', height: '36px', objectFit: 'contain' }}
              />
              <div>
                <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-gold-accent)' }}>
                  Calidad Melgar Garantizada
                </strong>
                <span style={{ fontSize: '0.78rem', color: '#DCD2C3' }}>
                  Catálogo Oficial • melgarmaderas.com.ec
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
