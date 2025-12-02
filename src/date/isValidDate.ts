/**
 * Checks if a value is a valid Date object
 * @param value - The value to check
 * @returns True if the value is a valid date
 * @example
 * isValidDate(new Date()) // true
 * isValidDate(new Date('invalid')) // false
 * isValidDate('2023-01-15') // false (not a Date object)
 */
export function isValidDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}

