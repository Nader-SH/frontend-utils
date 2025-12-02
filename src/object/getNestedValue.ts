/**
 * Gets a nested value from an object using a path string
 * @param obj - The object to get the value from
 * @param path - The path to the value (e.g., 'user.profile.name')
 * @param defaultValue - The default value if path doesn't exist
 * @returns The value at the path or the default value
 * @example
 * getNestedValue({ user: { profile: { name: 'John' } } }, 'user.profile.name') // 'John'
 * getNestedValue({ user: { profile: { name: 'John' } } }, 'user.profile.age', 0) // 0
 */
export function getNestedValue<T = unknown>(
  obj: Record<string, unknown>,
  path: string,
  defaultValue?: T
): T | undefined {
  const keys = path.split('.');
  let result: unknown = obj;
  
  for (const key of keys) {
    if (result === null || result === undefined || typeof result !== 'object') {
      return defaultValue;
    }
    result = (result as Record<string, unknown>)[key];
  }
  
  return (result as T) ?? defaultValue;
}

