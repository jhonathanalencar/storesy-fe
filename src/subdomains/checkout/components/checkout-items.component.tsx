import Image from 'next/image';

import { CartItem } from '@subdomains/cart/entities';
import { formatPrice } from '@shared/modules/utils/format.utils';

interface CheckoutItemsProps {
  items: CartItem[];
}

export function CheckoutItems({ items }: CheckoutItemsProps) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => {
        return (
          <div
            key={item.product_id}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Image
              src={item.image_url}
              alt={item.name}
              width="0"
              height="0"
              sizes="100vw"
              priority
              className="h-24 w-28 rounded object-cover"
            />
            <div className="flex flex-col gap-1">
              <h3 className="line-clamp-4 font-semibold text-zinc-100">
                {item.name}
              </h3>
              <strong className="font-bold text-red-500">
                {formatPrice(item.price)}
              </strong>
              <span className="font-medium text-zinc-300">
                Qty: {item.quantity}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
