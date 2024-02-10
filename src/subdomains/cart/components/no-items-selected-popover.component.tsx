'use client';

import * as Popover from '@radix-ui/react-popover';

export function NoItemsSelectedPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="mx-auto w-52 rounded bg-yellow-500 py-2 font-semibold text-black transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-600">
          Proceed to checkout
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={5}
          collisionPadding={5}
          className="flex animate-slideDownAndFade rounded bg-white px-2 py-2 shadow-lg"
        >
          <span className="text-sm text-black">
            Please select at least one item
          </span>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
