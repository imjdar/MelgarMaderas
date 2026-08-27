'use client';

import React, { useState } from 'react';
import { ShoppingBag, Trash2, Send, X, Plus, Sparkles, CheckCircle } from 'lucide-react';
import { Product } from '@/types';
import { buildWhatsAppUrl } from '@/services/whatsappService';

interface MultiQuoteCartProps {
  cart: Product[];
  onRemoveFromCart: (productId: string) => void;
  onClearCart: () => void;
  whatsappNumber: string;
  isOpen: boolean;
  onClose: () => void;
}

export const MultiQuoteCart: React.FC<MultiQuoteCartProps> = ({
  cart,
  onRemoveFromCart,
  onClearCart,
  whatsappNumber,
  isOpen,
  onClose
}) => {
  const [selectedWood, setSelectedWood] = useState('Madera Maciza de Seike');
  const [customNote, setCustomNote] = useState('');

  const handleSendMultiQuote = () => {
    const productListText = cart.map((p, i) => `${i + 1}. *${p.name}* (${p.categoryLabel})`).join('\n');
    const msg = `Hola Maderas Melgar 👋, deseo solicitar una cotización agrupada para los siguientes *${cart.length} muebles*:\n\n${productListText}\n\nPreferencia de Madera: *${selectedWood}*\nNota adicional: ${customNote || 'Ninguna'}`;
    const url = buildWhatsAppUrl(whatsappNumber, 'Cotización Agrupada Multiproducto', msg);
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Drawer / Modal Desplegable del Cotizador */}
      {isOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="Lista de Cotización Multiproducto"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <div style={{
            width: '100%',
            maxWidth: '460px',
            backgroundColor: '#171A1D',
            color: '#F3F4F6',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '-10px 0 40px rgba(0,0,0,0.8)',
            animation: 'slideInRight 0.3s ease'
          }}>
            
            {/* Cabecera del Drawer */}
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <ShoppingBag size={20} color="#10B981" />
                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', margin: 0 }}>
                  Mi Cotización ({cart.length})
                </h3>
              </div>
              <button 
                onClick={onClose}
                style={{ color: '#9CA3AF', cursor: 'pointer', padding: '0.25rem' }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Lista de Productos Agregados */}
            <div style={{ flexGrow: 1, overflowY: 'auto', padding: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cart.map((product) => (
                  <div key={product.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    padding: '0.85rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }}
                    />
                    <div style={{ flexGrow: 1 }}>
                      <span style={{ fontSize: '0.7rem', color: '#10B981', fontWeight: 700, textTransform: 'uppercase' }}>
                        {product.categoryLabel}
                      </span>
                      <h4 style={{ fontSize: '0.9rem', color: '#ffffff', margin: '0.1rem 0' }}>
                        {product.name}
                      </h4>
                    </div>
                    <button
                      onClick={() => onRemoveFromCart(product.id)}
                      style={{ color: '#EF4444', cursor: 'pointer', padding: '0.4rem' }}
                      title="Eliminar de la cotización"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Opciones de Cotización */}
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', color: '#9CA3AF', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Preferencia de Madera Maciza:
                </label>
                <select 
                  value={selectedWood}
                  onChange={(e) => setSelectedWood(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    backgroundColor: '#22262B',
                    color: '#ffffff',
                    border: '1px solid rgba(255,255,255,0.15)',
                    marginBottom: '1.25rem',
                    fontSize: '0.9rem'
                  }}
                >
                  <option value="Madera Maciza de Seike">Madera Maciza de Seike (Recomendado)</option>
                  <option value="Madera Maciza de Roble Noble">Madera Maciza de Roble Noble</option>
                  <option value="Madera Maciza de Laurel">Madera Maciza de Laurel</option>
                </select>

                <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', color: '#9CA3AF', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Notas / Dimensiones Personalizadas:
                </label>
                <textarea 
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="Ej: Requiero la mesa de comedor en 2.20m para 8 puestos..."
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    backgroundColor: '#22262B',
                    color: '#ffffff',
                    border: '1px solid rgba(255,255,255,0.15)',
                    fontSize: '0.875rem',
                    resize: 'none'
                  }}
                />
              </div>

            </div>

            {/* Acciones del Drawer */}
            <div style={{
              padding: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: '#121619',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <button
                onClick={onClose}
                style={{
                  width: '100%',
                  padding: '0.9rem 1.5rem',
                  borderRadius: '9999px',
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  border: '1px solid rgba(255,255,255,0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textAlign: 'center'
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                Seguir Comprando
              </button>

              <button
                onClick={handleSendMultiQuote}
                style={{
                  width: '100%',
                  padding: '0.9rem 1.5rem',
                  borderRadius: '9999px',
                  backgroundColor: '#10B981',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 8px 20px rgba(16,185,129,0.3)'
                }}
              >
                <Send size={18} />
                Enviar Cotización Multiproducto a WhatsApp
              </button>

              <button
                onClick={onClearCart}
                style={{
                  backgroundColor: 'transparent',
                  color: '#9CA3AF',
                  border: 'none',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  padding: '0.4rem',
                  marginTop: '0.25rem'
                }}
              >
                Vaciar lista de cotización
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
