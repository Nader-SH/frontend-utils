/**
 * Generates a unique ID string
 * @param prefix - Optional prefix for the ID
 * @param length - The length of the random part (default: 8)
 * @returns A unique ID string
 * @example
 * generateId() // 'a1b2c3d4'
 * generateId('user', 12) // 'user_a1b2c3d4e5f6'
 */
export function generateId(prefix?: string, length: number = 8): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';
  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return prefix ? `${prefix}_${id}` : id;
}

