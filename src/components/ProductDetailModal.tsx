import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { Product } from '@/types';
import { WatermarkImage } from './WatermarkImage';

interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  inCart: boolean;
}

export function ProductDetailModal({ product, isOpen, onClose, onAddToCart, inCart }: ProductDetailModalProps) {
  
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-[#FDFBF7] w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl rounded-sm">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-[#3A1A0E] rounded-full transition-colors shadow-sm"
          aria-label="Cerrar modal"
        >
          <X size={24} />
        </button>

        {/* Image Section (Left on Desktop, Top on Mobile) */}
        <div className="w-full md:w-1/2 relative bg-gray-100 aspect-square md:aspect-auto md:min-h-[600px]">
          <WatermarkImage
            src={product.image}
            alt={product.name}
            className="w-full h-full"
            imageClassName="object-contain bg-gray-100"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#FDFBF7] text-[#3A1A0E]">
          <div className="mb-2 text-xs font-bold tracking-[0.2em] uppercase text-[#C59B27]">
            {product.categoryLabel}
          </div>
          
          <h2 className="text-3xl md:text-5xl font-light mb-6" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            {product.name}
          </h2>
          
          <div className="w-12 h-px bg-[#0D6838] mb-8"></div>
          
          <p className="text-gray-600 font-light leading-relaxed mb-10">
            {product.description}
          </p>
          
          <div className="space-y-4 mb-10">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-500 uppercase tracking-wider text-xs">Material Recomendado</span>
              <span className="font-medium">{product.material}</span>
            </div>
            {/* Si existieran dimensiones, se podrían agregar aquí */}
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-500 uppercase tracking-wider text-xs">Colección</span>
              <span className="font-medium">Editorial {new Date().getFullYear()}</span>
            </div>
          </div>

          <div className="mt-auto pt-6">
            <button
              onClick={() => {
                onAddToCart(product);
                // Opcional: cerrar el modal después de agregar
                // onClose(); 
              }}
              className={`w-full py-4 px-6 border text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                inCart 
                  ? 'bg-gray-200 border-gray-200 text-gray-800' 
                  : 'border-[#0D6838] bg-[#0D6838] text-white hover:bg-white hover:text-[#0D6838]'
              }`}
            >
              {inCart ? (
                <>
                  <Check size={18} />
                  Agregado a la Lista
                </>
              ) : (
                'Añadir a Cotización'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
