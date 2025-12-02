/**
 * Generates a UUID v4
 * @returns A UUID string
 * @example
 * uuid() // '550e8400-e29b-41d4-a716-446655440000'
 */
export function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

