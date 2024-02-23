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
    getBestSellers(
      '7ddfb3ef-ec05-4f8c-8097-6d460deaf853,6abe914d-31ae-4a77-b2da-c1333402aaa0'
    ),
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
