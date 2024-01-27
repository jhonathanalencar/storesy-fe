import { formatPrice } from '@shared/modules/utils/format.utils';
import { Cart } from '../entities';

import { NoItemsSelectedPopover } from './no-items-selected-popover.component';

interface ProceedToCheckoutProps {
  cart: Cart;
}

export function ProceedToCheckout({ cart }: ProceedToCheckoutProps) {
  return (
    <div className="row-start-1 h-fit w-fit bg-zinc-600 p-4 shadow-md md:p-4 lg:row-auto">
      <div className="flex flex-col gap-1">
        {cart.hasSelectedItems() ? (
          <div className="flex flex-col gap-2">
            <p className="text-lg font-light text-zinc-200">
              Subtotal ({cart.getCheckoutSize()}{' '}
              {cart.getCheckoutSize() > 1 ? 'items' : 'item'}):{' '}
              <span className="font-bold">
                {formatPrice(cart.calculateCheckout())}
              </span>
            </p>
            <button className="mx-auto w-52 rounded bg-yellow-500 py-2 font-semibold text-black transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-600">
              Proceed to checkout
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <p className="text-lg text-zinc-200">No items selected</p>
            <NoItemsSelectedPopover />
          </div>
        )}
      </div>
    </div>
  );
}
