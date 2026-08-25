'use client';

import React from 'react';
import { ShieldCheck, Flame, Ruler, Lock } from 'lucide-react';

export const ValueProps: React.FC = () => {
  const pillars = [
    {
      icon: Flame,
      title: 'Madera Tratada al Horno',
      description: 'Garantizamos que la humedad de la madera se reduzca al nivel óptimo (8%-12%), evitando grietas, deformaciones y plagas a lo largo de las décadas.'
    },
    {
      icon: ShieldCheck,
      title: 'Acabados en Poliuretano',
      description: 'Recubrimientos protectores de máxima dureza que sellan los poros de la madera, siendo resistentes a derrames líquidos, calor ambiental y rasguños.'
    },
    {
      icon: Ruler,
      title: 'Diseño & Medidas a Pedido',
      description: 'Adaptamos cualquier pieza de nuestro catálogo informativo a la arquitectura de su espacio en Quito y todo el territorio ecuatoriano.'
    },
    {
      icon: Lock,
      title: 'Sello de Marca & Garantía',
      description: 'Diseños originales respaldados por la firma Maderas Melgar (melgarmaderas.com.ec), protegiendo la autenticidad frente a copias e imitaciones.'
    }
  ];

  return (
    <section 
      id="calidad" 
      style={{ 
        padding: '90px 0', 
        backgroundColor: 'var(--color-surface-white)',
        borderTop: '1px solid var(--glass-border)',
        borderBottom: '1px solid var(--glass-border)'
      }}
    >
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-tag">
            <span>¿Por qué elegir Maderas Melgar?</span>
          </div>
          <h2 className="section-title">El Estándar de la Madera Maciza</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Cada mueble es una inversión duradera. Combinamos la técnica tradicional de carpintería fina con la más alta tecnología en recubrimientos amaderados.
          </p>
        </div>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {pillars.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                style={{
                  backgroundColor: 'var(--color-cream-bg)',
                  padding: '2.25rem 1.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--glass-border)',
                  transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div 
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-green-light)',
                    color: 'var(--color-green-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}
                >
                  <IconComponent size={26} />
                </div>

                <h3 
                  style={{ 
                    fontSize: '1.25rem', 
                    marginBottom: '0.75rem',
                    color: 'var(--color-wood-dark)' 
                  }}
                >
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
