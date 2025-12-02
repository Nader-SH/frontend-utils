/**
 * Gets a value from localStorage
 * @param key - The storage key
 * @param defaultValue - The default value if key doesn't exist
 * @returns The parsed value or default value
 * @example
 * const user = getLocal('user', { name: 'Guest' })
 * const theme = getLocal('theme', 'light')
 */
export function getLocal<T>(key: string, defaultValue?: T): T | undefined {
  try {
    const item = localStorage.getItem(key);
    if (item === null) return defaultValue;
    return JSON.parse(item) as T;
  } catch (error) {
    console.error('Error getting localStorage:', error);
    return defaultValue;
  }
}

