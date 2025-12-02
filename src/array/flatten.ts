/**
 * Flattens a nested array to a specified depth
 * @param arr - The array to flatten
 * @param depth - The depth to flatten to (default: 1)
 * @returns The flattened array
 * @example
 * flatten([1, [2, 3], [4, [5]]]) // [1, 2, 3, 4, [5]]
 * flatten([1, [2, 3], [4, [5]]], 2) // [1, 2, 3, 4, 5]
 */
export function flatten<T>(arr: (T | T[])[], depth: number = 1): T[] {
  if (depth === 0) return arr as T[];
  return arr.reduce<T[]>((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val);
  }, []);
}

