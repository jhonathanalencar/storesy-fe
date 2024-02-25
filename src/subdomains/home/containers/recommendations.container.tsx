import {
  getBestSellers,
  getNewArrivals,
  getProductDeals,
  getProductsByCategory,
} from '@shared/modules/queries/product.query';

import { RecommendationsInterface } from '../interfaces/recommendations.interface';
import { AppLayout } from '@shared/modules/layouts/app.layout';

export async function RecommendationsContainer() {
  const [deals, gamingProducts, newArrivals, bestSellers] = await Promise.all([
    getProductDeals(),
    getProductsByCategory('video-games'),
    getNewArrivals(),
    getBestSellers('0', '9'),
  ]);

  return (
    <AppLayout>
      <RecommendationsInterface
        deals={deals}
        gamingProducts={gamingProducts}
        newArrivals={newArrivals}
        bestSellers={bestSellers}
      />
    </AppLayout>
  );
}
