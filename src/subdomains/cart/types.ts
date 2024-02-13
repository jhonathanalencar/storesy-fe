import { Prisma } from '@prisma/client';

export type FoundCart = Prisma.CartGetPayload<{
  include: {
    items: {
      include: {
        product: true;
      };
      orderBy: {
        product: {
          quantity_available: 'asc';
        };
      };
    };
  };
}>;
