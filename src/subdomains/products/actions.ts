'use server';

import { revalidatePath } from 'next/cache';

import type { TCartItem } from '@shared/modules/types/cart.type';
import { createCart, getCart } from '../cart/utils';
import { prisma } from '@/externals/storage/prisma.storage';

export async function addProductToCart(cartProduct: TCartItem) {
  const cart = (await getCart()) ?? (await createCart());
  const existingCartItem = cart.items.find(
    (item) => item.product_id === cartProduct.product_id
  );
  if (existingCartItem) {
    await prisma.cartItem.update({
      data: {
        quantity: {
          increment: cartProduct.product_quantity,
        },
      },
      where: {
        item_id: existingCartItem.item_id,
      },
    });
  } else {
    await prisma.cartItem.create({
      data: {
        cart_id: cart.cart_id,
        product_id: cartProduct.product_id,
        quantity: cartProduct.product_quantity,
      },
    });
  }
  revalidatePath('/products/[slug]', 'page');
}
