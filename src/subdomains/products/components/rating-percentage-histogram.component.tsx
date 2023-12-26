import type { TRate } from '@shared/modules/types/rate.type';
import { calculateRatingPercentage } from '../utils';

interface RatingPercentageHistogramProps {
  ratings: TRate[];
}

export function RatingPercentageHistogram({
  ratings,
}: RatingPercentageHistogramProps) {
  return (
    <div className="flex flex-col gap-2">
      <HistogramRow ratings={ratings} startAmount="5" />
      <HistogramRow ratings={ratings} startAmount="4" />
      <HistogramRow ratings={ratings} startAmount="3" />
      <HistogramRow ratings={ratings} startAmount="2" />
      <HistogramRow ratings={ratings} startAmount="1" />
    </div>
  );
}

interface HistogramRowProps {
  ratings: TRate[];
  startAmount: string;
}

function HistogramRow({ ratings, startAmount }: HistogramRowProps) {
  const ratingPercentage = `${calculateRatingPercentage(
    ratings,
    startAmount
  )}%`;

  return (
    <div className="grid w-full max-w-[20rem] grid-cols-[auto_1fr_auto] items-center gap-2 sm:w-80">
      <span className="w-3 font-semibold text-zinc-200">{startAmount}</span>
      <div className="h-6 w-full rounded-sm bg-zinc-800">
        <div
          className="h-full w-full rounded-sm bg-green-500"
          style={{
            width: ratingPercentage,
          }}
        />
      </div>
      <span className="w-12 text-end font-light tracking-wider text-zinc-300">
        {ratingPercentage}
      </span>
    </div>
  );
}
