import { useTransition } from 'react';

import type { TSelectOption } from '@shared/modules/types/react-select.type';

import { SelectInput } from '@shared/modules/components/select.component';

interface QuantitySelectProps {
  id: string;
  selectedQuantity: TSelectOption;
  setSelectedQuantity: (value: TSelectOption) => void;
  quantityAvailable: number;
  callback?: (productId: string, quantity: number) => Promise<void>;
}

export function QuantitySelect({
  id,
  selectedQuantity,
  setSelectedQuantity,
  quantityAvailable,
  callback,
}: QuantitySelectProps) {
  const [isPending, startTransition] = useTransition();
  const options = Array(quantityAvailable)
    .fill(0)
    .map((_, i) => {
      return { value: String(i + 1), label: String(i + 1) };
    });
  return (
    <div className="flex items-center gap-1">
      <label
        id={`select-quantity-label-${id}`}
        htmlFor={`select-quantity-input-${id}`}
      >
        Qty:
      </label>
      <SelectInput
        instanceId="select-quantity"
        aria-labelledby={`select-quantity-label-${id}`}
        inputId={`select-quantity-input-${id}`}
        name="quantity"
        defaultValue={options[0]}
        isSearchable
        options={options}
        className="w-24"
        value={selectedQuantity}
        isDisabled={isPending}
        onChange={(option) => {
          if (callback) {
            startTransition(async () => {
              await callback(id, Number((option as TSelectOption).value));
            });
          }
          setSelectedQuantity(option as TSelectOption);
        }}
      />
    </div>
  );
}
