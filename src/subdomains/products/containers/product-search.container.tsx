import { AppLayout } from '@shared/modules/layouts/app.layout';
import { ProductSearchInterface } from '../interfaces/product-search.interface';

interface ProductSearchContainerProps {
  searchParams: {
    query: string;
  };
}

export function ProductSearchContainer({
  searchParams,
}: ProductSearchContainerProps) {
  return (
    <AppLayout>
      <h1>{searchParams.query}</h1>
      <ProductSearchInterface />
    </AppLayout>
  );
}
