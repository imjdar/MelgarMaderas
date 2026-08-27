'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, Instagram, Facebook, ShoppingBag } from 'lucide-react';
import { APP_CONFIG } from '@/services/configService';

interface LuxuryNavbarProps {
  whatsappNumber: string;
  cartCount?: number;
  onOpenCart?: () => void;
}

export function LuxuryNavbar({ whatsappNumber, cartCount = 0, onOpenCart }: LuxuryNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const text = `Hola Melgar Maderas, deseo realizar una consulta desde el sitio web.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const navLinks = [
    { label: 'Colecciones', href: '#colecciones' },
    { label: 'Salas', href: '#salas' },
    { label: 'Comedores', href: '#comedores' },
    { label: 'Dormitorios', href: '#dormitorios' },
    { label: 'Ebanistería', href: '#ebanisteria' }
  ];

  return (
    <nav
      className="sticky top-0 left-0 w-full z-50 transition-all duration-500 bg-[#FDFBF7] shadow-md py-0"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 flex justify-between items-center min-h-[40px]">
        
        {/* Left Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6 w-1/3">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-wide text-[#3A1A0E] hover:text-[#C59B27] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Center Logo */}
        <div className="flex justify-center w-1/3 py-1">
          <a href="#" className="flex items-center transition-opacity hover:opacity-80">
            <Image 
              src="/assets/branding/logo-full.png" 
              alt="Melgar Maderas Logo" 
              width={100} 
              height={30} 
              className="object-contain"
              priority
            />
          </a>
        </div>

        {/* Right Links & CTA (Desktop) */}
        <div className="hidden lg:flex items-center justify-end space-x-6 w-1/3">
          {navLinks.slice(3).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-wide text-[#3A1A0E] hover:text-[#C59B27] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={handleWhatsApp}
            className="px-3 py-1 border border-[#0D6838] text-[#0D6838] hover:bg-[#0D6838] hover:text-white text-xs tracking-wider uppercase transition-all duration-300 hidden md:block"
          >
            WhatsApp
          </button>
          
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center p-1 text-[#3A1A0E] hover:text-[#0D6838] transition-colors"
            aria-label="Abrir carrito de cotización"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-[#10B981] text-white text-[0.6rem] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Toggle & Cart */}
        <div className="lg:hidden flex items-center justify-end w-1/3 gap-3">
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center p-1 text-[#3A1A0E] hover:text-[#0D6838] transition-colors"
            aria-label="Abrir carrito"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-[#10B981] text-white text-[0.6rem] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#3A1A0E] p-1"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-[#FDFBF7] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-[#3A1A0E]"
        >
          <X size={32} />
        </button>

        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl tracking-widest text-[#3A1A0E] hover:text-[#C59B27]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            {link.label}
          </a>
        ))}
        
        <button
          onClick={handleWhatsApp}
          className="mt-8 px-8 py-3 bg-[#0D6838] text-white tracking-widest uppercase text-sm"
        >
          Contactar por WhatsApp
        </button>

        <div className="flex space-x-6 mt-12 text-[#3A1A0E]">
          <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
          <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
        </div>
      </div>
    </nav>
  );
}
