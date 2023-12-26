import { StarIcon } from '@heroicons/react/24/solid';

import type { TRate } from '@/shared/modules/types/rate.type';
import { RatingPercentageHistogram } from './rating-percentage-histogram.component';
import { Separator } from './separator.component';
import Image from 'next/image';
import { ReviewStarRating } from './review-star-rating.component';

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
      </div>

      <div>
        {ratings.map((rating) => {
          return (
            <div key={rating.rate_id} className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Image
                  alt={rating.username}
                  src={rating.profile_image_url}
                  sizes="100w"
                  width={0}
                  height={0}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-sm text-zinc-300 ">
                  {rating.username}
                </span>
              </div>
              <ReviewStarRating.Root>
                <ReviewStarRating.Fill amount={rating.rate} />
                <ReviewStarRating.Empty amount={5 - rating.rate} />
              </ReviewStarRating.Root>
              <p>{rating.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
