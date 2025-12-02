/**
 * Creates an object with omitted properties
 * @param obj - The source object
 * @param keys - The keys to omit
 * @returns A new object without the specified keys
 * @example
 * omit({ a: 1, b: 2, c: 3 }, ['a', 'c']) // { b: 2 }
 */
export function omit<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj };
  keys.forEach((key) => {
    delete result[key];
  });
  return result;
}

