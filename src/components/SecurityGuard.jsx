import React, { useEffect, useState } from 'react';
import { ShieldAlert, Lock, CheckCircle2 } from 'lucide-react';

export const SecurityGuard = () => {
  const [securityNotice, setSecurityNotice] = useState(null);

  const showToast = (message) => {
    setSecurityNotice(message);
    setTimeout(() => {
      setSecurityNotice(null);
    }, 4000);
  };

  useEffect(() => {
    // 1. Context Menu (Right-Click) Interceptor on protected elements
    const handleContextMenu = (e) => {
      // Check if target is inside an image or catalog container
      if (
        e.target.tagName === 'IMG' ||
        e.target.closest('.protected-image-container') ||
        e.target.closest('.catalog-card')
      ) {
        e.preventDefault();
        showToast('Las imágenes y contenido de este catálogo están protegidos por melgarmaderas.com.ec');
        return false;
      }
    };

    // 2. Keyboard Shortcuts Interceptor (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S)
    const handleKeyDown = (e) => {
      // Prevent F12
      if (e.keyCode === 123) {
        e.preventDefault();
        showToast('Inspección de código deshabilitada en el portal oficial de Maderas Melgar');
        return false;
      }

      // Prevent Ctrl+Shift+I / Cmd+Option+I (Inspect element)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 73 || e.keyCode === 105)) {
        e.preventDefault();
        showToast('Inspección de código restringida por políticas de ciberseguridad Melgar');
        return false;
      }

      // Prevent Ctrl+Shift+J / Cmd+Option+J (Console)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 74 || e.keyCode === 106)) {
        e.preventDefault();
        showToast('Consola de desarrollo deshabilitada');
        return false;
      }

      // Prevent Ctrl+U (View Source)
      if ((e.ctrlKey || e.metaKey) && (e.keyCode === 85 || e.keyCode === 117)) {
        e.preventDefault();
        showToast('El código fuente está protegido bajo propiedad intelectual');
        return false;
      }

      // Prevent Ctrl+S / Cmd+S (Save Page)
      if ((e.ctrlKey || e.metaKey) && (e.keyCode === 83 || e.keyCode === 115)) {
        e.preventDefault();
        showToast('Guardo de página deshabilitado. Solicite la versión digital a nuestro equipo.');
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
