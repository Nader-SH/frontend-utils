/**
 * Checks if an element is in the viewport
 * @param element - The DOM element or selector
 * @param partial - Whether to consider partial visibility (default: false)
 * @returns True if the element is in the viewport
 * @example
 * isInViewport('#myElement') // true if element is visible
 * isInViewport(document.querySelector('.item'), true) // true if partially visible
 */
export function isInViewport(element: Element | string, partial: boolean = false): boolean {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return false;
  
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  if (partial) {
    return (
      rect.top < windowHeight &&
      rect.bottom > 0 &&
      rect.left < windowWidth &&
      rect.right > 0
    );
  }
  
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= windowWidth
  );
}

