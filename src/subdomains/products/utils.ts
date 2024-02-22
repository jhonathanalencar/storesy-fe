import type { TRate } from '@shared/modules/types/rate.type';

export function calculateRatingPercentage(
  ratings: TRate[],
  starAmount: string
) {
  const reviewsByStarAmount = ratings.filter((rating) =>
    rating.score.toString().startsWith(starAmount)
  ).length;

  return (reviewsByStarAmount ?? 0 / ratings.length) * 100;
}
