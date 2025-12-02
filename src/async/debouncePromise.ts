/**
 * Debounces a promise-returning function, ensuring only the latest call resolves
 * @param fn - The async function to debounce
 * @param delay - The delay in milliseconds
 * @returns A debounced version of the function
 * @example
 * const debouncedFetch = debouncePromise(fetchData, 300)
 * await debouncedFetch() // only the last call will resolve
 */
export function debouncePromise<T extends (...args: unknown[]) => Promise<unknown>>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>> {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let latestResolve: ((value: Awaited<ReturnType<T>>) => void) | null = null;
  let latestReject: ((error: unknown) => void) | null = null;

  return function (this: unknown, ...args: Parameters<T>) {
    return new Promise<Awaited<ReturnType<T>>>((resolve, reject) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      if (latestResolve) {
        latestResolve = null;
      }
      if (latestReject) {
        latestReject = null;
      }

      latestResolve = resolve;
      latestReject = reject;

      timeoutId = setTimeout(async () => {
        try {
          const result = await fn.apply(this, args);
          if (latestResolve) {
            latestResolve(result as Awaited<ReturnType<T>>);
          }
        } catch (error) {
          if (latestReject) {
            latestReject(error);
          }
        } finally {
          latestResolve = null;
          latestReject = null;
        }
      }, delay);
    });
  };
}

