import { useEffect, useRef } from 'react';

/**
 * Runs an effect only on updates, not on the initial mount
 * @param effect - The effect function
 * @param deps - The dependency array
 * @example
 * useUpdateEffect(() => {
 *   console.log('Component updated');
 * }, [someValue]);
 */
export function useUpdateEffect(effect: () => void | (() => void), deps: unknown[]): void {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    return effect();
  }, deps);
}

