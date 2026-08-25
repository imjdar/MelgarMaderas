'use client';

import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { buildWhatsAppUrl } from '@/services/whatsappService';

interface ModernContactSectionProps {
  whatsappNumber: string;
  locationAddress: string;
}

export const ModernContactSection: React.FC<ModernContactSectionProps> = ({
  whatsappNumber,
  locationAddress
}) => {
  const handleWhatsAppConsult = () => {
    const text = `Hola Maderas Melgar (melgarmaderas.com.ec). Me interesa agendar una cita o solicitar cotización informativa para un proyecto de madera maciza en Quito.`;
    window.open(buildWhatsAppUrl(whatsappNumber, text), '_blank');
  };

  return (
    <section id="contacto" style={{ backgroundColor: '#0B0D0E', color: '#F4EFE6', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-custom">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          
          {/* Lado Izquierdo: Información del Taller & Showroom */}
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
              <MapPin size={14} /> SHOWROOM & TALLER EN QUITO
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#FFFFFF', fontWeight: 800, margin: '0 0 1.25rem 0', fontFamily: "'Outfit', sans-serif" }}>
              Visite Nuestro Estudio o Solicite Asesoria
            </h2>

            <p style={{ color: '#9CA3AF', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Atendemos a clientes particulares, oficinas ejecutivas y estudios de arquitectura. Agende una cita previa en nuestro taller de Quito para evaluar muestras de madera maciza (**Seike, Roble, Laurel**).
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', backgroundColor: '#14181D', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <MapPin size={22} color="#F59E0B" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong style={{ display: 'block', color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Ubicación Showroom Principal</strong>
                  <span style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>{locationAddress}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', backgroundColor: '#14181D', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Clock size={22} color="#F59E0B" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong style={{ display: 'block', color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Horarios de Atención Taller</strong>
                  <span style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>Lunes a Viernes: 08:30 - 18:00 | Sábados: 09:00 - 13:00</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', backgroundColor: '#14181D', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Phone size={22} color="#F59E0B" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong style={{ display: 'block', color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Línea Directa WhatsApp</strong>
                  <span style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>+593 98 412 0938 (Atención Inmediata)</span>
                </div>
              </div>

            </div>

            <button
              onClick={handleWhatsAppConsult}
              style={{
                backgroundColor: '#F59E0B',
                color: '#0B0D0E',
                border: 'none',
                padding: '1rem 2.25rem',
                borderRadius: '12px',
                fontWeight: 900,
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 8px 24px rgba(245, 158, 11, 0.25)'
              }}
            >
              <MessageCircle size={18} /> Iniciar Cotización por WhatsApp <ArrowUpRight size={18} />
            </button>

          </div>

          {/* Lado Derecho: Mapa de Quito & Sello de Cobertura */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1.5px solid rgba(245, 158, 11, 0.3)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
              minHeight: '380px',
              backgroundColor: '#14181D'
            }}>
              <iframe
                title="Ubicación Maderas Melgar Quito"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.167812903522!2d-78.4795431!3d-0.1652391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a72d3f7f14b%3A0x6b10b06b6b6b6b6b!2sAv.%20Granados%2C%20Quito%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1629800000000!5m2!1ses!2sec"
                width="100%"
                height="380"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>

            <div style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '1.25rem',
              right: '1.25rem',
              backgroundColor: 'rgba(11, 13, 14, 0.94)',
              backdropFilter: 'blur(10px)',
              padding: '0.85rem 1.25rem',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.8rem',
              color: '#FFFFFF'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={16} color="#F59E0B" />
                <span>Despacho con embalaje seguro a todo Ecuador</span>
              </div>
              <strong style={{ color: '#F59E0B' }}>Quito • EC</strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
