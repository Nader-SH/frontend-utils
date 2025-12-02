/**
 * Validates if a string is a valid email address
 * @param str - The string to validate
 * @returns True if the string is a valid email
 * @example
 * isEmail('user@example.com') // true
 * isEmail('invalid-email') // false
 */
export function isEmail(str: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}

