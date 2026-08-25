import { describe, it, expect } from 'vitest';
import { getFurnitureStoreSchema, getCatalogItemListSchema } from '../services/schemaService';
import { PRODUCTS } from '../data/products';

describe('schemaService', () => {
  it('debe generar una estructura FurnitureStore válida para SEO/GEO', () => {
    const schema = getFurnitureStoreSchema();
    expect(schema['@type']).toBe('FurnitureStore');
    expect(schema.name).toBe('Maderas Melgar');
    expect(schema.slogan).toBe('Muebles que traspasan épocas');
    expect(schema.address.addressCountry).toBe('Ecuador');
  });

  it('debe generar una estructura ItemList para la lista de productos', () => {
    const schema = getCatalogItemListSchema(PRODUCTS);
    expect(schema['@type']).toBe('ItemList');
    expect(schema.itemListElement.length).toBe(PRODUCTS.length);
    expect(schema.itemListElement[0].item.brand.name).toBe('Maderas Melgar');
  });
});
