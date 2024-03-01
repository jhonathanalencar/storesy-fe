import type { SearchProductsResponse } from '@shared/modules/queries/product.query';

import { Section } from '@shared/modules/components/section.component';
import { ProductDetailsCard } from '../components/product-details-card.component';
import { PaginationBar } from '@shared/modules/components/pagination-bar';

interface ProductSearchInterfaceProps {
  currentPage: number;
  totalPages: number;
  products: SearchProductsResponse['products'];
}

export function ProductSearchInterface({
  products,
  currentPage,
  totalPages,
}: ProductSearchInterfaceProps) {
  return (
    <Section>
      <div className="grid grid-cols-products place-items-center gap-4">
        {products.map((product) => {
          return (
            <ProductDetailsCard key={product.productId} product={product} />
          );
        })}
      </div>
      <PaginationBar totalPages={totalPages} currentPage={currentPage} />
    </Section>
  );
}
