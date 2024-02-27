import type { TProduct } from '@shared/modules/types/product.type';

import { Section } from '@shared/modules/components/section.component';
import { ProductDetailsCard } from '../components/product-details-card.component';

interface ProductsByCategoryInterfaceProps {
  products: (TProduct & {
    rateAmount: number;
    totalScore: number;
  })[];
}

export function ProductsByCategoryInterface({
  products,
}: ProductsByCategoryInterfaceProps) {
  return (
    <Section>
      <div className="grid-cols-products grid place-items-center gap-4">
        {products.map((product) => {
          return (
            <ProductDetailsCard key={product.productId} product={product} />
          );
        })}
      </div>
    </Section>
  );
}
