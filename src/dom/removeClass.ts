/**
 * Removes a CSS class from an element
 * @param element - The DOM element or selector
 * @param className - The class name to remove
 * @example
 * removeClass('#myElement', 'active')
 * removeClass(document.querySelector('.item'), 'highlighted')
 */
export function removeClass(element: Element | string, className: string): void {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (el) {
    el.classList.remove(className);
  }
}

