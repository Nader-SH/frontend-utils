/**
 * Removes a value from localStorage
 * @param key - The storage key to remove
 * @example
 * removeLocal('user')
 */
export function removeLocal(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing localStorage:', error);
  }
}

