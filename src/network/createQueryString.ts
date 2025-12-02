/**
 * Creates a query string from an object
 * @param params - The parameters object
 * @returns A query string
 * @example
 * createQueryString({ name: 'John', age: 30 }) // '?name=John&age=30'
 * createQueryString({ search: 'hello world' }) // '?search=hello+world'
 */
export function createQueryString(params: Record<string, string | number | boolean>): string {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      searchParams.append(key, String(value));
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : '';
}

