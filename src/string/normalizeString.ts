/**
 * Normalizes a string by removing diacritics and converting to lowercase
 * @param str - The string to normalize
 * @returns The normalized string
 * @example
 * normalizeString('Café') // 'cafe'
 * normalizeString('Müller') // 'muller'
 */
export function normalizeString(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

