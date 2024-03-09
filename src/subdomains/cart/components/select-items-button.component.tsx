'use client';

import { useTransition } from 'react';

import { deselectAllItems, selectAllItems } from '@subdomains/products/actions';

interface SelectItemsButtonProps {
  size: number;
}
export function SelectItemsButton({ size }: SelectItemsButtonProps) {
  const [isPending, startTransition] = useTransition();
  async function selectOrDeselectAllItems() {
    if (size > 0) {
      await deselectAllItems();
      return;
    }
    await selectAllItems();
  }

  return (
    <button
      onClick={() => {
        startTransition(async () => {
          await selectOrDeselectAllItems();
        });
      }}
      disabled={isPending}
      className="group"
    >
      <p className="text-sm font-light tracking-wide text-zinc-300 group-disabled:text-zinc-400">
        {size > 0 ? 'Deselect all items' : 'Select all items'}
      </p>
    </button>
  );
}
