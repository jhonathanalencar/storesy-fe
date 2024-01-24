import { cookies } from 'next/headers';
import { randomUUID } from 'node:crypto';

import { CART_STORAGE_KEY } from '@shared/modules/constants/storage.constant';
import { prisma } from '@/externals/storage/prisma.storage';
import { Cart } from './entities';
import { calculateProductDiscount } from '@shared/modules/utils/format.utils';

export async function createCart(): Promise<Cart> {
  return prisma.$transaction(async (tx) => {
    const cartId = randomUUID();
    await tx.cart.create({
      data: {
        cart_id: cartId,
      },
    });
    cookies().set(CART_STORAGE_KEY, cartId, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 90, // 90 days
    });
    const cart = Cart.create(cartId, null);
    return cart;
  });
}

export async function getCart(): Promise<Cart | null> {
  const cartKey = cookies().get(CART_STORAGE_KEY)?.value;
  if (!cartKey) return null;
  return prisma.$transaction(async (tx) => {
    const foundCart = await tx.cart.findUnique({
      where: {
        cart_id: cartKey,
      },
      include: {
        items: {
          include: {
            product: true,
          },
          orderBy: {
            product: {
              quantity_available: 'asc',
            },
          },
        },
      },
    });
    if (!foundCart) return null;
    const cart = Cart.create(foundCart.cart_id, foundCart.user_id);
    foundCart.items.map((item) => {
      cart.addItem(
        item.item_id,
        item.quantity,
        item.product_id,
        item.product.name,
        item.product.slug,
        calculateProductDiscount(
          item.product.price,
          item.product.discount_percent
        ),
        item.product.image_url,
        item.product.quantity_available
      );
    });
    return cart;
  });
}
