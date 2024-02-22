import Image from 'next/image';
import dayjs from 'dayjs';

import type { TRate } from '@shared/modules/types/rate.type';

import { ReviewStarRating } from './review-star-rating.component';

interface ReviewProps {
  rating: TRate;
}

export function Review({ rating }: ReviewProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <Image
          alt={'rating.username'}
          src={
            'https://lh3.googleusercontent.com/a/ACg8ocKqLRDHTyMLkk1R9sQsL2HWS9QbpPn72aW_lIgYk4v3YA=s96-c'
          }
          sizes="100w"
          width={0}
          height={0}
          className="h-8 w-8 rounded-full object-cover"
        />
        <span className="text-sm text-zinc-300 ">{'rating.username'}</span>
      </div>
      <ReviewStarRating.Root>
        <ReviewStarRating.Fill amount={rating.score} />
        <ReviewStarRating.Empty amount={5 - rating.score} />
      </ReviewStarRating.Root>
      <p className="text-sm font-medium tracking-wide text-zinc-400">
        Reviewed on {dayjs(rating.postedAt).format('MMMM DD, YYYY')}
      </p>
      <p className="font-light text-zinc-300">{rating.description}</p>
    </div>
  );
}
