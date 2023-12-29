import { CART_STORAGE_KEY } from '@shared/modules/constants/storage.constant';
import type { TCartProduct } from '@shared/modules/types/cart.type';

interface AddToCartButtonProps {
  cartProduct: TCartProduct;
}

function addProductToCart(cartProduct: TCartProduct) {
  const storageProducts = localStorage?.getItem(CART_STORAGE_KEY);
  if (storageProducts) {
    const products = JSON.parse(storageProducts) as TCartProduct[];
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify([...products, cartProduct])
    );
    return;
  }
  localStorage?.setItem(CART_STORAGE_KEY, JSON.stringify([cartProduct]));
}

export function AddToCartButton({ cartProduct }: AddToCartButtonProps) {
  return (
    <button
      onClick={() => addProductToCart(cartProduct)}
      className="mx-auto w-4/5 rounded bg-violet-600 py-2 font-semibold text-black transition-colors hover:bg-violet-700 md:w-52"
    >
      Add to Cart
    </button>
  );
}
