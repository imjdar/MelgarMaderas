'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { SecurityGuard } from './SecurityGuard';
import { WatermarkImage } from './WatermarkImage';

const slides = [
  {
    image: '/assets/products/sala-linea-premium.jpg',
    title: 'Nueva Colección Seike',
    subtitle: 'Muebles que traspasan épocas'
  },
  {
    image: '/assets/products/cama-king-imperial.jpg',
    title: 'Calidez y Textura',
    subtitle: 'Roble macizo secado al horno'
  },
  {
    image: '/assets/products/comedor-elegance.jpg',
    title: 'Ebanistería Fina',
    subtitle: 'Acabados en poliuretano de alta resistencia'
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
    <section className="relative w-full h-[90vh] bg-[#FDFBF7] overflow-hidden flex items-center justify-center">
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
              imageClassName="object-center"
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
          className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 drop-shadow-lg"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          {slides[current].title}
        </h2>
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
      
      <SecurityGuard />
    </section>
  );
}
