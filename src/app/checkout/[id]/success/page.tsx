import { checkoutRoutes } from '@subdomains/checkout/routes';

interface CheckoutSuccessProps {
  params: { id: string };
}

export default function CheckoutSuccess({ params }: CheckoutSuccessProps) {
  return <checkoutRoutes.SUCCESS params={params} />;
}
