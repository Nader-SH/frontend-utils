/**
 * Gets the name of the month for a given date
 * @param date - The date to get the month name for
 * @param locale - The locale to use (default: 'en-US')
 * @param format - The format style (default: 'long')
 * @returns The month name
 * @example
 * getMonthName(new Date('2023-01-15')) // 'January'
 * getMonthName(new Date('2023-01-15'), 'en-US', 'short') // 'Jan'
 */
export function getMonthName(
  date: Date | string | number,
  locale: string = 'en-US',
  format: 'long' | 'short' | 'narrow' = 'long'
): string {
  const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, { month: format }).format(dateObj);
}

