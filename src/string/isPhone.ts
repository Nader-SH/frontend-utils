/**
 * Validates if a string is a valid phone number (supports international formats)
 * @param str - The string to validate
 * @returns True if the string is a valid phone number
 * @example
 * isPhone('+1234567890') // true
 * isPhone('(123) 456-7890') // true
 * isPhone('123-456-7890') // true
 */
export function isPhone(str: string): boolean {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(str.replace(/\s/g, ''));
}

