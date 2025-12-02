/**
 * Rounds a number to a specified number of decimal places
 * @param value - The number to round
 * @param decimals - The number of decimal places (default: 0)
 * @returns The rounded number
 * @example
 * roundTo(3.14159, 2) // 3.14
 * roundTo(3.14159, 0) // 3
 */
export function roundTo(value: number, decimals: number = 0): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

