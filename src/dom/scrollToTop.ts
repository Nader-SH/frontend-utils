/**
 * Scrolls the window to the top smoothly
 * @param behavior - The scroll behavior (default: 'smooth')
 * @example
 * scrollToTop()
 * scrollToTop('auto')
 */
export function scrollToTop(behavior: ScrollBehavior = 'smooth'): void {
  window.scrollTo({
    top: 0,
    behavior
  });
}

