import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      name: 'Dra. María Elena Cordova',
      location: 'Quito, Cumbayá',
      text: 'Mandamos a hacer nuestro juego de comedor de 8 puestos y el resultado superó nuestras expectativas. La madera de seike tiene un acabado hermoso y la atención fue muy profesional.',
      rating: 5,
      mueble: 'Juego de Comedor a Medida'
    },
    {
      name: 'Ing. Carlos Andrade',
      location: 'Quito, Los Chillos',
      text: 'La cama King y los veladores encajaron perfecto en la habitación principal. Se nota la diferencia de comprar madera maciza real tratada en lugar de aglomerados.',
      rating: 5,
      mueble: 'Dormitorio Principal King'
    },
    {
      name: 'Arq. Fernando Terán',
      location: 'Guayaquil / Quito',
      text: 'Como arquitecto de interiores recomiendo Maderas Melgar a mis clientes por su puntualidad, acabados impecables en poliuretano y respeto por el diseño original.',
      rating: 5,
      mueble: 'Mobiliario Modular de Sala'
    }
  ];

  return (
    <section 
      style={{ 
        padding: '90px 0', 
        backgroundColor: 'var(--color-cream-bg)'
      }}
    >
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <span>Experiencias Reales</span>
          </div>
          <h2 className="section-title">Confianza & Testimonios</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            La satisfacción de quienes disfrutan de nuestros muebles en sus hogares es nuestra mejor carta de presentación.
          </p>
        </div>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {reviews.map((rev, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'var(--color-surface-white)',
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <Quote size={32} color="#0D6838" style={{ opacity: 0.2, position: 'absolute', top: '1.5rem', right: '1.5rem' }} />

              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem', color: '#F59E0B' }}>
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', flexGrow: 1, fontStyle: 'italic' }}>
                "{rev.text}"
              </p>

              <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                <strong style={{ display: 'block', color: 'var(--color-wood-dark)', fontSize: '0.95rem' }}>
                  {rev.name}
                </strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>
                  {rev.location} • {rev.mueble}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
