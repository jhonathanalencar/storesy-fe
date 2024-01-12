import type { ReactNode } from 'react';

import type { TCartProduct } from '@shared/modules/types/cart.type';

import { CartProduct } from './cart-product.component';

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
      return (
        <CartProduct
          key={product.product_id}
          productId={product.product_id}
          productUrl={product.product_url}
          productTitle={product.product_title}
          productQuantity={product.product_quantity}
          quantityAvailable={product.quantity_available}
          subtotal={product.subtotal}
        />
      );
    });
  }
  return <div className="flex flex-col">{content}</div>;
}
