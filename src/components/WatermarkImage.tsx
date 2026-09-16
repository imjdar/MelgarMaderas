'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { ShieldCheck } from 'lucide-react';

interface WatermarkImageProps extends Omit<ImageProps, 'onError'> {
  domainWatermark?: string;
  watermarkText?: string;
  showProtectionBadge?: boolean;
  aspectRatio?: string;
  onShieldClick?: () => void;
  imageClassName?: string;
}

export const WatermarkImage: React.FC<WatermarkImageProps> = ({
  src,
  alt,
  domainWatermark = 'melgarmaderas.com.ec',
  watermarkText,
  showProtectionBadge = false,
  aspectRatio,
  onShieldClick,
  imageClassName,
  style,
  className,
  width = 800,
  height = 600,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const watermarkLabel = watermarkText || domainWatermark;

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
        aspectRatio: aspectRatio || undefined,
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
            Diseño Exclusivo
          </div>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          onError={() => setHasError(true)}
          className={`w-full h-full ${imageClassName?.includes('object-') ? imageClassName : 'object-contain ' + (imageClassName || '')}`}
          {...props}
        />
      )}


    </div>
  );
};
