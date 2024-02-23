import type { TProduct } from '@shared/modules/types/product.type';

import { ProductSlider } from '../components/product-slider.component';
import { RecommendationBox } from '../components/recommendation-box.component';
import { Section } from '@shared/modules/components/section.component';

interface RecommendationsInterfaceProps {
  deals: TProduct[];
  gamingProducts: TProduct[];
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
      <RecommendationBox title="Deals">
        <ProductSlider products={deals} />
      </RecommendationBox>
      <RecommendationBox title="Gaming accessories">
        <ProductSlider products={gamingProducts} />
      </RecommendationBox>
      <RecommendationBox title="New arrivals">
        <ProductSlider products={newArrivals} />
      </RecommendationBox>
      <RecommendationBox title="Best sellers">
        <ProductSlider products={bestSellers} />
      </RecommendationBox>
    </Section>
  );
}
