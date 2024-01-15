'use client';

import Image from 'next/image';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@heroicons/react/16/solid';

import { formatPrice } from '@shared/modules/utils/format.utils';

import { CartProductActions } from './cart-product-actions.component';
import { Separator } from '@shared/modules/components/separator.component';

interface CartProductProps {
  productId: string;
  productUrl: string;
  productTitle: string;
  productQuantity: number;
  quantityAvailable: number;
  subtotal: number;
}

export function CartProduct({
  productId,
  productUrl,
  productTitle,
  productQuantity,
  quantityAvailable,
  subtotal,
}: CartProductProps) {
  return (
    <>
      <div className="product-cart-grid grid w-full gap-3 py-2">
        <div className="flex items-center gap-2 [grid-area:image]">
          <Checkbox.Root className="flex h-4 w-4 items-center justify-center rounded bg-zinc-900 shadow outline-none hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-green-500">
            <Checkbox.Indicator className="text-green-500">
              <CheckIcon className="h-4 w-4" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <Image
            src={productUrl}
            alt={productTitle}
            width="0"
            height="0"
            sizes="100vw"
            priority
            className="h-44 w-44 min-w-[11rem] rounded object-cover"
          />
        </div>
        <div className="overflow-hidden [grid-area:description]">
          <p className="line-clamp-3 break-words text-lg font-semibold tracking-wide text-zinc-200">
            {productTitle}
          </p>
          <span className="text-sm font-light text-green-400">In Stock</span>
          <CartProductActions
            product_id={productId}
            productQuantity={productQuantity}
            quantityAvailable={quantityAvailable}
          />
        </div>
        <span className="text-base font-black text-zinc-100 [grid-area:price] md:text-lg">
          {formatPrice(subtotal)}
        </span>
      </div>
      <Separator className="bg-zinc-800" />
    </>
  );
}
