'use client';
import React from 'react';
import { WatermarkImage } from './WatermarkImage';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'salas',
    title: 'Salas',
    description: 'Espacios diseñados para el confort y la convivencia. Fabricados en roble y laurel del oriente, garantizando una estructura indeformable con tapices de alta costura.',
    image: '/assets/products/sala-armonia.jpg',
    reverse: false
  },
  {
    id: 'comedores',
    title: 'Comedores',
    description: 'El corazón del hogar. Mesas macizas en Seike tratadas térmicamente, diseñadas para reunir a la familia por generaciones. Acabado lacado brillante y mate.',
    image: '/assets/products/comedor-artesanal.jpg',
    reverse: true
  },
  {
    id: 'dormitorios',
    title: 'Dormitorios',
    description: 'Santuarios de descanso. Diseños ergonómicos y cálidos, combinando tableros maderados texturizados con estructuras robustas para un soporte perfecto.',
    image: '/assets/products/tocador-luxury.jpg',
    reverse: false
  }
];

export function CategoryShowcase() {
  return (
    <section id="colecciones" className="py-24 bg-[#FDFBF7] text-[#3A1A0E]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            Colecciones por Ambientes
          </h2>
          <p className="text-sm tracking-widest uppercase text-gray-500">Mobiliario a medida para cada espacio</p>
        </div>

        <div className="space-y-32">
          {categories.map((cat, idx) => (
            <div 
              key={cat.id} 
              id={cat.id}
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${cat.reverse ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Block */}
              <div className="w-full md:w-3/5 h-[50vh] md:h-[70vh] relative group overflow-hidden bg-[#FDFBF7]">
                  <WatermarkImage
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full"
                    imageClassName="object-contain object-center transition-transform duration-1000 group-hover:scale-105"
                  />
              </div>

              {/* Text Block */}
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <span className="text-[#0D6838] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-4xl lg:text-5xl font-light mb-6" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  {cat.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 font-light text-lg">
                  {cat.description}
                </p>
                
                <button 
                  className="group flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-[#3A1A0E] w-max hover:text-[#0D6838] transition-colors"
                  onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Catálogo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
