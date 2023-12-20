'use client';

import type { TProduct } from '@shared/modules/types/product.type';
import { productSliderOptions } from '@shared/modules/configs/keen-slider.config';

import { ProductCard } from '@shared/modules/components/product-card.component';
import { Slider } from '@shared/modules/components/slider.component';

interface ProductSliderProps {
  products: TProduct[];
}

export function ProductSlider({ products }: ProductSliderProps) {
  const content = products.map((product) => {
    return (
      <Slider.Slide key={product.product_id}>
        <ProductCard product={product} />
      </Slider.Slide>
    );
  });

  return <Slider.Root config={productSliderOptions}>{content}</Slider.Root>;
}
