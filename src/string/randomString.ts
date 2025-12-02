/**
 * Generates a random string of specified length
 * @param length - The length of the random string (default: 10)
 * @param chars - The character set to use (default: alphanumeric)
 * @returns A random string
 * @example
 * randomString(8) // 'aB3dEf9h'
 * randomString(8, '0123456789') // '12345678'
 */
export function randomString(length: number = 10, chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

