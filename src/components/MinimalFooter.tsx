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
              MADERAS MELGAR
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Desde 1996 transformamos maderas seleccionadas en piezas pensadas para acompañar la vida de quienes las habitan.
            </p>

          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6 text-gray-200">Navegación</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/quienes-somos" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="/productos" className="hover:text-white transition-colors">Productos</a></li>
              <li><a href="/showroom" className="hover:text-white transition-colors">Showroom</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6 text-gray-200">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <a href="https://www.google.com/maps/place/Maderas+Melgar/@-0.1336545,-78.5005331,17z" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <span className="font-medium text-white">Sede Quito:</span><br />
                  Dr. José Fernández Salvador y n56c<br />
                  170135 Quito
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <a href="https://www.google.com/maps/place/Mall+del+Norte/@-2.0950004,-79.9126513,17z" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <span className="font-medium text-white">Sede Guayaquil:</span><br />
                  Av. Francisco de Orellana Mz. 2576<br />
                  Mall del Norte
                </a>
              </li>
              <li className="flex items-center gap-3 mt-2">
                <Phone size={18} className="shrink-0" />
                <a href={`https://wa.me/${APP_CONFIG.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +593 995601096
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <a href="mailto:ventas@melgarmaderas.com.ec" className="hover:text-white transition-colors">
                  ventas@melgarmaderas.com.ec
                </a>
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
          <p>© {new Date().getFullYear()} Maderas Melgar. Todos los derechos reservados.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Políticas de Privacidad</a>
            <a href="#" className="hover:text-white">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
