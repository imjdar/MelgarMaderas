'use client';
import React from 'react';
import { WatermarkImage } from './WatermarkImage';

export function NosotrosSection() {
  return (
    <section id="nosotros" className="relative min-h-screen flex items-center py-24 overflow-hidden">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <WatermarkImage
          src="/assets/products/comedor-artesanal.jpg"
          alt="Maderas Melgar - Diseño Interior"
          className="w-full h-full"
          imageClassName="object-cover scale-105 blur-[6px]"
        />
        {/* Elegant dark overlay for contrast with slight blur */}
        <div className="absolute inset-0 bg-[#1A110B]/70"></div>
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-12 w-full text-center">
        
        <div className="flex flex-col gap-12 items-center">
          
          {/* Main Text (Quiéne Somos) */}
          <div className="w-full text-white">
            <span className="text-[#C59B27] text-sm font-bold tracking-[0.2em] uppercase mb-6 block">
              Historia y Tradición
            </span>
            <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Vivir a la moda, <br/>
              <span className="italic text-gray-300">crear diseños atemporales</span>
            </h2>
            <div className="w-24 h-[1px] bg-[#C59B27] mb-12 mx-auto"></div>
            
            <h3 id="quienes-somos" className="text-4xl font-light mb-6 text-white" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Quiénes Somos
            </h3>
            <p className="text-gray-300 font-light leading-relaxed text-lg mb-6">
              Maderas Melgar es una empresa ecuatoriana con décadas de experiencia en el mercado de mobiliario de alta gama. Desde 1996, nos hemos dedicado a la creación de piezas únicas que combinan la tradición artesanal con el diseño contemporáneo, utilizando maderas macizas de la más alta calidad.
            </p>
            <p className="text-gray-300 font-light leading-relaxed text-lg">
              Seleccionamos cuidadosamente las mejores maderas ecuatorianas como Seike, Roble, Laurel del Oriente y Colorado, transformándolas en muebles que cuentan una historia de elegancia y durabilidad.
            </p>
          </div>

          {/* Misión */}
          <div id="mision" className="w-full text-white mt-8">
            <h3 className="text-4xl font-light mb-6 text-white" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Nuestra Misión
            </h3>
            <p className="text-gray-300 font-light leading-relaxed text-lg">
              Fabricar muebles que traspasan épocas, ofreciendo calidad, confort y exclusividad a cada uno de nuestros clientes mediante procesos de ebanistería fina y acabados impecables. Nuestro objetivo es que cada pieza sea una obra de arte funcional en su hogar.
            </p>
          </div>

          {/* Visión */}
          <div id="vision" className="w-full text-white mt-8">
            <h3 className="text-4xl font-light mb-6 text-white" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Nuestra Visión
            </h3>
            <p className="text-gray-300 font-light leading-relaxed text-lg">
              Ser referentes en diseño y fabricación de mobiliario a medida, manteniendo nuestro compromiso con la artesanía, la durabilidad y la elegancia atemporal. Buscamos inspirar espacios que reflejen la personalidad y el buen gusto de quienes nos eligen.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
