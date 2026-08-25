import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { WatermarkImage } from '../components/WatermarkImage';

describe('WatermarkImage Component', () => {
  it('debe renderizar la imagen con marca de agua y capa protectora', () => {
    render(
      <WatermarkImage
        src="/assets/products/sala-linea-premium.jpg"
        alt="Juego de Sala"
        watermarkText="melgarmaderas.com.ec"
      />
    );

    const img = screen.getByAltText('Juego de Sala');
    expect(img).toBeInTheDocument();

    const watermarks = screen.getAllByText(/melgarmaderas\.com\.ec/i);
    expect(watermarks.length).toBeGreaterThan(0);
  });
});
