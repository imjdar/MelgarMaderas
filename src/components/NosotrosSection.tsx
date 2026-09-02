'use client';
import React from 'react';

export function NosotrosSection() {
  return (
    <section id="nosotros" className="py-24 bg-[#FDFBF7] text-[#3A1A0E]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        <span className="text-[#0D6838] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
          Desde 1996
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
          Vivir a la moda <br/>
          Crear diseños contemporáneos pero atemporales
        </h2>
        <div className="w-24 h-[1px] bg-[#C59B27] mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left mt-16">
          <div>
            <h3 id="quienes-somos" className="text-3xl font-light mb-6" style={{ fontFamily: '"Cormorant Garamond", serif' }}>Quiénes Somos</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Maderas Melgar es una empresa ecuatoriana con décadas de experiencia en el mercado de mobiliario de alta gama. Desde 1996, nos hemos dedicado a la creación de piezas únicas que combinan la tradición artesanal con el diseño contemporáneo, utilizando maderas macizas de la más alta calidad.
            </p>
          </div>
          <div id="mision">
            <h3 className="text-3xl font-light mb-6" style={{ fontFamily: '"Cormorant Garamond", serif' }}>Misión y Visión</h3>
            <p className="text-gray-600 font-light leading-relaxed mb-4">
              <strong>Nuestra Misión:</strong> Fabricar muebles que traspasan épocas, ofreciendo calidad, confort y exclusividad a cada uno de nuestros clientes mediante procesos de ebanistería fina y acabados impecables.
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              <strong>Nuestra Visión:</strong> Ser referentes en diseño y fabricación de mobiliario a medida, manteniendo nuestro compromiso con la artesanía, la durabilidad y la elegancia atemporal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
