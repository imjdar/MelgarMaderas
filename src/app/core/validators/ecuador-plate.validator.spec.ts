import { describe, it, expect } from 'vitest';
import { ecuadorPlateValidator, formatEcuadorPlate } from './ecuador-plate.validator';

describe('EcuadorPlateValidator Unit Tests', () => {
  const validator = ecuadorPlateValidator();

  it('debe aceptar formatos válidos de placas de Pichincha/Quito (PBA-1234, PXX-9999)', () => {
    const controlPichincha1 = { value: 'PBA-1234' } as any;
    expect(validator(controlPichincha1)).toBeNull();

    const controlPichincha2 = { value: 'PXX-9999' } as any;
    expect(validator(controlPichincha2)).toBeNull();

    const controlPichincha3 = { value: 'PB-123' } as any;
    expect(validator(controlPichincha3)).toBeNull();
  });

  it('debe aceptar placas válidas de otras provincias ecuatorianas (GBA-1234, WAA-500)', () => {
    const controlGuayas = { value: 'GBA-1234' } as any;
    expect(validator(controlGuayas)).toBeNull();

    const controlGalapagos = { value: 'WAA-500' } as any;
    expect(validator(controlGalapagos)).toBeNull();
  });

  it('debe permitir campos vacíos dejando la responsabilidad al Validator.required', () => {
    const controlEmpty = { value: '' } as any;
    expect(validator(controlEmpty)).toBeNull();

    const controlNull = { value: null } as any;
    expect(validator(controlNull)).toBeNull();
  });

  it('debe rechazar estructuras numéricas o con caracteres inválidos', () => {
    const controlInvalidFormat = { value: '123-PBA' } as any;
    const res = validator(controlInvalidFormat);
    expect(res).not.toBeNull();
    expect(res?.['ecuadorPlate']?.invalidFormat).toBe(true);
  });

  it('debe rechazar códigos de provincia inexistentes en Ecuador (Ej: FBA-1234)', () => {
    const controlInvalidProvince = { value: 'FBA-1234' } as any;
    const res = validator(controlInvalidProvince);
    expect(res).not.toBeNull();
    expect(res?.['ecuadorPlate']?.invalidProvinceCode).toBe(true);
  });

  it('debe formatear texto a placa limpia de Ecuador con formatEcuadorPlate()', () => {
    expect(formatEcuadorPlate('pba1234')).toBe('PBA-1234');
    expect(formatEcuadorPlate('pxx9999')).toBe('PXX-9999');
    expect(formatEcuadorPlate('  gba 888 ')).toBe('GBA-888');
  });
});
