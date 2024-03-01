import type {
  GetBestSellersResponse,
  GetNewArrivalsResponse,
  GetProductsByCategoryResponse,
  GetProductsDealsResponse,
} from '@shared/modules/queries/product.query';

import { ProductSlider } from '../components/product-slider.component';
import { RecommendationBox } from '../components/recommendation-box.component';
import { Section } from '@shared/modules/components/section.component';

interface RecommendationsInterfaceProps {
  deals: GetProductsDealsResponse;
  gamingProducts: GetProductsByCategoryResponse;
  newArrivals: GetNewArrivalsResponse;
  bestSellers: GetBestSellersResponse;
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
        <ProductSlider products={deals.products} />
      </RecommendationBox>
      <RecommendationBox
        title="Gaming accessories"
        linkTo="/products/category/video-games"
      >
        <ProductSlider products={gamingProducts.products} />
      </RecommendationBox>
      <RecommendationBox title="New arrivals" linkTo="new-releases">
        <ProductSlider products={newArrivals.products} />
      </RecommendationBox>
      <RecommendationBox title="Best sellers" linkTo="best-sellers">
        <ProductSlider products={bestSellers.products} />
      </RecommendationBox>
    </Section>
  );
}
