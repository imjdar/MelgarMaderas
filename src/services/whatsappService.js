/**
 * Servicio de Cotización y Mensajería en WhatsApp
 * Principio SOLID: Responsabilidad Única (SRP). Encapsula el formato de mensajes y URLs.
 */

import { APP_CONFIG } from './configService';

/**
 * Genera una URL formateada para iniciar un chat de WhatsApp con un mensaje prellenado.
 * @param {string} rawPhone - Número telefónico del destinatario.
 * @param {string} productName - Nombre del producto a cotizar (Opcional).
 * @param {string} customMsg - Mensaje personalizado (Opcional).
 * @returns {string} URL formateada o acción informativa si no hay teléfono configurado.
 */
export const buildWhatsAppUrl = (rawPhone, productName = '', customMsg = '') => {
  const phoneToUse = rawPhone || APP_CONFIG.whatsappNumber;
  const cleanedPhone = phoneToUse ? phoneToUse.replace(/[^0-9]/g, '') : '';
  const domain = APP_CONFIG.domain;

  let textContent = `Hola Maderas Melgar 👋, escribo desde el portal oficial (${domain}).`;

  if (productName) {
    textContent += ` Me interesa solicitar una cotización del mueble "*${productName}*" fabricado a medida.`;
  }

  if (customMsg) {
    textContent += `\n\nMensaje adicional:\n${customMsg}`;
  }

  const encodedText = encodeURIComponent(textContent);

  if (!cleanedPhone) {
    // Si aún no se ha configurado un número real de WhatsApp, redirige al elemento de contacto o alerta
    return `javascript:alert("Número de WhatsApp corporativo no configurado aún. Por favor actualice el campo whatsappNumber en configService.js");`;
  }

  return `https://wa.me/${cleanedPhone}?text=${encodedText}`;
};
