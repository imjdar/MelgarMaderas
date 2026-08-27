'use client';
import React, { useState } from 'react';
import { Product } from '@/types';
import { PRODUCTS } from '@/data/products';
import { WatermarkImage } from './WatermarkImage';
import { Search, Eye } from 'lucide-react';
import { ProductDetailModal } from './ProductDetailModal';

interface CleanProductGridProps {
  onAddToCart: (product: Product) => void;
  cartProductIds: string[];
}

export function CleanProductGrid({ onAddToCart, cartProductIds }: CleanProductGridProps) {
  const [filter, setFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ['All', 'Habitaciones', 'Sala', 'Comedor', 'Cocina', 'Estudio'];
  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter.toLowerCase() || (filter === 'Habitaciones' && p.category === 'habitaciones') || (filter === 'Sala' && p.category === 'sala') || (filter === 'Comedor' && p.category === 'comedor') || (filter === 'Cocina' && p.category === 'cocina') || (filter === 'Estudio' && p.category === 'estudio'));

  return (
    <section id="catalogo" className="py-24 bg-white text-[#3A1A0E]">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Catálogo de Productos
            </h2>
            <p className="text-gray-500 font-light max-w-lg">
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
                    ? 'border-[#0D6838] bg-[#0D6838] text-white' 
                    : 'border-gray-200 text-gray-600 hover:border-gray-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-16">
          {filteredProducts.map(product => {
            const inCart = cartProductIds.includes(product.id);
            return (
              <div key={product.id} className="group cursor-pointer" onClick={() => setSelectedProduct(product)}>
                {/* Image Container with Watermark */}
                <div className="relative aspect-[4/5] bg-gray-100 mb-6 overflow-hidden">
                  <WatermarkImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full"
                    imageClassName="object-contain object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 pointer-events-none">
                    <button 
                      className="pointer-events-auto px-6 py-3 bg-white text-[#3A1A0E] tracking-widest text-xs uppercase hover:bg-gray-100 transition-colors flex items-center gap-2 w-3/4 justify-center"
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

                {/* Info Container */}
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 font-light truncate">
                    {product.material} • {product.categoryLabel}
                  </p>
                </div>
              </div>
            );
          })}
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
