'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

export function MainTestimonials() {
  const testimonials = [
    {
      name: 'María F. Gómez',
      text: 'Compré un comedor para mi casa nueva y quedé fascinada. La madera es hermosísima y el acabado es impecable. Muebles Melgar realmente hace arte.',
      role: 'Cliente - Quito'
    },
    {
      name: 'Jorge Luis Carrera',
      text: 'La calidad se nota a leguas. Me hicieron un juego de sala a medida y superaron mis expectativas. 100% recomendados por su seriedad y profesionalismo.',
      role: 'Cliente - Cumbayá'
    },
    {
      name: 'Familia Vásquez',
      text: 'Buscábamos muebles de madera de verdad, no sintéticos. Encontramos en Maderas Melgar exactamente lo que queríamos. Tienen nuestro voto de confianza.',
      role: 'Clientes - Tumbaco'
    }
  ];

  return (
    <section id="testimonios" style={{ padding: '6rem 0', backgroundColor: 'var(--color-cream-surface)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="section-tag">Testimonios</span>
        <h2 className="section-title">
          Lo que dicen <span className="font-script">Nuestros Clientes</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto 4rem auto' }}>
          La satisfacción de quienes ya confían en la calidad de Maderas Melgar.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          textAlign: 'left'
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              backgroundColor: 'var(--color-surface-white)',
              padding: '2.5rem 2rem',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative'
            }}>
              <Quote size={40} color="var(--color-gold-accent)" style={{ opacity: 0.2, position: 'absolute', top: '1.5rem', right: '1.5rem' }} />
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.5rem' }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="var(--color-gold-accent)" color="var(--color-gold-accent)" />
                ))}
              </div>
              <p style={{
                fontSize: '1rem',
                color: 'var(--color-text-dark)',
                fontStyle: 'italic',
                marginBottom: '1.5rem',
                lineHeight: 1.6
              }}>
                "{t.text}"
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1.5rem' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-wood-dark)' }}>{t.name}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
