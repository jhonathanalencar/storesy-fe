'use client';

import { AppLayout } from '@shared/modules/layouts/app.layout';
import { CartInterface } from '../interfaces/cart.interface';

function getStorageJSON() {
  const storageJSON = localStorage?.getItem('@storesy:cart:0.0.1');
  if (storageJSON) {
    console.log(JSON.parse(storageJSON));
  }
}

export function CartContainer() {
  getStorageJSON();
  return (
    <AppLayout>
      <CartInterface />
    </AppLayout>
  );
}
