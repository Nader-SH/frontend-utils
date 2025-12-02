/**
 * Subtracts a specified number of days from a date
 * @param date - The date to subtract days from
 * @param days - The number of days to subtract
 * @returns A new Date object with the days subtracted
 * @example
 * subtractDays(new Date('2023-01-15'), 5) // Date object for 2023-01-10
 */
export function subtractDays(date: Date | string | number, days: number): Date {
  return addDays(date, -days);
}

