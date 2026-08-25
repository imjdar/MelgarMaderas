'use client';

import React from 'react';
import { Flame, CheckCircle2, Award, Sparkles } from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Selección de Maderas Macizas Nobles',
      desc: 'Seleccionamos únicamente trozas de Seike, Roble, Laurel y Teca de origen sostenible con vetas vistosas y libre de imperfecciones estructurales.',
      icon: Award
    },
    {
      number: '02',
      title: 'Secado Técnico en Horno (8-10% Humedad)',
      desc: 'Sometemos las tablas a ciclos computarizados de deshidratación térmica para fijar la humedad entre el 8% y el 10%, garantizando que la madera no se tuerza ni se raye en el clima ecuatoriano.',
      icon: Flame
    },
    {
      number: '03',
      title: 'Ensamblado Artesanal & Ebanistería',
      desc: 'Ebanistas de oficio unen cada elemento mediante espigas y encajes de alta precisión sin depender exclusivamente de fijaciones superficiales.',
      icon: CheckCircle2
    },
    {
      number: '04',
      title: 'Protección en Poliuretano Satinado',
      desc: 'Recubrimiento con laca de poliuretano de alta resistencia que sella el poro de la madera contra líquidos, calor radiante y rayos UV manteniendo el tacto natural.',
      icon: Sparkles
    }
  ];

  return (
    <section style={{ backgroundColor: '#FDFBF7', padding: '5rem 0', borderBottom: '1px solid #E5DCCB' }}>
      <div className="container-custom">
        
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            <span>Técnica & Calidad Certificada</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.85rem, 4vw, 2.75rem)', color: '#3A1A0E', marginBottom: '1rem', fontFamily: "'Playfair Display', Georgia, serif" }}>
            El Secreto Detrás de Muebles Inalterables
          </h2>
          <p style={{ color: '#595148', fontSize: '1.05rem', lineHeight: 1.6 }}>
            En <strong>Maderas Melgar</strong>, combinamos la tradición ebanista con procesos térmicos de precisión. No trabajamos aglomerados ni contrachapados sintéticos.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
          gap: '2rem'
        }}>
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '2rem',
                  borderRadius: '16px',
                  border: '1px solid #E5DCCB',
                  boxShadow: '0 4px 20px rgba(58, 26, 14, 0.04)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: '#FAF5ED',
                    color: '#3A1A0E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={24} color="#C59B27" />
                  </div>
                  <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#C59B27', fontFamily: 'monospace' }}>
                    {step.number}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', color: '#3A1A0E', marginBottom: '0.75rem', fontWeight: 700 }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: '#595148', lineHeight: 1.65, flexGrow: 1 }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
