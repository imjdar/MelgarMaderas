'use client';

import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { Product } from '@/types';
import { WatermarkImage } from './WatermarkImage';
import { Search, LayoutGrid, List, MessageCircle, Eye, Sparkles } from 'lucide-react';
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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'todos' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.material.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleConsultProduct = (product: Product) => {
    const text = `Hola Maderas Melgar (melgarmaderas.com.ec). Deseo solicitar una cotización personalizada para el modelo: *${product.name}* (${product.material}).`;
    window.open(buildWhatsAppUrl(whatsappNumber, text), '_blank');
  };

  return (
    <section id="catalogo" style={{ backgroundColor: '#16191D', color: '#F4EFE6', padding: '5rem 0' }}>
      <div className="container-custom">
        
        {/* Encabezado */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ color: '#D4AF37', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Sparkles size={14} /> MUESTRARIO DE DISEÑO
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: "'Outfit', sans-serif", fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
              Colecciones Contemporáneas
            </h2>
          </div>

          {/* Selector de Vista Grilla / Lista */}
          <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: '#22262C', padding: '0.35rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <button
              onClick={() => setViewMode('grid')}
              aria-label="Vista en Grilla"
              style={{
                padding: '0.5rem 0.75rem',
                borderRadius: '6px',
                backgroundColor: viewMode === 'grid' ? '#D4AF37' : 'transparent',
                color: viewMode === 'grid' ? '#101316' : '#9CA3AF',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <LayoutGrid size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              aria-label="Vista en Lista"
              style={{
                padding: '0.5rem 0.75rem',
                borderRadius: '6px',
                backgroundColor: viewMode === 'list' ? '#D4AF37' : 'transparent',
                color: viewMode === 'list' ? '#101316' : '#9CA3AF',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Barra de Búsqueda Instantánea & Categorías */}
        <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ position: 'relative', maxWidth: '600px' }}>
            <Search size={18} color="#9CA3AF" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Buscar por mueble, madera (Seike, Roble) o ambiente..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Buscar mueble por nombre, material o ambiente"
              style={{
                width: '100%',
                padding: '0.85rem 1rem 0.85rem 2.75rem',
                backgroundColor: '#22262C',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px',
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
                    padding: '0.6rem 1.25rem',
                    borderRadius: '9999px',
                    backgroundColor: isSelected ? '#D4AF37' : '#22262C',
                    color: isSelected ? '#101316' : '#9CA3AF',
                    border: isSelected ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.08)',
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

        {/* Grilla / Lista de Productos Protegidos */}
        <div style={viewMode === 'grid' ? {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
          gap: '2rem'
        } : {
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: '#1C2026',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                flexDirection: viewMode === 'list' ? 'row' : 'column',
                flexWrap: 'wrap'
              }}
            >
              {/* Imagen con Marca de Agua Protegida */}
              <div style={{
                position: 'relative',
                minWidth: viewMode === 'list' ? '280px' : '100%',
                height: '240px',
                backgroundColor: '#101316'
              }}>
                <WatermarkImage
                  src={product.image}
                  alt={`${product.name} - Maderas Melgar`}
                  width={600}
                  height={400}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Información */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, flexBasis: '280px' }}>
                <span style={{ fontSize: '0.75rem', color: '#D4AF37', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  {product.categoryLabel}
                </span>

                <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', margin: '0 0 0.5rem 0', fontWeight: 700 }}>
                  {product.name}
                </h3>

                <p style={{ fontSize: '0.85rem', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '1.25rem', flexGrow: 1 }}>
                  {product.shortDesc}
                </p>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button
                    onClick={() => onSelectProduct(product)}
                    style={{
                      flex: 1,
                      padding: '0.75rem',
                      borderRadius: '8px',
                      backgroundColor: '#262B32',
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
                      padding: '0.75rem',
                      borderRadius: '8px',
                      backgroundColor: '#D4AF37',
                      color: '#0F1215',
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
          ))}
        </div>

      </div>
    </section>
  );
};
