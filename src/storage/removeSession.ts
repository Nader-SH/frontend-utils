/**
 * Removes a value from sessionStorage
 * @param key - The storage key to remove
 * @example
 * removeSession('tempData')
 */
export function removeSession(key: string): void {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing sessionStorage:', error);
  }
}

