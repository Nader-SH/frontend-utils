import { describe, it, expect } from 'vitest';
import { clamp, randomInt, isNumeric, roundTo, percentage, formatNumber } from '../src/number';

describe('Number Utilities', () => {
  describe('clamp', () => {
    it('should clamp value to range', () => {
      expect(clamp(15, 0, 10)).toBe(10);
      expect(clamp(-5, 0, 10)).toBe(0);
      expect(clamp(5, 0, 10)).toBe(5);
    });
  });

  describe('randomInt', () => {
    it('should generate random integer', () => {
      const num = randomInt(1, 10);
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(10);
    });
  });

  describe('isNumeric', () => {
    it('should check if numeric', () => {
      expect(isNumeric(123)).toBe(true);
      expect(isNumeric('123')).toBe(true);
      expect(isNumeric('abc')).toBe(false);
      expect(isNumeric(NaN)).toBe(false);
    });
  });

  describe('roundTo', () => {
    it('should round to decimals', () => {
      expect(roundTo(3.14159, 2)).toBe(3.14);
      expect(roundTo(3.14159, 0)).toBe(3);
    });
  });

  describe('percentage', () => {
    it('should calculate percentage', () => {
      expect(percentage(25, 100)).toBe(25);
      expect(percentage(1, 3)).toBe(33.33);
    });
  });

  describe('formatNumber', () => {
    it('should format number', () => {
      expect(formatNumber(1234567.89)).toBe('1,234,567.89');
    });
  });
});

