'use server';

import { revalidatePath } from 'next/cache';

import { createCart, getCart } from '../cart/utils';
import { prisma } from '@/externals/storage/prisma.storage';

export async function addProductToCart(productId: string, quantity: number) {
  const cart = (await getCart()) ?? (await createCart());
  const existingCartItem = cart.items.find(
    (item) => item.product_id === productId
  );
  if (existingCartItem) {
    await prisma.cartItem.update({
      data: {
        quantity: existingCartItem.quantity + quantity,
      },
      where: {
        item_id: existingCartItem.item_id,
      },
    });
  } else {
    await prisma.cartItem.create({
      data: {
        cart_id: cart.cart_id,
        product_id: productId,
        quantity: quantity,
      },
    });
  }
  revalidatePath('/products/[slug]', 'page');
}

export async function removeProductFromCart(productId: string) {
  const cart = (await getCart()) ?? (await createCart());
  const existingCartItem = cart.items.find(
    (item) => item.product_id === productId
  );
  if (!existingCartItem) return;
  await prisma.cartItem.delete({
    where: {
      item_id: existingCartItem.item_id,
    },
  });
  revalidatePath('/products/[slug]', 'page');
}

export async function changeProductQuantity(
  productId: string,
  quantity: number
) {
  const cart = (await getCart()) ?? (await createCart());
  const existingCartItem = cart.items.find(
    (item) => item.product_id === productId
  );
  if (!existingCartItem) return;
  await prisma.cartItem.update({
    data: {
      quantity,
    },
    where: {
      item_id: existingCartItem.item_id,
    },
  });
  revalidatePath('/products/[slug]', 'page');
}

export async function selectProductItem(productId: string) {
  const cart = (await getCart()) ?? (await createCart());
  const existingCartItem = cart.items.find(
    (item) => item.product_id === productId
  );
  if (!existingCartItem) return;
  await prisma.cartItem.update({
    data: {
      selected: !existingCartItem.selected,
    },
    where: {
      item_id: existingCartItem.item_id,
    },
  });
  revalidatePath('/products/[slug]', 'page');
}
