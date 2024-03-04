import type { Metadata } from 'next';

import { productRoutes } from '@subdomains/products/routes';

interface NewReleasesProps {
  searchParams: {
    page: string;
  };
}

export const metadata: Metadata = {
  title: 'Storesy | New Releases',
};

export default function NewReleases({ searchParams }: NewReleasesProps) {
  return <productRoutes.NEW_RELEASES searchParams={searchParams} />;
}
