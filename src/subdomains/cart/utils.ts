import { cookies } from 'next/headers';
import { randomUUID } from 'node:crypto';

import { CART_STORAGE_KEY } from '@shared/modules/constants/storage.constant';
import { prisma } from '@/externals/storage/prisma.storage';
import { Cart } from './entities';

export async function createCart(): Promise<Cart> {
  const cartId = randomUUID();
  await prisma.cart.create({
    data: {
      cart_id: cartId,
    },
  });
  // await prisma.cart.create({
  //   data: {
  //     cart_id: cartId,
  //     items: {
  //       create: {
  //         quantity,
  //         product_id: productId,
  //       },
  //     },
  //   },
  // });
  // await prisma.cartItem.create({
  //   data: {
  //     quantity,
  //     cart_id: cartId,
  //     product_id: productId,
  //   },
  // });
  cookies().set(CART_STORAGE_KEY, cartId);
  const cart = Cart.create(cartId, null);
  return cart;
}

export async function getCart(): Promise<Cart | null> {
  const cartKey = cookies().get(CART_STORAGE_KEY)?.value;
  if (!cartKey) return null;
  const foundCart = await prisma.cart.findUnique({
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
  const cartItems = foundCart.items.map((item) => {
    return {
      item_id: item.item_id,
      quantity: item.quantity,
      product_id: item.product_id,
      name: item.product.name,
      slug: item.product.slug,
      price: item.product.price,
      image_url: item.product.image_url,
      quantity_available: item.product.quantity_available,
    };
  });
  cart.setItems(cartItems);
  return cart;
}
