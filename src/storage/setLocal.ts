/**
 * Sets a value in localStorage
 * @param key - The storage key
 * @param value - The value to store (will be JSON stringified)
 * @example
 * setLocal('user', { name: 'John', age: 30 })
 * setLocal('theme', 'dark')
 */
export function setLocal<T>(key: string, value: T): void {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
  } catch (error) {
    console.error('Error setting localStorage:', error);
  }
}

