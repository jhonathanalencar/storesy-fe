import { Section } from '@shared/modules/components/section.component';
import { Separator } from '@shared/modules/components/separator.component';

export function CartInterface() {
  return (
    <Section>
      <div className="grid w-full grid-cols-[1fr_auto] gap-5">
        <div className="w-full bg-zinc-600 p-4">
          <h1 className="text-2xl text-zinc-100">Shopping Cart</h1>
          <p className="text-sm font-light tracking-wide text-zinc-300">
            Remove all items
          </p>
          <Separator />
        </div>

        <div className="w-fit bg-zinc-600 p-4 shadow-md">
          <p>No items selected</p>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </Section>
  );
}
