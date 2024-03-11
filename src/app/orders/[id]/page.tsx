import type { Metadata } from 'next';

import { orderRoutes } from '@subdomains/orders/routes';

export const metadata: Metadata = {
  title: 'Storesy | Order Details',
};

interface OrderDetailsProps {
  params: { id: string };
}

export default function OrderDetails({ params }: OrderDetailsProps) {
  return <orderRoutes.ORDER_DETAILS params={params} />;
}
