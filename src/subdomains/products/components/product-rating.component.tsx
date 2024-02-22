import { StarIcon } from '@heroicons/react/24/outline';

import type { TRate } from '@shared/modules/types/rate.type';

interface ProductRatingProps {
  ratings: TRate[];
}

export function ProductRating({ ratings }: ProductRatingProps) {
  let averageCustomerReviews = 0;

  if (ratings.length > 0) {
    const totalRate = ratings.reduce((acc, val) => {
      return acc + val.score;
    }, 0);
    averageCustomerReviews = totalRate / ratings.length;
  }

  return (
    <div className="flex items-center">
      <div className="flex items-center gap-1">
        <StarIcon className=" h-6 w-6 text-green-500" />
        <span className="font-medium text-zinc-300">
          {averageCustomerReviews} / 5
        </span>
      </div>
      <span className="text-zinc-400">・{ratings.length} ratings</span>
    </div>
  );
}
