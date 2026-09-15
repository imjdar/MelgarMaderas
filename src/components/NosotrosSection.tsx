'use client';
import React from 'react';
import { WatermarkImage } from './WatermarkImage';

export function NosotrosSection() {
  return (
    <section id="nosotros" className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <WatermarkImage
          src="/assets/products/comedor-artesanal.jpg"
          alt="Maderas Melgar - Diseño Interior"
          className="w-full h-full"
          imageClassName="object-cover scale-105 blur-[6px]"
        />
        <div className="absolute inset-0 bg-[#1A110B]/80"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 w-full">
        
        <div className="flex flex-col gap-16 items-center text-center">
          
          {/* Header */}
          <div className="w-full text-white max-w-3xl">
            <span className="text-[#C59B27] text-sm font-bold tracking-[0.2em] uppercase mb-6 block">
              Maderas Melgar
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight italic" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              &quot;Hay muebles que llenan un espacio.<br/>Y hay muebles que terminan formando parte de una historia&quot;
            </h2>
            <p className="text-gray-300 font-light leading-relaxed text-xl">
              Desde 1996 transformamos maderas seleccionadas en piezas pensadas para acompañar la vida de quienes las habitan.
            </p>
            <div className="w-24 h-[1px] bg-[#C59B27] mt-12 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left w-full mt-8">
            {/* DESDE 1996 */}
            <div className="text-white">
              <h3 className="text-3xl font-light mb-4 text-[#C59B27]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                Desde 1996
              </h3>
              <h4 className="text-xl font-medium mb-4 text-white">Una historia construida en madera.</h4>
              <p className="text-gray-300 font-light leading-relaxed text-lg mb-4">
                Todo comenzó con un sueño, transformar la madera, un material noble y lleno de vida, en piezas capaces de convertirse en parte de la historia de un hogar.
              </p>
              <p className="text-gray-300 font-light leading-relaxed text-lg mb-4">
                Desde nuestros primeros muebles, fuimos construyendo algo que iba mucho más allá de un producto: una forma de trabajar basada en el cuidado por cada detalle, el compromiso y la calidad.
              </p>
              <p className="text-gray-300 font-light leading-relaxed text-lg">
                Con el tiempo, ese sueño creció.
              </p>
            </div>

            {/* LOS PRIMEROS AÑOS */}
            <div className="text-white">
              <h3 className="text-3xl font-light mb-4 text-[#C59B27]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                Los Primeros Años
              </h3>
              <h4 className="text-xl font-medium mb-4 text-white">Todo gran proyecto comienza con una idea.</h4>
              <p className="text-gray-300 font-light leading-relaxed text-lg mb-4">
                Nuestros primeros muebles nacieron de la pasión por transformar la madera y del deseo de crear piezas diferentes.
              </p>
              <p className="text-gray-300 font-light leading-relaxed text-lg mb-4">
                La respuesta de nuestros clientes nos impulsó a seguir creciendo. Lo que comenzó en un pequeño local se convirtió en nuestro propio espacio de producción, permitiéndonos ampliar nuestro trabajo y generar oportunidades para más personas en Ecuador.
              </p>
              <p className="text-gray-300 font-light leading-relaxed text-lg">
                Cada pieza nos enseñó algo nuevo.<br/>Cada cliente nos dio una razón para continuar.
              </p>
            </div>

            {/* EVOLUCIÓN */}
            <div className="text-white">
              <h3 className="text-3xl font-light mb-4 text-[#C59B27]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                Evolución
              </h3>
              <p className="text-gray-300 font-light leading-relaxed text-lg mb-4">
                Con los años, nuestro oficio evolucionó junto con nosotros. Seleccionamos cuidadosamente cada material para encontrar el equilibrio entre diseño, resistencia, textura y confort.
              </p>
              <p className="text-gray-300 font-light leading-relaxed text-lg mb-4">
                Trabajamos con maderas sólidas como laurel negro del Oriente, seike, manzano colorado y roble, acompañadas de textiles y tapices seleccionados como antifluido, chenil, microfibra y microcuero.
              </p>
              <p className="text-white font-medium leading-relaxed text-lg italic">
                No elegimos un material únicamente por cómo se ve, Elegimos cómo queremos que se sienta.
              </p>
            </div>

            {/* HOY */}
            <div className="text-white">
              <h3 className="text-3xl font-light mb-4 text-[#C59B27]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                Hoy
              </h3>
              <h4 className="text-xl font-medium mb-4 text-white">Una marca que sigue creciendo sin olvidar de dónde viene.</h4>
              <p className="text-gray-300 font-light leading-relaxed text-lg mb-4">
                Hoy, Maderas Melgar es una empresa ecuatoriana que ha construido su camino alrededor de una pasión que permanece intacta: crear muebles que transformen los espacios y hagan de ellos algo propio.
              </p>
              <p className="text-gray-300 font-light leading-relaxed text-lg mb-4">
                Somos una PYME que ha crecido gracias al trabajo, la confianza de nuestros clientes y las manos de quienes hacen posible cada pieza. Nuestra historia está presente en cada hogar que hemos ayudado a transformar, en cada espacio que hemos vestido y en cada mueble que ha encontrado un lugar en la vida de alguien.
              </p>
              <p className="text-gray-300 font-light leading-relaxed text-lg">
                30 años después, seguimos haciendo lo que nos inspira desde el principio: <strong>Transformar madera en espacios que cuentan historias.</strong>
              </p>
            </div>
          </div>
          
          <div className="w-full text-center mt-12 p-8 border border-[#C59B27]/30 bg-black/20 rounded-lg backdrop-blur-sm">
            <p className="text-[#E5DCCB] text-xl md:text-2xl font-light tracking-wide" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              NUESTRAS INSTALACIONES Y EQUIPO NOS PERMITEN REALIZAR PROYECTOS PERSONALIZADOS.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
