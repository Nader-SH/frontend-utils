import { useState } from 'react';
import { getSession } from '../storage/getSession';
import { setSession } from '../storage/setSession';

/**
 * Hook for managing sessionStorage with React state synchronization
 * @param key - The sessionStorage key
 * @param initialValue - The initial value if key doesn't exist
 * @returns A tuple with the value and setter function
 * @example
 * const [viewMode, setViewMode] = useSessionStorage('viewMode', 'list');
 * setViewMode('grid'); // updates both state and sessionStorage
 */
export function useSessionStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = getSession<T>(key);
      return item !== undefined ? item : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      setSession(key, valueToStore);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

