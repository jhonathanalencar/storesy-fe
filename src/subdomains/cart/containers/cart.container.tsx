import { AppLayout } from '@shared/modules/layouts/app.layout';
import { CartInterface } from '../interfaces/cart.interface';
import { getCart } from '../utils';

export async function CartContainer() {
  const cart = await getCart();
  return (
    <AppLayout>
      <CartInterface cart={cart} />
    </AppLayout>
  );
}
