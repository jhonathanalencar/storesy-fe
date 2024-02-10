import { useTransition } from 'react';
import { toast } from 'sonner';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

import type { TCartItem } from '@shared/modules/types/cart.type';
import { addProductToCart } from '../actions';

interface AddToCartButtonProps {
  cartProduct: TCartItem;
}

export function AddToCartButton({ cartProduct }: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        startTransition(async () => {
          await addProductToCart(
            cartProduct.product_id,
            cartProduct.product_quantity
          );
          toast('Added to cart', {
            icon: <CheckCircleIcon className="h-6 w-6 text-green-500" />,
          });
        });
      }}
      disabled={isPending}
      className="mx-auto w-4/5 rounded bg-violet-600 py-2 font-semibold text-black transition-colors hover:bg-violet-700 md:w-52"
    >
      Add to Cart
    </button>
  );
}
