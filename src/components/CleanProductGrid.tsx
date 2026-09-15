'use client';
import React, { useState } from 'react';
import { Product } from '@/types';
import { PRODUCTS, PRODUCT_COLLECTIONS } from '@/data/products';
import { WatermarkImage } from './WatermarkImage';
import { Search, Eye } from 'lucide-react';
import { ProductDetailModal } from './ProductDetailModal';

interface CleanProductGridProps {
  onAddToCart: (product: Product) => void;
  cartProductIds: string[];
}

export function CleanProductGrid({ onAddToCart, cartProductIds }: CleanProductGridProps) {
  const [filter, setFilter] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ['Todos', 'Salas', 'Comedores', 'Dormitorios'];
  const filteredProducts = filter === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter.toLowerCase() || (filter === 'Salas' && p.category === 'sala') || (filter === 'Comedores' && p.category === 'comedor') || (filter === 'Dormitorios' && p.category === 'habitaciones'));

  return (
    <section id="catalogo" className="py-24 bg-[#1A110B] text-white">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Catálogo de Productos
            </h2>
            <p className="text-gray-400 font-light max-w-lg">
              Explora nuestra selección completa de muebles macizos. Selecciona los productos de interés para cotizar o visualiza sus detalles.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm transition-colors border ${
                  filter === cat 
                    ? 'border-[#C59B27] bg-[#C59B27] text-white' 
                    : 'border-[#3A2A1A] text-gray-300 hover:border-gray-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid Grouped */}
        <div className="space-y-28">
          {(() => {
            const activeCategories = filter === 'Todos' 
              ? ['sala', 'comedor', 'habitaciones', 'complementos'] 
              : filter === 'Salas' ? ['sala']
              : filter === 'Comedores' ? ['comedor']
              : filter === 'Dormitorios' ? ['habitaciones']
              : [];

            return activeCategories.map(catKey => {
              const categoryProducts = filteredProducts.filter(p => p.category === catKey);
              if (categoryProducts.length === 0) return null;
              
              const catName = catKey === 'sala' ? 'Salas' : catKey === 'comedor' ? 'Comedores' : catKey === 'habitaciones' ? 'Dormitorios' : 'Complementos';
              const collectionsInCat = Array.from(new Set(categoryProducts.map(p => p.collectionId).filter(Boolean))) as string[];

              return (
                <div key={catKey} className="w-full">
                  {filter === 'Todos' && (
                    <h3 className="text-4xl md:text-5xl font-light mb-16 border-b border-[#3A2A1A] pb-6 uppercase tracking-[0.1em] text-[#C59B27]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                      {catName}
                    </h3>
                  )}
                  
                  <div className="space-y-24">
                    {collectionsInCat.map(colId => {
                      const collection = PRODUCT_COLLECTIONS.find(c => c.id === colId);
                      const colProducts = categoryProducts.filter(p => p.collectionId === colId);
                      
                      return (
                        <div key={colId} className="w-full">
                          {collection && (
                            <div className="mb-12 max-w-5xl">
                              <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white uppercase tracking-wider">
                                {collection.title}
                              </h4>
                              {collection.subtitle && <p className="text-[#C59B27] font-medium mb-4 text-lg">{collection.subtitle}</p>}
                              {collection.description && <p className="text-gray-400 font-light leading-relaxed text-lg">{collection.description}</p>}
                            </div>
                          )}
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-16">
                            {colProducts.map(product => {
                              const inCart = cartProductIds.includes(product.id);
                              return (
                                <div key={product.id} className="group cursor-pointer" onClick={() => setSelectedProduct(product)}>
                                  <div className="relative aspect-[4/5] bg-[#22170F] mb-6 overflow-hidden">
                                    <WatermarkImage
                                      src={product.image}
                                      alt={product.name}
                                      className="absolute inset-0 w-full h-full"
                                      imageClassName="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    />
                                    
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 pointer-events-none">
                                      <button 
                                        className="pointer-events-auto px-6 py-3 bg-[#C59B27] text-[#1A110B] tracking-widest text-xs uppercase hover:bg-white transition-colors flex items-center gap-2 w-3/4 justify-center"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setSelectedProduct(product);
                                        }}
                                      >
                                        <Eye size={16} /> Ver Detalles
                                      </button>
                                      
                                      <button 
                                        className={`pointer-events-auto px-6 py-3 border border-white text-white tracking-widest text-xs uppercase hover:bg-white hover:text-black transition-colors w-3/4 justify-center ${inCart ? 'bg-white text-black' : ''}`}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          onAddToCart(product);
                                        }}
                                      >
                                        {inCart ? 'Agregado a Lista' : 'Añadir a Cotización'}
                                      </button>
                                    </div>
                                  </div>
                  
                                  <div className="flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                      <h3 className="text-lg font-medium" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                                        {product.name}
                                      </h3>
                                    </div>
                                    <p className="text-sm text-gray-400 font-light truncate">
                                      {product.material}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            });
          })()}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No hay productos en esta categoría.</p>
          </div>
        )}

      </div>
      
      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={onAddToCart}
          inCart={cartProductIds.includes(selectedProduct.id)}
        />
      )}
    </section>
  );
}
