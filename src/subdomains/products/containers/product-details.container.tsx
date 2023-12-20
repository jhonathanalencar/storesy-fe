import { getProductBySlug } from '@shared/modules/queries/product.query';

import { AppLayout } from '@shared/modules/layouts/app.layout';
import { ProductDetailsInterface } from '../interfaces/product-details.interface';

interface ProductDetailsContainerProps {
  params: { slug: string };
}

export async function ProductDetailsContainer({
  params,
}: ProductDetailsContainerProps) {
  const [product] = await getProductBySlug(params.slug);
  return (
    <AppLayout>
      <ProductDetailsInterface product={product} />
    </AppLayout>
  );
}
