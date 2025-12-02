/**
 * Checks if a value is numeric (number or numeric string)
 * @param value - The value to check
 * @returns True if the value is numeric
 * @example
 * isNumeric(123) // true
 * isNumeric('123') // true
 * isNumeric('abc') // false
 * isNumeric(NaN) // false
 */
export function isNumeric(value: unknown): boolean {
  if (typeof value === 'number') {
    return !isNaN(value) && isFinite(value);
  }
  if (typeof value === 'string') {
    return value.trim() !== '' && !isNaN(Number(value)) && isFinite(Number(value));
  }
  return false;
}

