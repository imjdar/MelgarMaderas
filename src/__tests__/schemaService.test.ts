import { describe, it, expect } from 'vitest';
import { getFurnitureStoreSchema, getCatalogItemListSchema } from '../services/schemaService';
import { PRODUCTS } from '../data/products';

describe('schemaService', () => {
  it('debe generar una estructura FurnitureStore válida para SEO/GEO', () => {
    const schema = getFurnitureStoreSchema();
    expect(schema['@type']).toBe('FurnitureStore');
    expect(schema.name).toBe('Maderas Melgar');
    expect(schema.description).toContain('Muebles que traspasan épocas');
    expect(schema.address.addressCountry).toBe('EC');
  });
});
