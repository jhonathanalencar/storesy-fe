import type { TSelectOption } from '@shared/modules/types/react-select.type';

import { SelectInput } from '@shared/modules/components/select.component';

interface QuantitySelectProps {
  selectedQuantity: TSelectOption;
  setSelectedQuantity: (value: TSelectOption) => void;
  quantityAvailable: number;
}

export function QuantitySelect({
  selectedQuantity,
  setSelectedQuantity,
  quantityAvailable,
}: QuantitySelectProps) {
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
        value={selectedQuantity}
        onChange={(option) => setSelectedQuantity(option as TSelectOption)}
      />
    </div>
  );
}
