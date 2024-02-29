import { productRoutes } from '@subdomains/products/routes';

interface DealsProps {
  searchParams: {
    page: string;
  };
}

export default function Deals({ searchParams }: DealsProps) {
  return <productRoutes.DEALS searchParams={searchParams} />;
}
