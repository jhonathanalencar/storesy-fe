import { FaceFrownIcon } from '@heroicons/react/24/outline';

import type { GetProductRatingsResponse } from '@shared/modules/queries/product.query';

import { Review } from './review.component';
import { PaginationBar } from '@shared/modules/components/pagination-bar';

interface ReviewListProps {
  ratings: GetProductRatingsResponse['ratings'];
  currentPage: number;
  totalPages: number;
}

export function ReviewList({
  ratings,
  currentPage,
  totalPages,
}: ReviewListProps) {
  const content =
    ratings.length > 0 ? (
      ratings.map((rating) => {
        return <Review key={rating.rateId} rating={rating} />;
      })
    ) : (
      <div className="flex flex-col items-center gap-2">
        <FaceFrownIcon className="h-12 w-12 text-green-500" />
        <p className="text-xl font-semibold tracking-wider">No Reviews</p>
      </div>
    );

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 p-2">
      {content}
      <PaginationBar currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
