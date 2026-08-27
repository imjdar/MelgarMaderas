'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { APP_CONFIG } from '@/services/configService';

export function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactWhatsApp = () => {
    const text = `Hola Maderas Melgar. Quisiera más información sobre sus muebles de madera maciza.`;
    window.open(`https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const navLinks = [
    { name: 'Quiénes Somos', href: '#quienes-somos' },
    { name: 'Propuesta de Valor', href: '#propuesta-valor' },
    { name: 'Nuestros Productos', href: '#productos' },
    { name: 'Testimonios', href: '#testimonios' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className="glass-header"
      style={{
        padding: isScrolled ? '1rem 0' : '1.5rem 0',
        backgroundColor: isScrolled ? 'rgba(253, 251, 247, 0.98)' : 'transparent',
        borderBottom: isScrolled ? '1px solid rgba(220, 210, 195, 0.5)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
        >
          <span style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: '1.5rem', 
            fontWeight: 800, 
            letterSpacing: '0.05em',
            color: 'var(--color-wood-dark)',
            lineHeight: 1.1
          }}>
            MADERAS MELGAR
          </span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase'
          }}>
            Muebles que traspasan épocas
          </span>
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ 
            display: 'flex', 
            listStyle: 'none', 
            gap: '2.5rem', 
            alignItems: 'center',
            margin: 0,
            padding: 0
          }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <button 
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: 'var(--color-wood-dark)',
                    position: 'relative',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-gold-accent)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-wood-dark)'}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div style={{ display: 'none' }} className="desktop-cta">
          <button onClick={handleContactWhatsApp} className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
            Cotizar por WhatsApp
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ color: 'var(--color-wood-dark)' }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-cream-bg)',
          padding: '2rem 1.5rem',
          borderBottom: '1px solid var(--glass-border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--color-wood-dark)',
                textAlign: 'left',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid rgba(0,0,0,0.05)'
              }}
            >
              {link.name}
            </button>
          ))}
          <button onClick={handleContactWhatsApp} className="btn-primary" style={{ marginTop: '1rem' }}>
            Cotizar por WhatsApp
          </button>
        </div>
      )}

      {/* Inline Styles for Media Queries */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: block !important; }
          .desktop-cta { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
