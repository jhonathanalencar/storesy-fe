import { Prisma } from '@prisma/client';

export type FoundCart = Prisma.CartGetPayload<{
  include: {
    items: {
      include: {
        product: {
          include: {
            discount: true;
          };
        };
      };
      orderBy: {
        product: {
          quantity: 'asc';
        };
      };
    };
  };
}>;
