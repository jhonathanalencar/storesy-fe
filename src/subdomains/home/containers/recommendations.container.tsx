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
    getProductDeals(1, 10),
    getProductsByCategory('video-games', 1, 10),
    getNewArrivals(1, 10),
    getBestSellers(1, 10),
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
