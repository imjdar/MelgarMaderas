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
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setAnimating(false);
      }, 500); // text transition duration
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] bg-[#FAFAFA] dark:bg-[#120C08] overflow-hidden flex items-center justify-center transition-colors duration-500">
      
      {/* Premium Image Slider (Ken Burns Effect) */}
      <div className="absolute inset-0 z-0 bg-[#FAFAFA] dark:bg-[#120C08]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Blur Image for Personality */}
            <div className="absolute inset-0 w-full h-full">
              <WatermarkImage
                src={slide.image}
                alt={`${slide.title} background`}
                className="w-full h-full opacity-30"
                imageClassName="object-cover scale-110 blur-[8px]"
              />
            </div>
            
            {/* Subtle Gradient Overlay for Text Readability & Image Blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-white/40 to-white/20 dark:from-[#120C08] dark:via-black/50 dark:to-black/30 z-10" />
            
            {/* Main Sharp Image */}
            <div className={`relative z-20 w-full h-full transition-transform duration-[8000ms] ease-out ${
              index === current ? 'scale-105' : 'scale-100'
            }`}>
              <WatermarkImage
                src={slide.image}
                alt={slide.title}
                className="w-full h-full"
                imageClassName="object-contain object-center drop-shadow-xl"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Typography Overlay (Slide Up Animation) */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-[40vh]">
        <div className={`transition-all duration-700 ease-out transform ${
          animating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
        }`}>
          <div className="bg-white/85 dark:bg-[#120C08]/85 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-[#22170F]/50">
            <span 
              className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 text-[#C59B27] block font-semibold"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {slides[current].subtitle}
            </span>
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-black dark:text-white"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              {slides[current].title}
            </h2>
            {slides[current].description && (
              <p className="text-lg md:text-xl font-medium mb-8 max-w-2xl text-gray-800 dark:text-gray-200 mx-auto">
                {slides[current].description}
              </p>
            )}
            <button 
              className="group flex items-center gap-3 text-sm uppercase tracking-widest border-b border-black dark:border-white pb-2 text-black dark:text-white hover:text-[#C59B27] dark:hover:text-[#C59B27] hover:border-[#C59B27] dark:hover:border-[#C59B27] transition-all duration-300 mx-auto font-medium"
              onClick={() => {
                document.getElementById('colecciones')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Descubrir
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (idx !== current) {
                setAnimating(true);
                setTimeout(() => {
                  setCurrent(idx);
                  setAnimating(false);
                }, 500);
              }
            }}
            className={`h-1 transition-all duration-500 ${
              idx === current ? 'w-12 bg-black dark:bg-white' : 'w-4 bg-gray-400 hover:bg-black dark:bg-gray-600 dark:hover:bg-white'
            }`}
            aria-label={`Ir a diapositiva ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
