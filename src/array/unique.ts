/**
 * Returns an array with unique values
 * @param arr - The array to get unique values from
 * @returns An array with unique values
 * @example
 * unique([1, 2, 2, 3, 3, 3]) // [1, 2, 3]
 * unique(['a', 'b', 'a']) // ['a', 'b']
 */
export function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

