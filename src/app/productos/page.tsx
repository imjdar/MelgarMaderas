'use client';
import React from 'react';
import { CleanProductGrid } from '@/components/CleanProductGrid';
import { useCart } from '@/components/ClientLayout';

export default function ProductosPage() {
  const { cart, addToCart } = useCart();
  
  return (
    <CleanProductGrid 
      onAddToCart={addToCart}
      cartProductIds={cart.map(p => p.id)}
    />
  );
}
