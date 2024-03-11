import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { getOrders } from '@shared/modules/queries/order.query';
import { authOptions } from '@shared/modules/configs/auth.config';

import { AppLayout } from '@shared/modules/layouts/app.layout';
import { OrdersInterface } from '../interfaces/orders.interface';

export async function OrdersContainer() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect('/login');
  const orders = await getOrders(session.user.id);
  return (
    <AppLayout>
      <OrdersInterface orders={orders} />
    </AppLayout>
  );
}
