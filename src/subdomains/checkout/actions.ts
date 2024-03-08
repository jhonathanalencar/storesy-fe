'use server';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { getCart } from '../cart/utils';
import { createOrder } from './queries';
import { generateCardHash } from './utils';
import { authOptions } from '@shared/modules/configs/auth.config';

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
  try {
    const order = await createOrder(
      session.user.id,
      cardHash,
      cart.getSelectedItems()
    );
    redirect(`/checkout/${order.orderId}/success`);
  } catch (error) {
    console.error(error);
    return {
      error: { message: 'Order has failed to complete.' },
    };
  }
}
