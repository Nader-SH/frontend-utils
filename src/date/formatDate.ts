/**
 * Formats a date to a string using the specified format or locale
 * @param date - The date to format (Date object, string, or number)
 * @param format - The format separator (e.g., '-', '.'), locale string (e.g., 'en-US'), or Intl.DateTimeFormatOptions
 * @param options - Intl.DateTimeFormat options
 * @returns The formatted date string
 * @example
 * formatDate(new Date('2023-01-15')) // '1/15/2023'
 * formatDate(new Date('2023-01-15'), '-') // '1-15-2023'
 * formatDate(new Date('2023-01-15'), 'en-GB') // '15/01/2023'
 * formatDate(new Date('2023-01-15'), 'en-US', { dateStyle: 'full' }) // 'Sunday, January 15, 2023'
 */
export function formatDate(
  date: Date | string | number,
  format: string | Intl.DateTimeFormatOptions = 'en-US',
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  
  // Handle separator format (single character like '-', '.', etc.)
  if (typeof format === 'string' && !options && format.length === 1) {
    const formatted = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    }).format(dateObj);
    // Replace the default separator with the specified one
    return formatted.replace(/\//g, format);
  }
  
  if (typeof format === 'object' || (typeof format === 'string' && options)) {
    const opts = typeof format === 'object' ? format : options || {};
    return new Intl.DateTimeFormat(format as string || 'en-US', opts).format(dateObj);
  }
  
  return new Intl.DateTimeFormat(format as string).format(dateObj);
}

