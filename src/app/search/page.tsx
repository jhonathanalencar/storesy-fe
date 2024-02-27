import { productRoutes } from '@subdomains/products/routes';

interface SearchPageProps {
  searchParams: {
    query: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  return <productRoutes.SEARCH_PAGE searchParams={searchParams} />;
}
