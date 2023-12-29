import { AppLayout } from '@shared/modules/layouts/app.layout';
import { CartInterface } from '../interfaces/cart.interface';

export function CartContainer() {
  return (
    <AppLayout>
      <CartInterface />
    </AppLayout>
  );
}
