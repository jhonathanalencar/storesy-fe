import { productRoutes } from '@subdomains/products/routes';

interface NewReleasesProps {
  searchParams: {
    page: string;
  };
}

export default function NewReleases({ searchParams }: NewReleasesProps) {
  return <productRoutes.NEW_RELEASES searchParams={searchParams} />;
}
