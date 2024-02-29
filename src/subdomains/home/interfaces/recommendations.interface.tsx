import type { TProduct } from '@shared/modules/types/product.type';
import type { GetProductsByCategoryResponse } from '@shared/modules/queries/product.query';

import { ProductSlider } from '../components/product-slider.component';
import { RecommendationBox } from '../components/recommendation-box.component';
import { Section } from '@shared/modules/components/section.component';

interface RecommendationsInterfaceProps {
  deals: TProduct[];
  gamingProducts: GetProductsByCategoryResponse;
  newArrivals: TProduct[];
  bestSellers: TProduct[];
}

export function RecommendationsInterface({
  deals,
  gamingProducts,
  newArrivals,
  bestSellers,
}: RecommendationsInterfaceProps) {
  return (
    <Section>
      <RecommendationBox title="Deals" linkTo="/deals">
        <ProductSlider products={deals} />
      </RecommendationBox>
      <RecommendationBox
        title="Gaming accessories"
        linkTo="/products/category/video-games"
      >
        <ProductSlider products={gamingProducts.products} />
      </RecommendationBox>
      <RecommendationBox title="New arrivals" linkTo="arrivals">
        <ProductSlider products={newArrivals} />
      </RecommendationBox>
      <RecommendationBox title="Best sellers" linkTo="best-sellers">
        <ProductSlider products={bestSellers} />
      </RecommendationBox>
    </Section>
  );
}
