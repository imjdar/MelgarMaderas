'use client';

import React from 'react';
import { ShieldCheck, ArrowUp, Phone, MapPin, Mail, Instagram, Facebook, Video } from 'lucide-react';
import { APP_CONFIG } from '@/services/configService';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{ 
        backgroundColor: '#08090A', 
        color: '#D1D5DB',
        paddingTop: '80px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }}
    >
      <div className="container">
        
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          <div>
            <a href="#inicio" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
              <img 
                src="/assets/branding/logo-full.png" 
                alt="Maderas Melgar Logo"
                style={{ height: '48px', width: 'auto', objectFit: 'contain', filter: 'brightness(1.1)' }}
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src = '/assets/branding/logo-symbol.png';
                }}
              />
            </a>

            <p style={{ fontSize: '1rem', color: '#F59E0B', marginBottom: '1rem', fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>
              “{APP_CONFIG.slogan}”
            </p>

            <p style={{ fontSize: '0.9rem', color: '#9CA3AF', lineHeight: '1.6' }}>
              Muestrario técnico e informativo de muebles personalizados en madera maciza de alta gama (Seike, Roble, Laurel) en Quito, Ecuador.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><a href="/" style={{ color: '#D1D5DB', transition: 'color 0.2s' }}>Inicio</a></li>
              <li><a href="/quienes-somos" style={{ color: '#D1D5DB', transition: 'color 0.2s' }}>Quiénes Somos</a></li>
              <li><a href="/productos" style={{ color: '#D1D5DB', transition: 'color 0.2s' }}>Catálogo</a></li>
              <li><a href="/fabrica" style={{ color: '#D1D5DB', transition: 'color 0.2s' }}>Fábrica</a></li>
              <li><a href="/ubicacion" style={{ color: '#D1D5DB', transition: 'color 0.2s' }}>Contacto y Ubicaciones</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
              Contacto
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <a href="https://maps.google.com/?q=Maderas+Melgar+Quito" target="_blank" rel="noopener noreferrer" style={{ color: '#D1D5DB', transition: 'color 0.2s', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <MapPin size={16} className="mt-1 flex-shrink-0 text-[#F59E0B]" />
                  <span>Sede Quito<br/><span className="text-xs text-gray-500">Fábrica principal y showroom</span></span>
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Mall+del+Norte+Guayaquil" target="_blank" rel="noopener noreferrer" style={{ color: '#D1D5DB', transition: 'color 0.2s', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <MapPin size={16} className="mt-1 flex-shrink-0 text-[#F59E0B]" />
                  <span>Sede Guayaquil<br/><span className="text-xs text-gray-500">Mall del Norte</span></span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/593995601096" target="_blank" rel="noopener noreferrer" style={{ color: '#D1D5DB', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={16} className="text-[#F59E0B]" />
                  <span>+593 99 560 1096</span>
                </a>
              </li>
              <li>
                <a href="mailto:ventas@melgarmaderas.com.ec" style={{ color: '#D1D5DB', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={16} className="text-[#F59E0B]" />
                  <span>ventas@melgarmaderas.com.ec</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
              Encuéntranos (Quito)
            </h4>
            <div className="w-full aspect-video bg-[#22170F] relative overflow-hidden border border-[#3A2A1A]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7997387258384!2d-78.5005331!3d-0.1336545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b221063e75f%3A0x9ec77b3b4c82a1b1!2sMaderas%20Melgar!5e0!3m2!1ses-ES!2sec!4v1700000000000!5m2!1ses-ES!2sec" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
            
            <div className="mt-8">
              <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '1rem', fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
                Redes Sociales
              </h4>
              <div className="flex gap-4">
                <a href={APP_CONFIG.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1A110B] border border-[#3A2A1A] flex items-center justify-center text-[#D1D5DB] hover:text-[#C59B27] hover:border-[#C59B27] transition-colors">
                  <Instagram size={18} />
                </a>
                <a href={APP_CONFIG.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1A110B] border border-[#3A2A1A] flex items-center justify-center text-[#D1D5DB] hover:text-[#C59B27] hover:border-[#C59B27] transition-colors">
                  <Facebook size={18} />
                </a>
                <a href={APP_CONFIG.socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1A110B] border border-[#3A2A1A] flex items-center justify-center text-[#D1D5DB] hover:text-[#C59B27] hover:border-[#C59B27] transition-colors">
                  <Video size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div 
          style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#6B7280'
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong style={{ color: '#FFFFFF' }}>Maderas Melgar</strong> ({APP_CONFIG.domain}). Todos los derechos reservados.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ color: '#F59E0B', fontWeight: 600 }}>Quito, Guayaquil — Ecuador</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D1D5DB' }}>
              <Phone size={16} />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>+593 99 560 1096</span>
            </div>
            
            <button
              onClick={scrollToTop}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#14181D',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s',
                cursor: 'pointer'
              }}
              title="Volver arriba"
              aria-label="Volver arriba"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
