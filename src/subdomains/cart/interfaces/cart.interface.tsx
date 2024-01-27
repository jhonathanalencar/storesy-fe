import { formatPrice } from '@shared/modules/utils/format.utils';
import { Cart } from '../entities';

import { Section } from '@shared/modules/components/section.component';
import { Separator } from '@shared/modules/components/separator.component';
import { SavedProducts } from '../components/saved-products.component';
import { ProceedToCheckout } from '../components/proceed-to-checkout.component';
import { CartEmpty } from '../components/cart-empty.component';

interface CartInterfaceProps {
  cart: Cart | null;
}

export function CartInterface({ cart }: CartInterfaceProps) {
  return (
    <Section>
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-[1fr_auto]">
        <div className="w-full bg-zinc-600 p-4">
          {cart && cart.isEmpty() ? (
            <>
              <h1 className="text-2xl text-zinc-100">
                Shopping Cart ({cart.getSize()}{' '}
                {cart.getSize() > 1 ? 'items' : 'item'})
              </h1>
              <p className="text-sm font-light tracking-wide text-zinc-300">
                Deselect all items
              </p>
              <Separator className="bg-zinc-800" />
              <SavedProducts products={cart.items} />
              <p className="ml-auto w-fit text-lg font-light text-zinc-100">
                Subtotal:{' '}
                <span className="font-bold">
                  {formatPrice(cart.getSubtotal())}
                </span>
              </p>
            </>
          ) : (
            <CartEmpty />
          )}
        </div>
        {cart && cart.isEmpty() ? <ProceedToCheckout cart={cart} /> : null}
      </div>
    </Section>
  );
}
