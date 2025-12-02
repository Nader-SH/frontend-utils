import { roundTo } from './roundTo';

/**
 * Calculates the percentage of a value relative to a total
 * @param value - The value to calculate percentage for
 * @param total - The total value
 * @param decimals - The number of decimal places (default: 2)
 * @returns The percentage value
 * @example
 * percentage(25, 100) // 25
 * percentage(1, 3) // 33.33
 */
export function percentage(value: number, total: number, decimals: number = 2): number {
  if (total === 0) return 0;
  return roundTo((value / total) * 100, decimals);
}

