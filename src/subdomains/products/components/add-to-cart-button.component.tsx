import { useEffect, useState, useTransition } from 'react';

import type { TCartItem } from '@shared/modules/types/cart.type';
import { addProductToCart } from '../actions';

interface AddToCartButtonProps {
  cartProduct: TCartItem;
}

export function AddToCartButton({ cartProduct }: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess === true) {
      alert('Added to cart');
    }
  }, [isSuccess]);

  return (
    <button
      onClick={() => {
        setIsSuccess(false);
        startTransition(async () => {
          await addProductToCart(cartProduct);
          setIsSuccess(true);
        });
      }}
      disabled={isPending}
      className="mx-auto w-4/5 rounded bg-violet-600 py-2 font-semibold text-black transition-colors hover:bg-violet-700 md:w-52"
    >
      Add to Cart
    </button>
  );
}
