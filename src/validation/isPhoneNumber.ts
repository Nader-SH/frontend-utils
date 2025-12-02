/**
 * Validates if a string is a valid phone number
 * @param str - The string to validate
 * @returns True if the string is a valid phone number
 * @example
 * isPhoneNumber('+1234567890') // true
 * isPhoneNumber('(123) 456-7890') // true
 * isPhoneNumber('123-456-7890') // true
 */
export function isPhoneNumber(str: string): boolean {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(str.replace(/\s/g, ''));
}

