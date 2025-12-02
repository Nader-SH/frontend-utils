/**
 * Gets the name of the day for a given date
 * @param date - The date to get the day name for
 * @param locale - The locale to use (default: 'en-US')
 * @param format - The format style (default: 'long')
 * @returns The day name
 * @example
 * getDayName(new Date('2023-01-15')) // 'Sunday'
 * getDayName(new Date('2023-01-15'), 'en-US', 'short') // 'Sun'
 */
export function getDayName(
  date: Date | string | number,
  locale: string = 'en-US',
  format: 'long' | 'short' | 'narrow' = 'long'
): string {
  const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, { weekday: format }).format(dateObj);
}

