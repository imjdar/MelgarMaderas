'use client';
import React from 'react';
import Image from 'next/image';
import { WatermarkImage } from './WatermarkImage';

export function NosotrosSection() {
  return (
    <div className="w-full bg-white dark:bg-[#120C08] text-gray-900 dark:text-gray-100 transition-colors duration-500">
      
      {/* 1. HERO SECTION (Lo que nos mueve / Misión) */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <WatermarkImage
            src="/assets/products/comedor-artesanal.jpg"
            alt="Maderas Melgar - Diseño Interior"
            className="w-full h-full"
            imageClassName="object-cover scale-105 blur-[2px] opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white dark:from-[#120C08]/90 dark:via-[#120C08]/80 dark:to-[#120C08]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-20">
          <span className="text-[#C59B27] text-sm font-bold tracking-[0.3em] uppercase mb-6 block drop-shadow-md">
            Lo que nos mueve
          </span>
          <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight italic text-black dark:text-white drop-shadow-sm" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            &quot;Hay muebles que llenan un espacio.<br/>Y hay muebles que terminan formando parte de una historia&quot;
          </h1>
          <p className="text-black dark:text-white font-medium leading-relaxed text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-sm">
            Diseñamos y fabricamos muebles que combinan materiales nobles, oficio y diseño para crear espacios cálidos, funcionales y atemporales.
          </p>
          <div className="w-24 h-[1px] bg-[#C59B27] mt-12 mx-auto"></div>
        </div>
      </section>

      {/* 2. TIMELINE: DESDE 1996 (Image Right) */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Blur */}
        <div className="absolute inset-0 z-0">
          <WatermarkImage
            src="/assets/nosotros/Nosotros1.jpg"
            alt="Fondo"
            className="w-full h-full opacity-10"
            imageClassName="object-cover scale-110 blur-[16px]"
          />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-[#C59B27] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Desde 1996
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-black dark:text-white" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Una historia construida en madera.
            </h2>
            <div className="space-y-6 text-black dark:text-gray-100 font-medium text-lg leading-relaxed">
              <p>
                Todo comenzó con un sueño, transformar la madera, un material noble y lleno de vida, en piezas capaces de convertirse en parte de la historia de un hogar.
              </p>
              <p>
                Desde nuestros primeros muebles, fuimos construyendo algo que iba mucho más allá de un producto: una forma de trabajar basada en el cuidado por cada detalle, el compromiso y la calidad.
              </p>
              <p className="text-black dark:text-white italic font-semibold">
                Con el tiempo, ese sueño creció.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]">
            <div className="absolute inset-0 bg-[#C59B27]/10 translate-x-4 translate-y-4 rounded-lg"></div>
            <Image 
              src="/assets/nosotros/Nosotros1.jpg" 
              alt="Taller Maderas Melgar 1996" 
              fill 
              className="object-cover rounded-lg shadow-2xl relative z-10"
            />
          </div>
        </div>
        </div>
      </section>

      {/* 3. TIMELINE: LOS PRIMEROS AÑOS & EVOLUCION (Image Left) */}
      <section className="py-24 bg-[#FAFAFA] dark:bg-[#1A110B] relative overflow-hidden border-y border-gray-100 dark:border-[#22170F]">
        {/* Background Blur */}
        <div className="absolute inset-0 z-0">
          <WatermarkImage
            src="/assets/nosotros/Nosotros2.jpg"
            alt="Fondo"
            className="w-full h-full opacity-10"
            imageClassName="object-cover scale-110 blur-[16px]"
          />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <span className="text-[#C59B27] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                Los Primeros Años & Evolución
              </span>
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-black dark:text-white" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                Todo gran proyecto comienza con una idea.
              </h2>
              <div className="space-y-6 text-black dark:text-gray-100 font-medium text-lg leading-relaxed">
                <p>
                  Nuestros primeros muebles nacieron de la pasión por transformar la madera y del deseo de crear piezas diferentes. La respuesta de nuestros clientes nos impulsó a seguir creciendo. Lo que comenzó en un pequeño local se convirtió en nuestro propio espacio de producción.
                </p>
                <p>
                  Con los años, nuestro oficio evolucionó junto con nosotros. Seleccionamos cuidadosamente cada material para encontrar el equilibrio entre diseño, resistencia, textura y confort. Trabajamos con maderas sólidas como laurel negro del Oriente, seike, manzano colorado y roble.
                </p>
                <p className="text-black dark:text-white font-semibold italic border-l-2 border-[#C59B27] pl-4">
                  "No elegimos un material únicamente por cómo se ve, Elegimos cómo queremos que se sienta."
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]">
              <div className="absolute inset-0 bg-[#C59B27]/10 -translate-x-4 translate-y-4 rounded-lg"></div>
              <Image 
                src="/assets/nosotros/Nosotros2.jpg" 
                alt="Evolución Maderas Melgar" 
                fill 
                className="object-cover rounded-lg shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. TIMELINE: HOY (Image Right) */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Blur */}
        <div className="absolute inset-0 z-0">
          <WatermarkImage
            src="/assets/nosotros/Nosotros3.png"
            alt="Fondo"
            className="w-full h-full opacity-10"
            imageClassName="object-cover scale-110 blur-[16px]"
          />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-[#C59B27] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Hoy
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-black dark:text-white" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Una marca que sigue creciendo sin olvidar de dónde viene.
            </h2>
            <div className="space-y-6 text-black dark:text-gray-100 font-medium text-lg leading-relaxed">
              <p>
                Hoy, Maderas Melgar es una empresa ecuatoriana que ha construido su camino alrededor de una pasión que permanece intacta: crear muebles que transformen los espacios y hagan de ellos algo propio.
              </p>
              <p>
                Somos una PYME que ha crecido gracias al trabajo, la confianza de nuestros clientes y las manos de quienes hacen posible cada pieza. Nuestra historia está presente en cada hogar que hemos ayudado a transformar.
              </p>
              <p className="text-black dark:text-white font-semibold">
                30 años después, seguimos haciendo lo que nos inspira desde el principio: <br/>
                <span className="text-[#C59B27] italic text-2xl mt-4 block" style={{ fontFamily: '"Cormorant Garamond", serif' }}>Transformar madera en espacios que cuentan historias.</span>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative h-[250px] md:h-[300px]">
            <div className="absolute inset-0 bg-[#C59B27]/10 translate-x-4 -translate-y-4 rounded-lg"></div>
            <Image 
              src="/assets/nosotros/Nosotros3.png" 
              alt="Maderas Melgar Hoy" 
              fill 
              className="object-contain rounded-lg shadow-2xl relative z-10"
            />
          </div>
        </div>
        </div>
      </section>

    </div>
  );
}
