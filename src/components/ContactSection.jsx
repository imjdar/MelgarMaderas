import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { getWhatsAppQuoteUrl } from '../data/products';

export const ContactSection = ({ whatsappNumber, locationAddress }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    ambiente: 'Sala',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = whatsappNumber ? whatsappNumber.replace(/[^0-9]/g, '') : '';
    const message = encodeURIComponent(
      `Hola Maderas Melgar, mi nombre es *${formData.nombre}*.\n` +
      `Teléfono: ${formData.telefono}\n` +
      `Ambiente de interés: ${formData.ambiente}\n` +
      `Mensaje: ${formData.mensaje}`
    );
    
    if (phone) {
      window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section 
      id="contacto" 
      style={{ 
        padding: '100px 0', 
        backgroundColor: 'var(--color-surface-white)',
        borderTop: '1px solid var(--glass-border)'
      }}
    >
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <MessageCircle size={14} />
            <span>Contacto Directo & Asesoría</span>
          </div>

          <h2 className="section-title">Contáctenos</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Estamos listos para hacer realidad su proyecto de amoblado en madera maciza. Solicite su cotización personalizada o visítenos.
          </p>
        </div>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '3.5rem' 
          }}
        >
          
          {/* Left Column: Contact Cards & Info */}
          <div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-wood-dark)', marginBottom: '1.5rem' }}>
              Atención Personalizada
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MessageCircle size={22} color="#0D6838" />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--color-wood-dark)' }}>WhatsApp Corporativo</strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    {whatsappNumber || 'Pendiente de agregar número (Configurable)'}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={22} color="#0D6838" />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--color-wood-dark)' }}>Ubicación & Cobertura</strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    {locationAddress || 'Quito, Pichincha • Envíos y entregas a todo el Ecuador'}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock size={22} color="#0D6838" />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--color-wood-dark)' }}>Horarios de Atención</strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    Lunes a Sábado: 08:30 - 18:00
                  </span>
                </div>
              </div>

            </div>

            {/* Configurable Helper Note for Client */}
            {!whatsappNumber && (
              <div 
                style={{ 
                  backgroundColor: 'var(--color-cream-surface)', 
                  border: '1px dashed var(--color-gold-accent)', 
                  padding: '1.25rem', 
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  fontSize: '0.85rem',
                  color: 'var(--color-wood-dark)'
                }}
              >
                <AlertCircle size={20} color="#C5A059" style={{ flexShrink: 0 }} />
                <div>
                  <strong>Nota para el Cliente:</strong> El número de WhatsApp y la dirección exacta de Google Maps se actualizarán fácilmente en las variables principales del archivo <code>App.jsx</code> cuando estén definidos.
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Inquiry Form */}
          <div 
            style={{ 
              backgroundColor: 'var(--color-cream-bg)', 
              padding: '2.5rem', 
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--glass-border)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <h3 style={{ fontSize: '1.35rem', color: 'var(--color-wood-dark)', marginBottom: '1.5rem' }}>
              Solicitud de Cotización Directa
            </h3>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <CheckCircle2 size={48} color="#0D6838" style={{ marginBottom: '1rem' }} />
                <h4 style={{ color: 'var(--color-wood-dark)', marginBottom: '0.5rem' }}>¡Solicitud Registrada!</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  Gracias por escribirnos. Nuestro equipo se pondrá en contacto a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-wood-dark)', marginBottom: '0.4rem' }}>
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--glass-border)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      backgroundColor: '#FFFFFF'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-wood-dark)', marginBottom: '0.4rem' }}>
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 099 123 4567"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--glass-border)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      backgroundColor: '#FFFFFF'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-wood-dark)', marginBottom: '0.4rem' }}>
                    Ambiente de Interés
                  </label>
                  <select
                    value={formData.ambiente}
                    onChange={(e) => setFormData({ ...formData, ambiente: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--glass-border)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      backgroundColor: '#FFFFFF'
                    }}
                  >
                    <option value="Sala">Juego de Sala / Centro TV</option>
                    <option value="Comedor">Juego de Comedor / Trinchante</option>
                    <option value="Habitación">Dormitorio / Cama / Tocador</option>
                    <option value="Cocina">Muebles de Cocina / Almacenamiento</option>
                    <option value="Estudio">Estudio / Escritorio Ejecutivo</option>
                    <option value="Proyecto Completo">Proyecto Completo a Medida</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-wood-dark)', marginBottom: '0.4rem' }}>
                    Detalles o Medidas Aproximadas
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describa el diseño o medidas que busca para su hogar..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--glass-border)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      backgroundColor: '#FFFFFF',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                  <Send size={18} />
                  <span>Enviar Cotización por WhatsApp</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
