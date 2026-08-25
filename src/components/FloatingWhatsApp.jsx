import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../services/whatsappService';

export const FloatingWhatsApp = ({ whatsappNumber }) => {
  const url = buildWhatsAppUrl(whatsappNumber, 'Asistencia General');

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '2rem',
        left: '2rem',
        zIndex: 990,
        backgroundColor: '#25D366',
        color: '#FFFFFF',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
        transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
      aria-label="Contactar por WhatsApp"
      title="Atención Directa vía WhatsApp • Maderas Melgar"
    >
      <MessageCircle size={32} />

      {/* Pulse Outer Ring */}
      <span
        style={{
          position: 'absolute',
          inset: '-6px',
          borderRadius: '50%',
          border: '2px solid #25D366',
          opacity: 0.7,
          animation: 'pulseRing 2s infinite'
        }}
      />

      <style>{`
        @keyframes pulseRing {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }
      `}</style>
    </a>
  );
};
