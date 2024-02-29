import { productRoutes } from '@subdomains/products/routes';

interface ProductsByCategoryProps {
  params: { slug: string };
  searchParams: { page: string };
}

export default function ProductsByCategoryPage({
  params,
  searchParams,
}: ProductsByCategoryProps) {
  return (
    <productRoutes.PRODUCTS_BY_CATEGORY
      params={params}
      searchParams={searchParams}
    />
  );
}
