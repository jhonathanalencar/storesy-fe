import { cookies } from 'next/headers';
import pgp from 'pg-promise';

import { CART_STORAGE_KEY } from '@shared/modules/constants/storage.constant';
import type { TCartItem, TShoppingCart } from '@shared/modules/types/cart.type';
import { createCart } from '@subdomains/cart/utils';

interface AddToCartButtonProps {
  cartProduct: TCartItem;
}

async function addProductToCart(cartProduct: TCartItem) {
  const cartKey = cookies().get(CART_STORAGE_KEY);
  console.log('here', cartKey);
  let cart: TShoppingCart;
  const connection = pgp()('postgres://postgres:root@localhost:5432/app');
  if (!cartKey) {
    cart = await createCart();
    await connection.query(
      `insert into lak.cart_item (item_id, product_id, cart_id, quantity) values ($1, $2,$3, $4)`,
      [
        cartProduct.product_id,
        cartProduct.product_id,
        cart.cart_id,
        cartProduct.product_quantity,
      ]
    );
    return;
  }
  cart = await connection.query(`select * from lak.cart where cart_id = $1`, [
    cartKey,
  ]);
  const foundProduct = cart.items.find(
    (product) => product.product_id === cartProduct.product_id
  );
  if (foundProduct) {
    await connection.query(
      `update lak.cart_item set quantity = $1 where item_id = $2`,
      [cartProduct.product_quantity, cartProduct.product_id]
    );
  } else {
    await connection.query(
      `insert into lak.cart_item (item_id, product_id, cart_id, quantity) values ($1, $2,$3, $4)`,
      [
        cartProduct.product_id,
        cartProduct.product_id,
        cart.cart_id,
        cartProduct.product_quantity,
      ]
    );
  }
  await connection.$pool.end();
}

export function AddToCartButton({ cartProduct }: AddToCartButtonProps) {
  return (
    <button
      // onClick={() => addProductToCart(cartProduct)}
      className="mx-auto w-4/5 rounded bg-violet-600 py-2 font-semibold text-black transition-colors hover:bg-violet-700 md:w-52"
    >
      Add to Cart
    </button>
  );
}
