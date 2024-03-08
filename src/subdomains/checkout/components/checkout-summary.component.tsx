import { twMerge } from 'tailwind-merge';

import { formatPrice } from '@shared/modules/utils/format.utils';

import { Separator } from '@shared/modules/components/separator.component';

interface CheckoutSummaryProps {
  size: number;
  total: number;
  isPending: boolean;
}

export function CheckoutSummary({
  size,
  total,
  isPending,
}: CheckoutSummaryProps) {
  const shippingTax = 20;

  return (
    <>
      <button
        type="submit"
        disabled={isPending}
        className={twMerge(
          'mb-4 w-56 rounded bg-yellow-500 py-2 transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-storesy-gray-900 disabled:cursor-not-allowed disabled:bg-yellow-600',
          isPending ? 'animate-pulse' : ''
        )}
      >
        <span className="font-semibold text-black">Place your order</span>
      </button>
      <h2 className="text-lg font-black text-zinc-100">Order Summary</h2>
      <Separator className="bg-zinc-700" />
      <p className="flex justify-between text-sm font-semibold text-zinc-200">
        <span>Items ({size}):</span>
        <span>{formatPrice(total)}</span>
      </p>
      <p className="flex justify-between text-sm font-semibold text-zinc-200">
        <span>Shipping:</span>
        <span>{formatPrice(shippingTax)}</span>
      </p>
      <Separator className="bg-zinc-700" />
      <p className="flex justify-between text-lg font-bold text-red-500">
        <strong>Order total:</strong>
        <span>{formatPrice(total + shippingTax)}</span>
      </p>
    </>
  );
}
