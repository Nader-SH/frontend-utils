/**
 * Gets a value from sessionStorage
 * @param key - The storage key
 * @param defaultValue - The default value if key doesn't exist
 * @returns The parsed value or default value
 * @example
 * const tempData = getSession('tempData', {})
 * const viewMode = getSession('viewMode', 'list')
 */
export function getSession<T>(key: string, defaultValue?: T): T | undefined {
  try {
    const item = sessionStorage.getItem(key);
    if (item === null) return defaultValue;
    return JSON.parse(item) as T;
  } catch (error) {
    console.error('Error getting sessionStorage:', error);
    return defaultValue;
  }
}

