/**
 * Scrolls the window to the bottom smoothly
 * @param behavior - The scroll behavior (default: 'smooth')
 * @example
 * scrollToBottom()
 * scrollToBottom('auto')
 */
export function scrollToBottom(behavior: ScrollBehavior = 'smooth'): void {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior
  });
}

