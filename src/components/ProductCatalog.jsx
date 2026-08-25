import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES, getWhatsAppQuoteUrl } from '../data/products';
import { WatermarkImage } from './WatermarkImage';
import { MessageCircle, Eye, Shield, Sparkles } from 'lucide-react';

export const ProductCatalog = ({ whatsappNumber, onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const filteredProducts = activeCategory === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section 
      id="catalogo" 
      style={{ 
        padding: '100px 0',
        backgroundColor: 'var(--color-cream-bg)'
      }}
    >
      <div className="container">
        
        {/* Header Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Mobiliario Informativo de Alta Gama</span>
          </div>

          <h2 className="section-title">Nuestros Productos</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Explore nuestra colección clasificada por ambientes. Cada modelo sirve como referencia visual para su proyecto de amoblado a medida en Ecuador.
          </p>
        </div>

        {/* Category Tabs */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: '0.75rem', 
            marginBottom: '3rem' 
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  transition: 'all var(--transition-fast)',
                  backgroundColor: isActive ? 'var(--color-wood-dark)' : 'var(--color-surface-white)',
                  color: isActive ? '#FFFFFF' : 'var(--color-wood-dark)',
                  border: isActive ? '1.5px solid var(--color-wood-dark)' : '1.5px solid rgba(110, 59, 32, 0.2)',
                  boxShadow: isActive ? 'var(--shadow-md)' : 'none'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '2.5rem' 
          }}
        >
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="catalog-card"
              style={{
                backgroundColor: 'var(--color-surface-white)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              {/* Protected Image Area */}
              <div style={{ position: 'relative' }}>
                <WatermarkImage
                  src={product.image}
                  alt={product.name}
                  aspectRatio="4/3"
                  watermarkText="melgarmaderas.com.ec"
                  onShieldClick={() => onSelectProduct(product)}
                />

                {/* Category Badge */}
                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    zIndex: 15,
                    backgroundColor: 'rgba(26, 23, 21, 0.85)',
                    color: '#FFFFFF',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  {product.categoryLabel}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                
                <h3 
                  style={{ 
                    fontSize: '1.25rem', 
                    color: 'var(--color-wood-dark)',
                    marginBottom: '0.5rem',
                    lineHeight: '1.3'
                  }}
                >
                  {product.name}
                </h3>

                <p 
                  style={{ 
                    fontSize: '0.9rem', 
                    color: 'var(--color-text-muted)', 
                    marginBottom: '1.25rem',
                    flexGrow: 1 
                  }}
                >
                  {product.shortDesc}
                </p>

                {/* Material Tag */}
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.4rem', 
                    fontSize: '0.8rem', 
                    color: 'var(--color-green-primary)',
                    fontWeight: '600',
                    marginBottom: '1.5rem',
                    backgroundColor: 'var(--color-green-light)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  <Shield size={14} />
                  <span>{product.material}</span>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="btn-outline"
                    style={{ padding: '0.6rem 0.5rem', fontSize: '0.85rem' }}
                  >
                    <Eye size={16} />
                    <span>Ver Detalle</span>
                  </button>

                  <a
                    href={getWhatsAppQuoteUrl(whatsappNumber, product.name, product.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: '0.6rem 0.5rem', fontSize: '0.85rem' }}
                  >
                    <MessageCircle size={16} />
                    <span>Cotizar</span>
                  </a>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
