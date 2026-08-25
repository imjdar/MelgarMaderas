'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/services/whatsappService';

interface HeaderProps {
  whatsappNumber?: string;
}

export const Header: React.FC<HeaderProps> = ({ whatsappNumber }) => {
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
    { label: 'Catálogo de Productos', href: '#catalogo' },
    { label: 'Madera Maciza', href: '#calidad' },
    { label: 'Nuestra Historia', href: '#nosotros' },
    { label: 'Contacto & Showroom', href: '#contacto' }
  ];

  return (
    <header className={`glass-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        
        {/* Logo Corporativo */}
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img 
            src="/assets/branding/logo-full.png" 
            alt="Maderas Melgar Logo" 
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.src = '/assets/branding/logo-symbol.png';
            }}
          />
        </a>

        {/* Navegación Escritorio */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: '600',
                fontSize: '0.95rem',
                color: 'var(--color-wood-dark)',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-green-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-wood-dark)')}
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
            className="btn-primary"
            style={{ padding: '0.65rem 1.35rem', fontSize: '0.9rem' }}
          >
            <MessageCircle size={18} />
            <span>Cotizar WhatsApp</span>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: 'none', color: 'var(--color-wood-dark)', padding: '0.5rem' }}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--color-cream-bg)',
            borderBottom: '1px solid var(--glass-border)',
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
                fontFamily: 'var(--font-heading)',
                fontWeight: '600',
                fontSize: '1.1rem',
                color: 'var(--color-wood-dark)'
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
