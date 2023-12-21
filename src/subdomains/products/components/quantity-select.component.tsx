'use client';
import { useState } from 'react';

import type { TSelectOption } from '@shared/modules/types/react-select.type';

import { SelectInput } from '@shared/modules/components/select.component';

interface QuantitySelectProps {
  quantityAvailable: number;
}

export function QuantitySelect({ quantityAvailable }: QuantitySelectProps) {
  const [quantity, setQuantity] = useState<TSelectOption>({
    value: '1',
    label: '1',
  });
  const options = Array(quantityAvailable)
    .fill(0)
    .map((_, i) => {
      return { value: String(i + 1), label: String(i + 1) };
    });

  return (
    <div className="flex items-center gap-1">
      <label id="select-quantity-label" htmlFor="select-quantity-input">
        Qty:
      </label>
      <SelectInput
        instanceId="select-quantity"
        aria-labelledby="select-quantity-label"
        inputId="select-quantity-input"
        name="quantity"
        defaultValue={options[0]}
        isSearchable
        options={options}
        className="w-24"
        value={quantity}
        onChange={(option) => setQuantity(option as TSelectOption)}
      />
    </div>
  );
}
