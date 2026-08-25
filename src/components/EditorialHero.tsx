'use client';

import React from 'react';
import { WatermarkImage } from './WatermarkImage';
import { ArrowRight, ShieldCheck, Award } from 'lucide-react';

interface EditorialHeroProps {
  onExploreCatalog: () => void;
  onContactWhatsApp: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  onExploreCatalog,
  onContactWhatsApp
}) => {
  return (
    <section 
      style={{
        position: 'relative',
        backgroundColor: '#1C1410',
        color: '#FAF8F5',
        overflow: 'hidden',
        paddingTop: '6rem',
        paddingBottom: '5rem'
      }}
    >
      {/* Fondo Amaderado Sutil */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.15,
        backgroundImage: 'radial-gradient(#C59B27 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          
          {/* Columna Izquierda: Manifiesto Editorial */}
          <div>
            
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(197, 155, 39, 0.12)',
              border: '1px solid rgba(197, 155, 39, 0.4)',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              color: '#C59B27',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              <Award size={14} /> FIRMA ECUAATORIANA DE MOBILIARIO EN MADERA MACIZA
            </div>

            <h1 style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#FFFFFF',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em'
            }}>
              Muebles que <br />
              <span style={{ fontStyle: 'italic', color: '#C59B27', fontWeight: 400 }}>
                traspasan épocas
              </span>
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: '#D5CDC4',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '540px'
            }}>
              Diseño atemporal y ebanistería de alta gama en Quito, Ecuador. Piezas exclusivas en 
              <strong> Seike, Roble y Laurel</strong> sometidas a un secado estricto al horno (8-10% humedad) para preservar su estructura por generaciones.
            </p>

            {/* Acciones Directas */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={onExploreCatalog}
                className="btn-primary"
                style={{
                  backgroundColor: '#C59B27',
                  color: '#0F0C0A',
                  borderColor: '#C59B27',
                  padding: '1rem 2rem',
                  fontSize: '0.85rem'
                }}
              >
                Explorar Colecciones <ArrowRight size={16} />
              </button>

              <button
                onClick={onContactWhatsApp}
                className="btn-secondary"
                style={{
                  backgroundColor: 'transparent',
                  color: '#FAF8F5',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  padding: '1rem 2rem',
                  fontSize: '0.85rem'
                }}
              >
                Solicitar Cotización a Medida
              </button>
            </div>

            {/* Sellos de Respaldo */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              marginTop: '3rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF' }}>100%</div>
                <div style={{ fontSize: '0.75rem', color: '#8E847A', textTransform: 'uppercase' }}>Madera Maciza</div>
              </div>
              <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#C59B27' }}>8-10%</div>
                <div style={{ fontSize: '0.75rem', color: '#8E847A', textTransform: 'uppercase' }}>Humedad Garantizada</div>
              </div>
              <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF' }}>Quito</div>
                <div style={{ fontSize: '0.75rem', color: '#8E847A', textTransform: 'uppercase' }}>Showroom & Taller</div>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Fotografía Amaderada Protegida con Marca de Agua */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)',
              border: '1px solid rgba(197, 155, 39, 0.2)'
            }}>
              <WatermarkImage
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                alt="Comedor de Madera Maciza Seike de Alta Gama en Quito - Maderas Melgar"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                priority
              />
            </div>
            
            {/* Tag de Marca de Agua Oficial */}
            <div style={{
              position: 'absolute',
              top: '-1rem',
              right: '1rem',
              backgroundColor: '#0F0C0A',
              color: '#FAF8F5',
              border: '1px solid #C59B27',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontSize: '0.75rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 10px 20px rgba(0,0,0,0.4)'
            }}>
              <ShieldCheck size={14} color="#C59B27" />
              <span>melgarmaderas.com.ec</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
