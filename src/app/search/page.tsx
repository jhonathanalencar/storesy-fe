import type { Metadata } from 'next';

import { productRoutes } from '@subdomains/products/routes';

interface SearchPageProps {
  searchParams: {
    query: string;
    page: string;
  };
}

export function generateMetadata({
  searchParams: { query },
}: SearchPageProps): Metadata {
  return {
    title: `Storesy | ${query}`,
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  return <productRoutes.SEARCH_PAGE searchParams={searchParams} />;
}
