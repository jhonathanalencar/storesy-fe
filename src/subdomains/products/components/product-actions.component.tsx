'use client';

import type { TProduct } from '@shared/modules/types/product.type';
import { formatPrice } from '@shared/modules/utils/format.utils';
import { useSelectedQuantity } from '@shared/modules/hooks/use-selected-quantity.hook';

import { ProductAvailability } from './product-availability.component';
import { QuantitySelect } from './quantity-select.component';
import { AddToCartButton } from './add-to-cart-button.component';
import { BuyNowButton } from './buy-now-button.component';

interface ProductActions {
  product: TProduct;
  price: number;
}

export function ProductActions({ product, price }: ProductActions) {
  const { selectedQuantity, setSelectedQuantity } = useSelectedQuantity({});
  const isAvailable = product.quantity > 0;

  return (
    <div className="product-actions flex h-fit w-full  flex-col rounded-lg bg-zinc-800 p-2 shadow-md md:file:p-4">
      <span className="text-lg font-black tracking-tight text-zinc-200">
        {formatPrice(price)}
      </span>
      <ProductAvailability quantityAvailable={product.quantity} />
      {isAvailable ? (
        <QuantitySelect
          id={product.productId}
          selectedQuantity={selectedQuantity}
          setSelectedQuantity={setSelectedQuantity}
          quantityAvailable={product.quantity}
        />
      ) : null}
      <div className="mb-2 mt-4 flex flex-col gap-2">
        <AddToCartButton
          isAvailable={isAvailable}
          cartProduct={{
            product_id: product.productId,
            product_slug: product.slug,
            subtotal: price,
            product_url: product.imageUrl,
            product_title: product.name,
            product_quantity: Number(selectedQuantity.value),
            quantity_available: product.quantity,
          }}
        />
        <BuyNowButton
          isAvailable={isAvailable}
          cartProduct={{
            product_id: product.productId,
            product_slug: product.slug,
            subtotal: price,
            product_url: product.imageUrl,
            product_title: product.name,
            product_quantity: Number(selectedQuantity.value),
            quantity_available: product.quantity,
          }}
        />
      </div>
    </div>
  );
}
