import type { TCartItem } from '@shared/modules/types/cart.type';

import { CartProduct } from './cart-product.component';

interface SavedProductsProps {
  products: TCartItem[];
}

export function SavedProducts({ products }: SavedProductsProps) {
  const content = products.map((product) => {
    return (
      <CartProduct
        key={product.product_id}
        productId={product.product_id}
        productSlug={product.product_slug}
        productUrl={product.product_url}
        productTitle={product.product_title}
        productQuantity={product.product_quantity}
        quantityAvailable={product.quantity_available}
        subtotal={product.subtotal}
      />
    );
  });
  return <div className="flex w-full flex-col">{content}</div>;
}
