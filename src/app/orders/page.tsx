import type { Metadata } from 'next';

import { orderRoutes } from '@subdomains/orders/routes';

export const metadata: Metadata = {
  title: 'Storesy | Your Orders',
};

export default function OrdersPage() {
  return <orderRoutes.ORDERS />;
}
