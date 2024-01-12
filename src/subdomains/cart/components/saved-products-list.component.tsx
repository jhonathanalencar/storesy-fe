import type { TCartProduct } from '@shared/modules/types/cart.type';
import { ReactNode } from 'react';

interface SavedProductsListProps {
  products: TCartProduct[];
}

export function SavedProductsList({ products }: SavedProductsListProps) {
  let content: ReactNode = (
    <p className="text-2xl font-semibold tracking-wide text-zinc-300">
      Your cart is empty.
    </p>
  );
  if (products.length > 0) {
    content = products.map((product) => {
      return <p key={product.product_id}>{product.product_title}</p>;
    });
  }
  return <div className="flex flex-col">{content}</div>;
}
