import type { Metadata } from 'next';

import { checkoutRoutes } from '@subdomains/checkout/routes';

export const metadata: Metadata = {
  title: 'Storesy | Order Confirmation',
};

interface CheckoutSuccessProps {
  params: { id: string };
}

export default function CheckoutSuccess({ params }: CheckoutSuccessProps) {
  return <checkoutRoutes.SUCCESS params={params} />;
}
