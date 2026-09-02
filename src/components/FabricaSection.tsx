'use client';
import React from 'react';
import { WatermarkImage } from './WatermarkImage';

export function FabricaSection() {
  return (
    <section id="fabrica" className="py-24 bg-[#E5DCCB] text-[#3A1A0E]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            Nuestra Fábrica y Materiales
          </h2>
          <p className="text-sm tracking-widest uppercase text-gray-700">Donde la madera se transforma en arte</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Photos place holders */}
          <div className="relative h-[400px] group bg-[#3A1A0E]">
            <WatermarkImage
              src="/assets/products/cama-king-imperial.jpg" // Placeholder until real factory photo is provided
              alt="Fábrica de Muebles"
              className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
              imageClassName="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-black/50 text-white px-6 py-2 border border-white/30 backdrop-blur-sm">
                Fábrica y Elaboración
              </div>
            </div>
          </div>

          <div className="relative h-[400px] group bg-[#3A1A0E]">
            <WatermarkImage
              src="/assets/products/sala-armonia.jpg" // Placeholder for tapestries
              alt="Tapices de Alta Costura"
              className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
              imageClassName="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-black/50 text-white px-6 py-2 border border-white/30 backdrop-blur-sm">
                Tapices Exclusivos
              </div>
            </div>
          </div>

          <div className="relative h-[400px] group bg-[#3A1A0E]">
            <WatermarkImage
              src="/assets/products/escritorio-ejecutivo.jpg" // Placeholder for Sketch
              alt="Boceto Sketch IA"
              className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
              imageClassName="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-black/50 text-white px-6 py-2 border border-white/30 backdrop-blur-sm">
                Bocetos y Diseño (IA)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
