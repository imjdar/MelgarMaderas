'use client';

import React from 'react';
import { ShieldCheck, Flame, Ruler, Sofa } from 'lucide-react';

export function MainValueProps() {
  const props = [
    {
      icon: <Sofa size={36} color="var(--color-gold-accent)" />,
      title: '100% Madera Maciza',
      desc: 'Utilizamos exclusivamente maderas nobles y robustas, rechazando aglomerados para garantizar firmeza total.'
    },
    {
      icon: <Flame size={36} color="var(--color-gold-accent)" />,
      title: 'Secado al Horno',
      desc: 'Proceso técnico con humedad entre 8% y 10% que previene rajaduras, torceduras y polillas.'
    },
    {
      icon: <Ruler size={36} color="var(--color-gold-accent)" />,
      title: 'Diseño a Medida',
      desc: 'Adaptamos dimensiones, telas y acabados para que el mueble encaje perfecto en tu espacio.'
    },
    {
      icon: <ShieldCheck size={36} color="var(--color-gold-accent)" />,
      title: 'Garantía de Calidad',
      desc: 'Respaldamos la calidad de nuestros muebles de por vida contra defectos estructurales y de manufactura.'
    }
  ];

  return (
    <section id="propuesta-valor" style={{ padding: '6rem 0', backgroundColor: 'var(--color-dark-bg)', color: 'var(--color-text-white)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="section-tag" style={{ backgroundColor: 'rgba(197, 160, 89, 0.15)', color: 'var(--color-gold-accent)' }}>
          Por qué elegirnos
        </span>
        <h2 className="section-title" style={{ color: 'var(--color-text-white)' }}>
          Nuestra <span className="font-script" style={{ color: 'var(--color-gold-accent)' }}>Promesa de Valor</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto 4rem auto', color: '#8E847A' }}>
          Lo que hace diferente a Maderas Melgar en la industria del mueble.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          textAlign: 'center'
        }}>
          {props.map((p, i) => (
            <div key={i} style={{
              padding: '2rem',
              backgroundColor: 'var(--color-dark-surface)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                {p.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                color: 'var(--color-text-white)',
                marginBottom: '1rem'
              }}>
                {p.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#8E847A',
                lineHeight: 1.6
              }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
