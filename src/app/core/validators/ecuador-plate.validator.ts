import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const ECUADOR_PROVINCES: Record<string, string> = {
  A: 'Azuay',
  B: 'Bolívar',
  U: 'Cañar',
  C: 'Carchi',
  X: 'Cotopaxi',
  H: 'Chimborazo',
  O: 'El Oro',
  E: 'Esmeraldas',
  Q: 'Orellana',
  G: 'Guayas',
  I: 'Imbabura',
  L: 'Loja',
  R: 'Los Ríos',
  M: 'Manabí',
  V: 'Morona Santiago',
  N: 'Napo',
  S: 'Pastaza',
  P: 'Pichincha (Quito)',
  Y: 'Santa Elena',
  J: 'Santo Domingo de los Tsáchilas',
  K: 'Sucumbíos',
  T: 'Tungurahua',
  Z: 'Zamora Chinchipe',
  W: 'Galápagos'
};

export interface EcuadorPlateValidationResult {
  invalidFormat?: boolean;
  invalidProvinceCode?: boolean;
  provinceName?: string;
  reason?: string;
}

/**
 * Validador síncrono para matrículas ecuatorianas (Ej: PBA-1234, PXX-1234, PB-123).
 */
export function ecuadorPlateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const rawValue = control.value;
    if (!rawValue) {
      return null; // Deja la validación de vacíos al Validator.required
    }

    const value = String(rawValue).toUpperCase().trim();
    // Expresión regular para placas ecuatorianas: 2 o 3 letras, guión opcional o espacio, 3 o 4 dígitos
    const plateRegex = /^([A-Z]{2,3})[- ]?(\d{3,4})$/;
    const match = value.match(plateRegex);

    if (!match) {
      return {
        ecuadorPlate: {
          invalidFormat: true,
          reason: 'El formato de la placa debe ser PXX-1234 (2 a 3 letras y 3 a 4 dígitos).'
        } as EcuadorPlateValidationResult
      };
    }

    const letters = match[1];
    const firstLetter = letters.charAt(0);

    if (!ECUADOR_PROVINCES[firstLetter]) {
      return {
        ecuadorPlate: {
          invalidProvinceCode: true,
          reason: `La primera letra '${firstLetter}' no corresponde a ninguna provincia registrada de Ecuador.`
        } as EcuadorPlateValidationResult
      };
    }

    return null;
  };
}

/**
 * Función auxiliar para formatear la placa automáticamente al estándar PXX-1234.
 */
export function formatEcuadorPlate(input: string): string {
  if (!input) return '';
  const cleaned = input.toUpperCase().replace(/[^A-Z0-9]/g, '');
  const letters = cleaned.replace(/[^A-Z]/g, '');
  const numbers = cleaned.replace(/[^0-9]/g, '');
  
  if (letters.length > 0 && numbers.length > 0) {
    return `${letters.slice(0, 3)}-${numbers.slice(0, 4)}`;
  }
  return cleaned;
}
