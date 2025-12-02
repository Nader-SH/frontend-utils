import { describe, it, expect } from 'vitest';
import {
  formatDate,
  timeAgo,
  isValidDate,
  addDays,
  subtractDays,
  compareDates,
  getDayName,
  getMonthName
} from '../src/date';

describe('Date Utilities', () => {
  describe('formatDate', () => {
    it('should format date', () => {
      const date = new Date('2023-01-15');
      expect(formatDate(date)).toBeTruthy();
    });
  });

  describe('timeAgo', () => {
    it('should return time ago string', () => {
      const date = new Date(Date.now() - 3600000);
      expect(timeAgo(date)).toContain('hour');
    });
  });

  describe('isValidDate', () => {
    it('should validate date', () => {
      expect(isValidDate(new Date())).toBe(true);
      expect(isValidDate(new Date('invalid'))).toBe(false);
      expect(isValidDate('2023-01-15')).toBe(false);
    });
  });

  describe('addDays', () => {
    it('should add days', () => {
      const date = new Date('2023-01-15');
      const result = addDays(date, 5);
      expect(result.getDate()).toBe(20);
    });
  });

  describe('subtractDays', () => {
    it('should subtract days', () => {
      const date = new Date('2023-01-15');
      const result = subtractDays(date, 5);
      expect(result.getDate()).toBe(10);
    });
  });

  describe('compareDates', () => {
    it('should compare dates', () => {
      const date1 = new Date('2023-01-15');
      const date2 = new Date('2023-01-20');
      expect(compareDates(date1, date2)).toBe(-1);
      expect(compareDates(date1, date1)).toBe(0);
      expect(compareDates(date2, date1)).toBe(1);
    });
  });

  describe('getDayName', () => {
    it('should get day name', () => {
      const date = new Date('2023-01-15'); // Sunday
      expect(getDayName(date)).toBe('Sunday');
    });
  });

  describe('getMonthName', () => {
    it('should get month name', () => {
      const date = new Date('2023-01-15');
      expect(getMonthName(date)).toBe('January');
    });
  });
});

