import Link from 'next/link';
import dayjs from 'dayjs';

import type { GetOrdersResponse } from '@shared/modules/queries/order.query';
import { formatPrice } from '@shared/modules/utils/format.utils';
import { statusText } from '../constants';

import { Section } from '@shared/modules/components/section.component';

interface OrdersInterfaceProps {
  orders: GetOrdersResponse;
}

export function OrdersInterface({ orders }: OrdersInterfaceProps) {
  return (
    <Section>
      <h3 className="mb-2 block text-xl font-bold text-zinc-200">
        Your Orders
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full min-w-max border-collapse border border-zinc-700 shadow-md">
          <thead>
            <tr className="bg-zinc-950">
              <th className="border-b border-zinc-700 px-2 py-1 text-left text-zinc-200">
                #
              </th>
              <th className="border-b border-zinc-700 px-2 py-1 text-left text-zinc-200">
                Order Date
              </th>
              <th className="border-b border-zinc-700 px-2 py-1 text-left text-zinc-200">
                Total
              </th>
              <th className="border-b border-zinc-700 px-2 py-1 text-left text-zinc-200">
                Status
              </th>
              <th className="border-b border-zinc-700 px-2 py-1 text-left text-zinc-200"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              return (
                <tr
                  key={order.orderId}
                  data-status={order.status}
                  className="group odd:bg-zinc-800 even:bg-storesy-gray-900 data-[status=FAILED]:opacity-80 data-[status=PAID]:opacity-80"
                >
                  <td className="p-2 text-sm font-black text-zinc-100">
                    {index + 1}
                  </td>
                  <td className="p-2 text-sm text-zinc-300">
                    {dayjs(order.createdAt).format('MMMM DD, YYYY')}
                  </td>
                  <td className="p-2 text-sm font-bold text-zinc-100 group-data-[status=FAILED]:text-red-500 group-data-[status=PAID]:text-green-500">
                    {formatPrice(order.total)}
                  </td>
                  <td className="p-2 text-sm font-bold text-zinc-200 group-data-[status=FAILED]:text-red-500 group-data-[status=PAID]:text-green-500">
                    {statusText[order.status]}
                  </td>
                  <td className="p-2 text-sm text-yellow-500">
                    <Link
                      href={`/orders/${order.orderId}`}
                      className="hover:underline"
                    >
                      Order Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
