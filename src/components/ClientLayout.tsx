'use client';

import React, { useState, createContext, useContext } from 'react';
import { Product } from '@/types';
import { APP_CONFIG } from '@/services/configService';

import { LuxuryNavbar } from '@/components/LuxuryNavbar';
import { MinimalFooter } from '@/components/MinimalFooter';
import { MultiQuoteCart } from '@/components/MultiQuoteCart';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { SocialContactSection } from '@/components/SocialContactSection';

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const useCart = () => useContext(CartContext);

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [multiCart, setMultiCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setMultiCart((prev) => {
      if (prev.some((p) => p.id === product.id)) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId: string) => {
    setMultiCart((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleClearCart = () => {
    setMultiCart([]);
  };

  return (
    <CartContext.Provider value={{ cart: multiCart, addToCart: handleAddToCart, removeFromCart: handleRemoveFromCart, clearCart: handleClearCart }}>
      <div
        className="app-main-wrapper w-full min-w-full"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#120C08',
          color: '#FFFFFF',
        }}
      >
        <LuxuryNavbar 
          whatsappNumber={APP_CONFIG.whatsappNumber} 
          cartCount={multiCart.length}
          onOpenCart={() => setIsCartOpen(true)}
        />

        <main style={{ flexGrow: 1 }}>
          {children}
        </main>

        <SocialContactSection />
        <MinimalFooter />

        <MultiQuoteCart
          cart={multiCart}
          onRemoveFromCart={handleRemoveFromCart}
          onClearCart={handleClearCart}
          whatsappNumber={APP_CONFIG.whatsappNumber}
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />

        <FloatingWhatsApp whatsappNumber={APP_CONFIG.whatsappNumber} />
      </div>
    </CartContext.Provider>
  );
}
