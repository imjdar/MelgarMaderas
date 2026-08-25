'use client';

import React, { useState, useMemo } from 'react';
import { Search, Grid, List, Plus, Check, Eye, MessageCircle, Sparkles } from 'lucide-react';
import { Product } from '@/types';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { WatermarkImage } from './WatermarkImage';
import { buildWhatsAppUrl } from '@/services/whatsappService';

interface ModernProductCatalogProps {
  whatsappNumber: string;
  onSelectProduct: (product: Product) => void;
  cart: Product[];
  onAddToCart: (product: Product) => void;
}

export const ModernProductCatalog: React.FC<ModernProductCatalogProps> = ({
  whatsappNumber,
  onSelectProduct,
  cart,
  onAddToCart
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === 'todos' || product.category === activeCategory;
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.material.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const isInCart = (productId: string) => cart.some(p => p.id === productId);

  return (
    <section id="catalogo" style={{ padding: '5rem 0', backgroundColor: '#171A1D', color: '#ffffff' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(212, 175, 55, 0.15)',
            color: '#D4AF37',
            padding: '0.35rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            border: '1px solid rgba(212, 175, 55, 0.3)'
          }}>
            <Sparkles size={14} /> Catálogo Interactivo & Protegido
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#ffffff', fontWeight: 800, marginBottom: '1rem' }}>
            Colección Maderas Melgar
          </h2>
          <p style={{ color: '#9CA3AF', maxWidth: '680px', margin: '0 auto', fontSize: '1.1rem' }}>
            Explore nuestras líneas en madera maciza 100%. Utilice el buscador instantáneo o añada productos 
            a su lista para generar una cotización agrupada por WhatsApp.
          </p>
        </div>

        {/* Barra de Filtros, Buscador y Conmutador de Vista */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.03)',
          padding: '1.25rem 1.5rem',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(16px)',
          marginBottom: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          
          {/* Buscador Instantáneo */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{
              flexGrow: 1,
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Search size={18} color="#9CA3AF" style={{ position: 'absolute', left: '1rem' }} />
              <input 
                type="text"
                placeholder="Buscar mueble por nombre, material (Seike, Roble) o ambiente..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Buscar mueble por nombre, material o ambiente"
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.8rem',
                  borderRadius: '12px',
                  backgroundColor: '#22262B',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Alternador Dual Grid / List */}
            <div style={{ display: 'flex', backgroundColor: '#22262B', borderRadius: '12px', padding: '0.25rem', border: '1px solid rgba(255,255,255,0.1)' }}>
              <button
                onClick={() => setViewMode('grid')}
                aria-label="Vista en Grilla"
                style={{
                  padding: '0.6rem 0.85rem',
                  borderRadius: '8px',
                  backgroundColor: viewMode === 'grid' ? '#10B981' : 'transparent',
                  color: viewMode === 'grid' ? '#ffffff' : '#9CA3AF',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}
              >
                <Grid size={16} /> Grilla
              </button>
              <button
                onClick={() => setViewMode('list')}
                aria-label="Vista en Lista"
                style={{
                  padding: '0.6rem 0.85rem',
                  borderRadius: '8px',
                  backgroundColor: viewMode === 'list' ? '#10B981' : 'transparent',
                  color: viewMode === 'list' ? '#ffffff' : '#9CA3AF',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}
              >
                <List size={16} /> Lista
              </button>
            </div>
          </div>

          {/* Categorías Pill Bar */}
          <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.25rem', WebkitOverflowScrolling: 'touch' }}>
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              const count = cat.id === 'todos' 
                ? PRODUCTS.length 
                : PRODUCTS.filter(p => p.category === cat.id).length;
              
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-label={`Filtrar por ${cat.label}`}
                  style={{
                    padding: '0.6rem 1.25rem',
                    borderRadius: '9999px',
                    backgroundColor: isSelected ? '#10B981' : 'rgba(255,255,255,0.04)',
                    color: isSelected ? '#ffffff' : '#9CA3AF',
                    border: isSelected ? '1px solid #10B981' : '1px solid rgba(255,255,255,0.08)',
                    fontWeight: isSelected ? 700 : 500,
                    fontSize: '0.85rem',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{cat.label}</span>
                  <span style={{
                    backgroundColor: isSelected ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)',
                    padding: '0.1rem 0.45rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem'
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Grilla / Lista de Productos */}
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: '#9CA3AF' }}>
            <p style={{ fontSize: '1.2rem' }}>No se encontraron muebles que coincidan con su búsqueda.</p>
          </div>
        ) : (
          <div style={viewMode === 'grid' ? {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '2rem'
          } : {
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}>
            {filteredProducts.map((product) => {
              const inCart = isInCart(product.id);
              return (
                <div 
                  key={product.id}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: viewMode === 'list' ? 'row' : 'column',
                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Imagen Protegida */}
                  <div style={viewMode === 'list' ? { width: '220px', flexShrink: 0 } : { width: '100%' }}>
                    <WatermarkImage 
                      src={product.image}
                      alt={product.name}
                      aspectRatio={viewMode === 'list' ? '1/1' : '4/3'}
                      watermarkText="melgarmaderas.com.ec"
                    />
                  </div>

                  {/* Información del Producto */}
                  <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#10B981', fontWeight: 700, letterSpacing: '0.05em' }}>
                      {product.categoryLabel}
                    </span>
                    <h3 style={{ fontSize: '1.2rem', color: '#ffffff', margin: '0.3rem 0 0.6rem 0', fontWeight: 700 }}>
                      {product.name}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#9CA3AF', lineHeight: '1.5', flexGrow: 1, marginBottom: '1rem' }}>
                      {product.shortDesc}
                    </p>

                    <div style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600, marginBottom: '1.25rem' }}>
                      ✨ {product.material}
                    </div>

                    {/* Botones de Acción */}
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <button
                        onClick={() => onSelectProduct(product)}
                        style={{
                          flexGrow: 1,
                          padding: '0.65rem 1rem',
                          borderRadius: '10px',
                          backgroundColor: 'rgba(255,255,255,0.08)',
                          color: '#ffffff',
                          border: '1px solid rgba(255,255,255,0.15)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.4rem'
                        }}
                      >
                        <Eye size={16} /> Ver Detalles
                      </button>

                      <button
                        onClick={() => onAddToCart(product)}
                        style={{
                          padding: '0.65rem 1rem',
                          borderRadius: '10px',
                          backgroundColor: inCart ? 'rgba(16,185,129,0.2)' : '#10B981',
                          color: inCart ? '#10B981' : '#ffffff',
                          border: inCart ? '1px solid #10B981' : 'none',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem'
                        }}
                      >
                        {inCart ? (
                          <>
                            <Check size={16} /> En Cotización
                          </>
                        ) : (
                          <>
                            <Plus size={16} /> Cotizar Mueble
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
