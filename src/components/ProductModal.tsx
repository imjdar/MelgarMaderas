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
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
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
          backgroundColor: '#14181D',
          color: '#FAF8F5',
          borderRadius: '20px',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
          position: 'relative',
          border: '1px solid rgba(245, 158, 11, 0.3)'
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
            backgroundColor: '#0B0D0E',
            color: '#FFFFFF',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.15)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          aria-label="Cerrar modal"
        >
          <X size={22} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          
          <div style={{ position: 'relative', backgroundColor: '#0B0D0E', minHeight: '340px' }}>
            <WatermarkImage
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              aspectRatio="1/1"
              watermarkText="melgarmaderas.com.ec"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            
            <div 
              style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                zIndex: 15,
                background: 'rgba(11, 13, 14, 0.95)', 
                color: '#F59E0B', 
                fontSize: '0.75rem', 
                padding: '0.5rem 1rem',
                textAlign: 'center',
                fontWeight: 700,
                borderTop: '1px solid rgba(245, 158, 11, 0.3)'
              }}
            >
              Imágenes con sello de agua oficial • melgarmaderas.com.ec
            </div>
          </div>

          <div style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column' }}>
            
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'rgba(245, 158, 11, 0.12)',
              color: '#F59E0B',
              padding: '0.3rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              alignSelf: 'flex-start',
              marginBottom: '0.75rem'
            }}>
              <span>{product.categoryLabel}</span>
            </div>

            <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '0.75rem', fontWeight: 800, fontFamily: "'Outfit', sans-serif" }}>
              {product.name}
            </h2>

            <p style={{ fontSize: '0.95rem', color: '#9CA3AF', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              {product.fullDesc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem', backgroundColor: '#0B0D0E', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#FFFFFF', fontWeight: 600 }}>
                <ShieldCheck size={18} color="#F59E0B" />
                <span>Material: <strong style={{ color: '#F59E0B' }}>{product.material}</strong></span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#FFFFFF', fontWeight: 600 }}>
                <Ruler size={18} color="#F59E0B" />
                <span>Medidas Estándar: <strong>{product.dimensions}</strong></span>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.8rem', color: '#D1D5DB', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800 }}>
                Especificaciones de Fábrica
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {product.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#9CA3AF' }}>
                    <CheckCircle2 size={16} color="#F59E0B" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
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
                style={{
                  width: '100%',
                  padding: '0.9rem',
                  borderRadius: '12px',
                  backgroundColor: '#F59E0B',
                  color: '#0B0D0E',
                  fontWeight: 900,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                <MessageCircle size={20} />
                <span>Cotizar Mueble por WhatsApp</span>
              </a>
              <span style={{ display: 'block', textAlign: 'center', fontSize: '0.78rem', color: '#6B7280', marginTop: '0.5rem' }}>
                Fabricación personalizada según sus medidas y acabados requeridos.
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
