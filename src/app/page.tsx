import React from 'react';
import { EditorialHeroSlider } from '@/components/EditorialHeroSlider';
import { CategoryShowcase } from '@/components/CategoryShowcase';
import { SocialContactSection } from '@/components/SocialContactSection';

export default function HomePage() {
  return (
    <>
      <EditorialHeroSlider />
      <CategoryShowcase />
      <SocialContactSection />
    </>
  );
}
