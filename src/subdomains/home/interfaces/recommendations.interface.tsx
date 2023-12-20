import type { TProduct } from '@shared/modules/types/product.type';

import { ProductSlider } from '../components/product-slider.component';
import { RecommendationBox } from '../components/recommendation-box.component';

interface RecommendationsInterfaceProps {
  products: TProduct[];
}

export function RecommendationsInterface({
  products,
}: RecommendationsInterfaceProps) {
  return (
    <section className="mx-auto w-full max-w-5xl p-2">
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
    </section>
  );
}
