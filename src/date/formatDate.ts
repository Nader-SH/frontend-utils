/**
 * Formats a date to a string using the specified format or locale
 * @param date - The date to format (Date object, string, or number)
 * @param format - The format string or locale (default: 'en-US')
 * @param options - Intl.DateTimeFormat options
 * @returns The formatted date string
 * @example
 * formatDate(new Date('2023-01-15')) // '1/15/2023'
 * formatDate(new Date('2023-01-15'), 'en-GB') // '15/01/2023'
 * formatDate(new Date('2023-01-15'), 'en-US', { dateStyle: 'full' }) // 'Sunday, January 15, 2023'
 */
export function formatDate(
  date: Date | string | number,
  format: string | Intl.DateTimeFormatOptions = 'en-US',
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  
  if (typeof format === 'object' || (typeof format === 'string' && options)) {
    const opts = typeof format === 'object' ? format : options || {};
    return new Intl.DateTimeFormat(format as string || 'en-US', opts).format(dateObj);
  }
  
  return new Intl.DateTimeFormat(format as string).format(dateObj);
}

