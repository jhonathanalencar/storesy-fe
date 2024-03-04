import type { Metadata } from 'next';

import { getProductBySlug } from '@shared/modules/queries/product.query';
import { productRoutes } from '@subdomains/products/routes';

interface ProductDetailsProps {
  params: { slug: string };
  searchParams: { page: string };
}

export async function generateMetadata({
  params,
}: ProductDetailsProps): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  return {
    title: `Storesy | ${product.name}`,
    description: product.description,
  };
}

export default function ProductDetails({
  params,
  searchParams,
}: ProductDetailsProps) {
  return (
    <productRoutes.PRODUCT_DETAILS
      params={params}
      searchParams={searchParams}
    />
  );
}
