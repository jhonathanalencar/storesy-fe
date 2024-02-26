import { productRoutes } from '@subdomains/products/routes';

interface ProductsByCategoryProps {
  params: { slug: string };
}

export default function ProductsByCategoryPage({
  params,
}: ProductsByCategoryProps) {
  return <productRoutes.PRODUCTS_BY_CATEGORY params={params} />;
}
