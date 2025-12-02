/**
 * Validates if a string is a strong password
 * Requirements: at least 8 characters, contains uppercase, lowercase, number, and special character
 * @param str - The string to validate
 * @returns True if the string is a strong password
 * @example
 * isStrongPassword('MyP@ssw0rd') // true
 * isStrongPassword('weak') // false
 */
export function isStrongPassword(str: string): boolean {
  if (str.length < 8) return false;
  
  const hasUpperCase = /[A-Z]/.test(str);
  const hasLowerCase = /[a-z]/.test(str);
  const hasNumber = /[0-9]/.test(str);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(str);
  
  return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}

