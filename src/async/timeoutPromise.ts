/**
 * Wraps a promise with a timeout
 * @param promise - The promise to wrap
 * @param timeout - The timeout in milliseconds
 * @param errorMessage - Custom error message (default: 'Operation timed out')
 * @returns The promise result or throws timeout error
 * @example
 * const result = await timeoutPromise(fetchData(), 5000, 'Request timed out')
 */
export async function timeoutPromise<T>(
  promise: Promise<T>,
  timeout: number,
  errorMessage: string = 'Operation timed out'
): Promise<T> {
  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error(errorMessage)), timeout);
  });

  return Promise.race([promise, timeoutPromise]);
}

