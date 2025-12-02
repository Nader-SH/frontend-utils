/**
 * Converts a string to kebab-case
 * @param str - The string to convert
 * @returns The kebab-case string
 * @example
 * kebabCase('hello world') // 'hello-world'
 * kebabCase('HelloWorld') // 'hello-world'
 * kebabCase('hello_world') // 'hello-world'
 */
export function kebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

