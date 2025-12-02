/**
 * Formats a number with thousand separators
 * @param value - The number to format
 * @param locale - The locale to use (default: 'en-US')
 * @param options - Intl.NumberFormat options
 * @returns The formatted number string
 * @example
 * formatNumber(1234567.89) // '1,234,567.89'
 * formatNumber(1234567.89, 'de-DE') // '1.234.567,89'
 */
export function formatNumber(
  value: number,
  locale: string = 'en-US',
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat(locale, options).format(value);
}

