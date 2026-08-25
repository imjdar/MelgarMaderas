'use client';

import React from 'react';
import { WatermarkImage } from './WatermarkImage';
import { ArrowUpRight, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

interface ModernHeroProps {
  onExploreCatalog: () => void;
  onContactWhatsApp: () => void;
}

export const ModernHero: React.FC<ModernHeroProps> = ({
  onExploreCatalog,
  onContactWhatsApp
}) => {
  return (
    <section style={{ backgroundColor: '#0B0D0E', color: '#F4EFE6', padding: '4.5rem 0 5rem 0', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-custom">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          
          {/* Lado Izquierdo: Presentación Arquitectónica */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              color: '#F59E0B',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              <Sparkles size={14} /> ESTUDIO ARQUITECTÓNICO DE MOBILIARIO MACIZO
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              lineHeight: 1.08,
              color: '#FFFFFF',
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em'
            }}>
              Muebles de Autor <br />
              <span style={{ color: '#F59E0B' }}>& Madera Noble</span>
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: '#9CA3AF',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '520px'
            }}>
              Muestrario técnico e informativo para arquitectos, diseñadores de interiores y proyectos residenciales exclusivos en Ecuador. Fabricación en Quito con maderas macizas nobles (**Seike, Roble, Laurel**).
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={onExploreCatalog}
                style={{
                  backgroundColor: '#F59E0B',
                  color: '#0B0D0E',
                  border: 'none',
                  padding: '0.95rem 2.25rem',
                  borderRadius: '12px',
                  fontWeight: 900,
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 8px 24px rgba(245, 158, 11, 0.25)'
                }}
              >
                Ver Bento Muestrario <ArrowUpRight size={18} />
              </button>

              <button
                onClick={onContactWhatsApp}
                style={{
                  backgroundColor: '#14181D',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '0.95rem 2.25rem',
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

            {/* Garantías Técnicas Bento Pills */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '1rem',
              marginTop: '3rem',
              paddingTop: '1.75rem',
              borderTop: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#6B7280', letterSpacing: '0.05em', fontWeight: 700 }}>Tratamiento</span>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#F59E0B', marginTop: '0.2rem' }}>8-10% Horno</div>
              </div>

              <div>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#6B7280', letterSpacing: '0.05em', fontWeight: 700 }}>Garantía</span>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF', marginTop: '0.2rem' }}>Origen Quito</div>
              </div>

              <div>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#6B7280', letterSpacing: '0.05em', fontWeight: 700 }}>Seguridad</span>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#F59E0B', marginTop: '0.2rem' }}>Marca de Agua</div>
              </div>
            </div>

          </div>

          {/* Lado Derecho: Imagen de Mobiliario Protegida */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1.5px solid rgba(245, 158, 11, 0.3)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6)'
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
              backgroundColor: 'rgba(11, 13, 14, 0.92)',
              backdropFilter: 'blur(12px)',
              padding: '0.75rem 1.25rem',
              borderRadius: '12px',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#FFFFFF',
              fontSize: '0.8rem',
              fontWeight: 700,
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
            }}>
              <ShieldCheck size={16} color="#F59E0B" />
              <span>Modelos Registrados • melgarmaderas.com.ec</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
