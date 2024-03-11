import type { Metadata } from 'next';

import { checkoutRoutes } from '@subdomains/checkout/routes';

export const metadata: Metadata = {
  title: 'Storesy | Checkout',
};

export default function Checkout() {
  return <checkoutRoutes.CHECKOUT />;
}
