'use client';
import React from 'react';
import { Leaf, Droplets, Ruler, Hammer } from 'lucide-react';
import { WatermarkImage } from './WatermarkImage';

export function BrandPhilosophy() {
  const steps = [
    {
      icon: <Leaf className="w-6 h-6 mb-4 text-[#0D6838]" />,
      title: 'Selección Fina',
      desc: 'Escogemos madera 100% ecuatoriana y maciza: Seike, Roble, Laurel del Oriente y Colorado.'
    },
    {
      icon: <Droplets className="w-6 h-6 mb-4 text-[#0D6838]" />,
      title: 'Secado al Horno',
      desc: 'Control estricto de humedad (8-10%) para garantizar estructuras firmes, indeformables y libres de polillas.'
    },
    {
      icon: <Ruler className="w-6 h-6 mb-4 text-[#0D6838]" />,
      title: 'Diseño Ergonómico',
      desc: 'Muebles planeados bajo estándares arquitectónicos y ergonomía moderna para máximo confort.'
    },
    {
      icon: <Hammer className="w-6 h-6 mb-4 text-[#0D6838]" />,
      title: 'Acabado Poliuretano',
      desc: 'Protección de alta gama, con laca catalizada resistente a rayones y líquidos.'
    }
  ];

  return (
    <section id="ebanisteria" className="py-32 bg-[#FAF7F2] text-[#3A1A0E]">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-light mb-8" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              El Arte de la <br/> Ebanistería Fina
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-12">
              En Melgar Maderas, no hacemos muebles en serie; construimos legados. Cada pieza es el resultado de un meticuloso proceso artesanal que comienza en el bosque y culmina en su hogar.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {steps.map((step, idx) => (
                <div key={idx} className="border-l border-gray-300 pl-6">
                  {step.icon}
                  <h4 className="text-xl mb-2" style={{ fontFamily: '"Cormorant Garamond", serif' }}>{step.title}</h4>
                  <p className="text-sm text-gray-500 font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative h-[80vh]">
            <div className="absolute inset-0 bg-[#0D6838] transform translate-x-4 translate-y-4"></div>
            <div className="relative w-full h-full bg-gray-200 overflow-hidden">
              <WatermarkImage
                src="/assets/products/escritorio-ejecutivo.jpg"
                alt="Proceso Ebanista de Melgar Maderas"
                className="w-full h-full"
                imageClassName="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
