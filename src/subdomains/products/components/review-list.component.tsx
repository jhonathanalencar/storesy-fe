import type { TRate } from '@shared/modules/types/rate.type';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

import { Review } from './review.component';

interface ReviewListProps {
  ratings: TRate[];
}

export function ReviewList({ ratings }: ReviewListProps) {
  const content =
    ratings.length > 0 ? (
      ratings.map((rating) => {
        return <Review key={rating.rate_id} rating={rating} />;
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
    </div>
  );
}
