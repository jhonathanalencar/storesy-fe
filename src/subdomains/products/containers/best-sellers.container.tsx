import { AppLayout } from '@shared/modules/layouts/app.layout';
import { BestSellersInterface } from '../interfaces/best-sellers.interface';
import { getBestSellers } from '@shared/modules/queries/product.query';

interface BestSellersContainerProps {
  searchParams: {
    page: string;
  };
}

export async function BestSellersContainer({
  searchParams,
}: BestSellersContainerProps) {
  const page = parseInt(searchParams.page ?? '1');
  const itemsPerPage = 15;
  const data = await getBestSellers(page, itemsPerPage);
  const totalPages = Math.ceil(data.total / itemsPerPage);

  return (
    <AppLayout>
      <BestSellersInterface
        currentPage={page}
        totalPages={totalPages}
        products={data.products}
      />
    </AppLayout>
  );
}
