/**
 * Truncates a string to a specified length with an optional suffix
 * @param str - The string to truncate
 * @param length - The maximum length
 * @param suffix - The suffix to append (default: '...')
 * @returns The truncated string
 * @example
 * truncate('Hello world', 5) // 'Hello...'
 * truncate('Hello world', 5, '') // 'Hello'
 */
export function truncate(str: string, length: number, suffix: string = '...'): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + suffix;
}

