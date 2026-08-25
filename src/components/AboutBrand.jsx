import React from 'react';
import { Award, Hammer, Sparkles, Check } from 'lucide-react';

export const AboutBrand = () => {
  return (
    <section 
      id="nosotros" 
      style={{ 
        padding: '100px 0', 
        backgroundColor: 'var(--color-surface-white)',
        borderTop: '1px solid var(--glass-border)'
      }}
    >
      <div className="container">
        
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '4rem',
            alignItems: 'center'
          }}
        >
          {/* Image & Craft Gallery Card */}
          <div style={{ position: 'relative' }}>
            <div 
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid var(--glass-border)'
              }}
            >
              <img 
                src="/assets/products/biblioteca-maestria.jpg" 
                alt="Maestría en Carpintería Maderas Melgar"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Overlaid Brand Heritage Box */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                backgroundColor: 'var(--color-wood-dark)',
                color: '#FFFFFF',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                maxWidth: '220px'
              }}
            >
              <span className="font-script" style={{ fontSize: '1.5rem', color: 'var(--color-gold-accent)', display: 'block' }}>
                Tradición & Pasión
              </span>
              <span style={{ fontSize: '0.85rem', color: '#E5DCCF' }}>
                Carpintería fina y tratada para el hogar ecuatoriano.
              </span>
            </div>
          </div>

          {/* Text Content Column */}
          <div>
            <div className="section-tag">
              <Hammer size={14} />
              <span>Nuestra Historia & Compromiso</span>
            </div>

            <h2 className="section-title">
              Artesanía Fina en Madera Maciza
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              En **Maderas Melgar**, entendemos que el mobiliario no es simplemente un elemento decorativo; es el escenario donde transcurre la vida familiar y donde se construyen recuerdos perdurables.
            </p>

            <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
              Nos especializamos en seleccionar las maderas nobles más apreciadas del Ecuador (*Seike, Laurel, Roble*), tratándolas con tecnología de secado al horno que estabiliza la fibra vegetal y evita cualquier tipo de torcedura o deterioro futuro.
            </p>

            {/* Value Checkpoints */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--color-green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={16} color="#0D6838" />
                </div>
                <span style={{ fontWeight: '600', color: 'var(--color-wood-dark)', fontSize: '0.95rem' }}>
                  Ensambles tradicionales tipo espiga y caja sin tornillos visibles
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--color-green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={16} color="#0D6838" />
                </div>
                <span style={{ fontWeight: '600', color: 'var(--color-wood-dark)', fontSize: '0.95rem' }}>
                  Lado posterior y estructuras internas tratadas contra plagas e insectos
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--color-green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={16} color="#0D6838" />
                </div>
                <span style={{ fontWeight: '600', color: 'var(--color-wood-dark)', fontSize: '0.95rem' }}>
                  Acabados poliuretánicos respetuosos con la salud y el medio ambiente
                </span>
              </div>
            </div>

            {/* Corporate Slogan Highlight Banner */}
            <div
              style={{
                backgroundColor: 'var(--color-cream-bg)',
                borderLeft: '4px solid var(--color-green-primary)',
                padding: '1.25rem 1.5rem',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0'
              }}
            >
              <p className="font-script" style={{ fontSize: '1.4rem', color: 'var(--color-green-primary)', fontWeight: '600' }}>
                “Muebles que traspasan épocas”
              </p>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                Firma oficial de identidad corporativa Maderas Melgar • melgarmaderas.com.ec
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
