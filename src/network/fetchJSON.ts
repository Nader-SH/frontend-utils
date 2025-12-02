/**
 * Fetches JSON data from a URL
 * @param url - The URL to fetch from
 * @param options - Fetch options
 * @returns The parsed JSON data
 * @example
 * const data = await fetchJSON('/api/users')
 * const user = await fetchJSON('/api/user/1', { method: 'POST', body: JSON.stringify({ name: 'John' }) })
 */
export async function fetchJSON<T = unknown>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

