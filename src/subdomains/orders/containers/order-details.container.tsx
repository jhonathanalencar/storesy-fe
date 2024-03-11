import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { getOrder } from '@shared/modules/queries/order.query';
import { authOptions } from '@shared/modules/configs/auth.config';

import { AppLayout } from '@shared/modules/layouts/app.layout';
import { OrderDetailsInterface } from '../interfaces/order-details.interface';

interface OrderDetailsContainerProps {
  params: { id: string };
}

export async function OrderDetailsContainer({
  params,
}: OrderDetailsContainerProps) {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect('/login');
  const order = await getOrder(session.user.id, params.id);
  return (
    <AppLayout>
      <OrderDetailsInterface order={order} />
    </AppLayout>
  );
}
