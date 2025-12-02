/**
 * Creates a promise that resolves after a specified number of milliseconds
 * @param ms - The number of milliseconds to wait
 * @returns A promise that resolves after the delay
 * @example
 * await sleep(1000) // waits 1 second
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

