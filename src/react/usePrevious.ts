import { useEffect, useRef } from 'react';

/**
 * Returns the previous value of a variable
 * @param value - The value to track
 * @returns The previous value
 * @example
 * const [count, setCount] = useState(0);
 * const prevCount = usePrevious(count);
 * // prevCount is the previous value of count
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

