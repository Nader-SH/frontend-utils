/**
 * Validates if a string is a valid URL
 * @param str - The string to validate
 * @returns True if the string is a valid URL
 * @example
 * isURL('https://example.com') // true
 * isURL('not-a-url') // false
 */
export function isURL(str: string): boolean {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

