'use client';
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { APP_CONFIG } from '@/services/configService';

export function MinimalFooter() {
  return (
    <footer className="bg-[#1C110C] text-white pt-20 pb-10 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-[1700px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl mb-6 tracking-widest text-[#C59B27]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              MELGAR MADERAS
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Diseño y fabricación de muebles macizos en Quito, Ecuador. Combinando técnicas tradicionales de ebanistería con diseño contemporáneo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6 text-gray-200">Colecciones</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#salas" className="hover:text-white transition-colors">Salas y Estares</a></li>
              <li><a href="#comedores" className="hover:text-white transition-colors">Comedores</a></li>
              <li><a href="#dormitorios" className="hover:text-white transition-colors">Dormitorios</a></li>
              <li><a href="#ebanisteria" className="hover:text-white transition-colors">Nuestro Proceso</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6 text-gray-200">Showroom Quito</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>{APP_CONFIG.location.addressLine}<br />Quito, Ecuador</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <span>{APP_CONFIG.whatsappNumber}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <span>ventas@melgarmaderas.com.ec</span>
              </li>
            </ul>
          </div>

          {/* Map Embed */}
          <div className="w-full h-48 bg-gray-800 rounded-sm overflow-hidden border border-gray-800">
            <iframe
              src={APP_CONFIG.location.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Maderas Melgar"
            ></iframe>
          </div>
        </div>

        {/* Copyright & SEO */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Melgar Maderas. Todos los derechos reservados. melgarmaderas.com.ec</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Políticas de Privacidad</a>
            <a href="#" className="hover:text-white">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
