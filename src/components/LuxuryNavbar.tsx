'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, Instagram, Facebook, ShoppingBag, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { APP_CONFIG } from '@/services/configService';

interface LuxuryNavbarProps {
  whatsappNumber: string;
  cartCount?: number;
  onOpenCart?: () => void;
}

export function LuxuryNavbar({ whatsappNumber, cartCount = 0, onOpenCart }: LuxuryNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
    { label: 'INICIO', href: '/' },
    { label: 'NOSOTROS', href: '/quienes-somos' },
    { label: 'PRODUCTOS', href: '/productos' },
    { label: 'SHOWROOM', href: '/showroom' }
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white dark:bg-[#120C08] shadow-sm border-b border-gray-100 dark:border-[#22170F] py-0"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 flex justify-between items-center min-h-[40px]">
        
        <div className="flex justify-start w-1/4 py-2">
          <a href="/" className="flex items-center transition-transform hover:scale-105">
            <Image 
              src={mounted && theme === 'dark' ? "/assets/branding/logo-blanco.png" : "/assets/branding/logo-negro.png"} 
              alt="Melgar Maderas Logo" 
              width={250} 
              height={80} 
              className="object-contain w-auto h-16 md:h-20"
              priority
            />
          </a>
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden lg:flex items-center justify-center space-x-8 w-2/4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-wide text-gray-800 dark:text-gray-300 hover:text-[#C59B27] transition-colors uppercase font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTA (Desktop) */}
        <div className="hidden lg:flex items-center justify-end space-x-6 w-1/4">
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center p-1 text-[#25D366] hover:text-[#128C7E] transition-colors"
            aria-label="Contactar por WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </button>
          
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center p-1 text-gray-800 dark:text-gray-300 hover:text-[#C59B27] transition-colors"
            aria-label="Abrir carrito de cotización"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-[#10B981] text-white text-[0.6rem] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex items-center justify-center p-1 text-gray-800 dark:text-gray-300 hover:text-[#C59B27] transition-colors ml-4"
            aria-label="Cambiar tema"
          >
            {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle & Cart */}
        <div className="lg:hidden flex items-center justify-end w-1/3 gap-3">
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center p-1 text-gray-800 dark:text-gray-300 hover:text-[#C59B27] transition-colors"
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
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex items-center justify-center p-1 text-gray-800 dark:text-gray-300 hover:text-[#C59B27] transition-colors mr-2"
            aria-label="Cambiar tema"
          >
            {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-800 dark:text-gray-300 p-1"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white dark:bg-[#120C08] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-gray-800 dark:text-gray-300"
        >
          <X size={32} />
        </button>

        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl tracking-widest text-gray-800 dark:text-gray-200 hover:text-[#C59B27]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            {link.label}
          </a>
        ))}
        
        <button
          onClick={handleWhatsApp}
          className="mt-8 px-8 py-3 bg-[#C59B27] text-white tracking-widest uppercase text-sm"
        >
          Contactar por WhatsApp
        </button>

        <div className="flex space-x-6 mt-12 text-gray-800 dark:text-gray-300">
          <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
          <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
        </div>
      </div>
      </nav>
      <div className="h-[80px] md:h-[96px] w-full bg-white dark:bg-[#120C08]" aria-hidden="true" />
    </>
  );
}
