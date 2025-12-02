/**
 * Validates if a string is valid JSON
 * @param str - The string to validate
 * @returns True if the string is valid JSON
 * @example
 * isJSON('{"key": "value"}') // true
 * isJSON('invalid json') // false
 */
export function isJSON(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

