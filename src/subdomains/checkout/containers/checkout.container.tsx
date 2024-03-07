import { redirect } from 'next/navigation';

import { getCart } from '@subdomains/cart/utils';

import { CheckoutLayout } from '@shared/modules/layouts/checkout.layout';
import { CheckoutInterface } from '../interfaces/checkout.interface';

export async function CheckoutContainer() {
  const cart = await getCart();
  if (!cart) redirect('/cart');
  return (
    <CheckoutLayout itemsQuantity={cart.getCheckoutSize()}>
      <CheckoutInterface cart={cart} />
    </CheckoutLayout>
  );
}
