'use client';

import React from 'react';
import { Flame, Hammer, Layers, Sparkles, Award } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Selección Botánica & Curado Térmico',
    description: 'Cada pieza de madera de Seike, Roble o Laurel es seleccionada a mano y tratada en hornos de secado controlado para llevar la humedad al grado perfecto (8%-10%), evitando fisuras futuras.',
    icon: Flame,
    color: '#0D6838'
  },
  {
    step: '02',
    title: 'Trazado & Ensamble de Alta Precisión',
    description: 'Nuestros maestros artesanos realizan ensambles tradicionales de espiga y escopleo reforzados, sin recurrir a aglomerados ni plásticos, garantizando firmeza por décadas.',
    icon: Hammer,
    color: '#3A1A0E'
  },
  {
    step: '03',
    title: 'Lijado Multigrano & Detalle Manual',
    description: 'Proceso de lijado progresivo de 5 etapas hasta lograr una textura sedosa que resalta la profundidad natural y riqueza de las vetas amaderadas oscuras.',
    icon: Layers,
    color: '#C59B27'
  },
  {
    step: '04',
    title: 'Acabado Poliuretánico Antihumedad',
    description: 'Aplicación de selladores ecofriendly y lacas poliuretánicas de alto tráfico que protegen el mueble contra humedad, derrames y radiación UV sin perder la calidez táctil de la madera.',
    icon: Sparkles,
    color: '#0D6838'
  }
];

export const CraftTimeline: React.FC = () => {
  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#F5F1E8', borderTop: '1px solid #EAE3D2', borderBottom: '1px solid #EAE3D2' }}>
      <div className="container">
        
        {/* Encabezado */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag" style={{ backgroundColor: '#ffffff', color: '#3A1A0E', border: '1px solid #DCD2C3' }}>
            <Award size={14} color="#0D6838" /> Calidad Intergeneracional
          </span>
          <h2 className="section-title">El Arte Detrás de Cada Creación</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Un proceso artesanal perfeccionado durante décadas que garantiza muebles 
            capaces de traspasar épocas y transmitir legado.
          </p>
        </div>

        {/* Grilla de Pasos del Proceso */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem'
        }}>
          {STEPS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '2rem 1.5rem',
                  border: '1px solid #EAE3D2',
                  boxShadow: '0 8px 24px rgba(58,26,14,0.04)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* Número de Paso y Badge */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem' 
                }}>
                  <span style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontSize: '2rem', 
                    fontWeight: 800, 
                    color: item.color,
                    opacity: 0.9 
                  }}>
                    {item.step}
                  </span>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: '#FDFBF7',
                    border: `1px solid ${item.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComponent size={22} color={item.color} />
                  </div>
                </div>

                <h3 style={{ 
                  fontSize: '1.25rem', 
                  color: '#3A1A0E', 
                  marginBottom: '0.75rem',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: '1.3'
                }}>
                  {item.title}
                </h3>

                <p style={{ 
                  fontSize: '0.925rem', 
                  color: '#5C544C', 
                  lineHeight: '1.65',
                  flexGrow: 1
                }}>
                  {item.description}
                </p>

                {/* Indicador de Unión */}
                <div style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px dashed #EAE3D2',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#0D6838',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>
                  100% Madera Maciza
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
