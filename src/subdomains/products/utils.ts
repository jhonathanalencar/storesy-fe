import type { TRate } from '@shared/modules/types/rate.type';

export function calculateRatingPercentage(
  ratings: TRate[],
  starAmount: string
) {
  if (ratings.length === 0) return 0;
  const reviewsByStarAmount = ratings.filter((rating) =>
    rating.score.toString().startsWith(starAmount)
  ).length;
  const percentage = ((reviewsByStarAmount ?? 0) / ratings.length) * 100;
  return percentage.toFixed(0);
}
