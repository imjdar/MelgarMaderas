import React from 'react';

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
      style={{ aspectRatio }}
      onContextMenu={handleContextMenu}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
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
