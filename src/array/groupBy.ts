/**
 * Groups an array of objects by a specified key
 * @param arr - The array to group
 * @param key - The key to group by (can be a function or key name)
 * @returns An object with grouped arrays
 * @example
 * groupBy([{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'banana' }, { type: 'veg', name: 'carrot' }], 'type')
 * // { fruit: [{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'banana' }], veg: [{ type: 'veg', name: 'carrot' }] }
 */
export function groupBy<T>(
  arr: T[],
  key: keyof T | ((item: T) => string | number)
): Record<string, T[]> {
  return arr.reduce((acc, item) => {
    const groupKey = typeof key === 'function' ? String(key(item)) : String(item[key]);
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

