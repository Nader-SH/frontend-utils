import { useEffect, useRef, useState } from 'react';

/**
 * Throttles a value, updating it at most once per specified time period
 * @param value - The value to throttle
 * @param delay - The delay in milliseconds (default: 500)
 * @returns The throttled value
 * @example
 * const [scrollY, setScrollY] = useState(0);
 * const throttledScroll = useThrottle(scrollY, 100);
 * // throttledScroll updates at most once per 100ms
 */
export function useThrottle<T>(value: T, delay: number = 500): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRan = useRef<number>(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= delay) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, delay - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return throttledValue;
}

