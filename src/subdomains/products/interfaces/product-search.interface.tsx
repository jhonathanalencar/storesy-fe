import type { SearchProductsResponse } from '@shared/modules/queries/product.query';

import { Section } from '@shared/modules/components/section.component';
import { ProductDetailsCard } from '../components/product-details-card.component';

interface ProductSearchInterfaceProps {
  data: SearchProductsResponse;
}

export function ProductSearchInterface({ data }: ProductSearchInterfaceProps) {
  return (
    <Section>
      <div className="grid grid-cols-products place-items-center gap-4">
        {data.products.map((product) => {
          return (
            <ProductDetailsCard key={product.productId} product={product} />
          );
        })}
      </div>
    </Section>
  );
}
