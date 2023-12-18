import { getProducts } from '@shared/modules/queries/product.query';
import { RecommendationsInterface } from '../interfaces/recommendations.interface';
import { AppLayout } from '@shared/modules/layouts/app.layout';

export async function RecommendationsContainer() {
  const products = await getProducts();

  return (
    <AppLayout>
      <RecommendationsInterface products={products} />
    </AppLayout>
  );
}
