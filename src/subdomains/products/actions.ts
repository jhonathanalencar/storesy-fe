'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createCart, getCart } from '../cart/utils';
import { prisma } from '@/externals/storage/prisma.storage';
import { updateProductQuantity } from '@shared/modules/queries/product.query';

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

export async function clearCheckout() {
  const cart = await getCart();
  if (!cart) return;
  cart.getSelectedItems().map(async (item) => {
    await updateProductQuantity(item.product_id, item.quantity);
  });
  await prisma.cartItem.deleteMany({
    where: {
      selected: {
        equals: true,
      },
    },
  });
  revalidatePath('/products/[slug]', 'page');
}

export async function selectAllItems() {
  const cart = await getCart();
  if (!cart) return;
  await prisma.cartItem.updateMany({
    data: {
      selected: true,
    },
  });
  revalidatePath('/cart', 'page');
}

export async function deselectAllItems() {
  const cart = await getCart();
  if (!cart) return;
  await prisma.cartItem.updateMany({
    data: {
      selected: false,
    },
  });
  revalidatePath('/cart', 'page');
}

export async function buyNow(productId: string, quantity: number) {
  try {
    const cart = (await getCart()) ?? (await createCart());
    const existingCartItem = cart.items.find(
      (item) => item.product_id === productId
    );
    if (existingCartItem) {
      await prisma.cartItem.update({
        data: {
          quantity: existingCartItem.quantity + quantity,
          selected: true,
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
          selected: true,
        },
      });
    }
  } catch (error) {
    console.error(error);
    return {
      error: { message: 'Operation could not be completed' },
    };
  }
  revalidatePath('/products/[slug]', 'page');
  redirect('/checkout');
}
