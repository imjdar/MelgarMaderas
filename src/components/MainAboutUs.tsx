'use client';

import React from 'react';
import { WatermarkImage } from './WatermarkImage';

export function MainAboutUs() {
  return (
    <section id="quienes-somos" style={{ padding: '6rem 0', backgroundColor: 'var(--color-cream-bg)' }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '4rem',
        alignItems: 'center' 
      }}>
        
        {/* Texto: Historia y Valores */}
        <div style={{ maxWidth: '600px' }}>
          <span className="section-tag">Nuestra Historia</span>
          <h2 className="section-title">
            Tradición y <br /> <span className="font-script">Maestría Maderera</span>
          </h2>
          
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
            Con más de tres décadas de experiencia en el mercado ecuatoriano, <strong>Maderas Melgar</strong> se ha posicionado como un referente indiscutible en la fabricación de muebles de madera maciza.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
            Nuestra trayectoria se construye sobre la pasión por la artesanía, seleccionando las mejores maderas y aplicando técnicas de secado al horno que garantizan durabilidad de por vida. Cada pieza que sale de nuestro taller es un testimonio de nuestros valores: calidad inquebrantable, diseño atemporal y respeto por el noble oficio de la ebanistería.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--color-wood-dark)', marginBottom: '0.5rem' }}>Artesanía Pura</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>Tratamiento manual en cada curva y ensamble.</p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--color-wood-dark)', marginBottom: '0.5rem' }}>Legado</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>Muebles diseñados para pasar de generación en generación.</p>
            </div>
          </div>
        </div>

        {/* Imagen Referencial */}
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            inset: '-1rem -1rem 1rem 1rem',
            border: '2px solid var(--color-gold-accent)',
            zIndex: 0,
            borderRadius: '4px'
          }} />
          
          <div style={{ position: 'relative', zIndex: 1, borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
            <WatermarkImage
              src="/assets/products/comedor-artesanal.jpg"
              alt="Artesanía y detalle en Maderas Melgar"
              width={600}
              height={800}
              style={{ width: '100%', height: 'auto', objectFit: 'contain', backgroundColor: 'var(--color-dark-bg)' }}
              showProtectionBadge={true}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
