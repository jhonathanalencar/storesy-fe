import { searchProducts } from '@shared/modules/queries/product.query';

import { AppLayout } from '@shared/modules/layouts/app.layout';
import { ProductSearchInterface } from '../interfaces/product-search.interface';

interface ProductSearchContainerProps {
  searchParams: {
    query: string;
    page: string;
  };
}

export async function ProductSearchContainer({
  searchParams,
}: ProductSearchContainerProps) {
  const page = parseInt(searchParams.page ?? '1');
  const itemsPerPage = 15;
  const data = await searchProducts(searchParams.query, page, itemsPerPage);
  const totalPages = Math.ceil(data.total / itemsPerPage);

  return (
    <AppLayout>
      <ProductSearchInterface
        products={data.products}
        currentPage={page}
        totalPages={totalPages}
      />
    </AppLayout>
  );
}
