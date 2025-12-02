import { sleep } from './sleep';

/**
 * Retries an async function a specified number of times
 * @param fn - The async function to retry
 * @param retries - The number of retries (default: 3)
 * @param delay - The delay between retries in milliseconds (default: 1000)
 * @returns The result of the function
 * @example
 * const result = await retry(() => fetchData(), 3, 1000)
 */
export async function retry<T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) {
      throw error;
    }
    await sleep(delay);
    return retry(fn, retries - 1, delay);
  }
}

