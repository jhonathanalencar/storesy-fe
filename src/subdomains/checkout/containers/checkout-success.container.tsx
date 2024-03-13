import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { authOptions } from '@shared/modules/configs/auth.config';
import { getOrder } from '@shared/modules/queries/order.query';

import { AppLayout } from '@shared/modules/layouts/app.layout';
import { CheckoutSuccessInterface } from '../interfaces/checkout-success.interface';

interface CheckoutSuccessContainerProps {
  params: { id: string };
}

export async function CheckoutSuccessContainer({
  params,
}: CheckoutSuccessContainerProps) {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect('/login');
  const order = await getOrder(session.user.id, params.id);
  if (!order.orderId) redirect('/');
  return (
    <AppLayout>
      <CheckoutSuccessInterface order={order} />
    </AppLayout>
  );
}
