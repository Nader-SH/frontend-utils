/**
 * Gets the offset position of an element relative to the document
 * @param element - The DOM element or selector
 * @returns An object with top and left offset values
 * @example
 * getOffset('#myElement') // { top: 100, left: 50 }
 */
export function getOffset(element: Element | string): { top: number; left: number } {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return { top: 0, left: 0 };
  
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX
  };
}

