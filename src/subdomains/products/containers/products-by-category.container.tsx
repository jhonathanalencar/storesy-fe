import { getProductsByCategory } from '@shared/modules/queries/product.query';

import { AppLayout } from '@shared/modules/layouts/app.layout';
import { ProductsByCategoryInterface } from '../interfaces/products-by-category.interface';

interface ProductsByCategoryContainerProps {
  params: { slug: string };
}

export async function ProductsByCategoryContainer({
  params,
}: ProductsByCategoryContainerProps) {
  const products = await getProductsByCategory(params.slug);

  return (
    <AppLayout>
      <ProductsByCategoryInterface products={products} />
    </AppLayout>
  );
}
