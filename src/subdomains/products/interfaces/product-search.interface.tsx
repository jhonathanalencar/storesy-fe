import type { SearchProductsResponse } from '@shared/modules/queries/product.query';

import { Section } from '@shared/modules/components/section.component';
import { ProductDetailsCard } from '../components/product-details-card.component';
import { PaginationBar } from '@shared/modules/components/pagination-bar';

interface ProductSearchInterfaceProps {
  data: SearchProductsResponse;
  currentPage: number;
  totalPages: number;
}

export function ProductSearchInterface({
  data,
  currentPage,
  totalPages,
}: ProductSearchInterfaceProps) {
  return (
    <Section>
      <div className="grid grid-cols-products place-items-center gap-4">
        {data.products.map((product) => {
          return (
            <ProductDetailsCard key={product.productId} product={product} />
          );
        })}
      </div>
      <PaginationBar totalPages={totalPages} currentPage={currentPage} />
    </Section>
  );
}
