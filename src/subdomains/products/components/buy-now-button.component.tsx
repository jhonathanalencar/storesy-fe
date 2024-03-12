import { useTransition } from 'react';
import { toast } from 'sonner';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

import { buyNow } from '../actions';
import type { TCartItem } from '@shared/modules/types/cart.type';

interface BuyNowButtonProps {
  cartProduct: TCartItem;
  isAvailable: boolean;
}

export function BuyNowButton({ cartProduct, isAvailable }: BuyNowButtonProps) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      onClick={() => {
        startTransition(async () => {
          const data = await buyNow(
            cartProduct.product_id,
            cartProduct.product_quantity
          );
          if (data?.error) {
            toast(data.error.message, {
              icon: <ExclamationCircleIcon className="h-6 w-6 text-red-500" />,
            });
          }
        });
      }}
      disabled={isPending || !isAvailable}
      className="mx-auto w-4/5 rounded bg-yellow-500 py-2 font-semibold text-black transition-colors hover:bg-yellow-600 disabled:cursor-not-allowed disabled:bg-yellow-700 md:w-52"
    >
      Buy Now
    </button>
  );
}
