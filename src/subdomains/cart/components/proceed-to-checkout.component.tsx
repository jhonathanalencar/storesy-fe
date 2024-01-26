import { NoItemsSelectedPopover } from './no-items-selected-popover.component';

export function ProceedToCheckout() {
  return (
    <div className="row-start-1 h-fit w-fit bg-zinc-600 p-4 shadow-md md:p-4 lg:row-auto">
      <div className="flex flex-col gap-1">
        <p className="text-zinc-200">No items selected</p>
        <button className="mx-auto w-52 rounded bg-yellow-500 py-2 font-semibold text-black transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-600">
          Proceed to checkout
        </button>
        <NoItemsSelectedPopover />
      </div>
    </div>
  );
}
