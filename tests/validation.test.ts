import { describe, it, expect } from 'vitest';
import {
  isEmail,
  isURL,
  isPhoneNumber,
  isStrongPassword,
  isJSON,
  isUUID,
  isEmpty
} from '../src/index';

describe('Validation Utilities', () => {
  describe('isEmail', () => {
    it('should validate email', () => {
      expect(isEmail('user@example.com')).toBe(true);
      expect(isEmail('invalid-email')).toBe(false);
    });
  });

  describe('isURL', () => {
    it('should validate URL', () => {
      expect(isURL('https://example.com')).toBe(true);
      expect(isURL('not-a-url')).toBe(false);
    });
  });

  describe('isPhoneNumber', () => {
    it('should validate phone', () => {
      expect(isPhoneNumber('+1234567890')).toBe(true);
      expect(isPhoneNumber('(123) 456-7890')).toBe(true);
    });
  });

  describe('isStrongPassword', () => {
    it('should validate strong password', () => {
      expect(isStrongPassword('MyP@ssw0rd')).toBe(true);
      expect(isStrongPassword('weak')).toBe(false);
    });
  });

  describe('isJSON', () => {
    it('should validate JSON', () => {
      expect(isJSON('{"key": "value"}')).toBe(true);
      expect(isJSON('invalid json')).toBe(false);
    });
  });

  describe('isUUID', () => {
    it('should validate UUID', () => {
      expect(isUUID('550e8400-e29b-41d4-a716-446655440000')).toBe(true);
      expect(isUUID('not-a-uuid')).toBe(false);
    });
  });

  describe('isEmpty', () => {
    it('should check if empty', () => {
      expect(isEmpty('')).toBe(true);
      expect(isEmpty([])).toBe(true);
      expect(isEmpty({})).toBe(true);
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty('text')).toBe(false);
    });
  });
});

