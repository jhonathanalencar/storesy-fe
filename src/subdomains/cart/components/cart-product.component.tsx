import Image from 'next/image';
import Link from 'next/link';

import { formatPrice } from '@shared/modules/utils/format.utils';

import { CartProductActions } from './cart-product-actions.component';
import { CartItem } from '../entities';
import { SelectProductCheckbox } from './select-product-checkbox.component';

interface CartProductProps {
  product: CartItem;
}

export function CartProduct({ product }: CartProductProps) {
  return (
    <div className="product-cart-grid grid gap-3 py-2">
      <div className="flex items-center gap-2 [grid-area:image]">
        <SelectProductCheckbox
          productId={product.product_id}
          selected={product.selected}
        />
        <Image
          src={product.image_url}
          alt={product.name}
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="h-44 w-44 min-w-[11rem] rounded object-cover"
        />
      </div>
      <div className="[grid-area:description]">
        <Link
          href={`/products/${product.slug}`}
          className="line-clamp-3 break-all text-lg font-semibold tracking-wide text-zinc-200"
        >
          {product.name}
        </Link>
        <span className="text-sm font-light text-green-400">In Stock</span>
        <CartProductActions
          product_id={product.product_id}
          productQuantity={product.quantity}
          quantityAvailable={product.quantity_available}
        />
      </div>
      <span className="text-base font-black text-zinc-100 [grid-area:price] md:text-lg">
        {formatPrice(product.price)}
      </span>
    </div>
  );
}
