/**
 * Checks if the code is running in a server environment
 * @returns True if running on the server
 * @example
 * if (isServer()) {
 *   // server-only code
 * }
 */
export function isServer(): boolean {
  return typeof window === 'undefined';
}

