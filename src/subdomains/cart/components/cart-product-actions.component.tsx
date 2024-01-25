'use client';

import { useTransition } from 'react';

import {
  changeProductQuantity,
  removeProductFromCart,
} from '@subdomains/products/actions';
import { useSelectedQuantity } from '@shared/modules/hooks/use-selected-quantity.hook';
import { QuantitySelect } from '@subdomains/products/components/quantity-select.component';

interface CartProductActionsProps {
  product_id: string;
  quantityAvailable: number;
  productQuantity: number;
}

export function CartProductActions({
  product_id,
  quantityAvailable,
  productQuantity,
}: CartProductActionsProps) {
  const { selectedQuantity, setSelectedQuantity } = useSelectedQuantity({
    initialValue: String(productQuantity),
  });
  const [isPending, startTransition] = useTransition();
  return (
    <div>
      <QuantitySelect
        id={product_id}
        quantityAvailable={quantityAvailable}
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
        callback={changeProductQuantity}
      />
      <button
        disabled={isPending}
        onClick={() => {
          startTransition(async () => {
            await removeProductFromCart(product_id);
          });
        }}
        className="text-sm capitalize tracking-wide text-zinc-200 underline-offset-2 hover:underline disabled:cursor-not-allowed disabled:text-zinc-300 disabled:no-underline"
      >
        delete
      </button>
    </div>
  );
}
