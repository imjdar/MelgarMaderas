'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { ShieldCheck } from 'lucide-react';

interface WatermarkImageProps extends Omit<ImageProps, 'onError'> {
  domainWatermark?: string;
  showProtectionBadge?: boolean;
}

export const WatermarkImage: React.FC<WatermarkImageProps> = ({
  src,
  alt,
  domainWatermark = 'melgarmaderas.com.ec',
  showProtectionBadge = false,
  style,
  className,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div 
      className={`watermark-image-container ${className || ''}`}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      style={{
        position: 'relative',
        overflow: 'hidden',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        ...style
      }}
    >
      {hasError ? (
        <div 
          style={{
            width: '100%',
            height: '100%',
            minHeight: '260px',
            backgroundColor: '#2A1810',
            background: 'linear-gradient(135deg, #3A1A0E 0%, #1A0C06 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#E5DCCB',
            padding: '2rem',
            textAlign: 'center'
          }}
        >
          <div style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#C59B27',
            marginBottom: '0.5rem'
          }}>
            Maderas Melgar
          </div>
          <div style={{ fontSize: '1rem', fontStyle: 'italic', opacity: 0.9 }}>
            {alt}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#8E847A', marginTop: '0.5rem' }}>
            Diseño Exclusivo • {domainWatermark}
          </div>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          {...props}
        />
      )}

      {/* Capa de Marca de Agua Indeleble Anti-Copia */}
      <div 
        style={{
          position: 'absolute',
          bottom: '0.75rem',
          right: '0.75rem',
          backgroundColor: 'rgba(15, 12, 10, 0.75)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          color: '#FAF8F5',
          border: '1px solid rgba(197, 155, 39, 0.3)',
          padding: '0.35rem 0.75rem',
          borderRadius: '4px',
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          pointerEvents: 'none',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
        }}
      >
        <ShieldCheck size={12} color="#C59B27" />
        <span>{domainWatermark}</span>
      </div>

      {/* Marca de Agua Diagonal Sutil Central */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 9,
          opacity: 0.08,
          transform: 'rotate(-25deg)'
        }}
      >
        <span style={{
          fontSize: 'clamp(1.5rem, 4vw, 3rem)',
          fontWeight: 900,
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          whiteSpace: 'nowrap'
        }}>
          {domainWatermark}
        </span>
      </div>
    </div>
  );
};
