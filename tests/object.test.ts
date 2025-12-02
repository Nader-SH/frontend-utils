import { describe, it, expect } from 'vitest';
import { deepClone, deepMerge, isEmptyObject, omit, pick, getNestedValue } from '../src/index';

describe('Object Utilities', () => {
  describe('deepClone', () => {
    it('should deep clone object', () => {
      const obj = { a: 1, b: { c: 2 } };
      const cloned = deepClone(obj);
      cloned.b.c = 3;
      expect(obj.b.c).toBe(2);
    });
  });

  describe('deepMerge', () => {
    it('should deep merge objects', () => {
      const target = { a: 1, b: { c: 2 } };
      const source = { b: { d: 3 }, e: 4 };
      const merged = deepMerge(target, source);
      expect(merged).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
    });
  });

  describe('isEmptyObject', () => {
    it('should check if empty', () => {
      expect(isEmptyObject({})).toBe(true);
      expect(isEmptyObject({ a: 1 })).toBe(false);
    });
  });

  describe('omit', () => {
    it('should omit keys', () => {
      expect(omit({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ b: 2 });
    });
  });

  describe('pick', () => {
    it('should pick keys', () => {
      expect(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });
  });

  describe('getNestedValue', () => {
    it('should get nested value', () => {
      const obj = { user: { profile: { name: 'John' } } };
      expect(getNestedValue(obj, 'user.profile.name')).toBe('John');
      expect(getNestedValue(obj, 'user.profile.age', 0)).toBe(0);
    });
  });
});

