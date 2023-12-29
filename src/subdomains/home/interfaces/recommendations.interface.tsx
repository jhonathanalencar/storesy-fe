import type { TProduct } from '@shared/modules/types/product.type';

import { ProductSlider } from '../components/product-slider.component';
import { RecommendationBox } from '../components/recommendation-box.component';
import { Section } from '@shared/modules/components/section.component';

interface RecommendationsInterfaceProps {
  products: TProduct[];
}

export function RecommendationsInterface({
  products,
}: RecommendationsInterfaceProps) {
  return (
    <Section>
      <RecommendationBox title="Deals">
        <ProductSlider products={products} />
      </RecommendationBox>
      <RecommendationBox title="Gaming accessories">
        <ul>
          {products.map((product) => {
            return <li key={product.product_id}>{product.name}</li>;
          })}
        </ul>
      </RecommendationBox>
      <RecommendationBox title="New arrivals">
        <ul>
          {products.map((product) => {
            return <li key={product.product_id}>{product.name}</li>;
          })}
        </ul>
      </RecommendationBox>
      <RecommendationBox title="Best sellers">
        <ul>
          {products.map((product) => {
            return <li key={product.product_id}>{product.name}</li>;
          })}
        </ul>
      </RecommendationBox>
    </Section>
  );
}
