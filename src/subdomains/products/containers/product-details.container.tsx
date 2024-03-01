import {
  getProductBySlug,
  getProductRatings,
} from '@shared/modules/queries/product.query';

import { AppLayout } from '@shared/modules/layouts/app.layout';
import { ProductDetailsInterface } from '../interfaces/product-details.interface';

interface ProductDetailsContainerProps {
  params: { slug: string };
  searchParams: { page: string };
}

export async function ProductDetailsContainer({
  params,
  searchParams,
}: ProductDetailsContainerProps) {
  const product = await getProductBySlug(params.slug);
  const page = parseInt(searchParams.page ?? '1');
  const itemsPerPage = 5;
  const data = await getProductRatings(product.productId, page, itemsPerPage);
  const totalPages = Math.ceil(data.total / itemsPerPage);

  return (
    <AppLayout>
      <ProductDetailsInterface
        product={product}
        ratings={data.ratings}
        currentPage={page}
        totalPages={totalPages}
      />
    </AppLayout>
  );
}
