import type { TProduct } from '@shared/modules/types/product.type';

import { Section } from '@shared/modules/components/section.component';
import { ProductDetailsCard } from '../components/product-details-card.component';
import { PaginationBar } from '@shared/modules/components/pagination-bar';

interface ProductsByCategoryInterfaceProps {
  products: (TProduct & {
    rateAmount: number;
    totalScore: number;
  })[];
  currentPage: number;
  totalPages: number;
}

export function ProductsByCategoryInterface({
  products,
  currentPage,
  totalPages,
}: ProductsByCategoryInterfaceProps) {
  return (
    <Section>
      <div className="grid grid-cols-products place-items-center gap-4">
        {products.map((product) => {
          return (
            <ProductDetailsCard key={product.productId} product={product} />
          );
        })}
      </div>
      <PaginationBar currentPage={currentPage} totalPages={totalPages} />
    </Section>
  );
}
