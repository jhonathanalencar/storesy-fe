import { productRoutes } from '@/subdomains/products/routes';

interface ProductDetailsProps {
  params: { slug: string };
  searchParams: { page: string };
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
