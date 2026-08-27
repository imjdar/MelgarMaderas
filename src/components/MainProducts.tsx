'use client';

import React, { useState } from 'react';
import { WatermarkImage } from './WatermarkImage';
import { APP_CONFIG } from '@/services/configService';

type Category = 'habitaciones' | 'sala' | 'comedor' | 'cocina';

export function MainProducts() {
  const [activeTab, setActiveTab] = useState<Category>('habitaciones');

  const categories = {
    habitaciones: {
      title: 'Habitaciones',
      subtitle: 'Camas • Veladores • Closets • Tocadores',
      desc: 'Diseñamos dormitorios que invitan al descanso. Nuestras camas de madera maciza garantizan estabilidad y durabilidad, complementadas con veladores y armarios a medida.',
      image: '/assets/products/cama-king.jpg'
    },
    sala: {
      title: 'Sala de Estar',
      subtitle: 'Sofás • Mesas de centro • Bibliotecas',
      desc: 'El corazón de tu hogar merece lo mejor. Juegos de sala robustos, tapizados con telas premium y mesas de centro que destacan por las vetas naturales de la madera.',
      image: '/assets/products/sala-linea-premium.jpg'
    },
    comedor: {
      title: 'Comedor',
      subtitle: 'Mesas • Sillas',
      desc: 'Mesas imperiales y sillas ergonómicas construidas para resistir el uso diario. Fabricamos comedores de 4 a 12 puestos según tus necesidades de espacio.',
      image: '/assets/products/seike-table.jpg'
    },
    cocina: {
      title: 'Cocina',
      subtitle: 'Muebles de cocina • Almacenamiento',
      desc: 'Mobiliario integral para cocinas. Combinamos la calidez de la madera con diseños modernos para optimizar el almacenamiento y la funcionalidad.',
      image: '/assets/products/cocina-integral.jpg'
    }
  };

  const handleQuote = (categoryTitle: string) => {
    const text = `Hola Maderas Melgar. Me interesa cotizar muebles para la categoría: ${categoryTitle}.`;
    window.open(`https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const currentCategory = categories[activeTab];

  return (
    <section id="productos" style={{ padding: '6rem 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag">Catálogo</span>
          <h2 className="section-title">
            Nuestros <span className="font-script">Productos</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Explora nuestras líneas de diseño. Todo es personalizable.
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          {(Object.keys(categories) as Category[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                padding: '0.75rem 2rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                backgroundColor: activeTab === key ? 'var(--color-wood-dark)' : 'transparent',
                color: activeTab === key ? '#fff' : 'var(--color-text-muted)',
                border: activeTab === key ? '1px solid var(--color-wood-dark)' : '1px solid rgba(0,0,0,0.1)'
              }}
            >
              {categories[key].title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          animation: 'fadeIn 0.5s ease-in-out'
        }}>
          {/* Imagen Referencial */}
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <WatermarkImage
              key={activeTab} // Forzar re-render para animación
              src={currentCategory.image}
              alt={currentCategory.title}
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '4/3' }}
              showProtectionBadge={true}
            />
          </div>

          {/* Detalles */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.5rem',
              color: 'var(--color-wood-dark)',
              marginBottom: '0.5rem'
            }}>
              {currentCategory.title}
            </h3>
            <p style={{
              fontSize: '1rem',
              color: 'var(--color-gold-accent)',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              {currentCategory.subtitle}
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.7,
              marginBottom: '2.5rem'
            }}>
              {currentCategory.desc}
            </p>

            <button 
              onClick={() => handleQuote(currentCategory.title)}
              className="btn-primary"
            >
              Cotizar por WhatsApp
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
