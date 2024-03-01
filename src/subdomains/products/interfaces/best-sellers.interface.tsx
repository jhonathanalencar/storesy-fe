import type { GetBestSellersResponse } from '@shared/modules/queries/product.query';

import { Section } from '@shared/modules/components/section.component';
import { ProductDetailsCard } from '../components/product-details-card.component';
import { PaginationBar } from '@shared/modules/components/pagination-bar';

interface BestSellersInterfaceProps {
  currentPage: number;
  totalPages: number;
  products: GetBestSellersResponse['products'];
}

export function BestSellersInterface({
  currentPage,
  totalPages,
  products,
}: BestSellersInterfaceProps) {
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
