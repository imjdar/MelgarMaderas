'use client';

import React, { useEffect } from 'react';
import { X, MessageCircle, ShieldCheck, CheckCircle2, Ruler } from 'lucide-react';
import { WatermarkImage } from './WatermarkImage';
import { buildWhatsAppUrl } from '@/services/whatsappService';
import { Product } from '@/types';

interface ProductModalProps {
  product: Product | null;
  whatsappNumber?: string;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, whatsappNumber, onClose }) => {
  if (!product) return null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(22, 19, 18, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.25s ease forwards'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'var(--color-surface-white)',
          borderRadius: 'var(--radius-lg)',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-xl)',
          position: 'relative',
          border: '1px solid var(--glass-border)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 30,
            backgroundColor: 'var(--color-cream-surface)',
            color: 'var(--color-wood-dark)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all var(--transition-fast)'
          }}
          aria-label="Cerrar modal de producto"
        >
          <X size={22} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))' }}>
          
          <div style={{ position: 'relative', backgroundColor: '#1A1715' }}>
            <WatermarkImage
              src={product.image}
              alt={product.name}
              aspectRatio="1/1"
              watermarkText="melgarmaderas.com.ec"
            />
            
            <div 
              style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                zIndex: 15,
                background: 'rgba(13, 104, 56, 0.9)', 
                color: '#FFFFFF', 
                fontSize: '0.75rem', 
                padding: '0.5rem 1rem',
                textAlign: 'center',
                fontWeight: '600'
              }}
            >
              Imágenes con sello de agua oficial • melgarmaderas.com.ec
            </div>
          </div>

          <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem) 2rem', display: 'flex', flexDirection: 'column' }}>
            
            <div className="section-tag" style={{ alignSelf: 'flex-start' }}>
              <span>{product.categoryLabel}</span>
            </div>

            <h2 id="product-modal-title" style={{ fontSize: '1.75rem', color: 'var(--color-wood-dark)', marginBottom: '0.75rem' }}>
              {product.name}
            </h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              {product.fullDesc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--color-wood-dark)', fontWeight: '600' }}>
                <ShieldCheck size={18} color="#0D6838" />
                <span>Material: {product.material}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--color-wood-dark)', fontWeight: '600' }}>
                <Ruler size={18} color="#0D6838" />
                <span>Medidas Estándar: {product.dimensions}</span>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--color-wood-dark)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Especificaciones de Fábrica
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {product.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    <CheckCircle2 size={16} color="#0D6838" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
              <a
                href={buildWhatsAppUrl(whatsappNumber, product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                <MessageCircle size={20} />
                <span>Cotizar este producto por WhatsApp</span>
              </a>
              <span style={{ display: 'block', textAlign: 'center', fontSize: '0.78rem', color: 'var(--color-text-light)', marginTop: '0.5rem' }}>
                Fabricación personalizada según sus medidas y acabados requeridos.
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
