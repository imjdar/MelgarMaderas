'use client';

import React, { useEffect, useState } from 'react';
import { ShieldAlert } from 'lucide-react';

/**
 * Componente SecurityGuard
 * Modulo de ciberseguridad en el cliente que bloquea atajos de inspección y clic derecho.
 */
export const SecurityGuard: React.FC = () => {
  const [securityNotice, setSecurityNotice] = useState<string | null>(null);

  const showToast = (message: string) => {
    setSecurityNotice(message);
    setTimeout(() => {
      setSecurityNotice(null);
    }, 4000);
  };

  useEffect(() => {
    // 1. Interceptor de Clic Derecho (Context Menu)
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.tagName === 'IMG' ||
        target?.closest('.protected-image-container') ||
        target?.closest('.catalog-card')
      ) {
        e.preventDefault();
        showToast('Las imágenes y contenido de este catálogo están protegidos por melgarmaderas.com.ec');
        return false;
      }
    };

    // 2. Interceptor de Atajos de Teclado (F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Bloquear F12
      if (e.keyCode === 123) {
        e.preventDefault();
        showToast('Inspección de código deshabilitada en el portal oficial de Maderas Melgar');
        return false;
      }

      // Bloquear Ctrl+Shift+I / Cmd+Option+I
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 73 || e.keyCode === 105)) {
        e.preventDefault();
        showToast('Inspección de código restringida por políticas de ciberseguridad Melgar');
        return false;
      }

      // Bloquear Ctrl+Shift+J / Cmd+Option+J
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 74 || e.keyCode === 106)) {
        e.preventDefault();
        showToast('Consola de desarrollo deshabilitada');
        return false;
      }

      // Bloquear Ctrl+U
      if ((e.ctrlKey || e.metaKey) && (e.keyCode === 85 || e.keyCode === 117)) {
        e.preventDefault();
        showToast('El código fuente está protegido bajo propiedad intelectual');
        return false;
      }

      // Bloquear Ctrl+S
      if ((e.ctrlKey || e.metaKey) && (e.keyCode === 83 || e.keyCode === 115)) {
        e.preventDefault();
        showToast('Guardo de página deshabilitado');
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!securityNotice) return null;

  return (
    <div className="security-toast">
      <ShieldAlert size={20} color="#0D6838" />
      <div>
        <strong style={{ display: 'block', fontSize: '0.85rem', color: '#C5A059' }}>
          Seguridad & Propiedad Intelectual
        </strong>
        <span>{securityNotice}</span>
      </div>
    </div>
  );
};
