/**
 * Sets a value in sessionStorage
 * @param key - The storage key
 * @param value - The value to store (will be JSON stringified)
 * @example
 * setSession('tempData', { id: 123 })
 * setSession('viewMode', 'grid')
 */
export function setSession<T>(key: string, value: T): void {
  try {
    const serialized = JSON.stringify(value);
    sessionStorage.setItem(key, serialized);
  } catch (error) {
    console.error('Error setting sessionStorage:', error);
  }
}

