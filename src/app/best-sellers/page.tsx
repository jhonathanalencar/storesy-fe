import type { Metadata } from 'next';

import { productRoutes } from '@subdomains/products/routes';

interface BestSellersProps {
  searchParams: {
    page: string;
  };
}

export const metadata: Metadata = {
  title: 'Storesy | Best Sellers',
};

export default function BestSellers({ searchParams }: BestSellersProps) {
  return <productRoutes.BEST_SELLERS searchParams={searchParams} />;
}
