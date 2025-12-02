/**
 * Compares two dates and returns -1, 0, or 1
 * @param date1 - The first date
 * @param date2 - The second date
 * @returns -1 if date1 < date2, 0 if equal, 1 if date1 > date2
 * @example
 * compareDates(new Date('2023-01-15'), new Date('2023-01-20')) // -1
 * compareDates(new Date('2023-01-15'), new Date('2023-01-15')) // 0
 */
export function compareDates(date1: Date | string | number, date2: Date | string | number): number {
  const d1 = typeof date1 === 'string' || typeof date1 === 'number' ? new Date(date1) : date1;
  const d2 = typeof date2 === 'string' || typeof date2 === 'number' ? new Date(date2) : date2;
  
  if (d1.getTime() < d2.getTime()) return -1;
  if (d1.getTime() > d2.getTime()) return 1;
  return 0;
}

