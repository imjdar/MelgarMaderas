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
    <section id="catalogo" className="py-24 bg-[#FAFAFA] dark:bg-[#1A110B] text-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Catálogo de Productos
            </h2>
            <p className="text-black dark:text-gray-100 font-light max-w-lg drop-shadow-sm">
              Explora nuestra selección completa de muebles macizos. Selecciona los productos de interés para cotizar o visualiza sus detalles.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`pb-2 text-sm md:text-base font-medium tracking-widest uppercase transition-all duration-300 border-b-2 ${
                  filter === cat
                    ? 'border-[#C59B27] text-[#C59B27]'
                    : 'border-transparent text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-16">
            {filteredProducts.map(product => {
              const inCart = cartProductIds.includes(product.id);
              return (
                <div key={product.id} className="bg-white dark:bg-[#22170F] border border-gray-100 dark:border-[#2C1F16] shadow-sm rounded-sm overflow-hidden group hover:shadow-xl transition-all duration-500 flex flex-col h-full cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-[#1A110B]">
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
  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                        {product.name}
                      </h3>
                    </div>
                    <p className="text-sm text-black dark:text-gray-300 font-medium flex-grow leading-relaxed mb-6">
                      {product.material}
                    </p>
                    <button 
                      className={`mt-6 w-full py-3 px-4 border text-sm font-medium tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                        inCart 
                          ? 'border-gray-200 bg-gray-50 text-gray-400 dark:border-[#33251A] dark:bg-[#1A110B] dark:text-gray-500 cursor-default' 
                          : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white dark:border-[#C59B27] dark:text-[#C59B27] dark:hover:bg-[#C59B27] dark:hover:text-white'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!inCart) onAddToCart(product);
                      }}
                    >
                      {inCart ? 'Agregado a Cotización' : 'Añadir a Cotización'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
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
