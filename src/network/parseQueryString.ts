/**
 * Parses a query string into an object
 * @param queryString - The query string to parse (default: window.location.search)
 * @returns An object with parsed query parameters
 * @example
 * parseQueryString('?name=John&age=30') // { name: 'John', age: '30' }
 * parseQueryString() // parses window.location.search
 */
export function parseQueryString(queryString?: string): Record<string, string> {
  const query = queryString || (typeof window !== 'undefined' ? window.location.search : '');
  const params = new URLSearchParams(query);
  const result: Record<string, string> = {};

  params.forEach((value, key) => {
    result[key] = value;
  });

  return result;
}

