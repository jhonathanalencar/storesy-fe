'use server';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { getCart } from '../cart/utils';
import { generateCardHash } from './utils';
import { authOptions } from '@shared/modules/configs/auth.config';
import { clearCheckout } from '../products/actions';
import {
  type CreateOrderResponse,
  createOrder,
} from '@shared/modules/queries/order.query';

export async function checkoutAction(formData: FormData) {
  const cart = await getCart();
  if (!cart) return;
  const session = await getServerSession(authOptions);
  if (!session?.user) return;
  const cardNumber = formData.get('cardNumber');
  const nameOnCard = formData.get('nameOnCard');
  const expirationDateMonth = formData.get('expirationDateMonth');
  const expirationDateYear = formData.get('expirationDateYear');
  const securityCode = formData.get('securityCode');
  const data = `${cardNumber}|${nameOnCard}|${expirationDateMonth}|${expirationDateYear}|${securityCode}`;
  const cardHash = generateCardHash(data);
  let order: CreateOrderResponse;
  try {
    order = await createOrder(
      session.user.id,
      cardHash,
      cart.getSelectedItems()
    );
    await clearCheckout();
  } catch (error) {
    console.error(error);
    return {
      error: { message: 'Order has failed to complete.' },
    };
  }
  redirect(`/checkout/${order.orderId}/success`);
}
