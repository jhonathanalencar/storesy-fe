import type { Metadata } from 'next';

import { productRoutes } from '@subdomains/products/routes';

interface DealsProps {
  searchParams: {
    page: string;
  };
}

export const metadata: Metadata = {
  title: 'Storesy | Deals',
};

export default function Deals({ searchParams }: DealsProps) {
  return <productRoutes.DEALS searchParams={searchParams} />;
}
