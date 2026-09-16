/**
 * Servicio de Cotización en WhatsApp (TypeScript)
 * Principio SOLID: Responsabilidad Única (SRP).
 */

import { APP_CONFIG } from './configService';

/**
 * Genera la URL de WhatsApp prellenada con los datos de cotización del cliente.
 */
export const buildWhatsAppUrl = (
  rawPhone?: string, 
  productName: string = '', 
  customMsg: string = ''
): string => {
  const phoneToUse = rawPhone || APP_CONFIG.whatsappNumber;
  const cleanedPhone = phoneToUse ? phoneToUse.replace(/[^0-9]/g, '') : '';
  const domain = APP_CONFIG.domain;

  let textContent = `HABLEMOS DE TU ESPACIO`;

  if (productName) {
    textContent += `\n\nMe interesa solicitar una cotización del mueble "*${productName}*" fabricado a medida.`;
  }

  if (customMsg) {
    textContent += `\n\nMensaje adicional:\n${customMsg}`;
  }

  const encodedText = encodeURIComponent(textContent);

  if (!cleanedPhone) {
    return `javascript:alert("Número de WhatsApp corporativo no configurado aún. Por favor actualice whatsappNumber en configService.ts");`;
  }

  return `https://wa.me/${cleanedPhone}?text=${encodedText}`;
};
