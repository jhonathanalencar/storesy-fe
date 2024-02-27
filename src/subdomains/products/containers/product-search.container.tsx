import { searchProducts } from '@shared/modules/queries/product.query';

import { AppLayout } from '@shared/modules/layouts/app.layout';
import { ProductSearchInterface } from '../interfaces/product-search.interface';

interface ProductSearchContainerProps {
  searchParams: {
    query: string;
  };
}

export async function ProductSearchContainer({
  searchParams,
}: ProductSearchContainerProps) {
  const products = await searchProducts(searchParams.query);

  return (
    <AppLayout>
      <ProductSearchInterface products={products} />
    </AppLayout>
  );
}
