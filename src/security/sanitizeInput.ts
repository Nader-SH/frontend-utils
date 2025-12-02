/**
 * Sanitizes user input by escaping HTML entities
 * @param input - The input string to sanitize
 * @returns The sanitized string
 * @example
 * sanitizeInput('<script>alert("xss")</script>') // '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
 */
export function sanitizeInput(input: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return input.replace(/[&<>"']/g, (char) => map[char]);
}

