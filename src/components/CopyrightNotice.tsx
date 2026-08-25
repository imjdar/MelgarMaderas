'use client';

import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const CopyrightNotice: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#14100E', color: '#FAF8F5', padding: '3.5rem 0', borderTop: '1px solid rgba(197, 155, 39, 0.2)' }}>
      <div className="container-custom">
        <div style={{
          backgroundColor: '#1E1815',
          border: '1px solid rgba(197, 155, 39, 0.3)',
          borderRadius: '16px',
          padding: '2rem 2.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ShieldCheck size={24} color="#C59B27" />
            <h3 style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Protección de Propiedad Intelectual & Exclusividad de Diseños
            </h3>
          </div>

          <p style={{ fontSize: '0.9rem', color: '#B8AEA3', lineHeight: 1.6, margin: 0 }}>
            Todos los modelos, fotografías, especificaciones técnicas y material audiovisual expuestos en este catálogo informativo son propiedad intelectual registrada de 
            <strong> Maderas Melgar (melgarmaderas.com.ec)</strong>. La reproducción total o parcial de los modelos, así como la utilización no autorizada de imágenes por terceros o competidores para fines de reventa o publicidad engañosa, se encuentra estrictamente prohibida y protegida bajo las leyes de propiedad intelectual de la República del Ecuador.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ fontSize: '0.8rem', color: '#C59B27', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Lock size={14} /> Marca Registrada melgarmaderas.com.ec
            </span>
            <span style={{ fontSize: '0.8rem', color: '#8E847A' }}>
              • Quito, Guayaquil, Cuenca — Ecuador
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
