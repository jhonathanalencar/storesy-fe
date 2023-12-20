import { productRoutes } from '@/subdomains/products/routes';

interface ProductDetailsProps {
  params: { slug: string };
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  return <productRoutes.PRODUCT_DETAILS params={params} />;
}
