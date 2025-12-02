/**
 * Checks if the code is running in a client/browser environment
 * @returns True if running in the browser
 * @example
 * if (isClient()) {
 *   // browser-only code
 * }
 */
export function isClient(): boolean {
  return typeof window !== 'undefined';
}

