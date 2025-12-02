/**
 * Hashes a string using the Web Crypto API
 * @param str - The string to hash
 * @param algorithm - The hash algorithm (default: 'SHA-256')
 * @returns A promise that resolves to the hashed string
 * @example
 * const hash = await hashString('password123')
 */
export async function hashString(str: string, algorithm: string = 'SHA-256'): Promise<string> {
  if (typeof window === 'undefined' || !window.crypto || !window.crypto.subtle) {
    throw new Error('Web Crypto API is not available');
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await window.crypto.subtle.digest(algorithm, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

