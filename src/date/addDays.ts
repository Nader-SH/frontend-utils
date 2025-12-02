/**
 * Adds a specified number of days to a date
 * @param date - The date to add days to
 * @param days - The number of days to add
 * @returns A new Date object with the days added
 * @example
 * addDays(new Date('2023-01-15'), 5) // Date object for 2023-01-20
 */
export function addDays(date: Date | string | number, days: number): Date {
  const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  const result = new Date(dateObj);
  result.setDate(result.getDate() + days);
  return result;
}

