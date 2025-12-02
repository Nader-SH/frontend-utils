/**
 * Sorts an array of objects by a specified key
 * @param arr - The array to sort
 * @param key - The key to sort by
 * @param direction - The sort direction (default: 'asc')
 * @returns A new sorted array
 * @example
 * sortByKey([{ name: 'Bob', age: 30 }, { name: 'Alice', age: 25 }], 'age') // [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]
 */
export function sortByKey<T extends Record<string, unknown>>(
  arr: T[],
  key: keyof T,
  direction: 'asc' | 'desc' = 'asc'
): T[] {
  return [...arr].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    
    if (aVal === bVal) return 0;
    
    const comparison = aVal < bVal ? -1 : 1;
    return direction === 'asc' ? comparison : -comparison;
  });
}

