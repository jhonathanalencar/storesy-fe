'use client';

import * as Dialog from '@radix-ui/react-dialog';

import { WriteReviewDialog } from './write-review-dialog.component';

export function WriteReviewButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="mt-4 w-full max-w-xs rounded bg-yellow-500 py-2 font-semibold text-black transition-colors hover:bg-yellow-600 disabled:cursor-not-allowed disabled:bg-yellow-700">
          Write a review
        </button>
      </Dialog.Trigger>
      <WriteReviewDialog />
    </Dialog.Root>
  );
}
