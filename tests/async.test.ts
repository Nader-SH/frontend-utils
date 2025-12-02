import { describe, it, expect, vi } from 'vitest';
import { sleep, retry, debouncePromise, timeoutPromise } from '../src/async';

describe('Async Utilities', () => {
  describe('sleep', () => {
    it('should wait for specified time', async () => {
      const start = Date.now();
      await sleep(100);
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(90);
    });
  });

  describe('retry', () => {
    it('should retry on failure', async () => {
      let attempts = 0;
      const fn = async () => {
        attempts++;
        if (attempts < 2) throw new Error('Failed');
        return 'success';
      };
      const result = await retry(fn, 3, 10);
      expect(result).toBe('success');
      expect(attempts).toBe(2);
    });

    it('should throw after max retries', async () => {
      const fn = async () => {
        throw new Error('Always fails');
      };
      await expect(retry(fn, 2, 10)).rejects.toThrow();
    });
  });

  describe('debouncePromise', () => {
    it('should debounce promise', async () => {
      let callCount = 0;
      const fn = async () => {
        callCount++;
        return 'result';
      };
      const debounced = debouncePromise(fn, 50);
      debounced();
      debounced();
      debounced();
      await sleep(100);
      expect(callCount).toBe(1);
    });
  });

  describe('timeoutPromise', () => {
    it('should timeout slow promise', async () => {
      const slowPromise = new Promise((resolve) => setTimeout(resolve, 1000));
      await expect(timeoutPromise(slowPromise, 100)).rejects.toThrow('Operation timed out');
    });

    it('should not timeout fast promise', async () => {
      const fastPromise = Promise.resolve('success');
      const result = await timeoutPromise(fastPromise, 1000);
      expect(result).toBe('success');
    });
  });
});

