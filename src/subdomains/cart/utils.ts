import { cookies } from 'next/headers';
import { randomUUID } from 'node:crypto';
import { getServerSession } from 'next-auth';

import { CART_STORAGE_KEY } from '@shared/modules/constants/storage.constant';
import { prisma } from '@externals/storage/prisma.storage';
import { Cart } from './entities';
import { calculateProductDiscount } from '@shared/modules/utils/format.utils';
import { authOptions } from '@shared/modules/configs/auth.config';
import type { FoundCart } from './types';

export async function createCart(): Promise<Cart> {
  const session = await getServerSession(authOptions);
  const cartId = randomUUID();
  let cart: Cart;
  if (session) {
    const userId = session.user.id;
    await prisma.cart.create({
      data: {
        cart_id: cartId,
        user_id: userId,
      },
    });
    cart = Cart.create(cartId, userId);
  } else {
    await prisma.cart.create({
      data: {
        cart_id: cartId,
      },
    });
    cookies().set(CART_STORAGE_KEY, cartId, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 90, // 90 days
    });
    cart = Cart.create(cartId, null);
  }
  return cart;
}

export async function getCart(): Promise<Cart | null> {
  const session = await getServerSession(authOptions);
  let foundCart: FoundCart | null;
  if (session) {
    foundCart = await prisma.cart.findUnique({
      where: {
        user_id: session.user.id,
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
  } else {
    const cartkey = cookies().get(CART_STORAGE_KEY)?.value;
    if (!cartkey) return null;
    foundCart = await prisma.cart.findUnique({
      where: {
        cart_id: cartkey,
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
  }
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
      item.product.quantity_available,
      item.selected
    );
  });
  return cart;
}
