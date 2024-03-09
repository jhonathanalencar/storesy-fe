import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

import type { GetOrderResponse } from '../queries';
import { formatPrice } from '@shared/modules/utils/format.utils';

import { Section } from '@shared/modules/components/section.component';

interface CheckoutSuccessInterfaceProps {
  order: GetOrderResponse;
}

export function CheckoutSuccessInterface({
  order,
}: CheckoutSuccessInterfaceProps) {
  return (
    <Section>
      <h1 className="flex flex-col items-center gap-2 md:flex-row">
        <CheckCircleIcon className="h-12 w-12 text-green-500" />
        <span className="text-center text-xl font-semibold text-zinc-200 md:text-2xl">
          Your order has been placed!
        </span>
      </h1>
      <span className="block text-center text-base font-medium text-zinc-300 md:text-left md:text-lg">
        Your order is currently being processed.
      </span>
      <Link
        href={`/orders/${order.orderId}`}
        className="my-4 block w-fit rounded bg-yellow-500 px-4 py-2 font-bold text-black transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-storesy-gray-900 disabled:cursor-not-allowed disabled:bg-yellow-600"
      >
        Check Status
      </Link>

      <div className="overflow-x-auto">
        <span className="mb-2 block text-xl font-bold text-zinc-100">
          Summary
        </span>
        <table className="table w-full border-collapse border border-zinc-700 shadow-md">
          <thead>
            <tr className="bg-zinc-950">
              <th className="border-b border-zinc-700 px-2 py-1 text-left"></th>
              <th className="border-b border-zinc-700 px-2 py-1 text-left text-zinc-200">
                Product name
              </th>
              <th className="border-b border-zinc-700 px-2 py-1 text-left text-zinc-200">
                Qty
              </th>
              <th className="border-b border-zinc-700 px-2 py-1 text-left text-zinc-200">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => {
              return (
                <tr key={item.orderItemId} className="odd:bg-zinc-800">
                  <td className="w-32 p-2">
                    <div className="flex w-32 justify-center">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width="0"
                        height="0"
                        sizes="100vw"
                        priority
                        className="h-20 w-28 rounded object-cover"
                      />
                    </div>
                  </td>
                  <td className="w-full p-2">
                    <p className="line-clamp-1 text-sm text-zinc-100">
                      {item.name} {item.name} {item.name}
                    </p>
                  </td>
                  <td className="w-14 p-2 text-sm text-zinc-100">
                    {item.quantity}
                  </td>
                  <td className="p-2 text-sm font-bold text-zinc-100">
                    {formatPrice(item.price)}
                  </td>
                </tr>
              );
            })}
            <tr className="bg-zinc-900 text-zinc-100">
              <td colSpan={3} className="border-t border-zinc-700 p-2">
                <div className="flex justify-end text-sm text-zinc-100">
                  Total + Tax:
                </div>
              </td>
              <td
                colSpan={1}
                className="border-t border-zinc-700 p-2 font-bold text-red-600"
              >
                {formatPrice(order.total)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
}
