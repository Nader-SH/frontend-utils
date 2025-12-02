import { describe, it, expect } from 'vitest';
import { unique, chunk, flatten, shuffle, sortByKey, removeItem, groupBy } from '../src/array';

describe('Array Utilities', () => {
  describe('unique', () => {
    it('should return unique values', () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });
  });

  describe('chunk', () => {
    it('should chunk array', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });
  });

  describe('flatten', () => {
    it('should flatten array', () => {
      expect(flatten([1, [2, 3], [4, [5]]])).toEqual([1, 2, 3, 4, [5]]);
      expect(flatten([1, [2, 3], [4, [5]]], 2)).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('shuffle', () => {
    it('should shuffle array', () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffled = shuffle(arr);
      expect(shuffled.length).toBe(arr.length);
      expect(shuffled).not.toEqual(arr);
    });
  });

  describe('sortByKey', () => {
    it('should sort by key', () => {
      const arr = [{ name: 'Bob', age: 30 }, { name: 'Alice', age: 25 }];
      expect(sortByKey(arr, 'age')).toEqual([
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 }
      ]);
    });
  });

  describe('removeItem', () => {
    it('should remove item', () => {
      expect(removeItem([1, 2, 3, 2], 2)).toEqual([1, 3]);
    });
  });

  describe('groupBy', () => {
    it('should group by key', () => {
      const arr = [
        { type: 'fruit', name: 'apple' },
        { type: 'fruit', name: 'banana' },
        { type: 'veg', name: 'carrot' }
      ];
      const grouped = groupBy(arr, 'type');
      expect(grouped.fruit).toHaveLength(2);
      expect(grouped.veg).toHaveLength(1);
    });
  });
});

