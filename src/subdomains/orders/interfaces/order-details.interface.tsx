import Image from 'next/image';
import dayjs from 'dayjs';
import { CheckIcon, ClockIcon, XMarkIcon } from '@heroicons/react/24/solid';

import type {
  GetOrderResponse,
  OrderStatusType,
} from '@shared/modules/queries/order.query';
import { formatPrice } from '@shared/modules/utils/format.utils';

import { Section } from '@shared/modules/components/section.component';

interface OrderDetailsInterfaceProps {
  order: GetOrderResponse;
}

const statusText: Record<OrderStatusType, string> = {
  PENDING: 'Pending',
  PAID: 'Paid',
  FAILED: 'Failed',
};
const statusIcon: Record<OrderStatusType, JSX.Element> = {
  PENDING: (
    <ClockIcon className="h-12 w-12 rounded-full border border-yellow-500 text-zinc-300" />
  ),
  PAID: (
    <CheckIcon className="h-12 w-12 rounded-full border border-yellow-500 p-1 text-green-500" />
  ),
  FAILED: (
    <XMarkIcon className="h-12 w-12 rounded-full border border-yellow-500 p-1 text-red-500" />
  ),
};

export function OrderDetailsInterface({ order }: OrderDetailsInterfaceProps) {
  return (
    <Section>
      <span className="text-sm font-medium tracking-wide text-zinc-300">
        Placed on {dayjs(order.createdAt).format('dddd, MMMM DD, YYYY hh:mm A')}
      </span>
      <div className="my-4 flex items-center gap-2">
        <span>{statusIcon[order.status]}</span>
        <span className="text-lg font-bold text-zinc-100">
          {statusText[order.status]}
        </span>
      </div>
      <h3 className="mb-2 block text-xl font-bold text-zinc-200">Summary</h3>
      <div className="overflow-x-auto">
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
