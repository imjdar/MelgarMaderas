import React from 'react';

/**
 * WatermarkImage Component
 * Implements anti-piracy protection for Melgar Maderas product images:
 * - Dynamic domain diagonal watermark overlay (melgarmaderas.com.ec)
 * - Transparent shield layer preventing direct right-click image saving
 * - Pointer events and drag protection
 */
export const WatermarkImage = ({ 
  src, 
  alt, 
  className = '', 
  aspectRatio = '4/3',
  watermarkText = 'melgarmaderas.com.ec',
  onShieldClick = null 
}) => {
  const handleContextMenu = (e) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <div 
      className={`protected-image-container ${className}`} 
      style={{ aspectRatio }}
      onContextMenu={handleContextMenu}
    >
      {/* Actual Product Photo */}
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
          WebkitUserDrag: 'none'
        }}
      />

      {/* Layer 1: Diagonal Domain Watermark Overlay */}
      <div className="watermark-overlay">
        <div className="watermark-diagonal-text">
          {watermarkText} • Maderas Melgar
        </div>
        <div className="watermark-badge">
          PROPIEDAD DE MELGARMADERAS.COM.EC
        </div>
      </div>

      {/* Layer 2: Transparent Click Shield (Interceptors right click & drag) */}
      <div 
        className="transparent-shield"
        onClick={onShieldClick}
        onContextMenu={handleContextMenu}
        title="Imagen protegida por Derechos de Autor de Maderas Melgar (melgarmaderas.com.ec)"
      />
    </div>
  );
};
