/**
 * Removes HTML tags from a string
 * @param str - The string containing HTML
 * @returns The string with HTML tags removed
 * @example
 * stripHTML('<p>Hello <b>world</b></p>') // 'Hello world'
 */
export function stripHTML(str: string): string {
  return str.replace(/<[^>]*>/g, '');
}

