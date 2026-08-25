'use client';

import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { Product } from '@/types';
import { WatermarkImage } from './WatermarkImage';
import { MessageCircle, Eye, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '@/services/whatsappService';

interface InformationalCatalogProps {
  whatsappNumber: string;
  onSelectProduct: (product: Product) => void;
}

export const InformationalCatalog: React.FC<InformationalCatalogProps> = ({
  whatsappNumber,
  onSelectProduct
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredProducts = activeCategory === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleConsultProduct = (product: Product) => {
    const text = `Hola Maderas Melgar (melgarmaderas.com.ec). Me interesa solicitar una cotización personalizada para el producto: *${product.name}* (Material: ${product.material}). ¿Podrían brindarme información y disponibilidad?`;
    window.open(buildWhatsAppUrl(whatsappNumber, text), '_blank');
  };

  return (
    <section id="catalogo" style={{ backgroundColor: '#FAF8F5', padding: '4.5rem 0 5rem 0' }}>
      <div className="container-custom">
        
        {/* Encabezado Editorial */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            <span>Catálogo Informativo & Muestrario de Ebanistería</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#3A1A0E', marginBottom: '1rem', fontFamily: "'Playfair Display', Georgia, serif" }}>
            Colecciones en Madera Maciza
          </h2>
          <p style={{ color: '#595148', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Explore nuestros diseños exclusivos para hogar y oficinas ejecutivas. Cada modelo es fabricado a medida en Quito con maderas nobles seleccionadas.
          </p>
        </div>

        {/* Píldoras de Categorías */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  backgroundColor: isSelected ? '#3A1A0E' : '#ffffff',
                  color: isSelected ? '#FAF8F5' : '#595148',
                  border: isSelected ? '1px solid #3A1A0E' : '1px solid #E5DCCB',
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 4px 12px rgba(58, 26, 14, 0.15)' : 'none'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grilla de Tarjetas Informativas con Fotografía Protegida */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: '2.5rem'
        }}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #E5DCCB',
                boxShadow: '0 4px 20px rgba(58, 26, 14, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease'
              }}
            >
              {/* Contenedor de Imagen con Marca de Agua Protegida */}
              <div style={{ position: 'relative', minHeight: '260px', backgroundColor: '#1A0C06' }}>
                <WatermarkImage
                  src={product.image}
                  alt={`${product.name} - Maderas Melgar Quito`}
                  width={600}
                  height={400}
                  style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                />
                
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(58, 26, 14, 0.85)',
                  color: '#C59B27',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  backdropFilter: 'blur(4px)',
                  letterSpacing: '0.05em'
                }}>
                  {product.categoryLabel}
                </span>
              </div>

              {/* Contenido Informativo */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                
                <h3 style={{
                  fontSize: '1.25rem',
                  color: '#3A1A0E',
                  marginBottom: '0.5rem',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700
                }}>
                  {product.name}
                </h3>

                <p style={{
                  fontSize: '0.85rem',
                  color: '#595148',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem',
                  flexGrow: 1
                }}>
                  {product.shortDesc}
                </p>

                {/* Etiquetas de Especificación Técnica */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.75rem',
                  color: '#8E847A',
                  padding: '0.75rem 0',
                  borderTop: '1px solid #F0EAEE',
                  borderBottom: '1px solid #F0EAEE',
                  marginBottom: '1.25rem'
                }}>
                  <Sparkles size={14} color="#C59B27" />
                  <span>Madera: <strong>{product.material}</strong></span>
                  <span style={{ margin: '0 0.25rem' }}>•</span>
                  <span>Secado: <strong>8-10% Horno</strong></span>
                </div>

                {/* Botones de Acción Informativa */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <button
                    onClick={() => onSelectProduct(product)}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '8px',
                      backgroundColor: '#FAF8F5',
                      color: '#3A1A0E',
                      border: '1px solid #E5DCCB',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <Eye size={14} /> Ficha Técnica
                  </button>

                  <button
                    onClick={() => handleConsultProduct(product)}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '8px',
                      backgroundColor: '#0D6838',
                      color: '#ffffff',
                      border: '1px solid #0D6838',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <MessageCircle size={14} /> Cotizar
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
