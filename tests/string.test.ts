import { describe, it, expect } from 'vitest';
import {
  capitalize,
  camelCase,
  kebabCase,
  truncate,
  stripHTML,
  randomString,
  normalizeString,
  isEmail as isEmailString,
  isPhone
} from '../src/string';

describe('String Utilities', () => {
  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });

    it('should handle already capitalized', () => {
      expect(capitalize('HELLO')).toBe('Hello');
    });
  });

  describe('camelCase', () => {
    it('should convert to camelCase', () => {
      expect(camelCase('hello world')).toBe('helloWorld');
      expect(camelCase('hello-world')).toBe('helloWorld');
      expect(camelCase('hello_world')).toBe('helloWorld');
    });
  });

  describe('kebabCase', () => {
    it('should convert to kebab-case', () => {
      expect(kebabCase('hello world')).toBe('hello-world');
      expect(kebabCase('HelloWorld')).toBe('hello-world');
      expect(kebabCase('hello_world')).toBe('hello-world');
    });
  });

  describe('truncate', () => {
    it('should truncate string', () => {
      expect(truncate('Hello World', 5)).toBe('Hello...');
    });

    it('should not truncate if shorter', () => {
      expect(truncate('Hi', 5)).toBe('Hi');
    });

    it('should use custom suffix', () => {
      expect(truncate('Hello World', 5, '')).toBe('Hello');
    });
  });

  describe('stripHTML', () => {
    it('should remove HTML tags', () => {
      expect(stripHTML('<p>Hello <b>world</b></p>')).toBe('Hello world');
    });
  });

  describe('randomString', () => {
    it('should generate random string', () => {
      const str = randomString(10);
      expect(str.length).toBe(10);
    });

    it('should use custom charset', () => {
      const str = randomString(5, '0123456789');
      expect(/^\d{5}$/.test(str)).toBe(true);
    });
  });

  describe('normalizeString', () => {
    it('should normalize string', () => {
      expect(normalizeString('Café')).toBe('cafe');
      expect(normalizeString('Müller')).toBe('muller');
    });
  });

  describe('isEmail', () => {
    it('should validate email', () => {
      expect(isEmailString('user@example.com')).toBe(true);
      expect(isEmailString('invalid-email')).toBe(false);
    });
  });

  describe('isPhone', () => {
    it('should validate phone', () => {
      expect(isPhone('+1234567890')).toBe(true);
      expect(isPhone('(123) 456-7890')).toBe(true);
      expect(isPhone('invalid')).toBe(false);
    });
  });
});

