import { getProducts } from '@/shared/modules/queries/product.query';
import { RecommendationsInterface } from '../interfaces/recommendations.interface';

export async function RecommendationsContainer() {
  const products = await getProducts();

  return <RecommendationsInterface products={products} />;
}
