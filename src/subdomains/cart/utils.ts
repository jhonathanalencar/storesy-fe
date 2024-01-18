import { CART_STORAGE_KEY } from '@shared/modules/constants/storage.constant';
import type { TCartProduct } from '@shared/modules/types/cart.type';

export function getStorageCartJSON() {
  let data: TCartProduct[] = [];
  if (typeof window === 'undefined') return data;
  const storageJSON = localStorage.getItem('@storesy:cart:0.0.1');
  if (storageJSON) {
    data = JSON.parse(storageJSON);
  }
  return data;
}

export function updateProductQuantity(productId: string, quantity: number) {
  let data: TCartProduct[] = [];
  if (typeof window === 'undefined') return;
  const storageJSON = localStorage.getItem(CART_STORAGE_KEY);
  if (storageJSON) {
    data = JSON.parse(storageJSON);
  }
  const newCart = data.map((product) => {
    if (product.product_id === productId) {
      return {
        ...product,
        product_quantity: quantity,
      };
    }
    return product;
  });
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
}
