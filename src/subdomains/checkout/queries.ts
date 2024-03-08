import { CartItem } from '../cart/entities';

type OrderStatusType = 'PENDING' | 'PAID' | 'FAILED';
export type CreateOrderResponse = {
  orderId: string;
  customerId: string;
  status: OrderStatusType;
  total: number;
  createdAt: Date;
};

export async function createOrder(
  userId: string,
  cardHash: string,
  items: CartItem[]
): Promise<CreateOrderResponse> {
  const response = await fetch(`${process.env.ORDERS_API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userId}`,
    },
    body: JSON.stringify({
      cardHash,
      items: items.map((item) => {
        return {
          productId: item.product_id,
          quantity: item.quantity,
        };
      }),
    }),
  });
  return response.json();
}
