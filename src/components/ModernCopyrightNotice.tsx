'use client';

import React from 'react';
import { ShieldCheck, Lock, AlertTriangle } from 'lucide-react';

export const ModernCopyrightNotice: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#0B0D0E', padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-custom">
        <div style={{
          backgroundColor: '#14181D',
          borderRadius: '16px',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          padding: '2rem 2.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
        }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', maxWidth: '720px' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '12px',
              backgroundColor: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <ShieldCheck size={28} color="#F59E0B" />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#F59E0B', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  PROTECCIÓN INTELLECTUAL DE FOTOGRAFÍAS Y MODELOS
                </span>
                <Lock size={12} color="#F59E0B" />
              </div>
              
              <h3 style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 700, margin: '0 0 0.25rem 0' }}>
                Propiedad Exclusiva Maderas Melgar • melgarmaderas.com.ec
              </h3>
              
              <p style={{ fontSize: '0.85rem', color: '#9CA3AF', margin: 0, lineHeight: 1.5 }}>
                Todas las imágenes expuestas cuentan con sello de agua digital e incrustación de metadatos. Se prohíbe la descarga, reproducción o uso comercial no autorizado por terceros o competidores.
              </p>
            </div>
          </div>

          <div style={{
            backgroundColor: '#0B0D0E',
            padding: '0.75rem 1.25rem',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.08)',
            fontSize: '0.78rem',
            color: '#D1D5DB',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <AlertTriangle size={14} color="#F59E0B" />
            <span>Registro Oficial Quito, Ecuador</span>
          </div>

        </div>
      </div>
    </section>
  );
};
