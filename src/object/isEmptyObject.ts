/**
 * Checks if an object is empty (no own properties)
 * @param obj - The object to check
 * @returns True if the object is empty
 * @example
 * isEmptyObject({}) // true
 * isEmptyObject({ a: 1 }) // false
 */
export function isEmptyObject(obj: unknown): boolean {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
    return false;
  }
  return Object.keys(obj).length === 0;
}

