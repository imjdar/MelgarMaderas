'use client';

import React from 'react';
import { WatermarkImage } from './WatermarkImage';
import { ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

interface ModernHeroProps {
  onExploreCatalog: () => void;
  onContactWhatsApp: () => void;
}

export const ModernHero: React.FC<ModernHeroProps> = ({
  onExploreCatalog,
  onContactWhatsApp
}) => {
  return (
    <section style={{ backgroundColor: '#101316', color: '#F4EFE6', padding: '4.5rem 0 5rem 0', position: 'relative' }}>
      <div className="container-custom">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          
          {/* Lado Izquierdo: Presentación Arquitectónica */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              color: '#D4AF37',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              <Sparkles size={14} /> DISEÑO ARQUITECTÓNICO & MADERA MACIZA
            </div>

            <h1 style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.85rem)',
              fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#FFFFFF',
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em'
            }}>
              Mobiliario de Autor <br />
              <span style={{ color: '#D4AF37' }}>Hecho en Ecuador</span>
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: '#9CA3AF',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '520px'
            }}>
              Catálogo informativo exclusivo para proyectos residenciales y corporativos. Maderas seleccionadas de origen noble (Seike, Roble, Laurel) procesadas en horno con precisión técnica en Quito.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={onExploreCatalog}
                style={{
                  backgroundColor: '#D4AF37',
                  color: '#0F1215',
                  border: 'none',
                  padding: '0.9rem 2.25rem',
                  borderRadius: '12px',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease'
                }}
              >
                Ver Colecciones <ArrowUpRight size={18} />
              </button>

              <button
                onClick={onContactWhatsApp}
                style={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '0.9rem 2.25rem',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Cotizar Proyecto a Medida
              </button>
            </div>

            {/* Garantías Técnicas */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              marginTop: '3.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#9CA3AF', letterSpacing: '0.05em' }}>Tratamiento Térmico</span>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#D4AF37', marginTop: '0.2rem' }}>Secado 8-10% Horno</div>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#9CA3AF', letterSpacing: '0.05em' }}>Dominio Oficial</span>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', marginTop: '0.2rem' }}>melgarmaderas.com.ec</div>
              </div>
            </div>

          </div>

          {/* Lado Derecho: Imagen de Mobiliario Protegida */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
            }}>
              <WatermarkImage
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
                alt="Mobiliario de Sala Vanguardia en Madera Maciza - Maderas Melgar Quito"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                priority
              />
            </div>

            <div style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              backgroundColor: 'rgba(16, 19, 22, 0.9)',
              backdropFilter: 'blur(10px)',
              padding: '0.75rem 1.25rem',
              borderRadius: '12px',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#FFFFFF',
              fontSize: '0.8rem',
              fontWeight: 700
            }}>
              <ShieldCheck size={16} color="#D4AF37" />
              <span>Diseños Exclusivos Protegidos por Ley</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
