import { productRoutes } from '@subdomains/products/routes';

interface BestSellersProps {
  searchParams: {
    page: string;
  };
}

export default function BestSellers({ searchParams }: BestSellersProps) {
  return <productRoutes.BEST_SELLERS searchParams={searchParams} />;
}
