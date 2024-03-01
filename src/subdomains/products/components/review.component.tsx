import Image from 'next/image';
import dayjs from 'dayjs';

import type { TRate } from '@shared/modules/types/rate.type';
import { getUserById } from '@shared/modules/queries/user.query';

import { ReviewStarRating } from './review-star-rating.component';
import { ReviewDescription } from './review-description.component';

interface ReviewProps {
  rating: TRate;
}

export async function Review({ rating }: ReviewProps) {
  const user = await getUserById(rating.userId);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <Image
          alt={user.name}
          src={user.imageUrl}
          sizes="100w"
          width={0}
          height={0}
          className="h-8 w-8 rounded-full bg-zinc-700 object-cover"
        />
        <span className="text-sm text-zinc-300 ">{user.name}</span>
      </div>
      <ReviewStarRating.Root>
        <ReviewStarRating.Fill amount={rating.score} />
        <ReviewStarRating.Empty amount={5 - rating.score} />
      </ReviewStarRating.Root>
      <p className="text-sm font-normal tracking-wide text-zinc-400">
        Reviewed on {dayjs(rating.postedAt).format('MMMM DD, YYYY')}
      </p>
      <ReviewDescription description={rating.description} />
    </div>
  );
}
