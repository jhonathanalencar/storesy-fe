import { getProductDeals } from '@/shared/modules/queries/product.query';

import { AppLayout } from '@shared/modules/layouts/app.layout';
import { DealsInterface } from '../interfaces/deals.interface';

interface DealsContainerProps {
  searchParams: {
    page: string;
  };
}

export async function DealsContainer({ searchParams }: DealsContainerProps) {
  const page = parseInt(searchParams.page ?? 1);
  const itemsPerPage = 15;
  const data = await getProductDeals(page, itemsPerPage);
  const totalPages = Math.ceil(data.total / itemsPerPage);

  return (
    <AppLayout>
      <DealsInterface
        currentPage={page}
        totalPages={totalPages}
        products={data.products}
      />
    </AppLayout>
  );
}
