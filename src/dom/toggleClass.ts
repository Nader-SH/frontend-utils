/**
 * Toggles a CSS class on an element
 * @param element - The DOM element or selector
 * @param className - The class name to toggle
 * @returns True if the class was added, false if removed
 * @example
 * toggleClass('#myElement', 'active')
 * toggleClass(document.querySelector('.item'), 'highlighted')
 */
export function toggleClass(element: Element | string, className: string): boolean {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (el) {
    return el.classList.toggle(className);
  }
  return false;
}

