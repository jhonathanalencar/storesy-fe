import { useState } from 'react';

import type { TSelectOption } from '../types/react-select.type';

interface UseSelectedQuantityProps {
  initialValue?: string;
}

export function useSelectedQuantity({
  initialValue = '1',
}: UseSelectedQuantityProps) {
  const [selectedQuantity, setSelectedQuantity] = useState<TSelectOption>({
    value: initialValue,
    label: initialValue,
  });

  return { selectedQuantity, setSelectedQuantity };
}
