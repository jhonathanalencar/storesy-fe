import type { Metadata } from 'next';

import { cartRoutes } from '@subdomains/cart/routes';

export const metadata: Metadata = {
  title: 'Storesy | Shopping Cart',
};

export default function CartPage() {
  return <cartRoutes.CART />;
}
