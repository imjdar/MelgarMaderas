'use client';

import React from 'react';
import { Award, Compass, Factory, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ModernAboutBrand: React.FC = () => {
  return (
    <section id="nosotros" style={{ backgroundColor: '#0B0D0E', color: '#F4EFE6', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-custom">
        
        {/* Encabezado Bento */}
        <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: '#F59E0B',
            fontSize: '0.75rem',
            fontWeight: 800,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem'
          }}>
            <Factory size={14} /> HISTORIA & TALLER EBANISTA EN QUITO
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#FFFFFF', fontWeight: 800, margin: 0, fontFamily: "'Outfit', sans-serif" }}>
            Trascendencia Ecuatoriana en Madera Maciza
          </h2>
        </div>

        {/* Grilla Bento 3 Columnas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '2rem'
        }}>
          
          {/* Card 1: Herencia Ebanista */}
          <div style={{
            backgroundColor: '#14181D',
            borderRadius: '20px',
            padding: '2.5rem',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: 'rgba(245, 158, 11, 0.12)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Award size={24} color="#F59E0B" />
              </div>

              <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '0.75rem' }}>
                Tradición & Vanguardia
              </h3>

              <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Fundada en Quito con la vocación de perfeccionar la ebanistería en madera maciza. Fusionamos técnicas artesanales de ensamblaje a caja y espiga con maquinaria de precisión industrial.
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D1D5DB', fontSize: '0.8rem', fontWeight: 700 }}>
              <CheckCircle2 size={16} color="#F59E0B" />
              <span>Planta de producción propia en Pichincha</span>
            </div>
          </div>

          {/* Card 2: Control del Secado en Horno */}
          <div style={{
            backgroundColor: '#14181D',
            borderRadius: '20px',
            padding: '2.5rem',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 10px 30px rgba(245, 158, 11, 0.08)'
          }}>
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: 'rgba(245, 158, 11, 0.2)',
                border: '1px solid #F59E0B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <ShieldCheck size={24} color="#F59E0B" />
              </div>

              <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '0.75rem' }}>
                Proceso de Horno 8-10%
              </h3>

              <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Sometemos cada tablón de Seike, Roble y Laurel a un proceso computarizado de secado al horno. Garantizamos un contenido de humedad controlado que elimina tensiones internas y previene rajaduras.
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F59E0B', fontSize: '0.8rem', fontWeight: 800 }}>
              <CheckCircle2 size={16} color="#F59E0B" />
              <span>Garantía estructural contra rajaduras</span>
            </div>
          </div>

          {/* Card 3: Alcance Nacional Ecuador */}
          <div style={{
            backgroundColor: '#14181D',
            borderRadius: '20px',
            padding: '2.5rem',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: 'rgba(245, 158, 11, 0.12)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Compass size={24} color="#F59E0B" />
              </div>

              <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '0.75rem' }}>
                Envíos a Todo el Ecuador
              </h3>

              <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Despachamos piezas de mobiliario protegidas a Quito, Guayaquil, Cuenca, Ambato, Manta, Machala y a nivel nacional con embalaje acolchado de alta densidad.
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D1D5DB', fontSize: '0.8rem', fontWeight: 700 }}>
              <CheckCircle2 size={16} color="#F59E0B" />
              <span>Showroom principal en Quito</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
