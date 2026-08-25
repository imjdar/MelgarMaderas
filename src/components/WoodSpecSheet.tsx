'use client';

import React, { useState } from 'react';
import { Flame, ShieldCheck, Check, Sparkles, Layers, Sliders } from 'lucide-react';

interface WoodTypeInfo {
  id: string;
  name: string;
  scientificName: string;
  origin: string;
  hardness: string;
  humidity: string;
  colorTone: string;
  description: string;
  idealFor: string[];
}

const WOOD_TYPES: WoodTypeInfo[] = [
  {
    id: 'seike',
    name: 'Seike Ecuatoriano',
    scientificName: 'Cedrelinga cateniformis',
    origin: 'Bosques Sustentables del Ecuador',
    hardness: 'Alta Dureza Estructural',
    humidity: '8% - 10% (Horno)',
    colorTone: 'Dorado Cálido Miel',
    description: 'Madera de veta uniforme y presencia señorial. Altamente resistente a variaciones climáticas en la sierra y costa ecuatoriana.',
    idealFor: ['Mesas de Comedor Ejecutivas', 'Juegos de Sala de Autor', 'Credenzas de Lujo']
  },
  {
    id: 'roble',
    name: 'Roble de Alta Gama',
    scientificName: 'Tabebuia rosea',
    origin: 'Bosque Tropical Húmedo',
    hardness: 'Máxima Resistencia al Impacto',
    humidity: '8% - 10% (Horno)',
    colorTone: 'Castaño Profundo',
    description: 'Reconocida por su grano apretado y durabilidad legendaria. Inmune a insectos xilófagos tras el tratamiento térmico.',
    idealFor: ['Camases de Dormitorio Principal', 'Bibliotecas de Estudio', 'Puertas Principales']
  },
  {
    id: 'laurel',
    name: 'Laurel de Montaña',
    scientificName: 'Cordia alliodora',
    origin: 'Valles Interandinos de Ecuador',
    hardness: 'Tenacidad Media-Alta',
    humidity: '9% - 11% (Horno)',
    colorTone: 'Ámbar con Betas Olivo',
    description: 'Destaca por sus matices olivo y textura sedosa. Excelente para acabados de ebanistería fina y moblaje minimalista.',
    idealFor: ['Vitrinas de Exhibición', 'Mesas de Centro', 'Muebles de Estudio']
  },
  {
    id: 'teca',
    name: 'Teca Seleccionada',
    scientificName: 'Tectona grandis',
    origin: 'Plantaciones Certificadas FSC',
    hardness: 'Indestructible e Impermeable',
    humidity: '8% - 10% (Horno)',
    colorTone: 'Miel Tostado Silvestre',
    description: 'Posee aceites naturales que la protegen contra la humedad y cambios térmicos extremos. La elección de diseñadores exigentes.',
    idealFor: ['Muebles de Exterior Techado', 'Cocinas de Alta Gama', 'Paneles de Fachada']
  }
];

export const WoodSpecSheet: React.FC = () => {
  const [selectedWood, setSelectedWood] = useState<WoodTypeInfo>(WOOD_TYPES[0]);

  return (
    <section id="calidad" style={{ backgroundColor: '#0B0D0E', color: '#F4EFE6', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-custom">
        
        {/* Encabezado de la Guía Interactiva */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#F59E0B',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              <Sliders size={14} /> ESPECIFICACIÓN TÉCNICA Y MATERIALES
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#FFFFFF', fontWeight: 800, margin: 0, fontFamily: "'Outfit', sans-serif" }}>
              Control del Origen & Secado
            </h2>
          </div>

          <p style={{ color: '#9CA3AF', maxWidth: '480px', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
            Consulte la ficha de propiedades físicas de cada especie procesada en nuestra planta de Quito. Estabilidad garantizada mediante deshidratación por horno.
          </p>
        </div>

        {/* Pestañas Selectoras de Madera */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2.5rem'
        }}>
          {WOOD_TYPES.map((wood) => {
            const isSelected = selectedWood.id === wood.id;
            return (
              <button
                key={wood.id}
                onClick={() => setSelectedWood(wood)}
                style={{
                  padding: '1.25rem',
                  borderRadius: '14px',
                  backgroundColor: isSelected ? '#181C21' : '#111417',
                  border: isSelected ? '1.5px solid #F59E0B' : '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 8px 24px rgba(245, 158, 11, 0.12)' : 'none'
                }}
              >
                <div style={{ fontSize: '0.75rem', color: isSelected ? '#F59E0B' : '#6B7280', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  Especie Noble
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: isSelected ? '#FFFFFF' : '#D1D5DB' }}>
                  {wood.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Panel Interactivo Bento de la Madera Seleccionada */}
        <div style={{
          backgroundColor: '#14181D',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.08)',
          padding: '2.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          
          {/* Detalles del Material */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Sparkles size={16} color="#F59E0B" />
              <span style={{ fontSize: '0.85rem', color: '#F59E0B', fontStyle: 'italic' }}>
                {selectedWood.scientificName}
              </span>
            </div>

            <h3 style={{ fontSize: '2rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '1rem' }}>
              {selectedWood.name}
            </h3>

            <p style={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              {selectedWood.description}
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#D1D5DB', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                Aplicaciones Arquitectónicas Recomendadas:
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {selectedWood.idealFor.map((item, i) => (
                  <span key={i} style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    border: '1px solid rgba(245, 158, 11, 0.2)',
                    color: '#FCD34D',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}>
                    <Check size={12} /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Medidor Térmico de Humedad & Garantía de Horno */}
          <div style={{
            backgroundColor: '#0E1114',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#EF4444', fontWeight: 700, fontSize: '0.85rem' }}>
                <Flame size={18} />
                <span>Tratamiento de Secado al Horno</span>
              </div>
              <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34D399', fontSize: '0.75rem', fontWeight: 800, padding: '0.25rem 0.6rem', borderRadius: '4px' }}>
                NORMA TÉCNICA QUITO
              </span>
            </div>

            {/* Barra Visual de Humedad Optimizada */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>
                <span>Nivel de Humedad del Wood Core</span>
                <strong style={{ color: '#F59E0B' }}>{selectedWood.humidity}</strong>
              </div>
              <div style={{ width: '100%', height: '10px', backgroundColor: '#22272E', borderRadius: '5px', overflow: 'hidden', position: 'relative' }}>
                <div style={{ width: '18%', height: '100%', backgroundColor: '#F59E0B', borderRadius: '5px' }} />
              </div>
              <span style={{ fontSize: '0.75rem', color: '#6B7280', marginTop: '0.35rem', display: 'block' }}>
                * Previene trizaduras, rajaduras o arqueamiento por cambios de temperatura en la sierra interandina.
              </span>
            </div>

            {/* Resumen de Certificación de Origen */}
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '0.85rem',
              color: '#D1D5DB'
            }}>
              <ShieldCheck size={20} color="#F59E0B" />
              <span>Garantía de Origen & Trazabilidad: <strong>{selectedWood.origin}</strong></span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
