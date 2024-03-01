import { StarIcon } from '@heroicons/react/24/outline';

import type { TRate } from '@shared/modules/types/rate.type';

interface ProductRatingProps {
  ratings: TRate[];
  rateAmount?: number;
  totalScore?: number;
}

export function ProductRating({
  ratings,
  rateAmount = 0,
  totalScore = 0,
}: ProductRatingProps) {
  let averageCustomerReviews = totalScore / rateAmount || 0;
  let ratingsAmount = rateAmount;

  if (ratings.length > 0) {
    const totalRate = ratings.reduce((acc, val) => {
      return acc + val.score;
    }, 0);
    averageCustomerReviews = totalRate / ratings.length;
    ratingsAmount = ratings.length;
  }

  return (
    <div className="flex items-center">
      <div className="flex items-center gap-1">
        <StarIcon className=" h-6 w-6 text-green-500" />
        <span className="font-medium text-zinc-300">
          {averageCustomerReviews.toFixed(1)} / 5
        </span>
      </div>
      <span className="text-zinc-400">・{ratingsAmount} ratings</span>
    </div>
  );
}
