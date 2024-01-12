'use client';

import type { TCartProduct } from '@/shared/modules/types/cart.type';

import { AppLayout } from '@shared/modules/layouts/app.layout';
import { CartInterface } from '../interfaces/cart.interface';

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
  return (
    <AppLayout>
      <CartInterface products={products} />
    </AppLayout>
  );
}
