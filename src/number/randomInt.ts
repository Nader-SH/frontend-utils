/**
 * Generates a random integer between min and max (inclusive)
 * @param min - The minimum value (default: 0)
 * @param max - The maximum value (default: 100)
 * @returns A random integer
 * @example
 * randomInt(1, 10) // Random number between 1 and 10
 * randomInt(5) // Random number between 0 and 5
 */
export function randomInt(min: number = 0, max: number = 100): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

