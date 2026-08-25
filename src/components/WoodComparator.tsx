'use client';

import React, { useState } from 'react';
import { ShieldCheck, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/services/whatsappService';

interface WoodType {
  id: string;
  name: string;
  scientificName: string;
  tagline: string;
  description: string;
  hardnessScore: number;
  durabilityYears: string;
  grainPattern: string;
  idealFor: string[];
  colorHex: string;
  badge: string;
}

const WOOD_TYPES: WoodType[] = [
  {
    id: 'seike',
    name: 'Madera Maciza de Seike',
    scientificName: 'Cedrelinga cateniformis',
    tagline: 'Vetas Doradas y Versatilidad Suprema',
    description: 'El Seike es la joya amaderada de nuestros atolieres. Posee una veta fluida de tono cálido miel-dorado, tratada en nuestros hornos de secado térmico para asegurar nula deformación con los años.',
    hardnessScore: 95,
    durabilityYears: '+50 Años',
    grainPattern: 'Líneas continuas doradas con destellos satinados',
    idealFor: ['Juegos de Sala Premium', 'Camas King Imperial', 'Escritorios Ejecutivos'],
    colorHex: '#C59B27',
    badge: 'La Más Solicitada'
  },
  {
    id: 'roble',
    name: 'Madera Maciza de Roble Noble',
    scientificName: 'Quercus robur',
    tagline: 'Fuerza Monumental y Densidad Inquebrantable',
    description: 'Reconocido mundialmente por su dureza extrema y peso majestuoso. Soporta el uso diario continuo en comedores familiares y estructuras pesadas sin alterar su esplendor.',
    hardnessScore: 98,
    durabilityYears: '+80 Años (Garantía Intergeneracional)',
    grainPattern: 'Poros abiertos profundos y vetas amaderadas oscuras caoba',
    idealFor: ['Comedores de Alto Tráfico', 'Buffets & Trinchantes', 'Estructuras de Cama'],
    colorHex: '#3A1A0E',
    badge: 'Máxima Resistencia'
  },
  {
    id: 'laurel',
    name: 'Madera Maciza de Laurel',
    scientificName: 'Cordia alliodora',
    tagline: 'Vetas Artísticas y Acabado Sedoso',
    description: 'Una madera refinada de grano fino con patrones ondulados únicos. Ofrece un tacto suave de altísima elegancia, ideal para mobiliario de dormitorio y consolas de diseño.',
    hardnessScore: 90,
    durabilityYears: '+40 Años',
    grainPattern: 'Vetas oscuras arqueadas sobre fondo crema tostado',
    idealFor: ['Tocadores de Lujo', 'Consolas & Espejos', 'Muebles de Estudio'],
    colorHex: '#6E3B20',
    badge: 'Elegancia Exclusiva'
  }
];

interface WoodComparatorProps {
  whatsappNumber: string;
}

export const WoodComparator: React.FC<WoodComparatorProps> = ({ whatsappNumber }) => {
  const [selectedWood, setSelectedWood] = useState<WoodType>(WOOD_TYPES[0]);

  const handleConsultWood = (woodName: string) => {
    const url = buildWhatsAppUrl(
      whatsappNumber,
      `Consulta Maderas: ${woodName}`,
      `Me interesa recibir asesoría personalizada sobre muebles fabricados en madera maciza de *${woodName}*. Desearía cotizar un diseño a medida.`
    );
    window.open(url, '_blank');
  };

  return (
    <section className="wood-comparator-section" style={{ padding: '5rem 0', backgroundColor: '#FDFBF7' }}>
      <div className="container">
        
        {/* Encabezado de Sección */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-tag" style={{ backgroundColor: '#EBF7F0', color: '#0D6838' }}>
            <Sparkles size={14} /> Maestría de Materiales
          </span>
          <h2 className="section-title">Comparador de Maderas Nobles</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Conozca las propiedades botánicas y la nobleza estructural de la madera 100% maciza 
            utilizada en cada creación de Maderas Melgar.
          </p>
        </div>

        {/* Pestañas de Selección de Madera */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          flexWrap: 'wrap',
          marginBottom: '2.5rem' 
        }}>
          {WOOD_TYPES.map((wood) => {
            const isSelected = selectedWood.id === wood.id;
            return (
              <button
                key={wood.id}
                onClick={() => setSelectedWood(wood)}
                style={{
                  padding: '0.85rem 1.75rem',
                  borderRadius: '9999px',
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: '0.95rem',
                  border: isSelected ? '2px solid #0D6838' : '1px solid #DCD2C3',
                  backgroundColor: isSelected ? '#0D6838' : '#ffffff',
                  color: isSelected ? '#ffffff' : '#3A1A0E',
                  boxShadow: isSelected ? '0 8px 20px rgba(13,104,56,0.2)' : 'none',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span style={{ 
                  width: '10px', 
                  height: '10px', 
                  borderRadius: '50%', 
                  backgroundColor: wood.colorHex,
                  display: 'inline-block' 
                }} />
                {wood.name}
              </button>
            );
          })}
        </div>

        {/* Detalle Interactivo de la Madera Seleccionada */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: '2.5rem',
          border: '1px solid #EAE3D2',
          boxShadow: '0 12px 32px rgba(58,26,14,0.06)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          
          {/* Lado Izquierdo: Descripción y Métricas */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span style={{
                backgroundColor: '#EBF7F0',
                color: '#0D6838',
                fontSize: '0.8rem',
                fontWeight: 700,
                padding: '0.25rem 0.75rem',
                borderRadius: '6px',
                textTransform: 'uppercase'
              }}>
                {selectedWood.badge}
              </span>
              <span style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#8E847A' }}>
                {selectedWood.scientificName}
              </span>
            </div>

            <h3 style={{ fontSize: '1.85rem', color: '#3A1A0E', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
              {selectedWood.name}
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#0D6838', fontWeight: 600, marginBottom: '1.25rem' }}>
              {selectedWood.tagline}
            </p>
            <p style={{ color: '#5C544C', lineHeight: '1.7', marginBottom: '1.75rem' }}>
              {selectedWood.description}
            </p>

            {/* Lista de Ambientes Recomendados */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#8E847A', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Recomendada Especialmente Para:
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {selectedWood.idealFor.map((item, idx) => (
                  <span key={idx} style={{
                    backgroundColor: '#F5F1E8',
                    color: '#3A1A0E',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    padding: '0.35rem 0.85rem',
                    borderRadius: '8px'
                  }}>
                    • {item}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleConsultWood(selectedWood.name)}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageCircle size={18} /> Cotizar Mueble en {selectedWood.name.split(' ')[3] || selectedWood.name}
            </button>
          </div>

          {/* Lado Derecho: Tarjeta de Especificaciones Técnicas */}
          <div style={{
            backgroundColor: '#FDFBF7',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid #E5DCCB'
          }}>
            <h4 style={{ fontSize: '1.2rem', color: '#3A1A0E', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={20} color="#0D6838" /> Ficha de Nobleza & Durabilidad
            </h4>

            {/* Barra de Medidor de Dureza Estructural */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>
                <span style={{ color: '#5C544C' }}>Densidad & Resistencia Técnica</span>
                <span style={{ color: '#0D6838' }}>{selectedWood.hardnessScore} / 100</span>
              </div>
              <div style={{ height: '10px', backgroundColor: '#E2D9C8', borderRadius: '9999px', overflow: 'hidden' }}>
                <div style={{ 
                  height: '100%', 
                  width: `${selectedWood.hardnessScore}%`, 
                  backgroundColor: '#0D6838', 
                  borderRadius: '9999px',
                  transition: 'width 0.6s ease'
                }} />
              </div>
            </div>

            {/* Fichas de Datos */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '12px', border: '1px solid #EAE3D2' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#8E847A' }}>Vida Útil Estimada</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#3A1A0E', marginTop: '0.2rem' }}>
                  {selectedWood.durabilityYears}
                </div>
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '12px', border: '1px solid #EAE3D2' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#8E847A' }}>Secado en Horno</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0D6838', marginTop: '0.2rem' }}>
                  100% Garantizado
                </div>
              </div>
            </div>

            {/* Patrón de Veta */}
            <div style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '12px', border: '1px solid #EAE3D2' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#8E847A', marginBottom: '0.3rem' }}>
                Características Estéticas de la Veta
              </div>
              <div style={{ fontSize: '0.9rem', color: '#3A1A0E', fontWeight: 500 }}>
                {selectedWood.grainPattern}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
