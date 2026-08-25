'use client';

import React, { useState } from 'react';
import { Eye, Sparkles, Layers, Sliders, MessageCircle, Check } from 'lucide-react';
import { buildWhatsAppUrl } from '@/services/whatsappService';
import { WatermarkImage } from './WatermarkImage';

interface EnvironmentOption {
  id: string;
  name: string;
  lighting: string;
  bgGradient: string;
  description: string;
}

const ENVIRONMENTS: EnvironmentOption[] = [
  {
    id: 'loft-moderno',
    name: 'Loft Contemporáneo',
    lighting: 'Luz Cálida Focalizada',
    bgGradient: 'linear-gradient(135deg, #1E232A 0%, #121619 100%)',
    description: 'Ambiente de altos techos con paredes texturizadas y luz indirecta que resalta las vetas profundas del mueble.'
  },
  {
    id: 'nordico-luminoso',
    name: 'Penthouse Marfil & Cristal',
    lighting: 'Luz Natural Abundante',
    bgGradient: 'linear-gradient(135deg, #2D333B 0%, #1F242B 100%)',
    description: 'Espacio diáfano donde los tonos dorados de la madera maciza de Seike generan un contraste acogedor.'
  },
  {
    id: 'suite-ejecutiva',
    name: 'Suite Obsidian & Bronce',
    lighting: 'Luz LED Integrada',
    bgGradient: 'linear-gradient(135deg, #171A1D 0%, #0B0D0F 100%)',
    description: 'Estética sofisticada de lujo sobrio, ideal para residencias exclusivas y despachos ejecutivos.'
  }
];

interface FurnitureSpec {
  id: string;
  name: string;
  category: string;
  image: string;
  suggestedWood: string;
  dimensions: string;
}

const FEATURED_FURNITURE: FurnitureSpec[] = [
  {
    id: 'sala-linea-premium',
    name: 'Juego de Sala Línea Premium Melgar',
    category: 'Sala de Estar',
    image: '/assets/products/sala-linea-premium.jpg',
    suggestedWood: 'Madera Maciza de Seike',
    dimensions: 'Sofá: 2.10m | Sillones: 0.85m'
  },
  {
    id: 'comedor-elegance',
    name: 'Juego de Comedor Elegance 6 Sillas',
    category: 'Comedor',
    image: '/assets/products/comedor-elegance.jpg',
    suggestedWood: 'Madera Maciza de Roble',
    dimensions: 'Mesa: 1.80m x 1.00m'
  },
  {
    id: 'cama-king-imperial',
    name: 'Dormitorio Cama King Imperial',
    category: 'Habitación',
    image: '/assets/products/cama-king-imperial.jpg',
    suggestedWood: 'Madera Maciza de Seike / Roble',
    dimensions: 'Colchón King (2.00m x 2.00m)'
  },
  {
    id: 'tocador-luxury',
    name: 'Tocador Luxury con Espejo',
    category: 'Habitación',
    image: '/assets/products/tocador-luxury.jpg',
    suggestedWood: 'Madera Maciza de Laurel',
    dimensions: 'Ancho: 1.30m | Alto: 1.75m'
  }
];

interface RoomSimulatorProps {
  whatsappNumber: string;
}

export const RoomSimulator: React.FC<RoomSimulatorProps> = ({ whatsappNumber }) => {
  const [activeEnv, setActiveEnv] = useState<EnvironmentOption>(ENVIRONMENTS[0]);
  const [activeFurniture, setActiveFurniture] = useState<FurnitureSpec>(FEATURED_FURNITURE[0]);

  const handleCotizarSimulacion = () => {
    const msg = `Me interesa cotizar el mueble *${activeFurniture.name}* configurado en el simulador en ambiente "*${activeEnv.name}*" con acabado en *${activeFurniture.suggestedWood}*.`;
    const url = buildWhatsAppUrl(whatsappNumber, activeFurniture.name, msg);
    window.open(url, '_blank');
  };

  return (
    <section 
      id="simulador" 
      style={{ 
        padding: '5rem 0', 
        backgroundColor: '#121619', 
        color: '#F3F4F6',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <div className="container">
        
        {/* Header de Sección */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(5, 150, 105, 0.15)', 
            color: '#10B981',
            padding: '0.35rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            border: '1px solid rgba(16, 185, 129, 0.3)'
          }}>
            <Eye size={14} /> Experiencia Interactiva
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#ffffff', fontWeight: 800, marginBottom: '1rem' }}>
            Simulador de Espacios en Vivo
          </h2>
          <p style={{ color: '#9CA3AF', maxWidth: '680px', margin: '0 auto', fontSize: '1.1rem' }}>
            Visualice la presencia de nuestro mobiliario de madera maciza 100% integrando diferentes iluminaciónes 
            y ambientes de arquitectura interior.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          
          {/* Lado Izquierdo: Visualizador Dinámico de la Habitación con Glassmorphism */}
          <div style={{
            background: activeEnv.bgGradient,
            borderRadius: '24px',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            position: 'relative',
            transition: 'background 0.5s ease'
          }}>
            {/* Header del Simulador */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#10B981', fontWeight: 700 }}>
                  {activeFurniture.category}
                </span>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', margin: 0 }}>
                  {activeFurniture.name}
                </h3>
              </div>

              <div style={{
                backgroundColor: 'rgba(212, 175, 55, 0.15)',
                color: '#D4AF37',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.35rem 0.75rem',
                borderRadius: '8px',
                border: '1px solid rgba(212, 175, 55, 0.3)'
              }}>
                {activeEnv.lighting}
              </div>
            </div>

            {/* Imagen Protegida Interactiva */}
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <WatermarkImage 
                src={activeFurniture.image}
                alt={activeFurniture.name}
                aspectRatio="16/10"
                watermarkText="melgarmaderas.com.ec • simulador"
              />
            </div>

            {/* Especificaciones Rápidas */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginTop: '1.5rem'
            }}>
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                padding: '0.85rem 1rem',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                <div style={{ fontSize: '0.7rem', color: '#9CA3AF', textTransform: 'uppercase' }}>Madera Recomendada</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#D4AF37', marginTop: '0.2rem' }}>
                  {activeFurniture.suggestedWood}
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                padding: '0.85rem 1rem',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                <div style={{ fontSize: '0.7rem', color: '#9CA3AF', textTransform: 'uppercase' }}>Dimensiones Estándar</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#ffffff', marginTop: '0.2rem' }}>
                  {activeFurniture.dimensions}
                </div>
              </div>
            </div>

          </div>

          {/* Lado Derecho: Panel de Control de Simulación */}
          <div>
            
            {/* 1. Selección de Mueble */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', color: '#9CA3AF', fontWeight: 700, marginBottom: '1rem' }}>
                1. Seleccione Pieza de Mobiliario:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {FEATURED_FURNITURE.map((item) => {
                  const isSelected = activeFurniture.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveFurniture(item)}
                      style={{
                        padding: '0.85rem',
                        borderRadius: '12px',
                        backgroundColor: isSelected ? 'rgba(5, 150, 105, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                        border: isSelected ? '1.5px solid #10B981' : '1px solid rgba(255, 255, 255, 0.08)',
                        color: isSelected ? '#ffffff' : '#D1D5DB',
                        textAlign: 'left',
                        fontSize: '0.85rem',
                        fontWeight: isSelected ? 700 : 500,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>{item.name.split(' ')[0]} {item.name.split(' ')[1]} {item.name.split(' ')[2]}</span>
                      {isSelected && <Check size={16} color="#10B981" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Selección de Estilo de Ambiente */}
            <div style={{ marginBottom: '2.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', color: '#9CA3AF', fontWeight: 700, marginBottom: '1rem' }}>
                2. Seleccione Estilo de Ambiente & Iluminación:
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {ENVIRONMENTS.map((env) => {
                  const isSelected = activeEnv.id === env.id;
                  return (
                    <div
                      key={env.id}
                      onClick={() => setActiveEnv(env)}
                      style={{
                        padding: '1rem',
                        borderRadius: '14px',
                        backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                        border: isSelected ? '1.5px solid #D4AF37' : '1px solid rgba(255, 255, 255, 0.08)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                        <span style={{ fontWeight: 700, color: isSelected ? '#D4AF37' : '#ffffff', fontSize: '0.95rem' }}>
                          {env.name}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>{env.lighting}</span>
                      </div>
                      <p style={{ fontSize: '0.825rem', color: '#9CA3AF', margin: 0, lineHeight: '1.4' }}>
                        {env.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Botón de Cotización Directa */}
            <button
              onClick={handleCotizarSimulacion}
              style={{
                width: '100%',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                backgroundColor: '#10B981',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
                transition: 'transform 0.2s ease, background 0.2s ease'
              }}
            >
              <MessageCircle size={20} />
              Cotizar esta Combinación por WhatsApp
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
