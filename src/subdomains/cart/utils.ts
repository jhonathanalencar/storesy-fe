import { cookies } from 'next/headers';
import { randomUUID } from 'node:crypto';
import { getServerSession } from 'next-auth';
import type { CartItem, Prisma } from '@prisma/client';

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

export async function findCart(
  where: Prisma.CartWhereUniqueInput
): Promise<FoundCart | null> {
  return prisma.cart.findUnique({
    where,
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

export async function getCart(): Promise<Cart | null> {
  const session = await getServerSession(authOptions);
  let foundCart: FoundCart | null;
  if (session) {
    foundCart = await findCart({
      user_id: session.user.id,
    });
  } else {
    const cartkey = cookies().get(CART_STORAGE_KEY)?.value;
    if (!cartkey) return null;
    foundCart = await findCart({
      cart_id: cartkey,
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

export async function mergeAnonymousCartIntoUserCart(
  userId: string
): Promise<void> {
  const cartkey = cookies().get(CART_STORAGE_KEY)?.value;
  if (!cartkey) return;
  const localCart = await prisma.cart.findUnique({
    where: {
      cart_id: cartkey,
    },
    include: {
      items: true,
    },
  });
  if (!localCart) return;
  const userCart = await prisma.cart.findUnique({
    where: {
      user_id: userId,
    },
    include: {
      items: true,
    },
  });
  if (!userCart) return;
  await prisma.$transaction(async (tx) => {
    const mergedCartItems = mergeCartItems(localCart.items, userCart.items);
    await tx.cartItem.deleteMany({
      where: { cart_id: userCart.cart_id },
    });
    await tx.cart.update({
      where: { cart_id: userCart.cart_id },
      data: {
        items: {
          createMany: {
            data: mergedCartItems.map((item) => {
              return {
                product_id: item.product_id,
                quantity: item.quantity,
                selected: item.selected,
              };
            }),
          },
        },
      },
    });
    await tx.cart.delete({
      where: { cart_id: localCart.cart_id },
    });
    cookies().delete(CART_STORAGE_KEY);
  });
}

function mergeCartItems(...cartItems: CartItem[][]): CartItem[] {
  return cartItems.reduce((acc, items) => {
    items.forEach((item) => {
      const existingItem = acc.find((i) => i.product_id === item.product_id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push(item);
      }
    });
    return acc;
  }, [] as CartItem[]);
}
