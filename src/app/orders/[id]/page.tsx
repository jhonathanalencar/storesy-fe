import { orderRoutes } from '@subdomains/orders/routes';

interface OrderDetailsProps {
  params: { id: string };
}

export default function OrderDetails({ params }: OrderDetailsProps) {
  return <orderRoutes.ORDER_DETAILS params={params} />;
}
