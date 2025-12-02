/**
 * Adds a CSS class to an element
 * @param element - The DOM element or selector
 * @param className - The class name to add
 * @example
 * addClass('#myElement', 'active')
 * addClass(document.querySelector('.item'), 'highlighted')
 */
export function addClass(element: Element | string, className: string): void {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (el) {
    el.classList.add(className);
  }
}

