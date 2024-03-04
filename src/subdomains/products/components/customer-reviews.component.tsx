import { StarIcon } from '@heroicons/react/24/solid';

import {
  getProductRatings,
  type GetProductRatingsResponse,
} from '@shared/modules/queries/product.query';

import { RatingPercentageHistogram } from './rating-percentage-histogram.component';
import { Separator } from '@shared/modules/components/separator.component';
import { ReviewList } from './review-list.component';

interface CustomerReviewsProps {
  ratings: GetProductRatingsResponse['ratings'];
  slug: string;
  currentPage: number;
  totalPages: number;
  rateAmount?: number;
  totalScore?: number;
}

export async function CustomerReviews({
  ratings,
  slug,
  currentPage,
  totalPages,
  rateAmount = 0,
  totalScore = 0,
}: CustomerReviewsProps) {
  const { ratings: totalRatings } = await getProductRatings(slug, 1, 200);
  let averageCustomerReviews = totalScore / rateAmount || 0;
  let ratingsAmount = rateAmount;
  if (totalRatings.length > 0) {
    const totalRate = totalRatings.reduce((acc, val) => {
      return acc + val.score;
    }, 0);
    averageCustomerReviews = totalRate / totalRatings.length;
    ratingsAmount = totalRatings.length;
  }

  return (
    <div className="gird-cols-1 grid gap-4 lg:grid-cols-[auto_1fr]">
      <div>
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-lg font-medium text-zinc-200">
            Customer reviews
          </h2>
          <p className="flex items-center gap-2">
            <StarIcon className=" h-6 w-6 text-green-500" />
            <span className="font-medium text-zinc-300">
              {averageCustomerReviews.toFixed(1)} out of 5
            </span>
          </p>
          <span className="text-zinc-400">{ratingsAmount} ratings</span>
        </div>
        <Separator className="my-4" />
        <div className="flex justify-center">
          <RatingPercentageHistogram ratings={totalRatings} />
        </div>
        <Separator className="my-4" />
      </div>

      <ReviewList
        ratings={ratings}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
