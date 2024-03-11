import type { OrderStatusType } from '@shared/modules/queries/order.query';

export const statusText: Record<OrderStatusType, string> = {
  PENDING: 'Pending',
  PAID: 'Paid',
  FAILED: 'Failed',
};
