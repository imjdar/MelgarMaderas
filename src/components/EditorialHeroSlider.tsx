'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

import { WatermarkImage } from './WatermarkImage';

const slides = [
  {
    image: '/assets/products/sala-halem.jpeg',
    subtitle: 'Maderas Melgar - Lo que nos mueve',
    title: 'Crear para permanecer',
    description: 'Diseñamos y fabricamos muebles que combinan materiales nobles, oficio y diseño para crear espacios cálidos, funcionales y atemporales.'
  },
  {
    image: '/assets/products/dormitorio-imperial.jpeg',
    subtitle: 'Roble macizo secado al horno',
    title: 'Calidez y Textura',
    description: 'Maderas seleccionadas para acompañar la vida de quienes las habitan.'
  },
  {
    image: '/assets/products/comedor-sorento.jpeg',
    subtitle: 'Ebanistería Fina',
    title: 'Diseños Atemporales',
    description: 'Piezas pensadas para ser parte de la historia de su hogar.'
  }
];

export function EditorialHeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] bg-[#120C08] overflow-hidden flex items-center justify-center">
      {/* Protected Image Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/20 z-10" />
            <WatermarkImage
              src={slide.image}
              alt={slide.title}
              className="w-full h-full"
              imageClassName="object-contain object-center"
            />
          </div>
        ))}
      </div>

      {/* Typography Overlay */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
        <span 
          className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-white/90"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {slides[current].subtitle}
        </span>
        <h2 
          className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 drop-shadow-lg"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          {slides[current].title}
        </h2>
        {slides[current].description && (
          <p className="text-lg md:text-xl font-light mb-8 max-w-2xl text-white/90 drop-shadow-md">
            {slides[current].description}
          </p>
        )}
        <button 
          className="group flex items-center gap-3 text-sm uppercase tracking-widest border-b border-white pb-2 hover:text-[#C59B27] hover:border-[#C59B27] transition-all duration-300"
          onClick={() => {
            document.getElementById('colecciones')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Descubrir
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 transition-all duration-500 ${
              idx === current ? 'w-12 bg-white' : 'w-4 bg-white/40'
            }`}
            aria-label={`Ir a diapositiva ${idx + 1}`}
          />
        ))}
      </div>
      

    </section>
  );
}
