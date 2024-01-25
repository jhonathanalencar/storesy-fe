'use client';

import { changeProductQuantity } from '@subdomains/products/actions';
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
  return (
    <div>
      <QuantitySelect
        id={product_id}
        quantityAvailable={quantityAvailable}
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
        callback={changeProductQuantity}
      />
      <button>delete</button>
    </div>
  );
}
