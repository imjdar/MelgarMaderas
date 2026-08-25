'use client';

import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { Product } from '@/types';
import { WatermarkImage } from './WatermarkImage';
import { Search, LayoutGrid, List, MessageCircle, Eye, Sparkles, Layers } from 'lucide-react';
import { buildWhatsAppUrl } from '@/services/whatsappService';

interface ModernProductCatalogProps {
  whatsappNumber: string;
  onSelectProduct: (product: Product) => void;
}

export const ModernProductCatalog: React.FC<ModernProductCatalogProps> = ({
  whatsappNumber,
  onSelectProduct
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'bento' | 'grid'>('bento');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'todos' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.material.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleConsultProduct = (product: Product) => {
    const text = `Hola Maderas Melgar (melgarmaderas.com.ec). Me interesa solicitar información y cotización para el modelo arquitectónico: *${product.name}* (Madera: ${product.material}).`;
    window.open(buildWhatsAppUrl(whatsappNumber, text), '_blank');
  };

  return (
    <section id="catalogo" style={{ backgroundColor: '#0B0D0E', color: '#F4EFE6', padding: '5rem 0' }}>
      <div className="container-custom">
        
        {/* Encabezado Bento */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ color: '#F59E0B', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Layers size={14} /> MUESTRARIO BENTO ARQUITECTÓNICO
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontFamily: "'Outfit', sans-serif", fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
              Colecciones Contemporáneas
            </h2>
          </div>

          {/* Selector Bento vs Grilla Estándar */}
          <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: '#14181D', padding: '0.35rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <button
              onClick={() => setViewMode('bento')}
              aria-label="Vista Bento Arquitectónica"
              style={{
                padding: '0.55rem 1rem',
                borderRadius: '8px',
                backgroundColor: viewMode === 'bento' ? '#F59E0B' : 'transparent',
                color: viewMode === 'bento' ? '#0B0D0E' : '#9CA3AF',
                border: 'none',
                fontWeight: 800,
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <LayoutGrid size={16} /> Bento Layout
            </button>
            <button
              onClick={() => setViewMode('grid')}
              aria-label="Vista en Lista"
              style={{
                padding: '0.55rem 1rem',
                borderRadius: '8px',
                backgroundColor: viewMode === 'grid' ? '#F59E0B' : 'transparent',
                color: viewMode === 'grid' ? '#0B0D0E' : '#9CA3AF',
                border: 'none',
                fontWeight: 800,
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <List size={16} /> Rejilla Uniforme
            </button>
          </div>
        </div>

        {/* Buscador & Píldoras de Filtro */}
        <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ position: 'relative', maxWidth: '600px' }}>
            <Search size={18} color="#9CA3AF" style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Filtrar por nombre de mueble, madera (Seike, Roble) o espacio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Buscar mueble por nombre o material"
              style={{
                width: '100%',
                padding: '0.9rem 1rem 0.9rem 3rem',
                backgroundColor: '#14181D',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '14px',
                color: '#FFFFFF',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Categorías */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem', WebkitOverflowScrolling: 'touch' }}>
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-label={`Filtrar por ${cat.label}`}
                  style={{
                    padding: '0.65rem 1.35rem',
                    borderRadius: '9999px',
                    backgroundColor: isSelected ? '#F59E0B' : '#14181D',
                    color: isSelected ? '#0B0D0E' : '#9CA3AF',
                    border: isSelected ? '1px solid #F59E0B' : '1px solid rgba(255,255,255,0.08)',
                    fontWeight: isSelected ? 800 : 500,
                    fontSize: '0.85rem',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Grilla Bento / Rejilla Uniforme */}
        <div style={viewMode === 'bento' ? {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '2rem'
        } : {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
          gap: '1.5rem'
        }}>
          {filteredProducts.map((product, index) => {
            const isFeatured = viewMode === 'bento' && (index === 0 || index === 3);

            return (
              <div
                key={product.id}
                style={{
                  gridColumn: isFeatured ? 'span 2' : 'span 1',
                  backgroundColor: '#14181D',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: isFeatured ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  flexDirection: isFeatured ? 'row' : 'column',
                  flexWrap: 'wrap',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  transition: 'transform 0.25s ease'
                }}
              >
                {/* Imagen Protegida con Marca de Agua */}
                <div style={{
                  position: 'relative',
                  flex: isFeatured ? '1 1 360px' : '1 1 240px',
                  minHeight: '260px',
                  backgroundColor: '#0B0D0E'
                }}>
                  <WatermarkImage
                    src={product.image}
                    alt={`${product.name} - Maderas Melgar`}
                    width={800}
                    height={600}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  
                  {isFeatured && (
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      backgroundColor: '#F59E0B',
                      color: '#0B0D0E',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      zIndex: 12
                    }}>
                      PIEZA EMBLEMÁTICA
                    </span>
                  )}
                </div>

                {/* Ficha Informativa */}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: '1 1 280px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#F59E0B', fontWeight: 800, textTransform: 'uppercase' }}>
                      {product.categoryLabel}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>
                      Madera: <strong>{product.material}</strong>
                    </span>
                  </div>

                  <h3 style={{ fontSize: isFeatured ? '1.5rem' : '1.25rem', color: '#FFFFFF', margin: '0 0 0.5rem 0', fontWeight: 800, fontFamily: "'Outfit', sans-serif" }}>
                    {product.name}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                    {product.shortDesc}
                  </p>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button
                      onClick={() => onSelectProduct(product)}
                      style={{
                        flex: 1,
                        padding: '0.8rem',
                        borderRadius: '10px',
                        backgroundColor: '#1E242C',
                        color: '#FFFFFF',
                        border: '1px solid rgba(255,255,255,0.1)',
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
                        flex: 1,
                        padding: '0.8rem',
                        borderRadius: '10px',
                        backgroundColor: '#F59E0B',
                        color: '#0B0D0E',
                        border: 'none',
                        fontSize: '0.8rem',
                        fontWeight: 800,
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
            );
          })}
        </div>

      </div>
    </section>
  );
};
