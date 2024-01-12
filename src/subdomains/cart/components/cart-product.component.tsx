import Image from 'next/image';

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
      <div className="product-cart-grid grid gap-3 py-2">
        <div className="flex gap-2 [grid-area:image]">
          <input type="checkbox" name="" id="" />
          <Image
            src={productUrl}
            alt={productTitle}
            width="0"
            height="0"
            sizes="100vw"
            priority
            className="h-44 w-44 rounded object-cover"
          />
        </div>
        <div className="[grid-area:description]">
          <p className="text-lg font-semibold tracking-wide text-zinc-200">
            {productTitle}
          </p>
          <span className="text-sm font-light text-green-400">In Stock</span>
          <CartProductActions
            product_id={productId}
            productQuantity={productQuantity}
            quantityAvailable={quantityAvailable}
          />
        </div>
        <span className="text-lg font-black text-zinc-100 [grid-area:price]">
          {formatPrice(subtotal)}
        </span>
      </div>
      <Separator className="bg-zinc-800" />
    </>
  );
}
