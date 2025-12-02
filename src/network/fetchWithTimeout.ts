/**
 * Fetches data from a URL with a timeout
 * @param url - The URL to fetch from
 * @param timeout - The timeout in milliseconds (default: 5000)
 * @param options - Fetch options
 * @returns The fetch response
 * @example
 * const response = await fetchWithTimeout('/api/data', 3000)
 */
export async function fetchWithTimeout(
  url: string,
  timeout: number = 5000,
  options?: RequestInit
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error(`Request timeout after ${timeout}ms`);
    }
    throw error;
  }
}

