import React from 'react';
import { APP_CONFIG } from '@/services/configService';

export function SocialContactSection() {
  return (
    <section className="bg-[#FDFBF7] py-20 border-t border-gray-200" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* Texts */}
        <div className="text-center md:text-left text-[#3A1A0E]">
          <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            Únete a nuestra comunidad
          </h2>
          <p className="text-gray-600 font-light max-w-lg">
            Descubre inspiración, procesos de fabricación y novedades en nuestras redes sociales oficiales.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          
          {/* Instagram */}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 group"
            aria-label="Síguenos en Instagram"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
              {/* Instagram Official SVG (Gradient via CSS or fill) */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#feda75"/>
                    <stop offset="0.25" stopColor="#fa7e1e"/>
                    <stop offset="0.5" stopColor="#d62976"/>
                    <stop offset="0.75" stopColor="#962fbf"/>
                    <stop offset="1" stopColor="#4f5bd5"/>
                  </linearGradient>
                </defs>
                <path d="M7.75 2h8.5C19.423 2 22 4.577 22 7.75v8.5c0 3.173-2.577 5.75-5.75 5.75h-8.5C4.577 22 2 19.423 2 16.25v-8.5C2 4.577 4.577 2 7.75 2zm0 2.133c-1.995 0-3.617 1.622-3.617 3.617v8.5c0 1.995 1.622 3.617 3.617 3.617h8.5c1.995 0 3.617-1.622 3.617-3.617v-8.5c0-1.995-1.622-3.617-3.617-3.617h-8.5zm4.25 13.534a5.667 5.667 0 110-11.334 5.667 5.667 0 010 11.334zm0-2.134a3.533 3.533 0 100-7.066 3.533 3.533 0 000 7.066zm5.1-8.566a1.417 1.417 0 11-2.834 0 1.417 1.417 0 012.834 0z" fill="url(#ig-grad)"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-[#d62976] transition-colors">Instagram</span>
          </a>

          {/* TikTok */}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 group"
            aria-label="Síguenos en TikTok"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
              {/* TikTok Official SVG */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.201 1.743l-.002-.001.002-.001a2.895 2.895 0 013.183-4.51v-3.5a6.329 6.329 0 00-5.394 10.692 6.33 6.33 0 0010.857-4.424V8.687a8.182 8.182 0 004.773 1.526V6.79a4.831 4.831 0 01-1.003-.104z" fill="#000000"/>
                <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.201 1.743l-.002-.001.002-.001a2.895 2.895 0 013.183-4.51v-3.5a6.329 6.329 0 00-5.394 10.692 6.33 6.33 0 0010.857-4.424V8.687a8.182 8.182 0 004.773 1.526V6.79a4.831 4.831 0 01-1.003-.104z" fill="#24f6f0" style={{mixBlendMode: 'multiply', transform: 'translate(-1px, -1px)'}}/>
                <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.201 1.743l-.002-.001.002-.001a2.895 2.895 0 013.183-4.51v-3.5a6.329 6.329 0 00-5.394 10.692 6.33 6.33 0 0010.857-4.424V8.687a8.182 8.182 0 004.773 1.526V6.79a4.831 4.831 0 01-1.003-.104z" fill="#ff0050" style={{mixBlendMode: 'multiply', transform: 'translate(1px, 1px)'}}/>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">TikTok</span>
          </a>

          {/* WhatsApp */}
          <a 
            href={`https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hola Melgar Maderas, vengo desde su sitio web.')}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 group"
            aria-label="Contáctanos en WhatsApp"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
              {/* WhatsApp Official SVG */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-[#25D366] transition-colors">WhatsApp</span>
          </a>

        </div>
      </div>
    </section>
  );
}
