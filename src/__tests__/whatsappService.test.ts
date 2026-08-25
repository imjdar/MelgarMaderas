import { describe, it, expect } from 'vitest';
import { buildWhatsAppUrl } from '../services/whatsappService';

describe('whatsappService', () => {
  it('debe generar una URL vacía/alerta si no hay teléfono configurado', () => {
    const url = buildWhatsAppUrl('', 'Juego de Sala');
    expect(url).toContain('javascript:alert');
  });

  it('debe formatear correctamente la URL con teléfono y nombre de producto', () => {
    const phone = '+593 99 123 4567';
    const productName = 'Cama King Imperial';
    const url = buildWhatsAppUrl(phone, productName);

    expect(url).toContain('https://wa.me/593991234567');
    expect(url).toContain(encodeURIComponent('Cama King Imperial'));
    expect(url).toContain('melgarmaderas.com.ec');
  });
});
