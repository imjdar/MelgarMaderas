import React, { useState } from 'react';

interface WatermarkImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  watermarkText?: string;
  onShieldClick?: () => void;
}

export const WatermarkImage: React.FC<WatermarkImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  aspectRatio = '4/3',
  watermarkText = 'melgarmaderas.com.ec',
  onShieldClick
}) => {
  const [imgError, setImgError] = useState(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <div 
      className={`protected-image-container ${className}`} 
      style={{ aspectRatio, backgroundColor: '#251108' }}
      onContextMenu={handleContextMenu}
    >
      {imgError ? (
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3A1A0E 0%, #1A0D07 100%)',
          color: '#C5A059',
          padding: '1.5rem',
          textAlign: 'center'
        }}>
          <span style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.3rem', color: '#ffffff' }}>
            {alt}
          </span>
          <span style={{ fontSize: '0.75rem', color: '#DCD2C3' }}>
            Maderas Melgar • Mueble 100% Madera Maciza
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setImgError(true)}
          onDragStart={handleDragStart}
          onContextMenu={handleContextMenu}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
            userSelect: 'none',
            WebkitUserSelect: 'none'
          } as React.CSSProperties}
        />
      )}

      <div className="watermark-overlay">
        <div className="watermark-diagonal-text">
          {watermarkText} • Maderas Melgar
        </div>
        <div className="watermark-badge">
          PROPIEDAD DE MELGARMADERAS.COM.EC
        </div>
      </div>

      <div 
        className="transparent-shield"
        onClick={onShieldClick}
        onContextMenu={handleContextMenu}
        title="Imagen protegida por Derechos de Autor de Maderas Melgar (melgarmaderas.com.ec)"
      />
    </div>
  );
};
