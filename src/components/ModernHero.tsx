'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Eye, Layers, CheckCircle } from 'lucide-react';
import { WatermarkImage } from './WatermarkImage';

interface ModernHeroProps {
  onExploreCatalog: () => void;
  onExploreSimulator: () => void;
}

export const ModernHero: React.FC<ModernHeroProps> = ({
  onExploreCatalog,
  onExploreSimulator
}) => {
  return (
    <section 
      id="inicio"
      style={{
        paddingTop: '140px',
        paddingBottom: '90px',
        backgroundColor: '#0F1215',
        backgroundImage: 'radial-gradient(ellipse at top, #1F2937 0%, #0F1215 70%)',
        position: 'relative',
        overflow: 'hidden',
        color: '#ffffff'
      }}
    >
      {/* Malla Decorativa de Luz Neón Glassmorphism */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '20%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          
          {/* Lado Izquierdo: Copy Moderno y CTAs */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(212, 175, 55, 0.15)',
              color: '#D4AF37',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}>
              <Sparkles size={14} /> Vanguardia & Maderas Macizas
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '1rem'
            }}>
              Maderas Melgar <br />
              <span style={{
                background: 'linear-gradient(90deg, #10B981 0%, #D4AF37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Diseño que Perdura
              </span>
            </h1>

            <p style={{
              fontSize: '1.2rem',
              color: '#D1D5DB',
              marginBottom: '2rem',
              lineHeight: 1.6,
              maxWidth: '560px'
            }}>
              Portal informativo y catálogo digital de mobiliario 100% madera maciza tratada al horno. 
              Experimente el simulador de ambientes en vivo y cotice sus piezas a medida.
            </p>

            {/* Acciones principales */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <button 
                onClick={onExploreCatalog}
                style={{
                  padding: '0.9rem 2.25rem',
                  borderRadius: '9999px',
                  backgroundColor: '#10B981',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 12px 30px rgba(16, 185, 129, 0.35)'
                }}
              >
                <span>Explorar Colección</span>
                <ArrowRight size={18} />
              </button>

              <button 
                onClick={onExploreSimulator}
                style={{
                  padding: '0.9rem 2rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '1rem',
                  border: '1px solid rgba(255,255,255,0.15)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Eye size={18} color="#D4AF37" />
                <span>Simulador de Espacios</span>
              </button>
            </div>

            {/* Badges de Garantía */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
              <div>
                <div style={{ color: '#10B981', fontWeight: 800, fontSize: '1.25rem' }}>100%</div>
                <div style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Madera Maciza</div>
              </div>
              <div>
                <div style={{ color: '#D4AF37', fontWeight: 800, fontSize: '1.25rem' }}>Secado</div>
                <div style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Térmico en Horno</div>
              </div>
              <div>
                <div style={{ color: '#10B981', fontWeight: 800, fontSize: '1.25rem' }}>Anti-Robo</div>
                <div style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Protección WAF</div>
              </div>
            </div>

          </div>

          {/* Lado Derecho: Showcase en Tarjeta de Cristal Translúcido */}
          <div style={{ position: 'relative' }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '24px',
              padding: '1.25rem',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
              backdropFilter: 'blur(16px)'
            }}>
              <WatermarkImage 
                src="/assets/products/sala-linea-premium.jpg"
                alt="Juego de Sala Línea Premium Melgar"
                aspectRatio="4/3"
                watermarkText="melgarmaderas.com.ec • catálogo oficial"
              />

              {/* Card Flotante de Estado */}
              <div style={{
                marginTop: '1.25rem',
                backgroundColor: 'rgba(18, 22, 25, 0.9)',
                borderRadius: '16px',
                padding: '1rem 1.25rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}>
                    <ShieldCheck size={20} color="#10B981" />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>
                      Garantía Intergeneracional
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>
                      Madera de Seike / Roble Seleccionada
                    </span>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.7rem', color: '#10B981', fontWeight: 700, textTransform: 'uppercase' }}>
                    Showroom Quito
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
