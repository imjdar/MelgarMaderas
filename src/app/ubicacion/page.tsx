import React from 'react';
import { MapPin } from 'lucide-react';
import { SocialContactSection } from '@/components/SocialContactSection';

export default function UbicacionPage() {
  return (
    <section className="py-24 bg-[#FDFBF7] text-[#3A1A0E]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            Contacto y Ubicaciones
          </h1>
          <p className="text-sm tracking-widest uppercase text-gray-500">Visítenos en Quito y Guayaquil</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Quito */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              <MapPin className="text-[#0D6838]" size={24} /> Sede Quito
            </h2>
            <div className="w-full aspect-video md:aspect-square lg:aspect-[4/3] bg-gray-200 shadow-lg relative overflow-hidden border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7997387258384!2d-78.5005331!3d-0.1336545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b221063e75f%3A0x9ec77b3b4c82a1b1!2sMaderas%20Melgar!5e0!3m2!1ses-ES!2sec!4v1700000000000!5m2!1ses-ES!2sec" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
            <p className="mt-6 text-gray-600 font-light">
              Fábrica principal y sala de exhibición en la capital. Descubra nuestras colecciones completas y converse con nuestros asesores de diseño.
            </p>
          </div>

          {/* Guayaquil */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              <MapPin className="text-[#0D6838]" size={24} /> Sede Guayaquil (Mall del Norte)
            </h2>
            <div className="w-full aspect-video md:aspect-square lg:aspect-[4/3] bg-gray-200 shadow-lg relative overflow-hidden border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.883726217431!2d-79.9126513!3d-2.0950004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d131c5a55f2c9%3A0xb686106545de2043!2sMall%20del%20Norte!5e0!3m2!1ses-ES!2sec!4v1700000000000!5m2!1ses-ES!2sec" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
            <p className="mt-6 text-gray-600 font-light">
              Nuestra más reciente sucursal ubicada en el centro comercial Mall del Norte. Acceso cómodo y seguro para conocer nuestras novedades.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <SocialContactSection />
      </div>
    </section>
  );
}
