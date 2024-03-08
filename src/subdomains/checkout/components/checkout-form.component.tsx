'use client';

import { useTransition, type ReactNode } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { toast } from 'sonner';

import { checkoutAction } from '../actions';

import { CheckoutSummary } from './checkout-summary.component';

interface CheckoutFormProps {
  size: number;
  total: number;
  children: ReactNode;
}

export function CheckoutForm({ children, size, total }: CheckoutFormProps) {
  const [isPending, startTransition] = useTransition();
  return (
    <form
      action={async (formData: FormData) => {
        startTransition(async () => {
          const data = await checkoutAction(formData);
          if (data?.error) {
            toast(data.error.message, {
              icon: <ExclamationCircleIcon className="h-6 w-6 text-red-500" />,
            });
          }
        });
      }}
    >
      <div className="grid grid-cols-1 gap-6 [grid-template-areas:'summary''payment''items'] md:grid-cols-[1fr_auto] md:[grid-template-areas:'payment_summary''items_summary']">
        {children}

        <div className="h-fit max-w-[242px] rounded border border-zinc-700 px-2 py-3 [grid-area:summary]">
          <CheckoutSummary isPending={isPending} size={size} total={total} />
        </div>
      </div>
    </form>
  );
}
