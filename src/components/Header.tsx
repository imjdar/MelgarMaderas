'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/services/whatsappService';

interface HeaderProps {
  whatsappNumber?: string;
  bannerText?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ whatsappNumber, bannerText }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Catálogo Bento', href: '#catalogo' },
    { label: 'Maderas Nobles', href: '#calidad' },
    { label: 'Taller & Historia', href: '#nosotros' },
    { label: 'Showroom Quito', href: '#contacto' }
  ];

  return (
    <header className={`glass-header ${isScrolled ? 'scrolled' : ''}`}>
      {bannerText && (
        <div style={{
          backgroundColor: '#14181D',
          color: '#FAF8F5',
          fontSize: '0.85rem',
          fontWeight: 600,
          padding: '0.45rem 1rem',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          letterSpacing: '0.04em',
          borderBottom: '1px solid rgba(245, 158, 11, 0.3)'
        }}>
          {bannerText}
        </div>
      )}

      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        
        {/* Logo Corporativo */}
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }} aria-label="Maderas Melgar Inicio">
          <img 
            src="/assets/branding/logo-full.png" 
            alt="Maderas Melgar Logo" 
            style={{ height: '44px', width: 'auto', objectFit: 'contain', filter: 'brightness(1.1)' }}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.src = '/assets/branding/logo-symbol.png';
            }}
          />
        </a>

        {/* Navegación Escritorio */}
        <nav className="desktop-nav" aria-label="Navegación principal" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: '600',
                fontSize: '0.925rem',
                color: '#FFFFFF',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F59E0B')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botón de Acción WhatsApp */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href={buildWhatsAppUrl(whatsappNumber, 'Consulta General')}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              backgroundColor: '#F59E0B',
              color: '#0B0D0E',
              padding: '0.6rem 1.35rem',
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              transition: 'transform 0.2s ease'
            }}
            aria-label="Cotizar por WhatsApp"
          >
            <MessageCircle size={16} />
            <span>Cotizar WhatsApp</span>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: 'none', color: '#FFFFFF', padding: '0.5rem' }}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#14181D',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: '600',
                fontSize: '1.1rem',
                color: '#FFFFFF'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 991px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};
