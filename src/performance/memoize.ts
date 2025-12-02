/**
 * Memoizes a function, caching its results based on arguments
 * @param fn - The function to memoize
 * @param keyFn - Optional function to generate cache keys from arguments
 * @returns A memoized version of the function
 * @example
 * const memoizedExpensive = memoize((n) => expensiveCalculation(n))
 * memoizedExpensive(5) // calculates and caches
 * memoizedExpensive(5) // returns cached result
 */
export function memoize<T extends (...args: unknown[]) => unknown>(
  fn: T,
  keyFn?: (...args: Parameters<T>) => string
): (...args: Parameters<T>) => ReturnType<T> {
  const cache = new Map<string, ReturnType<T>>();

  return function (this: unknown, ...args: Parameters<T>): ReturnType<T> {
    const key = keyFn ? keyFn(...args) : JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = fn.apply(this, args) as ReturnType<T>;
    cache.set(key, result);
    return result;
  };
}

