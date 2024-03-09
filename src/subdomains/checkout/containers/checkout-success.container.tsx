import { getServerSession } from 'next-auth';

import { getOrder } from '../queries';
import { authOptions } from '@shared/modules/configs/auth.config';

import { AppLayout } from '@shared/modules/layouts/app.layout';
import { CheckoutSuccessInterface } from '../interfaces/checkout-success.interface';
import { redirect } from 'next/navigation';

interface CheckoutSuccessContainerProps {
  params: { id: string };
}

export async function CheckoutSuccessContainer({
  params,
}: CheckoutSuccessContainerProps) {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect('/login');
  const order = await getOrder(session.user.id, params.id);
  return (
    <AppLayout>
      <CheckoutSuccessInterface order={order} />
    </AppLayout>
  );
}
