import { AppLayout } from '@shared/modules/layouts/app.layout';
import { NewReleasesInterface } from '../interfaces/new-releases.interface';
import { getNewArrivals } from '@/shared/modules/queries/product.query';

interface NewReleasesContainerProps {
  searchParams: {
    page: string;
  };
}

export async function NewReleasesContainer({
  searchParams,
}: NewReleasesContainerProps) {
  const page = parseInt(searchParams.page ?? '1');
  const itemsPerPage = 15;
  const data = await getNewArrivals(page, itemsPerPage);
  const totalPages = Math.ceil(data.total / itemsPerPage);

  return (
    <AppLayout>
      <NewReleasesInterface
        currentPage={page}
        totalPages={totalPages}
        products={data.products}
      />
    </AppLayout>
  );
}
