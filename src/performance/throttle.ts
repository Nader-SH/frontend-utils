/**
 * Throttles a function, ensuring it's called at most once per specified time period
 * @param fn - The function to throttle
 * @param delay - The delay in milliseconds
 * @returns A throttled version of the function
 * @example
 * const throttledScroll = throttle(() => handleScroll(), 100)
 * throttledScroll() // will execute at most once per 100ms
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: unknown, ...args: Parameters<T>) {
    const now = Date.now();
    const timeSinceLastCall = now - lastCall;

    if (timeSinceLastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        fn.apply(this, args);
      }, delay - timeSinceLastCall);
    }
  };
}

