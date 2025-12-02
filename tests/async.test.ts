import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { sleep, retry, debouncePromise, timeoutPromise } from '../src/index';

describe('Async Utilities', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('sleep', () => {
    it('should wait for specified time', async () => {
      const sleepPromise = sleep(100);
      vi.advanceTimersByTime(100);
      await sleepPromise;
      expect(true).toBe(true);
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
      const retryPromise = retry(fn, 3, 10);
      await vi.runAllTimersAsync();
      const result = await retryPromise;
      expect(result).toBe('success');
      expect(attempts).toBe(2);
    });

    it('should throw after max retries', async () => {
      vi.useRealTimers();
      const fn = async () => {
        throw new Error('Always fails');
      };
      await expect(retry(fn, 2, 10)).rejects.toThrow('Always fails');
      vi.useFakeTimers();
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
      await vi.runAllTimersAsync();
      expect(callCount).toBe(1);
    });
  });

  describe('timeoutPromise', () => {
    it('should timeout slow promise', async () => {
      const slowPromise = new Promise((resolve) => setTimeout(resolve, 1000));
      const timeoutPromiseResult = timeoutPromise(slowPromise, 100);
      vi.advanceTimersByTime(100);
      await expect(timeoutPromiseResult).rejects.toThrow('Operation timed out');
    });

    it('should not timeout fast promise', async () => {
      const fastPromise = Promise.resolve('success');
      const result = await timeoutPromise(fastPromise, 1000);
      expect(result).toBe('success');
    });
  });
});

