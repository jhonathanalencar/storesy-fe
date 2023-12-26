import { StarIcon } from '@heroicons/react/24/solid';

import type { TRate } from '@shared/modules/types/rate.type';
import { RatingPercentageHistogram } from './rating-percentage-histogram.component';
import { Separator } from './separator.component';
import { Review } from './review.component';

interface CustomerReviewsProps {
  ratings: TRate[];
}

export function CustomerReviews({ ratings }: CustomerReviewsProps) {
  let averageRating = 0;
  if (ratings.length > 0) {
    averageRating =
      ratings.reduce((acc, val) => {
        return acc + val.rate;
      }, 0) / ratings.length;
  }

  return (
    <div className="gird-cols-1 grid gap-4 md:grid-cols-[auto_1fr]">
      <div>
        <h2 className="text-lg font-medium text-zinc-200">Customer reviews</h2>
        <p className="flex items-center gap-2">
          <StarIcon className=" h-6 w-6 text-green-500" />
          <span className="font-medium text-zinc-300">
            {averageRating} out of 5
          </span>
        </p>
        <span className="text-zinc-400">{ratings.length} ratings</span>
        <Separator />
        <RatingPercentageHistogram ratings={ratings} />
        <Separator />
      </div>

      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 p-2">
        {ratings.map((rating) => {
          return <Review key={rating.rate_id} rating={rating} />;
        })}
      </div>
    </div>
  );
}
