'use client';

import { useTransition } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@heroicons/react/16/solid';

import { selectProductItem } from '@subdomains/products/actions';

interface SelectProductCheckboxProps {
  productId: string;
  selected: boolean;
}

export function SelectProductCheckbox({
  productId,
  selected,
}: SelectProductCheckboxProps) {
  const [isPending, startTransition] = useTransition();
  return (
    <Checkbox.Root
      checked={selected}
      disabled={isPending}
      onCheckedChange={() => {
        startTransition(async () => {
          await selectProductItem(productId);
        });
      }}
      className="flex h-4 w-4 items-center justify-center rounded bg-zinc-900 shadow outline-none hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-green-500"
    >
      <Checkbox.Indicator className="text-green-500">
        <CheckIcon className="h-4 w-4" />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}
