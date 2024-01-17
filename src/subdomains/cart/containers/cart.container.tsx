'use client';

import type { TCartProduct } from '@shared/modules/types/cart.type';

import { AppLayout } from '@shared/modules/layouts/app.layout';
import { CartInterface } from '../interfaces/cart.interface';
import { ClientOnly } from '@shared/modules/components/client-only';

function getStorageJSON() {
  let data: TCartProduct[] = [];
  if (typeof window === 'undefined') return data;
  const storageJSON = localStorage.getItem('@storesy:cart:0.0.1');
  if (storageJSON) {
    data = JSON.parse(storageJSON);
  }
  return data;
}

export function CartContainer() {
  const products = getStorageJSON();
  const subtotal = products.reduce((acc, product) => {
    return acc + product.subtotal * product.product_quantity;
  }, 0);
  return (
    <AppLayout>
      <ClientOnly>
        <CartInterface products={products} subtotal={subtotal} />
      </ClientOnly>
    </AppLayout>
  );
}
