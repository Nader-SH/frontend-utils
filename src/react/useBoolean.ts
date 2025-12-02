import { useState, useCallback } from 'react';

/**
 * Hook for managing boolean state with convenient toggle, setTrue, and setFalse functions
 * @param initialValue - The initial boolean value (default: false)
 * @returns An object with value, setValue, setTrue, setFalse, and toggle functions
 * @example
 * const { value, toggle, setTrue, setFalse } = useBoolean(false);
 * toggle(); // toggles the value
 * setTrue(); // sets to true
 * setFalse(); // sets to false
 */
export function useBoolean(initialValue: boolean = false) {
  const [value, setValue] = useState<boolean>(initialValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((prev) => !prev), []);

  return {
    value,
    setValue,
    setTrue,
    setFalse,
    toggle
  };
}

