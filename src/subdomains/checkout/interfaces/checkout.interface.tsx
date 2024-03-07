import Image from 'next/image';

import { Cart } from '@subdomains/cart/entities';
import { formatPrice } from '@shared/modules/utils/format.utils';

import { Section } from '@shared/modules/components/section.component';
import { Separator } from '@/shared/modules/components/separator.component';

interface CheckoutInterfaceProps {
  cart: Cart;
}

export function CheckoutInterface({ cart }: CheckoutInterfaceProps) {
  const shippingTax = 20;

  return (
    <Section>
      <div className="grid grid-cols-1 gap-6 [grid-template-areas:'summary''items'] md:grid-cols-[1fr_auto] md:[grid-template-areas:'items_summary']">
        <div className="rounded border border-zinc-700 p-2 [grid-area:items]">
          <h2 className="mb-2 text-lg font-black text-zinc-100">Items</h2>
          <div className="flex flex-col gap-3">
            {cart.getSelectedItems().map((item) => {
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
        </div>

        <div className="h-fit max-w-[258px] rounded border border-zinc-700 px-2 py-3 [grid-area:summary]">
          <button className="mb-4 w-60 rounded bg-yellow-500 py-2 font-semibold text-black transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-storesy-gray-900">
            Place your order
          </button>
          <h2 className="text-lg font-black text-zinc-100">Order Summary</h2>
          <Separator className="bg-zinc-700" />
          <p className="flex justify-between text-sm font-semibold text-zinc-200">
            <span>Items ({cart.getCheckoutSize()}):</span>
            <span>{formatPrice(cart.calculateCheckout())}</span>
          </p>
          <p className="flex justify-between text-sm font-semibold text-zinc-200">
            <span>Shipping:</span>
            <span>{formatPrice(shippingTax)}</span>
          </p>
          <Separator className="bg-zinc-700" />
          <p className="flex justify-between text-lg font-bold text-red-500">
            <strong>Order total:</strong>
            <span>{formatPrice(cart.calculateCheckout() + shippingTax)}</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
