import { getProductsByCategory } from '@shared/modules/queries/product.query';

import { AppLayout } from '@shared/modules/layouts/app.layout';
import { ProductsByCategoryInterface } from '../interfaces/products-by-category.interface';

interface ProductsByCategoryContainerProps {
  params: { slug: string };
  searchParams: { page: string };
}

export async function ProductsByCategoryContainer({
  params,
  searchParams,
}: ProductsByCategoryContainerProps) {
  const page = parseInt(searchParams.page ?? '1');
  const itemsPerPage = 15;
  const data = await getProductsByCategory(params.slug, page, itemsPerPage);
  const totalPages = Math.ceil(data.total / itemsPerPage);

  return (
    <AppLayout>
      <ProductsByCategoryInterface
        products={data.products}
        currentPage={page}
        totalPages={totalPages}
      />
    </AppLayout>
  );
}
