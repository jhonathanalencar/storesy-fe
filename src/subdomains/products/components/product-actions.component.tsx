'use client';

import { useState } from 'react';

import type { TProduct } from '@shared/modules/types/product.type';
import type { TSelectOption } from '@shared/modules/types/react-select.type';
import { formatPrice } from '@shared/modules/utils/format.utils';

import { ProductAvailability } from './product-availability.component';
import { QuantitySelect } from './quantity-select.component';
import { AddToCartButton } from './add-to-cart-button.component';

interface ProductActions {
  product: TProduct;
  price: number;
}

export function ProductActions({ product, price }: ProductActions) {
  const [selectedQuantity, setSelectedQuantity] = useState<TSelectOption>({
    value: '1',
    label: '1',
  });

  return (
    <div className="product-actions flex h-fit w-full  flex-col rounded-lg bg-zinc-800 p-2 shadow-md md:file:p-4">
      <span className="text-lg font-black tracking-tight text-zinc-200">
        {formatPrice(price)}
      </span>
      <ProductAvailability quantity_available={product.quantity_available} />
      <QuantitySelect
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
        quantityAvailable={product.quantity_available}
      />
      <div className="mb-2 mt-4 flex flex-col gap-2">
        <AddToCartButton
          cartProduct={{
            product_id: product.product_id,
            subtotal: price,
            product_url: product.image_url,
            product_title: product.name,
            product_quantity: Number(selectedQuantity.value),
          }}
        />
        <button className="mx-auto w-4/5 rounded bg-yellow-500 py-2 font-semibold text-black transition-colors hover:bg-yellow-600 md:w-52">
          Buy Now
        </button>
      </div>
    </div>
  );
}
