'use client';

import React from 'react';
import { WatermarkImage } from './WatermarkImage';
import { ArrowUpRight, ShieldCheck, Sparkles, Flame, MapPin } from 'lucide-react';

interface ModernHeroProps {
  onExploreCatalog: () => void;
  onContactWhatsApp: () => void;
}

export const ModernHero: React.FC<ModernHeroProps> = ({
  onExploreCatalog,
  onContactWhatsApp
}) => {
  return (
    <section 
      style={{ 
        backgroundColor: '#0B0D0E', 
        color: '#F4EFE6', 
        padding: 'clamp(2.5rem, 6vw, 5rem) 0', 
        position: 'relative',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden'
      }}
    >
      {/* Malla de Fondo Sutil en Modo Oscuro */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.08,
        backgroundImage: 'radial-gradient(#F59E0B 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none'
      }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: 'clamp(2rem, 4vw, 3.5rem)',
          alignItems: 'center'
        }}>
          
          {/* Lado Izquierdo: Titular y Manifiesto Arquitectónico */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              padding: '0.4rem 0.9rem',
              borderRadius: '9999px',
              color: '#F59E0B',
              fontSize: 'clamp(0.7rem, 2vw, 0.78rem)',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem'
            }}>
              <Sparkles size={14} /> MOBILIARIO DE AUTOR & MADERA MACIZA EN QUITO
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 5.2vw, 3.85rem)',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              lineHeight: 1.1,
              color: '#FFFFFF',
              marginBottom: '1.25rem',
              letterSpacing: '-0.03em'
            }}>
              Ebanistería Moderna <br />
              <span style={{ 
                background: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                que Transciende Épocas
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: '#9CA3AF',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '520px'
            }}>
              Muestrario técnico e informativo para residencias exclusivas y estudios de arquitectura. Fabricación artesanal en Quito con maderas macizas nobles (**Seike, Roble, Laurel**) y secado computarizado al horno (8-10%).
            </p>

            {/* Acciones Principales */}
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <button
                onClick={onExploreCatalog}
                style={{
                  backgroundColor: '#F59E0B',
                  color: '#0B0D0E',
                  border: 'none',
                  padding: '0.9rem 1.75rem',
                  borderRadius: '12px',
                  fontWeight: 900,
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'transform 0.2s ease',
                  boxShadow: '0 8px 24px rgba(245, 158, 11, 0.25)'
                }}
              >
                Ver Muestrario Bento <ArrowUpRight size={18} />
              </button>

              <button
                onClick={onContactWhatsApp}
                style={{
                  backgroundColor: '#14181D',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '0.9rem 1.75rem',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
              >
                Cotizar Proyecto a Medida
              </button>
            </div>

            {/* Tarjetas Bento de Especificación Técnica */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
              gap: '0.75rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div style={{ backgroundColor: '#14181D', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#F59E0B', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase' }}>
                  <Flame size={12} /> Humedad
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#FFFFFF', marginTop: '0.2rem' }}>8-10% Horno</div>
              </div>

              <div style={{ backgroundColor: '#14181D', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#F59E0B', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase' }}>
                  <ShieldCheck size={12} /> Autenticidad
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#FFFFFF', marginTop: '0.2rem' }}>100% Maciza</div>
              </div>

              <div style={{ backgroundColor: '#14181D', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#F59E0B', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase' }}>
                  <MapPin size={12} /> Ubicación
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight 900, color: '#FFFFFF', marginTop: '0.2rem' }}>Quito Taller</div>
              </div>
            </div>

          </div>

          {/* Lado Derecho: Fotografía Protegida de Alta Gama */}
          <div style={{ position: 'relative', width: '100%' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1.5px solid rgba(245, 158, 11, 0.3)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
              backgroundColor: '#14181D'
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

            {/* Sello Flotante Protegido */}
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              right: '1rem',
              backgroundColor: 'rgba(11, 13, 14, 0.92)',
              backdropFilter: 'blur(10px)',
              padding: '0.65rem 1rem',
              borderRadius: '10px',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#FFFFFF',
              fontSize: '0.75rem',
              fontWeight: 700,
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={14} color="#F59E0B" />
                <span>Imágenes Protegidas Anti-Copia</span>
              </div>
              <strong style={{ color: '#F59E0B' }}>melgarmaderas.com.ec</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
