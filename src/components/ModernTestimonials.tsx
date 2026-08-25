'use client';

import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  city: string;
  wood: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: 'El comedor en madera Seike superó las expectativas del estudio de arquitectura. El acabado mate y la solidez estructural demuestran la precisión del secado al horno.',
    author: 'Arq. Esteban Morales',
    role: 'Estudio de Interiorismo',
    city: 'Quito, Cumbayá',
    wood: 'Seike Macizo'
  },
  {
    quote: 'Buscaba muebles de sala de alta gama con marca de autenticidad y garantía de durabilidad. El servicio informativo y la cotización por WhatsApp fueron impecables.',
    author: 'Dra. María Elena Ramos',
    role: 'Residencia Particular',
    city: 'Guayaquil, Samborondón',
    wood: 'Roble Ecuatoriano'
  },
  {
    quote: 'Solicité un juego de dormitorio a medida para mi proyecto en Cuenca. La textura del laurel y la atención técnica hicieron la diferencia.',
    author: 'Ing. Carlos Benítez',
    role: 'Cliente Residencial',
    city: 'Cuenca, Azuay',
    wood: 'Laurel Fino'
  }
];

export const ModernTestimonials: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#0B0D0E', color: '#F4EFE6', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-custom">
        
        {/* Encabezado */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem auto' }}>
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
            <Sparkles size={14} /> RESPALDO DE CLIENTES Y ARQUITECTOS
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', fontWeight: 800, margin: 0, fontFamily: "'Outfit', sans-serif" }}>
            Experiencias de Calidad
          </h2>
        </div>

        {/* Grilla 3 Columnas Obsidian Glass */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '2rem'
        }}>
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#14181D',
                borderRadius: '20px',
                padding: '2.25rem',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
            >
              <div>
                {/* Calificación 5 Estrellas */}
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

                <Quote size={28} color="rgba(245, 158, 11, 0.4)" style={{ marginBottom: '0.75rem' }} />

                <p style={{ color: '#D1D5DB', fontSize: '0.925rem', lineHeight: 1.7, marginBottom: '2rem', fontStyle: 'italic' }}>
                  “{item.quote}”
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 800, margin: 0 }}>
                    {item.author}
                  </h4>
                  <span style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>
                    {item.role} • {item.city}
                  </span>
                </div>

                <span style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.1)',
                  color: '#FCD34D',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '6px',
                  fontSize: '0.72rem',
                  fontWeight: 700
                }}>
                  {item.wood}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
