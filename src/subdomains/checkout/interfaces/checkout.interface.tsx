import { Cart } from '@subdomains/cart/entities';

import { Section } from '@shared/modules/components/section.component';
import { CheckoutFormInputs } from '../components/checkout-form-inputs.component';
import { CheckoutItems } from '../components/checkout-items.component';
import { CheckoutForm } from '../components/checkout-form.component';

interface CheckoutInterfaceProps {
  cart: Cart;
}

export function CheckoutInterface({ cart }: CheckoutInterfaceProps) {
  return (
    <Section>
      <CheckoutForm
        size={cart.getCheckoutSize()}
        total={cart.calculateCheckout()}
      >
        <div className="rounded border border-zinc-700 p-2 [grid-area:payment]">
          <h2 className="mb-2 text-lg font-black text-zinc-100">Payment</h2>
          <CheckoutFormInputs />
        </div>
        <div className="rounded border border-zinc-700 p-2 [grid-area:items]">
          <h2 className="mb-2 text-lg font-black text-zinc-100">Items</h2>
          <CheckoutItems items={cart.getSelectedItems()} />
        </div>
      </CheckoutForm>
    </Section>
  );
}
