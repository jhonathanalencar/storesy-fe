import { AppLayout } from '@shared/modules/layouts/app.layout';
import { ProductsByCategoryInterface } from '../interfaces/products-by-category.interface';

interface ProductsByCategoryContainerProps {
  params: { slug: string };
}

export function ProductsByCategoryContainer({
  params,
}: ProductsByCategoryContainerProps) {
  return (
    <AppLayout>
      <h1>{params.slug}</h1>
      <ProductsByCategoryInterface />
    </AppLayout>
  );
}
