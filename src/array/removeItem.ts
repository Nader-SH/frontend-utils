/**
 * Removes an item from an array
 * @param arr - The array to remove from
 * @param item - The item to remove
 * @returns A new array with the item removed
 * @example
 * removeItem([1, 2, 3, 2], 2) // [1, 3]
 * removeItem(['a', 'b', 'c'], 'b') // ['a', 'c']
 */
export function removeItem<T>(arr: T[], item: T): T[] {
  return arr.filter((val) => val !== item);
}

