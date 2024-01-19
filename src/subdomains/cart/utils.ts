import { cookies } from 'next/headers';
import { randomUUID } from 'node:crypto';
import pgp from 'pg-promise';

import { CART_STORAGE_KEY } from '@shared/modules/constants/storage.constant';
import type { TShoppingCart } from '@shared/modules/types/cart.type';

export async function createCart(): Promise<TShoppingCart> {
  const id = randomUUID();
  const connection = pgp()('postgres://postgres:root@localhost:5432/app');
  await connection.query(`insert into lak.cart (cart_id) values ($1)`, [id]);
  await connection.$pool.end();
  cookies().set(CART_STORAGE_KEY, id);
  return {
    cart_id: id,
    items: [],
    size: 0,
    subtotal: 0,
  };
}

export async function getCart(): Promise<TShoppingCart | null> {
  const cartKey = cookies().get(CART_STORAGE_KEY)?.value;
  if (!cartKey) {
    return null;
  }
  const connection = pgp()('postgres://postgres:root@localhost:5432/app');
  const data = await connection.query<TShoppingCart>(
    `select * from lak.cart where cart_id = $1`,
    [cartKey]
  );
  await connection.$pool.end();
  return data;
}
